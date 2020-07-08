import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Emojione } from "react-emoji-render"
import { Link } from "gatsby"

const Landing = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="is-white-bg">
        <div className="is-black container pad-5-tb pad-3-lr">
          <div className="col-xs-12">
            <h1 className="margin-0 is-hero-text">Bye.</h1>
            <h1 className="margin-0-t">
              <Emojione text="👋" /> Thanks for visiting. See you soon.
            </h1>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-3  pad-5-t">
            <Link to="/">
              <button
                className={`is-black-bg pad-3-tb pad-10-lr border-radius is-white lato fill-width`}
              >
                <h2 className="margin-0">Home</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Landing
