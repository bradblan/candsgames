import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"

import FragAbout from "./fragments/about-fragment"
import QuoteForm from "../components/quoteform"

const _ = require("lodash")

export default function About({ data }) {
  const items = _.sampleSize(data.allGalleryJson.edges, 10)
  return (
    <Layout imgName="banner_about.jpg" altText="About C &amp; S Games">
      <SEO title="About Us" />
      <div class="container-fluid">
        <div class="row">
          <div class="col col-8">
            <FragAbout />
          </div>
          <div class="col col-4">
            <QuoteForm />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="csg-card-deck-scrollable flex-nowrap overflow-auto">
              {items.map(({ node }) => {
                const { id } = node
                return <Card cardId={id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allGalleryJson(filter: { card: { eq: "true" } }) {
      edges {
        node {
          id
        }
      }
    }
  }
`
