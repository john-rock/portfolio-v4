import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from "gatsby-v2-plugin-page-transitions"

const NotFoundPage = () => (
  <Layout>
    <PageTransition>
      <>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </>
    </PageTransition>
  </Layout>
)

export default NotFoundPage
