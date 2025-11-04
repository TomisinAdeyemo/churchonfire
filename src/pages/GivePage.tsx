import { Heart, CreditCard, Smartphone, Building2, Check } from 'lucide-react';

const givingMethods = [
  {
    id: 'online',
    title: 'Online Giving',
    icon: CreditCard,
    description: 'Give securely online with your credit or debit card',
    link: '#online-giving'
  },
  {
    id: 'mobile',
    title: 'Text to Give',
    icon: Smartphone,
    description: 'Text GIVE to (123) 456-7890 to give from your phone',
    link: '#text-give'
  },
  {
    id: 'bank',
    title: 'Bank Transfer',
    icon: Building2,
    description: 'Set up automatic giving through your bank',
    link: '#bank-transfer'
  }
];

const impactAreas = [
  'Building & Facilities',
  'Missions & Outreach',
  'Children & Youth Ministry',
  'Worship & Media',
  'Community Support'
];

export default function GivePage() {
  return (
    <main className="give-page">
      <section className="page-hero give-hero">
        <div className="container">
          <Heart size={64} className="hero-icon" />
          <h1>Give Generously</h1>
          <p>Your generosity helps us fulfill our mission and impact lives</p>
        </div>
      </section>

      <section className="giving-content container">
        <div className="giving-intro">
          <h2>Why We Give</h2>
          <p>
            Giving is an act of worship and obedience to God. When you give to Church on Fire International,
            you're investing in the Kingdom of God and helping us reach more people with the Gospel.
            Every gift, no matter the size, makes a significant impact.
          </p>
        </div>

        <div className="giving-methods">
          <h2>Ways to Give</h2>
          <div className="methods-grid">
            {givingMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a key={method.id} href={method.link} className="method-card">
                  <div className="method-icon">
                    <Icon size={40} />
                  </div>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="quick-give-section">
          <div className="quick-give-card">
            <h2>Give Now</h2>
            <p>Choose an amount or enter your own</p>
            <div className="amount-buttons">
              <button className="amount-btn">$25</button>
              <button className="amount-btn">$50</button>
              <button className="amount-btn">$100</button>
              <button className="amount-btn">$250</button>
            </div>
            <div className="custom-amount">
              <input type="number" placeholder="Custom amount" />
            </div>
            <button className="btn btn-primary btn-large">
              <Heart size={20} />
              Continue to Give
            </button>
          </div>
        </div>

        <div className="impact-section">
          <h2>Your Impact</h2>
          <p>Your contributions support:</p>
          <div className="impact-list">
            {impactAreas.map((area, i) => (
              <div key={i} className="impact-item">
                <Check size={20} />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="giving-faq">
          <h2>Questions About Giving?</h2>
          <p>
            We're here to help! Contact our finance team at{' '}
            <a href="mailto:finance@churchonfire.org">finance@churchonfire.org</a> or call us at{' '}
            <a href="tel:+11234567890">(123) 456-7890</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
