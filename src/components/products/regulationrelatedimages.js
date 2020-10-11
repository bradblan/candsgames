import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

let _ = require("lodash")

const RegulationRelatedImages = () => (
  <StaticQuery
    query={graphql`
      query {
        allGalleryJson(
          filter: { key: { eq: "regulation" }, featured: { eq: false } }
        ) {
          edges {
            node {
              alt
              name
            }
          }
        }
        allFile(filter: { relativeDirectory: { eq: "products/regulation" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                  originalName
                  presentationHeight
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const productData = _.sortBy(
        _.sampleSize(data.allGalleryJson.edges, 18),
        ["presentationHeight"]
      )
      return (
        <>
          <h3>Related Images</h3>
          <div class="card-deck">
            {productData.map(product => {
              const image = data.allFile.edges.find(
                edge =>
                  edge.node.childImageSharp.fluid.originalName ===
                  product.node.name
              )
              if (!product) {
                return <div class="no-image">{product.node.alt}</div>
              }
              return (
                <div class="card border-0 mb-3 product-related">
                  <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt={product.node.alt}
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

export default RegulationRelatedImages
