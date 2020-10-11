import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import QuoteForm from "../components/quoteform"
import BagsRelatedImages from "../components/products/bagsrelatedimages"
import BaseballRelatedImages from "../components/products/baseballrelatedimages"
import JuniorRelatedImages from "../components/products/juniorrelatedimages"
import RegulationRelatedImages from "../components/products/regulationrelatedimages"

function RelatedImages({ index }) {
  switch (index) {
    case "bags":
      return <BagsRelatedImages />
    case "baseball":
      return <BaseballRelatedImages />
    case "junior":
      return <JuniorRelatedImages />
    case "regulation":
      return <RegulationRelatedImages />
    default:
      return null
  }
}

export default function ProductListing({ data }) {
  const product = data.markdownRemark
  return (
    <Layout imgName="banner_about.jpg" altText="Charlie hard at work">
      <div class="container">
        <div class="row">
          <div class="col col-8">
            <h1>{product.frontmatter.title}</h1>
            <div class="row">
              <div class="col-4">
                <Img
                  fluid={product.frontmatter.featured.childImageSharp.fluid}
                  alt={product.frontmatter.title}
                />
              </div>
              <div class="col-8">
                <div dangerouslySetInnerHTML={{ __html: product.html }} />
              </div>
            </div>
            <h2 class="product-price">{product.frontmatter.price}</h2>
            <div>
              <strong>
                * Plus shipping amp; handling. Shipped via Fedex from Kentucky.
              </strong>
            </div>
          </div>
          <div class="col col-4">
            <QuoteForm />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <RelatedImages index={product.frontmatter.key} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        key
        price
        title
        featured {
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
`
