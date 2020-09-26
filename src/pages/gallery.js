import React from "react"
import { Link } from "gatsby"

import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <PageTransition>
      <h1>Hi from the second page</h1>
      <Link to="/">Go back to the homepage</Link>
    </PageTransition>
  </Layout>
)

export default SecondPage
