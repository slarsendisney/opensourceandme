import React, { Component } from "react"
import { navigate } from "gatsby"
import { useDocumentData } from "react-firebase-hooks/firestore"
import Layout from "../layout"
import Loading from "../Loading"

let firebase

if (typeof window !== "undefined") {
  firebase = require("firebase")
}

const PrivateRoute = ({
  component: Component,
  location,
  auth,
  basepath,
  ...rest
}) => {
  if (!auth) {
    navigate("/app/login")
    return null
  }
  return (
    <Layout loggedIn={auth} small={true}>
      <Component {...rest} auth={auth} />
    </Layout>
  )
}
export default PrivateRoute
