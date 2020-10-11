import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ProductCard from "../components/productcard"

export default function Products({ data }) {
  return (
    <Layout
      imgName="banner_product.jpg"
      altText="Our games are great for the beach"
    >
      <SEO title="Products" />
      <div class="container-fluid">
        <div class="container">
          <div class="card-deck row row-cols-3">
            {data.allGalleryJson.edges.map(product => (
              <div class="col mb-4">
                <ProductCard cardId={product.node.id} />
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
    allGalleryJson(
      filter: { featured: { eq: true } }
      sort: { fields: aspect, order: DESC }
    ) {
      edges {
        node {
          alt
          id
          key
          name
          title
        }
      }
    }
  }
`
