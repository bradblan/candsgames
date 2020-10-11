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
import BannerImage from "../components/bannerimage"

const Layout = ({ children, imgName, altText }) => {
  var oldGallery = document.getElementById("springGallery")
  if (oldGallery) {
    oldGallery.parentNode.removeChild(oldGallery)
  }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          phone
        }
      }
    }
  `)

  return (
    <>
      <div id="container" class="container-fluid">
        <Header
          sitePhone={data.site.siteMetadata?.phone || `Phone`}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <div id="homeHeader">
          <BannerImage imgName={imgName} altText={altText} />
        </div>
        <content>
          <div id="contentTop">{children}</div>
        </content>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  imgName: PropTypes.string,
  altText: PropTypes.string,
}

Layout.defaultProps = {
  imgName: ``,
  altText: ``,
}

export default Layout
