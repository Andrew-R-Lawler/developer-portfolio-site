import { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section container" style={{ maxWidth: '800px' }}>
      <h2 className="section-title">Get In Touch</h2>
      <div className="glass-panel" style={{ padding: '3rem' }}>
        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h3 style={{ color: '#4ade80', fontSize: '1.5rem', marginBottom: '1rem' }}>Message Sent!</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="btn btn-outline"
              style={{ marginTop: '2rem' }}
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flexDirection: 'row' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    color: 'white',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    color: 'white',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  color: 'white',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'submitting'}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
            {status === 'error' && (
              <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '1rem' }}>
                Failed to send message. Please try again later.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
