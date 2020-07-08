import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Landing = ({ location }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="is-white-bg">
        <div className="is-black container pad-5-tb pad-3-lr">
          <h1 className="margin-0 is-hero-text">20 seconds.</h1>
          <h1 className="margin-0-t">
            That's how long its going to take from the moment you press this
            button to having the stats on your open source contributions.*
          </h1>
          <p className="legal">
            * Assuming you are a developer registered on Github. A developer
            that has contributed to at least one open source project in the last
            year using the platform and are already logged in to github on this
            device.
          </p>
        </div>
      </div>

      <div className="is-white-bg">
        <div className="is-black container pad-0-t pad-20-b pad-3-lr">
          <Link to="/app">
            <button
              className={`${
                !hovered ? "vibrate-1" : "is-green-bg"
              } is-special-blue-bg pad-5-tb pad-20-lr border-radius is-white lato`}
              onMouseOver={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h2 className="margin-0">GO</h2>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Landing
