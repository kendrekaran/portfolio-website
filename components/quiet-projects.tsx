import { projects } from "@/lib/portfolio"

export default function QuietProjects() {
  return <div className="quiet-project-list">
    <div className="quiet-project-grid">
      {projects.filter(project => project.image).map(project => <article className="quiet-project" key={project.name}>
        <a className="project-image" href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true"><img src={project.image!} alt="" width="600" height="315" loading="lazy" /></a>
        <div className="project-heading"><h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name} <span aria-hidden="true">↗</span></a></h3><span className="quiet-small quiet-muted">{project.category}</span></div>
        <p>{project.description}</p>
        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="quiet-small quiet-muted">Source on GitHub ↗</a>}
      </article>)}
    </div>
    <h3 className="quiet-section-label earlier-label">Earlier work</h3>
    {projects.filter(project => !project.image).map(project => <article className="earlier-project" key={project.name}>
      <div><h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name} <span aria-hidden="true">↗</span></a></h3><p>{project.description}</p></div>
      {project.repo && <a className="quiet-small quiet-muted" href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source on GitHub`}>Source ↗</a>}
    </article>)}
  </div>
}
