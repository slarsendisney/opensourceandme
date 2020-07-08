import React from "react"
import { navigate } from "gatsby"
import FirebaseAuth from "react-firebaseui/FirebaseAuth"
import Layout from "./layout"
import SEO from "./seo"
let firebase
let uiConfig

export default ({ redirectURL }) => {
  if (typeof window !== "undefined") {
    firebase = require("firebase")
    // firebase.initializeApp(config);

    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: "popup",
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        {
          provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
          scopes: [],
        },
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: result => {
          localStorage.setItem("token", result.credential.accessToken)
          navigate("/app")
        },
      },
    }
  }
  return (
    <Layout small={true}>
      <SEO title="Login" />
      <div className="is-white-bg">
        <div className="is-black container pad-10-tb pad-3-lr">
          <h1 className="margin-0 is-hero-sub-text">Sign in</h1>
          <h1 className="margin-0-t">
            We need you to sign in with Github so we can calculate your
            contributions.
          </h1>
          <FirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase ? firebase.auth() : null}
          />
        </div>
      </div>
    </Layout>
  )
}
