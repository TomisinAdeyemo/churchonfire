import { useState } from 'react';
import { Users, Music, Shield, Video, Baby, Sparkles, Car, ArrowRight } from 'lucide-react';

const departments = [
  {
    id: 'ushering',
    name: 'Ushering',
    icon: Users,
    description: 'Welcome and guide our guests with warmth and hospitality',
    color: '#4f46e5'
  },
  {
    id: 'choir',
    name: 'Choir',
    icon: Music,
    description: 'Lead worship through powerful music and song',
    color: '#f59e0b'
  },
  {
    id: 'protocol',
    name: 'Protocol',
    icon: Shield,
    description: 'Ensure smooth operations and maintain order during services',
    color: '#10b981'
  },
  {
    id: 'media',
    name: 'Media',
    icon: Video,
    description: 'Manage technical aspects including sound, video, and livestream',
    color: '#ef4444'
  },
  {
    id: 'childrens',
    name: 'Children\'s Ministry',
    icon: Baby,
    description: 'Nurture and teach our youngest members',
    color: '#8b5cf6'
  },
  {
    id: 'sanctuary',
    name: 'Sanctuary Keepers',
    icon: Sparkles,
    description: 'Maintain and beautify our worship space',
    color: '#06b6d4'
  },
  {
    id: 'parking',
    name: 'Car Parking',
    icon: Car,
    description: 'Help members and guests with safe and efficient parking',
    color: '#f97316'
  }
];

export default function ServePage() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success:Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => {
      setFormStatus('');
      setSelectedDept(null);
    }, 3000);
  };

  return (
    <main className="serve-page">
      <section className="page-hero">
        <div className="container">
          <h1>Serve With Us</h1>
          <p>Use your gifts and talents to make a difference in our community</p>
        </div>
      </section>

      <section className="departments-grid container">
        <div className="departments-list">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className={`department-card ${selectedDept === dept.id ? 'selected' : ''}`}
                onClick={() => setSelectedDept(dept.id)}
                style={{ '--dept-color': dept.color } as any}
              >
                <div className="dept-icon">
                  <Icon size={32} />
                </div>
                <div className="dept-info">
                  <h3>{dept.name}</h3>
                  <p>{dept.description}</p>
                </div>
                <button className="dept-btn">
                  Apply <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {selectedDept && (
          <div className="application-form">
            <h2>Apply for {departments.find(d => d.id === selectedDept)?.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Why do you want to serve in this department?</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Application <ArrowRight size={18} />
              </button>
              {formStatus && (
                <div className={`form-status ${formStatus.startsWith('success') ? 'success' : 'error'}`}>
                  {formStatus.split(':')[1]}
                </div>
              )}
            </form>
          </div>
        )}
      </section>
    </main>
  );
}
