import React from "react"
import { Link } from "gatsby"

const ProjectLink = ({ project }) => (
  <div className="projectLinks">
    <Link to={project.frontmatter.slug}>
      <span className="title">{project.frontmatter.title}<br /><span className="short-desc">{project.frontmatter.description}</span></span>
      {project.frontmatter.tags ? (
        <div className="tags-container">
            {project.frontmatter.tags.map(tag => (
              <div key={tag + `tag`}>
                {" "}
                <span className="tag">{tag}</span>{" "}
              </div>
            ))}{" "}
        </div>
      ) : null}
    </Link>
  </div>
)

export default ProjectLink
