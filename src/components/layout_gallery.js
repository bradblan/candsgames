/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const GalleryLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          phone
        }
      }
    }
  `)

  return (
    <div id="springGallery">
      <div id="container" class="container-fluid">
        <Header
          sitePhone={data.site.siteMetadata?.phone || `Phone`}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <content>
          <div id="contentTop">{children}</div>
        </content>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
    </div>
  )
}

GalleryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GalleryLayout
