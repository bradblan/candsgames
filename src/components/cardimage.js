import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const CardImage = ({ imgName, altText }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 100) {
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

CardImage.propTypes = {
  altText: PropTypes.string,
  imgName: PropTypes.node.isRequired,
}

CardImage.defaultProps = {
  altText: ``,
}

export default CardImage
