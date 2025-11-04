import { Play, ArrowRight, MapPin, Download } from 'lucide-react';

interface HomePageProps {
  siteContent: any;
  countdown: JSX.Element;
  onNewsletterSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formStatus: string;
}

export default function HomePage({ siteContent, countdown, onNewsletterSubmit, formStatus }: HomePageProps) {
  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <img src={siteContent.hero.bg_image} alt={siteContent.hero.eyebrow} loading="eager" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="sub">{siteContent.hero.subtitle}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={siteContent.hero.primaryCTA.href}>
              {siteContent.hero.primaryCTA.label}
            </a>
            <a className="btn btn-outline" href={siteContent.hero.secondaryCTA.href}>
              {siteContent.hero.secondaryCTA.label}
            </a>
          </div>
        </div>
      </section>

      <section className="welcome-card container">
        <div className="welcome-media">
          <img src={siteContent.welcomePastors.image} alt="Welcome photo" loading="lazy" />
        </div>
        <div className="welcome-copy">
          <h2>{siteContent.welcomePastors.title}</h2>
          <p>{siteContent.welcomePastors.body}</p>
          <div className="stack-ctas">
            {siteContent.welcomePastors.ctas.map((cta: any, i: number) => (
              <a key={i} className="btn btn-outline" href={cta.href}>{cta.label}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="leader-strip">
        <div className="container strip-inner">
          <div className="strip-content">
            <h2>{siteContent.featuredLeaderStrip.title}</h2>
            <p>{siteContent.featuredLeaderStrip.subtext}</p>
          </div>
          <div className="row-ctas">
            {siteContent.featuredLeaderStrip.ctas.map((cta: any, i: number) => (
              <a key={i} className="btn btn-outline" href={cta.href}>{cta.label}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="service-times container">
        <div className="panel">
          <div className="panel-head">
            <h3>{siteContent.serviceTimesPanel.heading}</h3>
            <a className="pill-link" href={siteContent.serviceTimesPanel.viewAllHref}>
              {siteContent.serviceTimesPanel.viewAllLabel} ›
            </a>
          </div>
          <ul className="times-list">
            {siteContent.serviceTimesPanel.items.map((item: any, i: number) => (
              <li key={i}>
                <p className="muted">{item.day}</p>
                <p>{item.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="whats-happening container">
        <h3>{siteContent.whatsHappening.heading}</h3>
        <div className="cards">
          {siteContent.whatsHappening.cards.map((card: any, i: number) => (
            <article key={i} className="card">
              <img src={card.image} alt={card.tag} loading="lazy" />
              <div className="card-body">
                <p className="tag">{card.tag}</p>
                <h4>{card.title}</h4>
                <p className="muted">{card.body}</p>
                {card.cta && (
                  <a className="btn btn-outline" href={card.cta.href}>{card.cta.label}</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-message container">
        <div className="msg-media">
          <img src={siteContent.featuredMessage.image} alt="Featured message" loading="lazy" />
        </div>
        <div className="msg-copy">
          <h3>{siteContent.featuredMessage.title}</h3>
          <p className="muted">{siteContent.featuredMessage.date}</p>
          <div className="stack-ctas">
            <a className="btn btn-outline" href={siteContent.featuredMessage.primaryCTA.href}>{siteContent.featuredMessage.primaryCTA.label}</a>
            <a className="btn btn-outline" href={siteContent.featuredMessage.secondaryCTA.href}>{siteContent.featuredMessage.secondaryCTA.label}</a>
          </div>
        </div>
      </section>

      <section className="weekly-playlist container">
        <div className="playlist-header">
          <h3>{siteContent.weeklyPlaylist.heading}</h3>
          <p className="muted">{siteContent.weeklyPlaylist.subtitle}</p>
        </div>
        <div className="playlist-grid">
          {siteContent.weeklyPlaylist.songs.map((song: any, i: number) => (
            <div key={i} className="playlist-item">
              <div className="playlist-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="playlist-info">
                <h4>{song.title}</h4>
                <p className="muted">{song.artist}</p>
              </div>
              <div className="playlist-duration">{song.duration}</div>
              <button className="play-btn" aria-label="Play">
                <Play size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="playlist-cta">
          <a className="btn btn-primary" href={siteContent.weeklyPlaylist.appleMusciLink}>
            <Play size={20} />
            Listen on Apple Music
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="newsletter container">
        <div className="newsletter-bg"></div>
        <div className="newsletter-content">
          <h3>{siteContent.newsletter.heading}</h3>
          <p className="muted">{siteContent.newsletter.subcopy}</p>
          <form onSubmit={onNewsletterSubmit}>
            <div className="grid-3">
              {siteContent.newsletter.fields.map((field: any, i: number) => (
                <label key={i} className="field" htmlFor={field.name}>
                  <span>{field.label}</span>
                  <input id={field.name} name={field.name} type={field.type} required={field.required} />
                </label>
              ))}
            </div>
            <button className="btn btn-outline" type="submit">{siteContent.newsletter.submitLabel}</button>
          </form>
          {formStatus && (
            <div className={`form-status ${formStatus.startsWith('success') ? 'success' : 'error'}`}>
              {formStatus.split(':')[1]}
            </div>
          )}
        </div>
      </section>

      <section className="app-band">
        <div className="container app-inner-simple">
          <div className="app-copy">
            <h3>{siteContent.appPromo.heading}</h3>
            <p>{siteContent.appPromo.subcopy}</p>
            <div className="store-row">
              <a className="store-badge" href="#appstore">
                <Download size={24} />
                <div>
                  <div className="store-label">Download on the</div>
                  <div className="store-name">App Store</div>
                </div>
              </a>
              <a className="store-badge" href="#googleplay">
                <Download size={24} />
                <div>
                  <div className="store-label">Get it on</div>
                  <div className="store-name">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {siteContent.liveTicker.enabled && (
        <aside className="live-ticker">
          <div className="container ticker-content">
            <span className="prefix">{siteContent.liveTicker.prefix}</span>
            {countdown}
          </div>
        </aside>
      )}
    </main>
  );
}
