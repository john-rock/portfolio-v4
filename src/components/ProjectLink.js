import React from "react"
import { Link } from "gatsby"

const ProjectLink = ({ project }) => (
  <div className="projectLinks">
    <Link to={project.frontmatter.slug}>
      <span className="title">{project.frontmatter.title}</span>
      {project.frontmatter.tags ? (
        <div className="tags-container">
          {" "}
          <ul className="taglist">
            {" "}
            {project.frontmatter.tags.map(tag => (
              <li key={tag + `tag`}>
                {" "}
                <span className="tag">{tag}</span>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </div>
      ) : null}
    </Link>
  </div>
)

export default ProjectLink
