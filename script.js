const data = [
  {
    id: "01",
    title: "Performance Marketing",
    sub: "Google Ads · Meta Ads · D2C growth",
    desc: "Running and optimizing paid ad campaigns for e-commerce and D2C brands. The job is arithmetic and iteration: cost per click, conversion rate, return on ad spend — proven with real (even small) budgets, not theory.",
    free: [
      { label: "Google Skillshop — free official Google Ads certification", url: "https://skillshop.withgoogle.com/" },
      { label: "Meta Blueprint — free Meta/Instagram Ads courses", url: "https://www.facebook.com/business/learn" },
      { label: "HubSpot Academy — free digital marketing fundamentals", url: "https://academy.hubspot.com/" }
    ],
    paid: [
      { label: "A performance marketing bootcamp with a live-ad-spend capstone (Scrimba Pro, Simplilearn, or similar)", url: "https://www.simplilearn.com/" },
      { label: "Mentorship from an active media buyer — often worth more than a course", url: "https://www.upwork.com/" }
    ],
    reps: [
      "Run a ₹500–1000 test campaign for a friend's small business or your own product",
      "Freelance micro-gigs on Upwork/Fiverr to build a case-study portfolio",
      "Intern at a D2C brand or performance marketing agency"
    ]
  },
  {
    id: "02",
    title: "Web / App Development",
    sub: "Portfolio over credentials",
    desc: "Building real, working software. Hiring here runs on a public portfolio and problems solved, not a computer science transcript — this track rewards engineers and complete beginners almost equally.",
    free: [
      { label: "freeCodeCamp — full free curriculum, project-based", url: "https://www.freecodecamp.org/" },
      { label: "The Odin Project — free full-stack path", url: "https://www.theodinproject.com/" },
      { label: "CS50 (Harvard, via YouTube/edX) — free, rigorous fundamentals", url: "https://cs50.harvard.edu/x/" }
    ],
    paid: [
      { label: "A cohort-based bootcamp (Scrimba Pro, 100xDevs, or similar) once you've shipped 2–3 free-tier projects", url: "https://scrimba.com/" }
    ],
    reps: [
      "Publish every project on GitHub with a README — this is your resume",
      "Contribute to one open-source repo, however small",
      "Take a freelance project on Upwork before your first full-time role"
    ]
  },
  {
    id: "03",
    title: "UI / UX Design",
    sub: "User empathy · navigation · feel",
    desc: "Designing how software feels to use. Almost entirely self-taught territory — the craft is judged by your case studies, not a design degree.",
    free: [
      { label: "Google UX Design (Coursera, audit for free) — structured, beginner-friendly", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { label: "Figma's own YouTube channel + Figma Community files — study real designs", url: "https://www.figma.com/community" },
      { label: "DesignCourse (YouTube) — practical UI walkthroughs", url: "https://www.youtube.com/user/DesignCourse" }
    ],
    paid: [
      { label: "Google UX Design Professional Certificate (paid tier for the certificate itself)", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { label: "A design bootcamp with mentor critique — feedback is the scarce resource here", url: "https://www.designlab.com/" }
    ],
    reps: [
      "Redesign an app you use daily and post the case study on Behance",
      "Take on one real client project, even unpaid, for a case study",
      "Internship at a startup design team — smaller teams give more ownership"
    ]
  },
  {
    id: "04",
    title: "Video Editing",
    sub: "Creator economy · agency work",
    desc: "Editing for YouTube, Instagram, and brand content. Skilled editors routinely out-earn degree holders through retainer work with creators and agencies.",
    free: [
      { label: "DaVinci Resolve (free software) + its official YouTube tutorials", url: "https://www.blackmagicdesign.com/products/davinciresolve/" },
      { label: "Premiere Pro basics via Adobe's own free YouTube channel", url: "https://www.youtube.com/user/adobepremierepro" },
      { label: "Peter McKinnon / Justin Odisho (YouTube) — practical editing style", url: "https://www.youtube.com/user/JustinOdisho" }
    ],
    paid: [
      { label: "A short paid course focused on a specific style (shorts/reels editing, long-form podcast editing) once basics are solid", url: "https://www.skillshare.com/" }
    ],
    reps: [
      "Re-edit a public creator's raw footage as a spec sample and share it",
      "Take small paid gigs on Fiverr to build a reel of client work",
      "Retainer work with 1–2 small creators — often more stable than one-off gigs"
    ]
  },
  {
    id: "05",
    title: "Sales (B2B/B2C) & Affiliate Marketing",
    sub: "Communication · networking · hustle",
    desc: "Generating revenue directly — closing deals or driving affiliate sales. Performance-based income means the ceiling is set by effort and skill, not a job title.",
    free: [
      { label: "HubSpot Academy — free sales fundamentals and CRM training", url: "https://academy.hubspot.com/" },
      { label: "Alex Hormozi (YouTube) — free, blunt sales and offer-building content", url: "https://www.youtube.com/@AlexHormozi" }
    ],
    paid: [
      { label: "A structured B2B SaaS sales training program — useful once you understand the basics and want a repeatable process", url: "https://www.saleshacker.com/" }
    ],
    reps: [
      "Take a commission-only sales role to prove ability fast — low risk for the hiring company, fast feedback for you",
      "Start with one affiliate product you genuinely use and build an audience around it",
      "Shadow a working salesperson for a week before pitching yourself for a role"
    ]
  },
  {
    id: "06",
    title: "Ethical Hacking",
    sub: "Bug bounties · security research",
    desc: "Finding and responsibly reporting security vulnerabilities. Bug bounty payouts and retainer security work can be lucrative — and it's one of the most credential-agnostic technical fields that exists.",
    free: [
      { label: "TryHackMe — free tier, structured, beginner-friendly labs", url: "https://tryhackme.com/" },
      { label: "PortSwigger Web Security Academy — completely free, industry-respected", url: "https://portswigger.net/web-security" },
      { label: "OWASP Top 10 (free documentation) — the standard vulnerability reference", url: "https://owasp.org/www-project-top-ten/" }
    ],
    paid: [
      { label: "TryHackMe/HackTheBox paid tiers for advanced labs", url: "https://tryhackme.com/pricing" },
      { label: "OSCP certification — expensive but respected once you're past fundamentals", url: "https://www.offensive-security.com/pwk-oscp/" }
    ],
    reps: [
      "Create a HackerOne or Bugcrowd account and start on beginner-friendly public programs",
      "Document every finding in a clean write-up — this becomes your portfolio",
      "Join a CTF (Capture The Flag) community for structured practice"
    ]
  }
];

const container = document.getElementById('modules');

if (container) {
  data.forEach((m) => {
    const el = document.createElement('div');
    el.className = 'module open';
    el.innerHTML = `
      <div class="module-head" onclick="this.parentElement.classList.toggle('open')">
        <div class="module-id">SKILL-${m.id}</div>
        <div class="module-title-wrap">
          <div class="module-title">${m.title}</div>
          <div class="module-sub">${m.sub}</div>
        </div>
        <div class="chevron">+</div>
      </div>
      <div class="module-body">
        <div class="module-body-inner">
          <div class="desc">${m.desc}</div>
              <div class="track-grid">
            <div class="track open">
              <button type="button" class="track-toggle" aria-expanded="true" onclick="this.closest('.track').classList.toggle('closed'); this.setAttribute('aria-expanded', this.closest('.track').classList.contains('closed') ? 'false' : 'true');">
                <span class="track-label">Free — start here</span>
                <span class="track-toggle-icon">▾</span>
              </button>
              <ul class="track-list">${m.free.map((f) => `<li><a href="${f.url}" target="_blank" rel="noopener noreferrer">${f.label}</a></li>`).join('')}</ul>
            </div>
            <div class="track open">
              <button type="button" class="track-toggle" aria-expanded="true" onclick="this.closest('.track').classList.toggle('closed'); this.setAttribute('aria-expanded', this.closest('.track').classList.contains('closed') ? 'false' : 'true');">
                <span class="track-label">Paid — worth it later</span>
                <span class="track-toggle-icon">▾</span>
              </button>
              <ul class="track-list">${m.paid.map((f) => `<li><a href="${f.url}" target="_blank" rel="noopener noreferrer">${f.label}</a></li>`).join('')}</ul>
            </div>
            <div class="track open">
              <button type="button" class="track-toggle" aria-expanded="true" onclick="this.closest('.track').classList.toggle('closed'); this.setAttribute('aria-expanded', this.closest('.track').classList.contains('closed') ? 'false' : 'true');">
                <span class="track-label">Get real reps</span>
                <span class="track-toggle-icon">▾</span>
              </button>
              <ul class="track-list">${m.reps.map((f) => `<li>${f}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}
