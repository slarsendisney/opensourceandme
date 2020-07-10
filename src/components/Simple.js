import React from "react"
import CountUp from "react-countup"
export default ({ data, openSourceStats }) => {
  const percentOS =
    openSourceStats.openSourceCommitStats.commits > 0
      ? Math.floor(
          (openSourceStats.openSourceCommitStats.commits /
            openSourceStats.openSourceCommitStats.totalCommits) *
            100
        )
      : 0
  console.log(percentOS)
  const createText = () => {
    if (percentOS > 90) {
      return {
        title: "High Flyer.",
        desc: "You live and breath open source. Keep it up!",
      }
    }
    if (percentOS > 75) {
      return {
        title: "Frequent Flyer.",
        desc:
          "Compared to others, you seem to contribute a lot to open source! Keep at it.",
      }
    }
    if (percentOS > 50) {
      return {
        title: "Dedicated.",
        desc:
          "You seem to contribute as much to personal projects as you do open source. That's super cool.",
      }
    }
    if (percentOS > 0) {
      return {
        title: "Casual Contributor.",
        desc:
          "You contribute to open source now and then. Awesome job! Plenty of space to contribute more!",
      }
    }
    if (percentOS === 0) {
      return {
        title: "Get Contributing.",
        desc:
          "You're well on your way to being an open source hero, all it takes is one commit.",
      }
    }
  }
  return (
    <>
      <div className="col-xs-12">
        <h1 className="margin-0 font-weight-normal">Open Source Summary</h1>
      </div>
      <div className="col-xs-12 fade-in-bottom">
        <h1 className="is-hero-text margin-0 hide-on-small">
          {createText().title}
        </h1>
        <h1 className="is-hero-sub-text pad-3-t margin-0 hide-on-big">
          {createText().title}
        </h1>
        <h2 className="font-weight-normal">{createText().desc}</h2>
      </div>
    </>
  )
}
