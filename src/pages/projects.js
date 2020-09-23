import React from "react"
import { graphql } from "gatsby"

import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import ProjectLink from "../components/ProjectLink"

const ProjectPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Project = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <ProjectLink key={edge.node.id} project={edge.node} />)

  return (
    <Layout>
      <PageTransition>
        <h1>Projects</h1>
        <p>Some of the things I have been working on.</p>
        <div className="smallContainer">
          {Project}
        </div>
      </PageTransition>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
