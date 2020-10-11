import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import ProductCardText from "./productcardtext"

const ProductCard = ({ cardId }) => (
  <StaticQuery
    query={graphql`
      query {
        allGalleryJson(filter: { featured: { eq: true } }) {
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
        <div class="card border-0">
          <div class="img-top product-image">
            <Link
              to={"/products/" + content.node.key}
              title="Click to see more"
            >
              <Img
                fluid={content.node.src.childImageSharp.fluid}
                alt={content.node.alt}
              />
            </Link>
            <ProductCardText keyText={content.node.key} />
          </div>
        </div>
      )
    }}
  />
)

ProductCard.propTypes = {
  cardId: PropTypes.node.isRequired,
}

export default ProductCard
