import { Project } from '../types';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {projects.map(project => (
          <div key={project.id} className="glass-panel" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(138, 43, 226, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
          }}
          >
            <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.85rem', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '50px', 
                    background: 'rgba(138, 43, 226, 0.15)',
                    color: '#cca4ff'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                    <Code size={18} /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
