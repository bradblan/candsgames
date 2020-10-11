import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default function Entrance({ data }) {
  return (
    <Layout>
      <SEO title="Photo Gallery" />
      <div class="container-fluid">
        <div class="container">
          <div class="card-deck row row-cols-3">
            {data.allGalleryJson.edges.map(product => (
              <div class="col mb-4">
                <div class="card">
                  <Link to={"/products/" + product.node.key}>
                    <Img
                      fluid={product.node.src.childImageSharp.fluid}
                      alt={product.node.alt}
                      className="card-img-top"
                      title="Sample of a custom game"
                    />
                  </Link>
                  <div class="card-body">
                    <h4 class="card-title gallery-link text-center">
                      <Link to="/products/junior">{product.node.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allGalleryJson(sort: { fields: aspect, order: DESC }) {
      edges {
        node {
          alt
          id
          key
          name
          title
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
`
