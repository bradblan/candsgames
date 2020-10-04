import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.gif"
import SiteNav from "./sitenav"

const Header = ({ siteTitle, sitePhone }) => (
  <header>
    <div id="nav">
      <img src={logo} alt="Cornhole Charlie" />
      <div id="navText">
        <div class="text-logo">
          <div class="h1">{siteTitle}</div>
          <div class="h2">{sitePhone}</div>
        </div>
        <SiteNav />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  sitePhone: PropTypes.string,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  sitePhone: ``,
  siteTitle: ``,
}

export default Header
