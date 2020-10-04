import PropTypes from "prop-types"
import React from "react"
import SiteNav from "./sitenav"

const Footer = ({ siteTitle }) => (
  <footer class="clearfix">
    <SiteNav />
    <div class="copyright">
      © {new Date().getFullYear()}.  All rights reserved by {siteTitle}.
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
