/**
 * main.js — renders PORTFOLIO_DATA into the page and wires up interaction.
 * No build step, no dependencies. Everything content-related comes from data.js;
 * this file only knows how to turn that data into DOM.
 */
(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const ICONS = {
    camera:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    spark:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>',
    compass:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="m15 9-2 6-6 2 2-6 6-2Z"/></svg>',
    book:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4 10 14M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/></svg>',
    code:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
    languages:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h9M8 3v2M6.5 5a8 8 0 0 0 6 7M11 5a10 10 0 0 1-6.5 9M13 20l4-9 4 9M14.5 17h5"/></svg>',
    cloud:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.3 8.02 4 4 0 0 1 17 16"/></svg>',
    chart:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M12 20V4M20 20v-6"/></svg>',
    tools:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3-3.3 3.3Z"/></svg>',
    ai:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="12" rx="2"/><path d="M12 7V3M9 3h6M9 12h.01M15 12h.01"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    pin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    heart:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-9.9-9.3C.6 7.8 2.2 4.5 5.4 3.7c2-.5 4 .3 5.1 2 .3.4.9.4 1.2 0 1.1-1.7 3.1-2.5 5.1-2 3.2.8 4.8 4.1 3.3 7.5-2.4 4.7-9.9 9.3-9.9 9.3Z"/></svg>',
    linkedin: ICONSFallback("linkedin"),
    chevron:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    quote:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 6.5C6.5 8 4.8 10.4 4.8 13.2c0 2.3 1.6 3.9 3.6 3.9 1.8 0 3.2-1.3 3.2-3.1 0-1.6-1.1-2.8-2.6-3-0.1-1.3 1-2.8 2.9-3.7L9.5 6.5Zm8.6 0c-3 1.5-4.7 3.9-4.7 6.7 0 2.3 1.6 3.9 3.6 3.9 1.8 0 3.2-1.3 3.2-3.1 0-1.6-1.1-2.8-2.6-3-0.1-1.3 1-2.8 2.9-3.7L18.1 6.5Z"/></svg>',
    star:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.7 5.8 6.3.7-4.7 4.4 1.2 6.3L12 17.1l-5.5 3.1 1.2-6.3-4.7-4.4 6.3-.7L12 3Z"/></svg>',
    bolt:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></svg>',
    target:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
    bulb:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M8 14a5.5 5.5 0 1 1 8 0c-.7.7-1.4 1.7-1.5 2.5H9.5C9.4 15.7 8.7 14.7 8 14Z"/></svg>',
    cap:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 4 9 5-9 5-9-5 9-5Z"/><path d="M6.5 11v5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5"/></svg>'
  };
  function ICONSFallback() {
    return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>';
  }

  const SKILL_GROUP_ICON = {
    "languages-frameworks": "code",
    "cloud-devops": "cloud",
    "monitoring-analytics": "chart",
    tools: "tools",
    "ai-tools": "ai"
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------------- Render: Hero / About ---------------- */
  function renderProfile() {
    const p = PORTFOLIO_DATA.profile;
    $("#heroName").textContent = p.name;
    $("#heroTitle").textContent = p.title;
    const stackEl = $("#heroStack");
    if (stackEl) {
      stackEl.innerHTML = p.tagLine
        .split("·")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => `<span class="hero__stack-chip">${escapeHtml(s)}</span>`)
        .join("");
    }
    $("#heroPitch").textContent = p.pitch;
    $("#aboutSummary").textContent = p.summary;
    $("#footerName").textContent = `© ${new Date().getFullYear()} ${p.name}`;
    document.title = `${p.name} — ${p.title}`;

    const li = $("#linkedinLinkSide");
    if (li) li.href = p.linkedin;

    const facts = [
      { num: "15+", label: "Engineers & QA led" },
      { num: "Agile / Scrum", label: "Delivery methodology" },
      { num: PORTFOLIO_DATA.skillGroups.reduce((a, g) => a + g.skills.length, 0) + "", label: "Core skills tracked" },
      { num: PORTFOLIO_DATA.languages.length + "", label: "Languages spoken" }
    ];
    $("#aboutFacts").innerHTML = facts
      .map((f) => {
        const isLong = f.num.length > 4;
        return `<div class="about__fact"><div class="num${isLong ? " num--text" : ""}">${escapeHtml(f.num)}</div><div class="label">${escapeHtml(f.label)}</div></div>`;
      })
      .join("");
  }

  /* ---------------- Render: Experience timeline ---------------- */
  function renderExperience() {
    const el = $("#timeline");
    el.innerHTML = PORTFOLIO_DATA.experience
      .map((job, idx) => {
        const visiblePoints = job.points.slice(0, 4);
        const extraPoints = job.points.slice(4);
        const hasMore = extraPoints.length > 0;
        return `
        <article class="timeline-item reveal ${job.current ? "timeline-item--current" : ""}" data-job="${job.id}">
          <span class="timeline-item__dot" aria-hidden="true"></span>
          <div class="timeline-item__card">
            <div class="timeline-item__header">
              <h3 class="timeline-item__role">${escapeHtml(job.role)}</h3>
              <span class="timeline-item__period">${escapeHtml(job.period)}</span>
            </div>
            <p class="timeline-item__company">${escapeHtml(job.company)}${job.client ? ` <span class="client">— ${escapeHtml(job.client)}</span>` : ""}</p>
            <p class="timeline-item__location">${escapeHtml(job.location)}</p>
            <ul class="timeline-item__points">
              ${visiblePoints.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}
              ${hasMore ? `<span class="timeline-item__points-extra">${extraPoints.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}</span>` : ""}
            </ul>
            ${
              hasMore
                ? `<button class="timeline-item__toggle" type="button" aria-expanded="false">
                    <span class="toggle-label">Show ${extraPoints.length} more</span>
                    ${ICONS.chevron}
                  </button>`
                : ""
            }
          </div>
        </article>`;
      })
      .join("");

    $$(".timeline-item__toggle", el).forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".timeline-item");
        const expanded = item.classList.toggle("timeline-item--expanded");
        btn.setAttribute("aria-expanded", String(expanded));
        const label = btn.querySelector(".toggle-label");
        const extraCount = $$(".timeline-item__points-extra li", item).length;
        label.textContent = expanded ? "Show less" : `Show ${extraCount} more`;
      });
    });
  }

  /* ---------------- Render: Professional skills ---------------- */
  function renderSkills() {
    const el = $("#skillsGroups");
    el.innerHTML = PORTFOLIO_DATA.skillGroups
      .map((group) => {
        const icon = ICONS[SKILL_GROUP_ICON[group.id]] || ICONS.tools;
        const isChips = group.layout === "chips";
        return `
        <div class="skill-group reveal${isChips ? " skill-group--chips" : ""}">
          <h3 class="skill-group__title"><span class="icon" aria-hidden="true">${icon}</span>${escapeHtml(group.label)}</h3>
          <div class="skill-list">
            ${
              isChips
                ? `<div class="skill-chips">${group.skills.map((s) => `<span class="skill-chip">${escapeHtml(s.name)}</span>`).join("")}</div>`
                : group.skills
                    .map(
                      (s) => `
              <div class="skill-row">
                <div class="skill-row__top">
                  <span class="skill-row__name">${escapeHtml(s.name)}</span>
                  <span class="skill-row__level">${escapeHtml(s.levelLabel)}</span>
                </div>
                <div class="skill-row__bar"><div class="skill-row__bar-fill" data-level="${s.level}"></div></div>
              </div>`
                    )
                    .join("")
            }
          </div>
        </div>`;
      })
      .join("");
  }

  /* ---------------- Render: Personal skills ---------------- */
  function renderPersonalSkills() {
    const el = $("#personalGrid");
    el.innerHTML = PORTFOLIO_DATA.personalSkills
      .map(
        (item) => `
      <div class="personal-card reveal">
        <span class="icon" aria-hidden="true">${ICONS[item.icon] || ICONS.spark}</span>
        <h3 class="personal-card__title">${escapeHtml(item.title)}</h3>
        <p class="personal-card__desc">${escapeHtml(item.description)}</p>
      </div>`
      )
      .join("");
  }

  /* ---------------- Render: Awards ---------------- */
  function renderAwards() {
    const el = $("#awardsGrid");
    const list = PORTFOLIO_DATA.awards || [];
    el.innerHTML = list
      .map(
        (a) => `
      <div class="award-card reveal">
        <span class="icon" aria-hidden="true">${ICONS[a.icon] || ICONS.star}</span>
        <span class="award-card__count">${a.count}</span>
        <span class="award-card__name">${escapeHtml(a.name)}</span>
      </div>`
      )
      .join("");
  }

  /* ---------------- Render: Education ---------------- */
  function renderEducation() {
    const el = $("#educationGrid");
    const list = PORTFOLIO_DATA.education || [];
    el.innerHTML = list
      .map(
        (e) => `
      <div class="education-card reveal">
        <span class="icon" aria-hidden="true">${ICONS.cap}</span>
        <div class="education-card__body">
          <h3 class="education-card__degree">${escapeHtml(e.degree)}</h3>
          <p class="education-card__institution">${escapeHtml(e.institution)}</p>
          <p class="education-card__meta">${escapeHtml(e.location)} · ${escapeHtml(e.period)}</p>
        </div>
      </div>`
      )
      .join("");
  }

  /* ---------------- Render: Projects ---------------- */
  function renderProjects() {
    const el = $("#projectGrid");
    el.innerHTML = PORTFOLIO_DATA.projects
      .map((proj) => {
        const links = [];
        if (proj.links && proj.links.live) {
          links.push(`<a href="${escapeHtml(proj.links.live)}" target="_blank" rel="noopener">${ICONS.external} Live</a>`);
        }
        if (proj.links && proj.links.repo) {
          links.push(`<a href="${escapeHtml(proj.links.repo)}" target="_blank" rel="noopener">${ICONS.code} Code</a>`);
        }
        // Fold the tagline into the visible summary when the card no longer
        // shows it in the media block — keeps the info even if a future
        // project entry supplies a tagline but no separate mention of it.
        const summaryHasTagline = proj.tagline && proj.summary.toLowerCase().includes(proj.tagline.toLowerCase().split(" ")[0]);
        const displaySummary = proj.tagline && !summaryHasTagline ? `${proj.tagline} — ${proj.summary}` : proj.summary;

        return `
        <article class="project-card reveal">
          <div class="project-card__media">
            <img src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.title)} illustration" loading="lazy" width="480" height="270"
              onerror="this.closest('.project-card__media').style.background='linear-gradient(135deg,#16213c,#223256)'; this.remove();">
            <span class="project-card__year">${escapeHtml(proj.year)}</span>
          </div>
          <div class="project-card__body">
            <span class="project-card__role">${escapeHtml(proj.role)}</span>
            <h3 class="project-card__title">${escapeHtml(proj.title)}</h3>
            <p class="project-card__summary">${escapeHtml(displaySummary)}</p>
            <div class="project-card__tags">
              ${proj.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
            </div>
            ${links.length ? `<div class="project-card__links">${links.join("")}</div>` : ""}
          </div>
        </article>`;
      })
      .join("");
  }

  /* ---------------- Render: Recommendations ---------------- */
  function initials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  function renderRecommendations() {
    const el = $("#recommendationGrid");
    const list = PORTFOLIO_DATA.recommendations || [];
    el.innerHTML = list
      .map(
        (r, i) => `
      <figure class="rec-card reveal" style="--rec-tilt:${i % 2 === 0 ? "-1.2deg" : "1.2deg"}">
        <span class="rec-card__quote-mark" aria-hidden="true">${ICONS.quote}</span>
        <blockquote class="rec-card__quote">${escapeHtml(r.quote)}</blockquote>
        <figcaption class="rec-card__author">
          <span class="rec-card__avatar" aria-hidden="true">${escapeHtml(initials(r.name))}</span>
          <span class="rec-card__meta">
            <span class="rec-card__name">${escapeHtml(r.name)}</span>
            <span class="rec-card__title">${escapeHtml(r.title)}</span>
            <span class="rec-card__relationship">${escapeHtml(r.relationship)}</span>
          </span>
          <span class="rec-card__linkedin" aria-hidden="true">${ICONS.linkedin}</span>
        </figcaption>
      </figure>`
      )
      .join("");
  }

  /* ---------------- Render: Contact ---------------- */
  function renderContact() {
    const p = PORTFOLIO_DATA.profile;
    const cards = [
      { icon: "mail", label: "Email", value: p.email, href: `mailto:${p.email}` },
      { icon: "phone", label: "Phone", value: p.phone, href: `tel:${p.phone.replace(/\s+/g, "")}` },
      { icon: "pin", label: "Location", value: p.location, href: null },
      { icon: "linkedin", label: "LinkedIn", value: "Connect", href: p.linkedin }
    ];
    $("#contactGrid").innerHTML = cards
      .map((c) => {
        const inner = `
          <span class="icon" aria-hidden="true">${ICONS[c.icon]}</span>
          <span>
            <span class="contact-card__label">${escapeHtml(c.label)}</span>
            <span class="contact-card__value">${escapeHtml(c.value)}</span>
          </span>`;
        return c.href
          ? `<a class="contact-card reveal" href="${escapeHtml(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${inner}</a>`
          : `<div class="contact-card reveal">${inner}</div>`;
      })
      .join("");
  }

  /* ---------------- Interaction: mobile nav ---------------- */
  function setupMobileNav() {
    const btn = $("#hamburgerBtn");
    const drawer = $("#mobileNav");
    if (!btn || !drawer) return;

    function closeNav() {
      document.body.classList.remove("nav-open");
      btn.setAttribute("aria-expanded", "false");
    }
    function openNav() {
      document.body.classList.add("nav-open");
      btn.setAttribute("aria-expanded", "true");
    }

    btn.addEventListener("click", () => {
      document.body.classList.contains("nav-open") ? closeNav() : openNav();
    });

    $$("#mobileNavList a").forEach((link) => link.addEventListener("click", closeNav));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) closeNav();
    });
  }

  /* ---------------- Interaction: active nav link on scroll ---------------- */
  function setupActiveNav() {
    const navLinks = $$("[data-nav-link]");
    const sections = navLinks
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = "#" + entry.target.id;
          navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === id));
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------- Interaction: scroll reveal ---------------- */
  function setupReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal"));
            const delay = Math.min(siblings.indexOf(el), 6) * 60;
            setTimeout(() => el.classList.add("is-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ---------------- Interaction: skill bar fill on view ---------------- */
  function setupSkillBars() {
    const bars = $$(".skill-row__bar-fill");
    if (!bars.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const level = Number(el.dataset.level) || 0;
            el.style.width = `${(level / 5) * 100}%`;
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((b) => observer.observe(b));
  }

  /* ---------------- Interaction: back to top ---------------- */
  function setupBackToTop() {
    const btn = $("#backToTop");
    if (!btn) return;
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          btn.classList.toggle("visible", window.scrollY > 600);
          ticking = false;
        });
      },
      { passive: true }
    );
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------- Init ---------------- */
  function init() {
    renderProfile();
    renderExperience();
    renderEducation();
    renderSkills();
    renderPersonalSkills();
    renderAwards();
    renderProjects();
    renderRecommendations();
    renderContact();

    setupMobileNav();
    setupActiveNav();
    setupReveal();
    setupSkillBars();
    setupBackToTop();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
