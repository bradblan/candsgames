import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import CardText from "./cardtext"

const Card = ({ cardId }) => (
  <StaticQuery
    query={graphql`
      query {
        allGalleryJson(filter: { card: { eq: "true" } }) {
          edges {
            node {
              id
              key
              title
              alt
              name
              src {
                childImageSharp {
                  fluid(maxWidth: 125) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allGalleryJson.edges.find(
        edge => edge.node.id === cardId
      )
      if (!content) {
        return <div class="no-content">No Content</div>
      }
      return (
        <div class="card">
          <div class="row no-gutters">
            <div class="col-3 p-3">
              <Link to="/products">
                <Img
                  fluid={content.node.src.childImageSharp.fluid}
                  alt={content.node.alt}
                />
              </Link>
            </div>
            <div class="col-9">
              <div class="card-body">
                <h4 class="card-title">
                  <Link to="/products" className="text-white">
                    {content.node.title}
                  </Link>
                </h4>
                <CardText keyText={content.node.key} />
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

Card.propTypes = {
  cardId: PropTypes.node.isRequired,
}

export default Card
