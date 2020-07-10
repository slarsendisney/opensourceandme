import React from "react"
import CountUp from "react-countup"
export default ({ data, openSourceStats }) => {
  const {
    openSourceCommitStats,
    openSourcePRStats,
    openSourcePRReviewStats,
  } = openSourceStats
  const percentOSCommits =
    openSourceCommitStats.commits > 0
      ? Math.floor(
          (openSourceCommitStats.commits / openSourceCommitStats.totalCommits) *
            100
        )
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
      <div className="col-xs-12">
        <h1 className="margin-0  font-weight-normal">Open Source Stats</h1>
      </div>
      <div className="col-xs-12 col-lg-6 fade-in-bottom">
        <div className="flex">
          <h1 className="is-hero-text margin-0 margin-1-r ">
            <CountUp
              end={percentOSCommits}
              start={percentOSCommits - 30 > 0 ? percentOSCommits - 30 : 0}
            />
            %
          </h1>
          <h1 className="is-hero-sub-text margin-0  pad-5-t hide-on-small">
            Of
            <br />
            Commits
          </h1>
          <h2 className="margin-0  pad-5-t hide-on-big">
            Of
            <br />
            Commits
          </h2>
        </div>
        <h2 className="margin-0-t font-weight-normal">
          You made <strong>{openSourceCommitStats.totalCommits} commits</strong>{" "}
          on github, <strong>{openSourceCommitStats.commits}</strong> were to
          open source projects.
          {/* That is <strong>X%</strong> higher than the
          average vistor to this site. */}
        </h2>
      </div>

      <div className="col-xs-12 col-lg-6 fade-in-bottom">
        <div className="flex">
          <h1 className="is-hero-text margin-0 margin-1-r ">
            <CountUp
              end={openSourcePRStats.prs}
              start={
                openSourcePRStats.prs - 30 > 0 ? openSourcePRStats.prs - 30 : 0
              }
            />
          </h1>
          <h1 className="is-hero-sub-text margin-0  pad-5-t hide-on-small">
            Pull
            <br />
            Requests
          </h1>
          <h2 className="margin-0  pad-5-t hide-on-big">
            Pull
            <br />
            Requests
          </h2>
        </div>
        <h2 className="margin-0-t font-weight-normal">
          Of the <strong>{openSourcePRStats.totalPRs} pull requests</strong> you
          made on github, <strong>{openSourcePRStats.prs}</strong> were to open
          source projects.
          {/* That is <strong>X%</strong> higher than the
          average vistor to this site. */}
        </h2>
      </div>

      <div className="col-xs-12 col-lg-6 fade-in-bottom">
        <div className="flex">
          <h1 className="is-hero-text margin-0 margin-1-r ">
            <CountUp
              end={openSourcePRReviewStats.prReviews}
              start={
                openSourcePRReviewStats.prReviews - 30 > 0
                  ? openSourcePRReviewStats.prReviews - 30
                  : 0
              }
            />
          </h1>
          <h1 className="is-hero-sub-text margin-0  pad-5-t hide-on-small">
            PR
            <br />
            Reviews
          </h1>
          <h2 className="margin-0  pad-5-t hide-on-big">
            PR
            <br />
            Reviews
          </h2>
        </div>
        <h2 className="margin-0-t font-weight-normal">
          <strong>{percentOSPRReviews}%</strong> of the PRs you have reviewed
          were to open source projects.
          {/* That is <strong>X%</strong> higher than the
          average vistor to this site. */}
        </h2>
      </div>

      <div className="col-xs-12 col-lg-6 fade-in-bottom">
        <div className="flex">
          <h1 className="is-hero-text margin-0 margin-1-r ">
            <CountUp
              end={openSourceCommitStats.repos.length}
              start={
                openSourceCommitStats.repos.length - 30 > 0
                  ? openSourceCommitStats.repos.length - 30
                  : 0
              }
            />
          </h1>
          <h1 className="is-hero-sub-text margin-0  pad-5-t hide-on-small">
            Open Source
            <br />
            Repositories
          </h1>
          <h2 className="margin-0  pad-5-t hide-on-big">
            Open Source
            <br />
            Repositories
          </h2>
        </div>
        <h2 className="margin-0-t font-weight-normal">
          Your open source contributions spanned{" "}
          <strong>{openSourceCommitStats.repos.length}</strong> respositories.
        </h2>
      </div>
    </>
  )
}
