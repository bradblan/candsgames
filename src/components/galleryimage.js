import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const GalleryImage = ({ imgName, altText }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 300) {
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
      return (
        <Img
          fluid={image.node.fluid}
          className="card-img-top"
          alt={altText}
          title="Sample of a custom game"
        />
      )
    }}
  />
)

GalleryImage.propTypes = {
  altText: PropTypes.string,
  imgName: PropTypes.node.isRequired,
}

GalleryImage.defaultProps = {
  altText: ``,
}

export default GalleryImage
