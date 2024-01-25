import React from "react"
import { Route } from "react-router-dom"
import Layout from "../Components/Layout/Layout"

const Authmiddleware = ({
  component: Component,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      // if (isAuthProtected && !localStorage.getItem("id")) {
      //   return (
      //     <Redirect
      //       to={{ pathname: "/login", state: { from: props.location } }}
      //     />
      //   )
      // }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)


export default Authmiddleware