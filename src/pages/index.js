import React from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Codebox from "../components/Codebox"

const IndexPage = () => (
  <Layout>
    <PageTransition>
      <>
        <SEO title="Home" />
        <div className="flex">
          <div className="hp-inner">
            <h1>
              Front End <br />
              Web Developer
            </h1>
            <p>
              Hi, I’m John. A creative web developer with a passion for
              constantly learning new technology. I strive to always find the
              most elegant solution for the constraints that are given.
            </p>
            <Link className="primary-cta" to="/page-2/">Resume</Link>
          </div>
          <div className="hp-inner">
            <Codebox />
          </div>
        </div>
      </>
    </PageTransition>
  </Layout>
)

export default IndexPage
