import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="section container" style={{ position: 'relative' }}>
      <h2 className="section-title">Technical Expertise</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {skills.map((skillGroup, index) => (
          <div key={index} className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ 
              color: 'var(--accent-primary)', 
              marginBottom: '1.5rem',
              fontSize: '1.25rem',
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '0.75rem'
            }}>
              {skillGroup.category}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {skillGroup.items.map((item, idx) => (
                <li key={idx} style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem',
                  fontSize: '1.1rem'
                }}>
                  <span style={{ 
                    display: 'inline-block', 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    background: 'var(--accent-primary)',
                    boxShadow: '0 0 10px var(--accent-glow)'
                  }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
