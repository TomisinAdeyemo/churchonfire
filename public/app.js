// ====================================
// CHURCH ON FIRE INTERNATIONAL - APP.JS
// ====================================

const SITE_CONTENT = {
  brand: {
    name: "Church on Fire International",
    locale: "Cicero, Chicago",
    logo_light: "https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
    logo_dark: "https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
    favicon: "https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=32&h=32"
  },

  utilities: [
    { type:"search",  label:"Search",  href:"#search" },
    { type:"user",    label:"Account", href:"#account" },
    { type:"globe",   label:"Language", href:"#language" },
    { type:"bell",    label:"Alerts",  href:"#alerts" },
    { type:"menu",    label:"Menu",    href:"#menu" }
  ],

  hero: {
    eyebrow: "Faith in Action",
    title: "Welcome Home",
    subtitle: "Join us in Cicero or watch online every Sunday.",
    bg_image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900",
    primaryCTA: { label:"Plan Your Visit", href:"#visit" },
    secondaryCTA: { label:"Watch Live", href:"#watch" }
  },

  welcomePastors: {
    image: "https://images.pexels.com/photos/8468208/pexels-photo-8468208.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900",
    title: "PASTORS JOHN & SARAH WILLIAMS",
    body: "At Church on Fire International, we believe your best days are still ahead. We're a community of faith committed to making a difference in Cicero and beyond. Whether you're local or joining us online, you're welcome here. Come as you are, and discover what God has in store for your life.",
    ctas: [
      { label:"Welcome Message", href:"#welcome" },
      { label:"New Here?", href:"#new" }
    ]
  },

  featuredLeaderStrip: {
    title: "PASTOR JOHN WILLIAMS",
    subtext: "In person & online Sundays at 9:00am & 11:00am. Join us for powerful worship and life-changing messages.",
    ctas: [
      { label:"Speaking Schedule", href:"#schedule" },
      { label:"Experience Church on Fire", href:"#experience" }
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
        tag:"SPECIAL EVENT",
        title:"Faith & Family Night",
        body:"Join us for an evening of worship, fellowship, and fun for the whole family. Food and activities for all ages!",
        image:"https://images.pexels.com/photos/8730859/pexels-photo-8730859.jpeg?auto=compress&cs=tinysrgb&w=800",
        cta:{ label:"REGISTER NOW", href:"#register" }
      },
      {
        tag:"IN-PERSON",
        title:"Join Us This Sunday",
        body:"Experience powerful worship, inspiring messages, and genuine community. Service times at 9am and 11am.",
        image:"https://images.pexels.com/photos/8468226/pexels-photo-8468226.jpeg?auto=compress&cs=tinysrgb&w=800",
        cta:{ label:"Plan Your Visit", href:"#visit" }
      },
      {
        tag:"COMMUNITY",
        title:"Small Groups Starting",
        body:"Connect with others in your neighborhood. New groups forming this month for prayer, Bible study, and fellowship.",
        image:"https://images.pexels.com/photos/6147179/pexels-photo-6147179.jpeg?auto=compress&cs=tinysrgb&w=800",
        cta:{ label:"Find a Group", href:"#groups" }
      }
    ]
  },

  featuredMessage: {
    title: "Faith That Moves Mountains",
    date: "Sunday, October 27, 2025",
    image: "https://images.pexels.com/photos/8468270/pexels-photo-8468270.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: { label:"Watch Now", href:"#watch-now" },
    secondaryCTA: { label:"View All Messages", href:"#all-messages" }
  },

  newsletter: {
    heading: "STAY CONNECTED",
    subcopy: "Subscribe to our weekly newsletter for updates, encouragement, and event information.",
    fields: [
      { name:"firstName", label:"First Name", type:"text", required:true },
      { name:"lastName",  label:"Last Name",  type:"text", required:true },
      { name:"email",     label:"Email Address", type:"email", required:true }
    ],
    submitLabel: "SUBSCRIBE"
  },

  appPromo: {
    heading: "GET THE APP!",
    subcopy: "Watch services, catch up on messages, give online, and stay connected with everything happening at Church on Fire International.",
    image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1200",
    stores: [
      { label:"App Store", href:"#appstore" },
      { label:"Google Play", href:"#googleplay" }
    ]
  },

  footer: {
    logo: "https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
    groups: [
      {
        heading:"WATCH",
        links:[
          {label:"Latest Messages",href:"#messages"},
          {label:"Watch Live",href:"#live"},
          {label:"Message Archive",href:"#archive"}
        ]
      },
      {
        heading:"VISIT",
        links:[
          {label:"Plan Your Visit",href:"#visit"},
          {label:"Times & Directions",href:"#times"},
          {label:"What to Expect",href:"#expect"}
        ]
      },
      {
        heading:"CONNECT",
        links:[
          {label:"Small Groups",href:"#groups"},
          {label:"Serve",href:"#serve"},
          {label:"Events",href:"#events"}
        ]
      },
      {
        heading:"RESOURCES",
        links:[
          {label:"Prayer Requests",href:"#prayer"},
          {label:"Bible Reading Plans",href:"#bible"},
          {label:"Blog",href:"#blog"}
        ]
      },
      {
        heading:"GIVE",
        links:[
          {label:"Give Online",href:"#give"},
          {label:"Text to Give",href:"#text"},
          {label:"Other Ways to Give",href:"#ways"}
        ]
      },
      {
        heading:"MINISTRIES",
        links:[
          {label:"Children",href:"#kids"},
          {label:"Youth",href:"#youth"},
          {label:"Young Adults",href:"#youngadults"}
        ]
      },
      {
        heading:"ABOUT",
        links:[
          {label:"Our Story",href:"#about"},
          {label:"Leadership",href:"#leadership"},
          {label:"Beliefs",href:"#beliefs"},
          {label:"Contact Us",href:"#contact"}
        ]
      }
    ],
    legal: "© " + new Date().getFullYear() + " Church on Fire International. All rights reserved."
  },

  liveTicker: {
    enabled: true,
    prefix: "NEXT SERVICE BEGINS IN",
    timezone: "America/Chicago",
    weeklyTimes: [
      { day:"Sunday",    time:"09:00" },
      { day:"Sunday",    time:"11:00" },
      { day:"Wednesday", time:"19:00" }
    ]
  }
};

// HELPER FUNCTIONS
function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return [...root.querySelectorAll(sel)];
}

function el(tag, cls) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
}

function setText(node, text) {
  if (!node) return;
  node.textContent = text;
}

function setBtn(node, obj) {
  if (!node || !obj) return;
  node.textContent = obj.label;
  node.href = obj.href;
}

function img(node, src, alt) {
  if (!node) return;
  node.src = src;
  node.alt = alt || "";
}

// TIMEZONE & COUNTDOWN HELPERS
function nextServiceDate(tz, weeklyTimes) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();

  function toLocal(d) {
    return new Date(d.toLocaleString('en-US', { timeZone: tz }));
  }

  const localNow = toLocal(now);
  let best = null;

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
}

function startCountdown(elm, tz, weeklyTimes) {
  function render() {
    const target = nextServiceDate(tz, weeklyTimes);
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      setTimeout(render, 1000);
      return;
    }

    const s = Math.floor(diff / 1000);
    const days = Math.floor(s / 86400);
    const hrs = Math.floor((s % 86400) / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;

    elm.textContent = `${String(days).padStart(2, '0')}:${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    setTimeout(render, 1000);
  }

  render();
}

// MAIN HYDRATION FUNCTION
function hydrate() {
  // Brand + Header
  const brandImg = qs('[data-id="brand.logo"]');
  if (brandImg) {
    img(brandImg, SITE_CONTENT.brand.logo_light, SITE_CONTENT.brand.name);
  }

  const favicon = qs('link[rel="icon"]');
  if (favicon) {
    favicon.setAttribute('href', SITE_CONTENT.brand.favicon);
  }

  // Utilities
  const utilNav = qs('.utility-icons');
  if (utilNav) {
    utilNav.innerHTML = "";
    SITE_CONTENT.utilities.forEach(u => {
      const a = el('a', 'icon-btn');
      a.href = u.href;
      a.setAttribute('aria-label', u.label);
      a.innerHTML = `<span class="ic ic-${u.type}" aria-hidden="true"></span>`;
      utilNav.appendChild(a);
    });
  }

  // Hero
  img(qs('[data-id="hero.bg_image"]'), SITE_CONTENT.hero.bg_image, SITE_CONTENT.hero.eyebrow);
  setText(qs('[data-id="hero.eyebrow"]'), SITE_CONTENT.hero.eyebrow);
  setText(qs('[data-id="hero.title"]'), SITE_CONTENT.hero.title);
  setText(qs('[data-id="hero.subtitle"]'), SITE_CONTENT.hero.subtitle);
  setBtn(qs('[data-id="hero.primaryCTA"]'), SITE_CONTENT.hero.primaryCTA);
  setBtn(qs('[data-id="hero.secondaryCTA"]'), SITE_CONTENT.hero.secondaryCTA);

  // Welcome
  img(qs('[data-id="welcomePastors.image"]'), SITE_CONTENT.welcomePastors.image, 'Welcome');
  setText(qs('[data-id="welcomePastors.title"]'), SITE_CONTENT.welcomePastors.title);
  setText(qs('[data-id="welcomePastors.body"]'), SITE_CONTENT.welcomePastors.body);

  const wctas = qs('[data-id="welcomePastors.ctas"]');
  if (wctas) {
    wctas.innerHTML = "";
    SITE_CONTENT.welcomePastors.ctas.forEach(c => {
      const a = el('a', 'btn btn-outline');
      a.href = c.href;
      a.textContent = c.label;
      wctas.appendChild(a);
    });
  }

  // Leader Strip
  setText(qs('[data-id="featuredLeaderStrip.title"]'), SITE_CONTENT.featuredLeaderStrip.title);
  setText(qs('[data-id="featuredLeaderStrip.subtext"]'), SITE_CONTENT.featuredLeaderStrip.subtext);

  const lctas = qs('[data-id="featuredLeaderStrip.ctas"]');
  if (lctas) {
    lctas.innerHTML = "";
    SITE_CONTENT.featuredLeaderStrip.ctas.forEach(c => {
      const a = el('a', 'btn btn-outline');
      a.href = c.href;
      a.textContent = c.label;
      lctas.appendChild(a);
    });
  }

  // Service Times
  setText(qs('[data-id="serviceTimesPanel.heading"]'), SITE_CONTENT.serviceTimesPanel.heading);

  const viewAll = qs('[data-id="serviceTimesPanel.viewAll"]');
  if (viewAll) {
    viewAll.textContent = SITE_CONTENT.serviceTimesPanel.viewAllLabel + " ›";
    viewAll.href = SITE_CONTENT.serviceTimesPanel.viewAllHref;
  }

  const list = qs('[data-id="serviceTimesPanel.items"]');
  if (list) {
    list.innerHTML = "";
    SITE_CONTENT.serviceTimesPanel.items.forEach(i => {
      const li = el('li');
      li.innerHTML = `<p class="muted">${i.day || ""}</p><p>${i.time}</p>`;
      list.appendChild(li);
    });
  }

  // What's Happening
  setText(qs('[data-id="whatsHappening.heading"]'), SITE_CONTENT.whatsHappening.heading);

  const cards = qs('[data-id="whatsHappening.cards"]');
  if (cards) {
    cards.innerHTML = "";
    SITE_CONTENT.whatsHappening.cards.forEach(c => {
      const card = el('article', 'card');
      card.innerHTML = `
        <img src="${c.image}" alt="${c.tag}" loading="lazy"/>
        <div class="card-body">
          <p class="tag">${c.tag}</p>
          <h4>${c.title}</h4>
          <p class="muted">${c.body || ""}</p>
          ${c.cta ? `<a class="btn btn-outline" href="${c.cta.href}">${c.cta.label}</a>` : ""}
        </div>`;
      cards.appendChild(card);
    });
  }

  // Featured Message
  img(qs('[data-id="featuredMessage.image"]'), SITE_CONTENT.featuredMessage.image, 'Featured message');
  setText(qs('[data-id="featuredMessage.title"]'), SITE_CONTENT.featuredMessage.title);
  setText(qs('[data-id="featuredMessage.date"]'), SITE_CONTENT.featuredMessage.date);
  setBtn(qs('[data-id="featuredMessage.primaryCTA"]'), SITE_CONTENT.featuredMessage.primaryCTA);
  setBtn(qs('[data-id="featuredMessage.secondaryCTA"]'), SITE_CONTENT.featuredMessage.secondaryCTA);

  // Campaign Card (reuse first happening card)
  const campaignCard = qs('[data-id="campaign.card"]');
  if (campaignCard && SITE_CONTENT.whatsHappening.cards[0]) {
    const c = SITE_CONTENT.whatsHappening.cards[0];
    campaignCard.innerHTML = `
      <img src="${c.image}" alt="${c.tag}" loading="lazy"/>
      <div class="card-body">
        <p class="tag">${c.tag}</p>
        <h4>${c.title}</h4>
        <p class="muted">${c.body || ""}</p>
        ${c.cta ? `<a class="btn btn-primary" href="${c.cta.href}">${c.cta.label}</a>` : ""}
      </div>`;
  }

  // Newsletter
  const grid = qs('[data-id="newsletter.fields"]');
  if (grid) {
    grid.innerHTML = "";
    SITE_CONTENT.newsletter.fields.forEach(f => {
      const wrap = el('label', 'field');
      wrap.setAttribute('for', f.name);
      wrap.innerHTML = `<span>${f.label}</span><input id="${f.name}" name="${f.name}" type="${f.type}" ${f.required ? 'required' : ''} />`;
      grid.appendChild(wrap);
    });
  }

  setText(qs('[data-id="newsletter.heading"]'), SITE_CONTENT.newsletter.heading);
  setText(qs('[data-id="newsletter.subcopy"]'), SITE_CONTENT.newsletter.subcopy);
  setText(qs('[data-id="newsletter.submitLabel"]'), SITE_CONTENT.newsletter.submitLabel);

  // App Band
  setText(qs('[data-id="appPromo.heading"]'), SITE_CONTENT.appPromo.heading);
  setText(qs('[data-id="appPromo.subcopy"]'), SITE_CONTENT.appPromo.subcopy);

  const stores = qs('[data-id="appPromo.stores"]');
  if (stores) {
    stores.innerHTML = "";
    SITE_CONTENT.appPromo.stores.forEach(s => {
      const a = el('a', 'btn btn-store');
      a.href = s.href;
      a.textContent = s.label;
      stores.appendChild(a);
    });
  }

  // Footer
  img(qs('[data-id="footer.logo"]'), SITE_CONTENT.footer.logo, 'Brand mark');
  setText(qs('[data-id="footer.legal"]'), SITE_CONTENT.footer.legal);

  const groups = qs('[data-id="footer.groups"]');
  if (groups) {
    groups.innerHTML = "";
    SITE_CONTENT.footer.groups.forEach((g, i) => {
      const group = el('div', 'group');
      const isDesktop = window.innerWidth >= 1024;
      group.innerHTML = `
        <button class="group-toggle" aria-expanded="${isDesktop ? 'true' : 'false'}" aria-controls="g${i}">
          <span>${g.heading}</span><span class="chev">▾</span>
        </button>
        <ul id="g${i}" class="group-list" ${isDesktop ? '' : 'hidden'}>
          ${g.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
        </ul>`;
      groups.appendChild(group);
    });
  }

  // Ticker
  setText(qs('.live-ticker .prefix'), SITE_CONTENT.liveTicker.prefix);
  if (SITE_CONTENT.liveTicker.enabled) {
    const countdown = qs('#countdown');
    if (countdown) {
      startCountdown(countdown, SITE_CONTENT.liveTicker.timezone, SITE_CONTENT.liveTicker.weeklyTimes);
    }
  }
}

// ACCORDION FUNCTIONALITY
function initAccordions() {
  qsa('.group-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      const tgt = qs('#' + btn.getAttribute('aria-controls'));
      if (tgt) {
        if (expanded) {
          tgt.setAttribute('hidden', '');
        } else {
          tgt.removeAttribute('hidden');
        }
      }
    });
  });
}

// NEWSLETTER FORM
function initNewsletter() {
  const form = qs('#newsletterForm');
  const status = qs('#nl-status');

  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const email = data.get('email')?.toString() || "";
    const firstName = data.get('firstName')?.toString() || "";
    const lastName = data.get('lastName')?.toString() || "";

    if (!firstName.trim()) {
      status.textContent = "Please enter your first name.";
      status.className = "error";
      return;
    }

    if (!lastName.trim()) {
      status.textContent = "Please enter your last name.";
      status.className = "error";
      return;
    }

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      status.textContent = "Please enter a valid email address.";
      status.className = "error";
      return;
    }

    status.textContent = "Thank you! You're now subscribed to our newsletter.";
    status.className = "success";
    form.reset();

    setTimeout(() => {
      status.textContent = "";
      status.className = "";
    }, 5000);
  });
}

// RESPONSIVE BEHAVIOR
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    hydrate();
    initAccordions();
  }, 250);
});

// INITIALIZE ON DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
  hydrate();
  initAccordions();
  initNewsletter();
});

// SMOOTH SCROLL FOR ANCHOR LINKS
document.addEventListener('click', (e) => {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;

  const href = target.getAttribute('href');
  if (href === '#' || href === '#menu') return;

  e.preventDefault();

  const targetEl = document.querySelector(href);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
