import React from "react"
import { Helmet } from "react-helmet"
import CookieConsent from "react-cookie-consent"
import { Emojione } from "react-emoji-render"

import Header from "./Header"

const Layout = ({ children, small, location }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/css/line-awesome.min.css"
        />
      </Helmet>
      <CookieConsent
        location="bottom"
        buttonText="Got it"
        cookieName="OpenSourceAndMeConsentCookie"
        style={{ background: "#000" }}
        buttonStyle={{
          color: "black",
          fontSize: "13px",
          background: "#ffffff",
          fontFamily: "lato",
          borderRadius: 3,
          padding: 10,
        }}
      >
        <h4 className="margin-0">
          This website uses cookies so I can enhance the user experience - hope
          that's cool.
        </h4>
      </CookieConsent>
      <Header small={small} />

      <body
        className={`${
          location ? (location.pathname === "/" ? "small-body" : "") : ""
        }`}
      >
        <div className="margin-1-lr">{children}</div>
      </body>
      <footer className="pad-5-b">
        <p>
          <a className="is-special-blue" href="https://sld.codes">
            <Emojione text="🔨" /> Built by SLD
          </a>{" "}
          |{" "}
          <a className="is-special-blue" href="https://designrant.app">
            {" "}
            <Emojione text="💡" /> See what I'm working on.
          </a>
        </p>
      </footer>
    </>
  )
}

export default Layout
