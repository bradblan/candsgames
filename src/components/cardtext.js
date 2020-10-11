import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const CardText = ({ keyText }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              excerpt(format: HTML, pruneLength: 150)
              html
              frontmatter {
                key
              }
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allMarkdownRemark.edges.find(
        edge => edge.node.frontmatter.key === keyText
      )
      return (
        <p
          dangerouslySetInnerHTML={{ __html: content.node.excerpt }}
          className="card-text"
        />
      )
    }}
  />
)

CardText.propTypes = {
  keyText: PropTypes.node.isRequired,
}

export default CardText
