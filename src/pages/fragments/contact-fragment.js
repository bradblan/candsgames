import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "../../components/image"

const FragContact = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            phone
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <h1>We Look Forward to Hearing from You</h1>
          <p>
            Please call us at {data.site.siteMetadata.phone} to place your
            order. We accept all major credit cards. If you're unsure of the
            product you are looking for, please take a moment to fill out our
            free custom quote form on the right, and we'll get to work on
            finding the perfect Cornhole game for you.
          </p>
          <Image />
        </>
      )
    }}
  />
)

export default FragContact
