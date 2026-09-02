export default function ProjectCard({ project, className = "" }) {
  return (
    <article className={`card ${className}`.trim()}>
      <h3>{project.title}</h3>
      <p className="card-blurb">{project.blurb}</p>
      {project.tags?.length ? (
        <div className="tag-list">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      ) : null}
      {project.links?.length ? (
        <div className="card-links">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <span aria-hidden="true">&rarr;</span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
