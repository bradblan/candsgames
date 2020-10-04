import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"

import FragIndex from "./fragments/index-fragment"
import QuoteForm from "../components/quoteform"

const IndexPage = () => (
  <Layout imgName="banner_home.jpg" altText="As heard on 104.5 The Zone">
    <SEO title="Home" />
    <div class="container-fluid">
      <div class="row">
        <div class="col col-8">
          <FragIndex />
        </div>
        <div class="col col-4">
          <QuoteForm />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="csg-card-deck-scrollable flex-nowrap overflow-auto">
            <Card aTitle="Regulation Games" />
            <Card aTitle="Extra Bags" />
            <Card aTitle="Junior Cornhole Game" />
            <Card aTitle="E-Z Score" />
          </div>
          {/* <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <p>
            <Link to="/page-2/">Go to page 2</Link>
          </p> */}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
