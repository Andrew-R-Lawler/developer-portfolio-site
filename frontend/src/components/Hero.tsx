import { Profile } from '../types';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  profile: Profile | null;
}

const Hero = ({ profile }: HeroProps) => {
  if (!profile) return <div className="section container">Loading...</div>;

  return (
    <section className="section container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div className="reveal active" style={{ maxWidth: '800px', zIndex: 10 }}>
        <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.25rem', marginBottom: '1rem' }}>
          Hi, my name is
        </h2>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #8a2be2)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          {profile.name}.
        </h1>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          I build dynamic digital experiences.
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.8 }}>
          {profile.bio}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <a href="#projects" style={{ color: 'var(--text-secondary)' }}>
          <ChevronDown size={32} />
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-20px) translateX(-50%); }
          60% { transform: translateY(-10px) translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
