import React from "react"
import CountUp from "react-countup"
export default ({ data, openSourceStats }) => {
  const { totalCommitContributions } = data.viewer.contributionsCollection
  const percentOS =
    openSourceStats.commits > 0
      ? Math.floor(
          (openSourceStats.commits / openSourceStats.totalCommits) * 100
        )
      : 0
  const createText = () => {
    if (percentOS > 90) {
      return {
        title: "High Flyer.",
        desc: "You live and breath open source. Keep it up!",
      }
    }
    if (percentOS > 75) {
      return {
        title: "Frequent contributor.",
        desc: "Compared to others, you seem to contribute a lot! Keep at it.",
      }
    }
    if (percentOS > 50) {
      return {
        title: "Dedicated",
        desc:
          "You seem to contribute as much to personal projects as you do open source. That's cool.",
      }
    }
    if (percentOS > 25) {
      return {
        title: "On the fence.",
        desc:
          "You contribute to open source now and then. Plenty of space to contribute more!",
      }
    }
    if (percentOS >= 0) {
      return {
        title: "Could Improve.",
        desc: "You could contribute much more to open source.",
      }
    }
  }
  return (
    <>
      <div className="col-xs-12">
        <h1 className="margin-0 ">In Summary.</h1>
      </div>
      <div className="col-xs-12 fade-in-bottom">
        <h1 className="is-hero-text margin-0 ">{createText().title}</h1>
        <h2 className="font-weight-normal">{createText().desc}</h2>
      </div>
    </>
  )
}
