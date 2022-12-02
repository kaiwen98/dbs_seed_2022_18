import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { bearerToken } = useAuth()
  return (
    <Route
      {...rest}
      render={props => {
        return bearerToken? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
