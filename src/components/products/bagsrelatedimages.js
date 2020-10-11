import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BagsRelatedImages = () => (
  <StaticQuery
    query={graphql`
      query {
        allGalleryJson(
          filter: { key: { eq: "bags" }, featured: { eq: false } }
        ) {
          edges {
            node {
              alt
              name
            }
          }
        }
        allFile(filter: { relativeDirectory: { eq: "products/bags" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <h3>Related Images</h3>
          <div class="card-deck">
            {data.allGalleryJson.edges.map(productData => {
              const image = data.allFile.edges.find(
                edge =>
                  edge.node.childImageSharp.fluid.originalName ===
                  productData.node.name
              )
              if (!productData) {
                return <div class="no-image">{productData.node.alt}</div>
              }
              return (
                <div class="card border-0 product-related">
                  <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt={productData.node.alt}
                  />
                </div>
              )
            })}
          </div>
        </>
      )
    }}
  />
)

export default BagsRelatedImages
