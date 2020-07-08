import React from "react"
import Box from "../images/box.png"

export default ({ small }) => {
  if (small) {
    return (
      <div className="is-white-bg">
        <div className="is-black container-small flex align-vertical align-horizontal text-align-center pad-5-t pad-1-b pad-3-lr">
          <div className="flex align-horizontal">
            <img src={Box} className="logo-xs margin-1-r"></img>
            <h3 className="margin-0  Saira font-weight-normal">
              OpenSourceAnd.Me
            </h3>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="is-white-bg">
      <div className="is-black container-small text-align-center pad-10-t pad-5-b pad-3-lr">
        <img src={Box} className="logo-small fade-in-bottom"></img>
        <h1 className="margin-0  Saira font-weight-normal fade-in-bottom">
          OpenSourceAnd.Me
        </h1>
      </div>
    </div>
  )
}
