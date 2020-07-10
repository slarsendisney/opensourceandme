import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { query, headers } from "../data/query"
import Loader from "./Loader"
import Medium from "./Medium"
import Simple from "./Simple"
import SEO from "./seo"
import Detail from "./Detailed"

let firebase
if (typeof window !== "undefined") {
  firebase = require("firebase")
}

export default ({ auth }) => {
  const token = localStorage.getItem("token")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [option, setOption] = useState("medium")
  useEffect(() => {
    fetch("https://api.github.com/graphql", {
      method: "post",
      body: JSON.stringify({ query }),
      headers: headers(token),
    })
      .then(res => res.json())
      .then(json => {
        setData(json.data)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return (
      <div className="is-black container-small pad-10-tb pad-3-lr text-align-center">
        <Loader />
        <h3 className="opacity-50">Sourcing Github Data...</h3>
      </div>
    )
  }
  const { login } = data.viewer
  const handleOptionChange = changeEvent => {
    setOption(changeEvent.target.value)
  }
  const statDetailLevels = ["simple", "medium", "detailed"] //, "detailed"]
  let openSourceCommitStats = data.viewer.contributionsCollection.commitContributionsByRepository.reduce(
    (acc, cur) => {
      if (cur.repository.owner.login !== login) {
        acc.commits += cur.contributions.totalCount
        acc.repos.push(cur)
      }
      acc.totalCommits += cur.contributions.totalCount
      return acc
    },
    { commits: 0, totalCommits: 0, repos: [] }
  )
  let openSourcePRStats = data.viewer.contributionsCollection.pullRequestContributionsByRepository.reduce(
    (acc, cur) => {
      if (cur.repository.owner.login !== login) {
        acc.prs += cur.contributions.totalCount
        acc.repos.push(cur)
      }
      acc.totalPRs += cur.contributions.totalCount
      return acc
    },
    { prs: 0, totalPRs: 0, repos: [] }
  )
  let openSourcePRReviewStats = data.viewer.contributionsCollection.pullRequestReviewContributionsByRepository.reduce(
    (acc, cur) => {
      if (cur.repository.owner.login !== login) {
        acc.prReviews += cur.contributions.totalCount
        acc.repos.push(cur)
      }
      acc.totalPRReviews += cur.contributions.totalCount
      return acc
    },
    { prReviews: 0, totalPRReviews: 0, repos: [] }
  )
  const openSourceStats = {
    openSourceCommitStats,
    openSourcePRStats,
    openSourcePRReviewStats,
  }
  console.log(openSourceStats)
  const renderView = () => {
    switch (option) {
      case "simple":
        return <Simple data={data} openSourceStats={openSourceStats} />
      case "medium":
        return <Medium data={data} openSourceStats={openSourceStats} />
      default:
        return <Detail data={data} openSourceStats={openSourceStats} />
    }
  }
  return (
    <div className="is-white-bg">
      <SEO title="Stats" />
      <div className="is-black container-small pad-10-tb pad-1-lr">
        <div className="row">
          <div className="col-xs-12 flex align-vertical pad-10-b">
            <div className="margin-auto">
              <form>
                <p className="margin-0 opacity-50 hide-on-big text-align-center pad-5-b">
                  DETAIL LEVEL
                </p>
                <div
                  className="flex align-horizontal justify-space-around"
                  style={{ maxWidth: 450, margin: "auto" }}
                >
                  <p className="margin-0 pad-2-t opacity-50 hide-on-small">
                    SIMPLE
                  </p>
                  {statDetailLevels.map(level => (
                    <label
                      className="checkmark-container margin-3-lr"
                      onChange={handleOptionChange}
                    >
                      <input
                        type="checkbox"
                        checked={option === level}
                        value={level}
                      />
                      <span className="checkmark"></span>
                    </label>
                  ))}
                  <p className="margin-0 pad-2-t opacity-50  hide-on-small">
                    DETAILED
                  </p>
                </div>
              </form>
            </div>
          </div>

          {renderView()}
          <div className="col-xs-12 pad-10-t">
            <h1 className="margin-0 margin-5-b">
              All Done {data.viewer.name.split(" ")[0]}?
            </h1>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2 ">
            <button
              className={`is-black-bg pad-3-tb pad-10-lr border-radius is-white lato fill-width`}
              onClick={() => {
                firebase.auth().signOut()
                navigate("/logout")
              }}
            >
              <h2 className="margin-0">Logout</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
