/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import BaseAnchor from "./BaseAnchor"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem 1.0875rem`,
          textAlign: "center",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `5rem`,
            color: "grey",
            fontSize: "85%",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <BaseAnchor target="_blank" href="https://www.gatsbyjs.com">
            Gatsby
          </BaseAnchor>
          .{" "}
          <BaseAnchor
            target="_blank"
            href="https://icons8.com/icon/40146/cookie"
          >
            Cookie
          </BaseAnchor>{" "}
          icon by{" "}
          <BaseAnchor target="_blank" href="https://icons8.com">
            Icons8
          </BaseAnchor>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
