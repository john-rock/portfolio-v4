import React from "react"
import { Link } from "gatsby"

import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <PageTransition>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </PageTransition>
  </Layout>
)

export default SecondPage
