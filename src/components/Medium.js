import React from "react"
import CountUp from "react-countup"
export default ({ data, openSourceStats }) => {
  const {
    totalCommitContributions,
    totalRepositoriesWithContributedCommits,
  } = data.viewer.contributionsCollection

  const percentOS =
    openSourceStats.commits > 0
      ? Math.floor(
          (openSourceStats.commits / openSourceStats.totalCommits) * 100
        )
      : 0
  return (
    <>
      <div className="col-xs-12">
        <h1 className="margin-0 ">Open Source Stats</h1>
      </div>
      <div className="col-xs-12 fade-in-bottom">
        <div className="flex">
          <h1 className="is-hero-text margin-0 margin-1-r ">
            <CountUp
              end={percentOS}
              start={percentOS - 30 > 0 ? percentOS - 30 : 0}
            />
            %
          </h1>
          <h1 className="is-hero-sub-text margin-0  pad-5-t hide-on-small">
            Open Source
            <br />
            Commits
          </h1>
          <h2 className="margin-0  pad-5-t hide-on-big">
            Open Source
            <br />
            Commits
          </h2>
        </div>
        <h2 className="margin-0-t font-weight-normal">
          Of the <strong>{openSourceStats.totalCommits} commits</strong> you
          made on github, <strong>{openSourceStats.commits}</strong> were to
          open source projects.
          {/* That is <strong>X%</strong> higher than the
          average vistor to this site. */}
        </h2>
      </div>
      <div className="col-xs-12 fade-in-bottom">
        <div className="flex">
          <h1 className="is-hero-text margin-0 margin-1-r ">
            <CountUp
              end={openSourceStats.repos.length}
              start={
                openSourceStats.repos.length - 30 > 0
                  ? openSourceStats.repos.length - 30
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
          <strong>{openSourceStats.repos.length}</strong> respositories.
        </h2>
      </div>
      <div className="col-xs-12 pad-10-t">
        <h1 className="margin-0 ">All Github Stats</h1>
      </div>
      <div className="col-xs-12 col-lg-6 fade-in-bottom">
        <div className="flex">
          <h1 className="is-hero-text margin-0 margin-1-r ">
            <CountUp
              end={totalCommitContributions}
              start={
                totalCommitContributions - 30 > 0
                  ? totalCommitContributions - 30
                  : 0
              }
            />
          </h1>
          <h1 className="is-hero-sub-text margin-0  pad-5-t hide-on-small">
            Commit
            <br />
            Contributions
          </h1>
          <h2 className="margin-0  pad-5-t hide-on-big">
            Commit
            <br />
            Contributions
          </h2>
        </div>
      </div>
      <div className="col-xs-12 col-lg-6 fade-in-bottom">
        <div className="flex">
          <h1 className="is-hero-text margin-0 margin-1-r ">
            <CountUp
              end={totalRepositoriesWithContributedCommits}
              start={
                totalRepositoriesWithContributedCommits - 30 > 0
                  ? totalRepositoriesWithContributedCommits - 30
                  : 0
              }
            />
          </h1>
          <h1 className="is-hero-sub-text margin-0  pad-5-t hide-on-small">
            <br />
            Repositories
          </h1>
          <h2 className="margin-0  pad-5-t hide-on-big">
            <br />
            Repositories
          </h2>
        </div>
      </div>
    </>
  )
}
