/* ─────────────────────────────────────────
   THE FISH — GOLF CLASSIC 2025
   main.js
───────────────────────────────────────── */

/* ─────────────────────────────────────────
   ✏️  EDIT YOUR DATA HERE
   All site content lives in this one block.
   Update names, dates, details, etc. below.
───────────────────────────────────────── */

const SITE_DATA = {

  /* ── Players who still owe money ── */
  outstanding_payments: [
    "Mike Kowalski",
    "Dave Tanner",
    "Brent Shields",
    "Jason Holt",
    "Tyler Pryce",
    // Add or remove names as payments come in
  ],

  payment: {
    email: "fishgolfclassic@gmail.com",
    amount: "$250 per player",
    deadline: "May 20, 2025",
  },

  /* ── Weekend Schedule ── */
  schedule: [
    {
      dayLabel: "Friday",
      date: "22",
      month: "May",
      course: "Cranberry Golf Resort",
      tag: "Day 1 · Shotgun Start",
      events: [
        { time: "12:00 PM", desc: "Arrive & check in at chalet" },
        { time: "1:30 PM",  desc: "Warm-up on the range" },
        { time: "2:00 PM",  desc: "Shotgun start — scramble format" },
        { time: "6:30 PM",  desc: "19th hole — drinks & dinner at chalet" },
      ],
    },
    {
      dayLabel: "Saturday",
      date: "23",
      month: "May",
      course: "The Georgian Bay Club",
      tag: "Day 2 · Best Ball",
      events: [
        { time: "9:00 AM",  desc: "Breakfast at chalet" },
        { time: "11:00 AM", desc: "Tee time — best ball format" },
        { time: "5:00 PM",  desc: "Post-round BBQ & awards ceremony" },
        { time: "8:00 PM",  desc: "Team bonfire (weather permitting)" },
      ],
    },
    {
      dayLabel: "Sunday",
      date: "24",
      month: "May",
      course: "Monterra Golf",
      tag: "Day 3 · Individual Stroke Play",
      events: [
        { time: "8:30 AM",  desc: "Continental breakfast" },
        { time: "10:00 AM", desc: "Tee time — individual stroke play" },
        { time: "3:00 PM",  desc: "Final awards & trophy presentation" },
        { time: "4:00 PM",  desc: "Chalet checkout · safe travels!" },
      ],
    },
  ],

  /* ── Course Info ── */
  courses: [
    {
      num: "01",
      dayBadge: "Friday · Day 1",
      name: "Cranberry Golf Resort",
      location: "Collingwood, ON",
      par: "72",
      yards: "6,841",
      format: "Scramble",
      holes: "18 Holes",
      website: "https://www.cranberrygolfresort.com",
      notes:
        "A links-style layout with sweeping views of Georgian Bay. Watch out for the 14th — the wind comes off the water and will eat your ball alive. Cart path only after rain.",
    },
    {
      num: "02",
      dayBadge: "Saturday · Day 2",
      name: "The Georgian Bay Club",
      location: "Clarksburg, ON",
      par: "72",
      yards: "7,100",
      format: "Best Ball",
      holes: "18 Holes",
      website: "https://www.georgianbayclub.com",
      notes:
        "Championship calibre track carved through the Niagara Escarpment. Tight fairways and elevated greens demand accuracy off the tee. Arrive 30 min early — no power carts before 10 AM.",
    },
    {
      num: "03",
      dayBadge: "Sunday · Day 3",
      name: "Monterra Golf",
      location: "Blue Mountain, ON",
      par: "71",
      yards: "6,602",
      format: "Individual Stroke",
      holes: "18 Holes",
      website: "https://www.bluemountain.ca/golf",
      notes:
        "Stunning mountain backdrop. The back nine climbs significantly — if you skip the cart you will regret it. Also home to the infamous 18th island green for the glory finish.",
    },
  ],

  /* ── Chalet Info ── */
  chalet: {
    name: "Fish Headquarters",
    address: "14 Blue Shores Lane, Collingwood, ON L9Y 0X4",
    sleeps: "12 players",
    checkin: "Friday, May 22 · 11:00 AM",
    checkout: "Sunday, May 24 · 4:00 PM",
    cost: "Included in tournament fee",
    wifi: "FishHQ2025 / password: GoFish2025",
    parking: "Driveway fits 6 vehicles — carpool where possible",
    contact: "Book issues? Call Kevin @ 416-555-0199",
    rules: [
      { icon: "🚭", text: "No smoking indoors — use the back deck." },
      { icon: "🍺", text: "BYOB — fridge space is first come, first served. Label your stuff." },
      { icon: "🛏️", text: "Bunk assignments posted on the kitchen whiteboard. No swapping without group vote." },
      { icon: "🧹", text: "Everyone cleans up after themselves. Dishes done before bed." },
      { icon: "🔊", text: "Quiet hours after 1:00 AM — some of us are old now." },
      { icon: "🏌️", text: "Clubs and bags stay in the garage — not the living room." },
      { icon: "💳", text: "Shared groceries & breakfast supplies split evenly on checkout." },
    ],
  },

  /* ── General Info Cards ── */
  info: [
    {
      icon: "🏆",
      title: "Tournament Format",
      body: "Three rounds, three formats: scramble, best ball, and individual stroke play. Individual points awarded each day. Overall Fish Cup winner crowned Sunday.",
    },
    {
      icon: "💰",
      title: "Prizes",
      body: "Fish Cup champion, daily closest-to-the-pin, longest drive (each day), and the coveted Golden Wedge for worst score of the weekend.",
    },
    {
      icon: "🚗",
      title: "Getting There",
      body: "Collingwood is ~1.5 hrs north of Toronto via Hwy 400 N. Coordinate carpools in the group chat — parking is limited at the chalet.",
    },
    {
      icon: "👕",
      title: "Dress Code",
      body: "Collared shirts required at all three courses. No denim, no cargo shorts. Fish merch is encouraged and will be available for pickup Friday.",
    },
    {
      icon: "⛅",
      title: "Weather",
      body: "Collingwood in May averages 15–20°C. Bring a light jacket for early morning rounds and rain gear — May can be unpredictable. Check the 7-day closer to the weekend.",
    },
    {
      icon: "📱",
      title: "Group Chat",
      body: "All coordination happens in the WhatsApp group 'Fish Golf 2025'. Not in the chat? Text Kevin @ 416-555-0199 to get added.",
    },
    {
      icon: "🍔",
      title: "Food & Drink",
      body: "Breakfast at the chalet each morning. Lunches at course clubhouses (not included). Saturday BBQ dinner provided. Sunday post-round lunch at chalet before departure.",
    },
    {
      icon: "🏥",
      title: "Emergency Info",
      body: "Collingwood General Hospital: 705-445-2550 · 460 Hume Street. Non-emergency: dial 211. Keep your provincial health card with you.",
    },
  ],
};


/* ─────────────────────────────────────────
   DOM POPULATION
───────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  buildPaymentGrid();
  buildSchedule();
  buildCourses();
  buildChalet();
  buildInfo();
  initNav();
  initScrollReveal();
  initFishLogo();
});

/* ── Payment Grid ── */
function buildPaymentGrid() {
  const grid = document.getElementById("paymentGrid");
  const cta  = document.querySelector(".payment-alert__cta");

  if (!grid) return;

  const players = SITE_DATA.outstanding_payments;
  const { email, amount, deadline } = SITE_DATA.payment;

  if (players.length === 0) {
    grid.innerHTML = `<p style="color:var(--teal);font-family:var(--font-ui);font-size:1.1rem;letter-spacing:0.08em;text-align:center;width:100%">✅ All payments received — we're good to go!</p>`;
  } else {
    grid.innerHTML = players
      .map(name => `<div class="payment-chip reveal">${name}</div>`)
      .join("");
  }

  if (cta) {
    cta.innerHTML = `E-Transfer to: <strong>${email}</strong> &nbsp;·&nbsp; Amount: <strong>${amount}</strong> &nbsp;·&nbsp; Deadline: <strong>${deadline}</strong>`;
  }
}

/* ── Schedule ── */
function buildSchedule() {
  const grid = document.getElementById("scheduleGrid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.schedule.map(day => `
    <div class="schedule-day reveal">
      <div class="schedule-day__date">
        <div>
          <div class="schedule-day__day-label">${day.dayLabel}</div>
          <div class="schedule-day__date-num">${day.date}</div>
          <div class="schedule-day__month">${day.month}</div>
        </div>
      </div>
      <div class="schedule-day__body">
        <div class="schedule-day__course">${day.course}</div>
        <span class="schedule-day__tag">${day.tag}</span>
        <div class="schedule-day__events">
          ${day.events.map(e => `
            <div class="schedule-event">
              <span class="schedule-event__time">${e.time}</span>
              <span class="schedule-event__desc">${e.desc}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

/* ── Courses ── */
function buildCourses() {
  const grid = document.getElementById("coursesGrid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.courses.map(c => `
    <div class="course-card reveal">
      <div class="course-card__header">
        <span class="course-card__num">${c.num}</span>
        <span class="course-card__day-badge">${c.dayBadge}</span>
      </div>
      <div class="course-card__body">
        <div class="course-card__name">${c.name}</div>
        <div class="course-card__location">📍 ${c.location}</div>
        <div class="course-card__details">
          <div class="course-detail">
            <span class="course-detail__label">Par</span>
            <span class="course-detail__value">${c.par}</span>
          </div>
          <div class="course-detail">
            <span class="course-detail__label">Yards</span>
            <span class="course-detail__value">${c.yards}</span>
          </div>
          <div class="course-detail">
            <span class="course-detail__label">Format</span>
            <span class="course-detail__value">${c.format}</span>
          </div>
          <div class="course-detail">
            <span class="course-detail__label">Layout</span>
            <span class="course-detail__value">${c.holes}</span>
          </div>
        </div>
        <div class="course-card__notes">${c.notes}</div>
        <a href="${c.website}" target="_blank" rel="noopener" class="course-card__link">Course Website</a>
      </div>
    </div>
  `).join("");
}

/* ── Chalet ── */
function buildChalet() {
  const card  = document.getElementById("chaletCard");
  const rules = document.getElementById("chaletRules");
  if (!card || !rules) return;

  const c = SITE_DATA.chalet;

  card.innerHTML = `
    <div class="chalet__name">${c.name}</div>
    <div class="chalet__address">📍 ${c.address}</div>
    <div class="chalet__details">
      <div class="chalet__detail-row">
        <span class="chalet__detail-label">Sleeps</span>
        <span class="chalet__detail-value">${c.sleeps}</span>
      </div>
      <div class="chalet__detail-row">
        <span class="chalet__detail-label">Check-in</span>
        <span class="chalet__detail-value">${c.checkin}</span>
      </div>
      <div class="chalet__detail-row">
        <span class="chalet__detail-label">Check-out</span>
        <span class="chalet__detail-value">${c.checkout}</span>
      </div>
      <div class="chalet__detail-row">
        <span class="chalet__detail-label">Cost</span>
        <span class="chalet__detail-value">${c.cost}</span>
      </div>
      <div class="chalet__detail-row">
        <span class="chalet__detail-label">WiFi</span>
        <span class="chalet__detail-value">${c.wifi}</span>
      </div>
      <div class="chalet__detail-row">
        <span class="chalet__detail-label">Parking</span>
        <span class="chalet__detail-value">${c.parking}</span>
      </div>
      <div class="chalet__detail-row">
        <span class="chalet__detail-label">Contact</span>
        <span class="chalet__detail-value">${c.contact}</span>
      </div>
    </div>
  `;

  rules.innerHTML = `
    <div class="chalet__rules-title">House Rules</div>
    ${c.rules.map(r => `
      <div class="chalet__rule-item">
        <span class="chalet__rule-icon">${r.icon}</span>
        <span>${r.text}</span>
      </div>
    `).join("")}
  `;
}

/* ── Info Cards ── */
function buildInfo() {
  const grid = document.getElementById("infoGrid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.info.map(card => `
    <div class="info-card reveal">
      <div class="info-card__icon">${card.icon}</div>
      <div class="info-card__title">${card.title}</div>
      <div class="info-card__body">${card.body}</div>
    </div>
  `).join("");
}


/* ─────────────────────────────────────────
   NAV — scroll effect & mobile menu
───────────────────────────────────────── */
function initNav() {
  const nav       = document.getElementById("nav");
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");

  // Scrolled class for background
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile hamburger
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close menu on link click
  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}


/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
function initScrollReveal() {
  const revealEls = () => {
    document.querySelectorAll(".reveal").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealEls, { passive: true });
  revealEls(); // Run once on load for above-fold items
}


/* ─────────────────────────────────────────
   FISH LOGO — fallback SVG if image fails
   The logo references the Florida Marlins style
   with "Fish" team name. Replace img src with
   your actual logo file path in the HTML.
───────────────────────────────────────── */
function initFishLogo() {
  const logoImg = document.getElementById("fishLogo");
  if (!logoImg) return;

  // Set the actual logo source — update this path to your logo file
  // e.g., logoImg.src = "assets/fish-logo.png";
  // For now, we use the inline SVG fallback below on error
  logoImg.onerror = () => {
    logoImg.style.display = "none";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 40 40");
    svg.setAttribute("width", "38");
    svg.setAttribute("height", "38");
    svg.innerHTML = `
      <ellipse cx="20" cy="22" rx="14" ry="9" fill="none" stroke="#00b8a9" stroke-width="1.5" opacity="0.6"/>
      <path d="M6 22 Q12 14 24 18 Q32 20 36 22 Q32 26 24 26 Q12 30 6 22Z" fill="#00b8a9" opacity="0.4"/>
      <path d="M6 22 L1 17 L0 22 L1 27Z" fill="#f0b429" opacity="0.8"/>
      <path d="M36 22 L42 21 L36 23Z" fill="#f0b429" opacity="0.7"/>
      <circle cx="32" cy="21" r="2" fill="#f0b429"/>
      <circle cx="32" cy="21" r="1" fill="#0a0d0f"/>
    `;
    svg.style.filter = "drop-shadow(0 0 6px #00b8a9)";
    logoImg.parentNode.insertBefore(svg, logoImg);
  };

  // Trigger error if src is a placeholder
  if (logoImg.src.includes("placeholder") || !logoImg.src) {
    logoImg.dispatchEvent(new Event("error"));
  }
}
