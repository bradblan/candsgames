import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import CardImage from "./cardimage"

const Card = ({ aTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                alt
                image
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allMarkdownRemark.edges.find(
        edge => edge.node.frontmatter.title === aTitle
      )
      if (!content) {
        return <div class="no-content">No Content</div>
      }
      return (
        <div class="card">
          <div class="row no-gutters">
            <div class="col-3 p-2">
              <Link to="/products">
                <CardImage
                  altText={content.node.frontmatter.alt}
                  imgName={content.node.frontmatter.image}
                />
              </Link>
            </div>
            <div class="col-9">
              <div class="card-body">
                <h4 class="card-title">
                  <Link to="/products" className="text-white">
                    {content.node.frontmatter.title}
                  </Link>
                </h4>
                <p
                  dangerouslySetInnerHTML={{ __html: content.node.html }}
                  className="card-text"
                />
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

Card.propTypes = {
  aTitle: PropTypes.node.isRequired,
}

export default Card
