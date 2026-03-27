import { Code, Briefcase } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: 'rgba(10, 10, 15, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '1px' }}>
          <span style={{ color: 'var(--accent-primary)' }}>&lt;</span>
          Developer
          <span style={{ color: 'var(--accent-primary)' }}>/&gt;</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
          <a href="#skills" style={{ fontWeight: 500 }}>Skills</a>
          <a href="#contact" style={{ fontWeight: 500 }}>Contact</a>
          <div style={{ display: 'flex', gap: '1rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '1rem' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer"><Code size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Briefcase size={20} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
