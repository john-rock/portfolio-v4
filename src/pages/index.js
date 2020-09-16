import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Codebox from "../components/Codebox"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Front end Web Developer</h1>
    <p>Hi, I’m John. A creative web developer with a passion for constantly learning new technology.  I strive to always find the most elegant solution to the constraints that are given.</p>
    <Codebox />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
