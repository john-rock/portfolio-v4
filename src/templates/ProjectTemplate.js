import React from "react"
import { graphql, Link } from "gatsby"

import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Dots from "../images/dots.svg";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <PageTransition>
        <SEO title={frontmatter.title} description={frontmatter.description} />
        <div className="project-post-container">
          <div className="project-post">
            <h1>{frontmatter.title}</h1>
            <div class="project-wrapper">
              <div
                className="project-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className="btn-container">
                <a
                  className="primary-cta"
                  href={frontmatter.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project <FiChevronsRight />
                </a>
                <a
                  className="primary-cta"
                  href={frontmatter.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code <FiChevronsRight />
                </a>
              </div>
              <div className="sub-btns">
                <Link className="primary-cta" to="/projects/">
                  <span className="back-btn">
                    <FiChevronsLeft />
                  </span>
                  Back
                </Link>
              </div>
            </div>
            <div className="svg-dots">
              <Dots />
              </div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        url
        source
        title
        description
      }
    }
  }
`
