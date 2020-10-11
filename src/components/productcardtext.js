import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const ProductCardText = ({ keyText }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              excerpt(format: HTML, pruneLength: 180)
              html
              frontmatter {
                key
                title
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
        <div class="card-body">
          <h3 class="card-title product-title text-center">
            <Link
              to={"/products/" + content.node.frontmatter.key}
              title="Click to see more"
            >
              {content.node.frontmatter.title}
            </Link>
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: content.node.excerpt }}
            className="card-text"
          />
        </div>
      )
    }}
  />
)

ProductCardText.propTypes = {
  keyText: PropTypes.node.isRequired,
}

export default ProductCardText
