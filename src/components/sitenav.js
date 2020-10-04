import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function SiteNav() {
  return (
    <StaticQuery
      query={graphql`
        query SiteNavItemsQuery {
          allSiteNavJson {
            edges {
              node {
                label
                link
                target
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <ul>{getSiteNavLabels(data)}</ul>
        </>
      )}
    />
  )
}

function getSiteNavLabels(data) {
  const siteNavItemsArray = []
  data.allSiteNavJson.edges.forEach(item =>
    siteNavItemsArray.push(
      <li key={item.node.label}>
        {item.node.target === "" ? (
          <Link to={item.node.link} activeClassName="current">
            {item.node.label}
          </Link>
        ) : (
          <a href={item.node.link} target={item.node.target}>
            {item.node.label}
          </a>
        )}
      </li>
    )
  )
  return siteNavItemsArray
}
