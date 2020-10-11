import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const ProductCardImage = ({ imgName, altText }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxHeight: 300) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return <div class="no-image">{altText}</div>
      }
      return <Img fluid={image.node.fluid} alt={altText} />
    }}
  />
)

ProductCardImage.propTypes = {
  altText: PropTypes.string,
  imgName: PropTypes.node.isRequired,
}

ProductCardImage.defaultProps = {
  altText: ``,
}

export default ProductCardImage
