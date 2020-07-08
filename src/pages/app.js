import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/utils/PrivateRoute"
import { useAuth } from "../components/utils/useAuth"
import Home from "../components/Home"
import Login from "../components/Login"
import Loading from "../components/Loading"

const App = () => {
  const { initializing, user } = useAuth()
  if (initializing) {
    return <Loading LoadingText="Loading Profile..." />
  } else {
    const basePath = "/app"
    return (
      <Router basepath={basePath}>
        <Login path="/login" redirectURL={basePath} />
        <PrivateRoute
          path="/"
          component={Home}
          auth={user}
          basepath={basePath}
        />
      </Router>
    )
  }
}
export default App
