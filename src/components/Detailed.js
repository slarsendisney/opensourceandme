import React from "react"
import CountUp from "react-countup"
import ReactTooltip from "react-tooltip"
export default ({ data, openSourceStats }) => {
  const {
    openSourceCommitStats,
    openSourcePRStats,
    openSourcePRReviewStats,
  } = openSourceStats

  console.log(data)
  const percentOSCommits =
    openSourceCommitStats.commits > 0
      ? Math.floor(
          (openSourceCommitStats.commits / openSourceCommitStats.totalCommits) *
            100
        )
      : 0

  const mostCommits = openSourceCommitStats.repos.sort(
    (a, b) => b.contributions.totalCount - a.contributions.totalCount
  )[0]
  const leastCommits = openSourceCommitStats.repos.sort(
    (a, b) => b.contributions.totalCount - a.contributions.totalCount
  )[openSourceCommitStats.repos.length - 1]

  const percentOSPRS =
    openSourcePRStats.prs > 0
      ? Math.floor((openSourcePRStats.prs / openSourcePRStats.totalPRs) * 100)
      : 0
  const percentOSPRReviews =
    openSourcePRReviewStats.prReviews > 0
      ? Math.floor(
          (openSourcePRReviewStats.prReviews /
            openSourcePRReviewStats.totalPRReviews) *
            100
        )
      : 0

  return (
    <>
      <ReactTooltip
        className="info-tooltip"
        className="is-black-bg is-white lato"
      />
      <div className="col-xs-12">
        <h1 className="margin-0  font-weight-normal">
          Detailed Open Source Stats
        </h1>
      </div>
      <div className="col-xs-12 pad-3-t fade-in-bottom">
        <h1 className="font-weight-normal">
          <strong>
            {" "}
            <CountUp
              end={percentOSCommits}
              start={percentOSCommits - 30 > 0 ? percentOSCommits - 30 : 0}
            />
            %
          </strong>{" "}
          of your commits were open source.{" "}
        </h1>
        <h2 className="font-weight-normal">
          Most of your open source commits were made in the{" "}
          <a className="is-special-blue" href={mostCommits.repository.url}>
            {mostCommits.repository.name}
          </a>{" "}
          repository where you made{" "}
          <strong>{mostCommits.contributions.totalCount}</strong> commit
          contribution{mostCommits.contributions.totalCount > 1 ? "s" : ""}. The
          least commits were made in the{" "}
          <a className="is-special-blue" href={leastCommits.repository.url}>
            {leastCommits.repository.name}
          </a>{" "}
          repository where you made{" "}
          <strong>{leastCommits.contributions.totalCount}</strong> commit
          contribution{leastCommits.contributions.totalCount > 1 ? "s" : ""}.
        </h2>
        <div
          className="fill-width is-light-grey-bg border-radius"
          style={{ position: "relative", height: 20 }}
          data-tip={`${openSourceCommitStats.commits} of ${openSourceCommitStats.totalCommits} Commits`}
        >
          <div
            className="is-special-blue-bg border-radius"
            style={{
              position: "relative",
              height: 20,
              width: `${percentOSCommits}%`,
            }}
          />
        </div>
        <h2 className="margin-3-t font-weight-normal">
          You made <strong>{openSourceCommitStats.totalCommits} commits</strong>{" "}
          on Github, <strong>{openSourceCommitStats.commits}</strong> were open
          source.
        </h2>
        <h1 className="font-weight-normal">
          <strong>
            {" "}
            <CountUp
              end={percentOSPRS}
              start={percentOSPRS - 30 > 0 ? percentOSPRS - 30 : 0}
            />
            %
          </strong>{" "}
          of your pull requests were open source.{" "}
        </h1>
        <div
          className="fill-width is-light-grey-bg border-radius"
          style={{ position: "relative", height: 20 }}
          data-tip={`${openSourceCommitStats.commits} of ${openSourceCommitStats.totalCommits} Commits`}
        >
          <div
            className="is-special-blue-bg border-radius"
            style={{
              position: "relative",
              height: 20,
              width: `${percentOSPRS}%`,
            }}
          />
        </div>
        <h2 className="margin-3-t font-weight-normal">
          You made <strong>{openSourcePRStats.totalPRs} pull requests</strong>{" "}
          on Github, <strong>{openSourcePRStats.prs}</strong> were open source.{" "}
          {openSourcePRStats.prs > openSourcePRReviewStats.prReviews
            ? "You're more likely to create a PR than review one"
            : "You're more likely to review a PR than create one"}{" "}
          in open source projects.
        </h2>

        <h2 className="margin-3-t font-weight-normal"></h2>
      </div>
    </>
  )
}
