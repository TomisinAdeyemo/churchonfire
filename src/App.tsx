import { useEffect, useState } from 'react';
import { Search, User, Globe, Bell, Menu, X, Play, ArrowRight, ShoppingBag, HandHeart, UserPlus } from 'lucide-react';
import './church.css';
import HomePage from './pages/HomePage';
import ServePage from './pages/ServePage';
import GivePage from './pages/GivePage';
import StorePage from './pages/StorePage';

const SITE_CONTENT = {
  brand: {
    name: "Church on Fire International",
    locale: "Cicero, Chicago",
    logo_light: "/images (1) - Edited.png",
  },
  hero: {
    eyebrow: "Faith in Action",
    title: "Welcome Home",
    subtitle: "Join us in Cicero or watch online every Sunday.",
    bg_image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900",
    primaryCTA: { label: "Plan Your Visit", href: "#visit" },
    secondaryCTA: { label: "Watch Live", href: "#watch" }
  },
  welcomePastors: {
    image: "https://images.pexels.com/photos/8468208/pexels-photo-8468208.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900",
    title: "Dr David Philemon",
    body: "At Church on Fire International, we believe your best days are still ahead. We're a community of faith committed to making a difference in Cicero and beyond. Whether you're local or joining us online, you're welcome here. Come as you are, and discover what God has in store for your life.",
    ctas: [
      { label: "Welcome Message", href: "#welcome" },
      { label: "New Here?", href: "#new" }
    ]
  },
  featuredLeaderStrip: {
    title: "Dr David Philemon",
    subtext: "In person & online Sundays at 9:00am & 11:00am. Join us for powerful worship and life-changing messages.",
    ctas: [
      { label: "Speaking Schedule", href: "#schedule" },
      { label: "Experience Church on Fire", href: "#experience" }
    ]
  },
  serviceTimesPanel: {
    heading: "SERVICE TIMES",
    viewAllLabel: "FULL SCHEDULE",
    viewAllHref: "#full-schedule",
    items: [
      { day: "Wednesday, November 6, 2025", time: "7:00 PM ONLINE SERVICE" },
      { day: "Friday, November 8, 2025", time: "7:30 PM IN PERSON & ONLINE SERVICE (SPANISH)" },
      { day: "Sunday, November 10, 2025", time: "9:00 AM IN PERSON & ONLINE SERVICE" },
      { day: " ", time: "11:00 AM IN PERSON & ONLINE SERVICE" },
      { day: " ", time: "2:00 PM IN PERSON & ONLINE SERVICE (SPANISH)" }
    ]
  },
  whatsHappening: {
    heading: "WHAT'S HAPPENING",
    cards: [
      {
        tag: "SPECIAL EVENT",
        title: "Faith & Family Night",
        body: "Join us for an evening of worship, fellowship, and fun for the whole family. Food and activities for all ages!",
        image: "https://images.pexels.com/photos/8730859/pexels-photo-8730859.jpeg?auto=compress&cs=tinysrgb&w=800",
        cta: { label: "REGISTER NOW", href: "#register" }
      },
      {
        tag: "IN-PERSON",
        title: "Join Us This Sunday",
        body: "Experience powerful worship, inspiring messages, and genuine community. Service times at 9am and 11am.",
        image: "https://images.pexels.com/photos/8468226/pexels-photo-8468226.jpeg?auto=compress&cs=tinysrgb&w=800",
        cta: { label: "Plan Your Visit", href: "#visit" }
      },
      {
        tag: "COMMUNITY",
        title: "Small Groups Starting",
        body: "Connect with others in your neighborhood. New groups forming this month for prayer, Bible study, and fellowship.",
        image: "https://images.pexels.com/photos/6147179/pexels-photo-6147179.jpeg?auto=compress&cs=tinysrgb&w=800",
        cta: { label: "Find a Group", href: "#groups" }
      }
    ]
  },
  featuredMessage: {
    title: "Faith That Moves Mountains",
    date: "Sunday, October 27, 2025",
    image: "https://images.pexels.com/photos/8468270/pexels-photo-8468270.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: { label: "Watch Now", href: "#watch-now" },
    secondaryCTA: { label: "View All Messages", href: "#all-messages" }
  },
  weeklyPlaylist: {
    heading: "WEEKLY PLAYLIST",
    subtitle: "Our top songs this week",
    appleMusciLink: "#apple-music-playlist",
    songs: [
      { title: "Amazing Grace", artist: "Hillsong Worship", duration: "4:32" },
      { title: "Goodness of God", artist: "Bethel Music", duration: "5:22" },
      { title: "Way Maker", artist: "Sinach", duration: "5:35" },
      { title: "Reckless Love", artist: "Cory Asbury", duration: "4:18" },
      { title: "What a Beautiful Name", artist: "Hillsong Worship", duration: "4:11" },
      { title: "Oceans", artist: "Hillsong United", duration: "8:56" },
      { title: "Holy Spirit", artist: "Francesca Battistelli", duration: "4:01" },
      { title: "Graves Into Gardens", artist: "Elevation Worship", duration: "6:32" },
      { title: "Jireh", artist: "Maverick City Music", duration: "5:32" },
      { title: "Yes I Will", artist: "Vertical Worship", duration: "5:28" }
    ]
  },
  newsletter: {
    heading: "STAY CONNECTED",
    subcopy: "Subscribe to our weekly newsletter for updates, encouragement, and event information.",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true }
    ],
    submitLabel: "SUBSCRIBE"
  },
  appPromo: {
    heading: "GET THE APP!",
    subcopy: "Watch services, catch up on messages, give online, and stay connected with everything happening at Church on Fire International.",
    stores: [
      { label: "App Store", href: "#appstore" },
      { label: "Google Play", href: "#googleplay" }
    ]
  },
  footer: {
    logo: "/images (1) - Edited.png",
    groups: [
      { heading: "WATCH", links: [{ label: "Latest Messages", href: "#messages" }, { label: "Watch Live", href: "#live" }, { label: "Message Archive", href: "#archive" }] },
      { heading: "VISIT", links: [{ label: "Plan Your Visit", href: "#visit" }, { label: "Times & Directions", href: "#times" }, { label: "What to Expect", href: "#expect" }] },
      { heading: "CONNECT", links: [{ label: "Small Groups", href: "#groups" }, { label: "Serve", href: "#serve" }, { label: "Events", href: "#events" }] },
      { heading: "RESOURCES", links: [{ label: "Prayer Requests", href: "#prayer" }, { label: "Bible Reading Plans", href: "#bible" }, { label: "Blog", href: "#blog" }] },
      { heading: "GIVE", links: [{ label: "Give Online", href: "#give" }, { label: "Text to Give", href: "#text" }, { label: "Other Ways to Give", href: "#ways" }] },
      { heading: "MINISTRIES", links: [{ label: "Children", href: "#kids" }, { label: "Youth", href: "#youth" }, { label: "Young Adults", href: "#youngadults" }] },
      { heading: "ABOUT", links: [{ label: "Our Story", href: "#about" }, { label: "Leadership", href: "#leadership" }, { label: "Beliefs", href: "#beliefs" }, { label: "Contact Us", href: "#contact" }] }
    ],
    legal: "© " + new Date().getFullYear() + " Church on Fire International. All rights reserved."
  },
  liveTicker: {
    enabled: true,
    prefix: "NEXT SERVICE BEGINS IN",
    timezone: "America/Chicago",
    weeklyTimes: [
      { day: "Sunday", time: "09:00" },
      { day: "Sunday", time: "11:00" },
      { day: "Wednesday", time: "19:00" }
    ]
  }
};

function Countdown({ timezone, weeklyTimes }: { timezone: string, weeklyTimes: Array<{ day: string, time: string }> }) {
  const [countdown, setCountdown] = useState('00:00:00:00');

  useEffect(() => {
    const getNextService = () => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const now = new Date();
      const localNow = new Date(now.toLocaleString('en-US', { timeZone: timezone }));

      let best: Date | null = null;

      for (const slot of weeklyTimes) {
        const target = new Date(localNow);
        const targetDay = days.indexOf(slot.day);
        const currentDay = target.getDay();
        let diff = (targetDay - currentDay + 7) % 7;

        target.setDate(target.getDate() + diff);
        const [hh, mm] = slot.time.split(":").map(Number);
        target.setHours(hh, mm, 0, 0);

        if (target <= localNow) {
          target.setDate(target.getDate() + 7);
        }

        if (!best || target < best) {
          best = new Date(target);
        }
      }

      return best;
    };

    const updateCountdown = () => {
      const target = getNextService();
      if (!target) return;

      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown('00:00:00:00');
        return;
      }

      const s = Math.floor(diff / 1000);
      const days = Math.floor(s / 86400);
      const hrs = Math.floor((s % 86400) / 3600);
      const mins = Math.floor((s % 3600) / 60);
      const secs = s % 60;

      setCountdown(`${String(days).padStart(2, '0')}:${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [timezone, weeklyTimes]);

  return <span className="countdown">{countdown}</span>;
}

function App() {
  const [formStatus, setFormStatus] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString() || '';
    const firstName = formData.get('firstName')?.toString() || '';
    const lastName = formData.get('lastName')?.toString() || '';

    if (!firstName.trim()) {
      setFormStatus('error:Please enter your first name.');
      return;
    }
    if (!lastName.trim()) {
      setFormStatus('error:Please enter your last name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus('error:Please enter a valid email address.');
      return;
    }

    setFormStatus('success:Thank you! You\'re now subscribed to our newsletter.');
    e.currentTarget.reset();
    setTimeout(() => setFormStatus(''), 5000);
  };

  const navigate = (page: string) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="church-site">
      <header className="utility-header">
        <div className="container">
          <a className="brand" href="#" onClick={() => navigate('home')}>
            <img src={SITE_CONTENT.brand.logo_light} alt={SITE_CONTENT.brand.name} />
          </a>
          <nav className="utility-icons">
            <button className="icon-btn" onClick={() => navigate('serve')} aria-label="Serve">
              <UserPlus size={20} />
            </button>
            <button className="icon-btn" onClick={() => navigate('give')} aria-label="Give">
              <HandHeart size={20} />
            </button>
            <button className="icon-btn" onClick={() => navigate('store')} aria-label="Store">
              <ShoppingBag size={20} />
            </button>
            <button className="icon-btn menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <button className="menu-item" onClick={() => navigate('home')}>
              Home
            </button>
            <button className="menu-item" onClick={() => navigate('serve')}>
              <UserPlus size={20} />
              Serve
            </button>
            <button className="menu-item" onClick={() => navigate('give')}>
              <HandHeart size={20} />
              Give
            </button>
            <button className="menu-item" onClick={() => navigate('store')}>
              <ShoppingBag size={20} />
              Store
            </button>
          </div>
        )}
      </header>

      {currentPage === 'home' && (
        <HomePage
          siteContent={SITE_CONTENT}
          countdown={<Countdown timezone={SITE_CONTENT.liveTicker.timezone} weeklyTimes={SITE_CONTENT.liveTicker.weeklyTimes} />}
          onNewsletterSubmit={handleNewsletterSubmit}
          formStatus={formStatus}
        />
      )}
      {currentPage === 'serve' && <ServePage />}
      {currentPage === 'give' && <GivePage />}
      {currentPage === 'store' && <StorePage />}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-brand">
            <img src={SITE_CONTENT.footer.logo} alt="Logo" />
          </div>
          <div className="footer-groups">
            {SITE_CONTENT.footer.groups.map((group, i) => (
              <div key={i} className="group">
                <h4 className="group-heading">{group.heading}</h4>
                <ul className="group-list">
                  {group.links.map((link, j) => (
                    <li key={j}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="legal muted">{SITE_CONTENT.footer.legal}</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
