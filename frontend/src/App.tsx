import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Project, Skill, Profile } from './types';

function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Go backend
    Promise.all([
      fetch('/api/v1/profile').then(res => res.json()),
      fetch('/api/v1/projects').then(res => res.json()),
      fetch('/api/v1/skills').then(res => res.json())
    ]).then(([profileData, projectsData, skillsData]) => {
      setProfile(profileData);
      setProjects(projectsData || []);
      setSkills(skillsData || []);
      setLoading(false);
    }).catch(err => {
      console.error("Failed to fetch data", err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Loading application...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <p>&copy; {new Date().getFullYear()} {profile?.name}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
