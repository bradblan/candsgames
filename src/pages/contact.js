import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"

import FragContact from "./fragments/contact-fragment"
import QuoteForm from "../components/quoteform"
import CornholeGamesImage from "../components/cornholegames"

const _ = require("lodash")

export default function Home({ data }) {
  const items = _.sampleSize(data.allGalleryJson.edges, 10)
  return (
    <Layout
      imgName="banner_contact.jpg"
      altText="Visit the gallery to see more of our products"
    >
      <SEO title="Contact Us" />
      <div class="container-fluid">
        <div class="row">
          <div class="col col-8">
            <FragContact />
          </div>
          <div class="col col-4">
            <QuoteForm />
            <div class="circle-image mt-5">
              <CornholeGamesImage />
            </div>
          </div>
        </div>
        <div class="row mt-3">
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
