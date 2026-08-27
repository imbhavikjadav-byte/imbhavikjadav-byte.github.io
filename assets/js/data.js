/**
 * PORTFOLIO_DATA — single source of truth for all content on the page.
 *
 * To add a new project: push a new object into `projects`.
 * To add a new skill: push a new object into the relevant group's `skills` array.
 * No other file needs to change — components in main.js render whatever is here.
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "Bhavik Jadav",
    title: "Tech Lead / Team Lead",
    tagLine: ".NET · Cloud · Fintech · AI",
    pitch:
      "I lead engineering teams that turn complex financial journeys into fast, reliable products — 10+ years building for banking, wealth and healthcare.",
    location: "Norwich, United Kingdom",
    email: "imbhavikjadav@gmail.com",
    phone: "+44 7721 950934",
    linkedin: "https://www.linkedin.com/in/bhavik-jadav/",
    resumeUrl: "Bhavik-Jadav-CV.pdf",
    summary:
      "Tech Lead delivering enterprise-grade, mission-critical software across financial services and healthcare. Proven track record of leading multi-disciplinary squads, building complex digital journeys from scratch, and improving user experience and conversion at scale. Currently with Tata Consultancy Services, working onsite in the UK with one of the country's largest insurance, wealth and retirement companies, driving customer journeys end to end. Strong expertise in modern .NET, cloud-native architecture (AWS), and data-driven optimisation using observability and analytics tools. AI is now core to how I design, build and ship — from daily tooling to production integrations."
  },

  experience: [
    {
      id: "tcs-insurer",
      role: "Tech Lead / Team Lead",
      company: "Tata Consultancy Services",
      client: "Client: a leading UK insurance, wealth & retirement provider",
      period: "Jun 2022 – Present",
      location: "Norwich, United Kingdom",
      current: true,
      points: [
        "Led delivery of customer-facing digital journeys used by hundreds of thousands of UK customers",
        "Managed a cross-functional Agile team ensuring high-quality, scalable releases",
        "Rebuilt core navigation architecture for complex journeys",
        "Significantly reduced user drop-off and error rates through targeted UX and performance improvements",
        "Designed and implemented a real-time Splunk dashboard enabling monitoring of failures and business metrics",
        "Identified user friction points and improved journey performance",
        "Identified and resolved critical production issues, improving conversion rates and platform stability",
        "Led fortnightly production releases, ensuring smooth and reliable feature delivery",
        "Collaborated with Product Owners, Proposition Managers, Architects, and Business Analysts to define and deliver customer-centric solutions",
        "Conducted solution workshops to continuously enhance digital customer journeys"
      ]
    },
    {
      id: "allscripts",
      role: "Senior Software Engineer / Tech Lead",
      company: "Allscripts India LLP",
      client: "",
      period: "Oct 2018 – Jun 2022",
      location: "Vadodara, India",
      current: false,
      points: [
        "Led a team of 8 engineers delivering enhancements to enterprise healthcare systems",
        "Integrated eCRNow (Java-based reporting system) with EHR using FHIR APIs for COVID/lab reporting",
        "Developed features for Paragon EHR, focusing on interoperability (FHIR) and clinical data systems",
        "Conducted code reviews, mentoring, and process improvements",
        "Worked closely with product and support teams to resolve production issues",
        "Built and maintained systems for auditing, upgrades, and healthcare data processing",
        "Worked in distributed teams (US + India) delivering production-grade solutions",
        "Managed deployments and monitored systems using Azure services"
      ]
    },
    {
      id: "matrix-comsec",
      role: "Software Engineer",
      company: "Matrix Comsec Pvt. Ltd.",
      client: "",
      period: "Jul 2016 – Oct 2018",
      location: "Vadodara, India",
      current: false,
      points: [
        "Migrated legacy systems to cloud-based architecture (ASP.NET MVC + Web API)",
        "Developed enterprise solutions for access control, attendance, and workforce management",
        "Ensured backward compatibility and resolved client-side issues"
      ]
    },
    {
      id: "sarthav",
      role: "Trainee Engineer",
      company: "Sarthav Infrastructure Pvt. Ltd.",
      client: "",
      period: "Dec 2015 – Jun 2016",
      location: "Ahmedabad, India",
      current: false,
      points: [
        "Developed website, mobile app, and internal tools including a leave management system",
        "Worked across frontend and backend technologies in real-world projects"
      ]
    }
  ],

  skillGroups: [
    {
      id: "languages-frameworks",
      label: "Languages & Frameworks",
      skills: [
        { name: "C#", level: 5, levelLabel: "Expert" },
        { name: ".NET", level: 5, levelLabel: "Expert" },
        { name: "ASP.NET MVC", level: 5, levelLabel: "Expert" },
        { name: "Web API", level: 5, levelLabel: "Expert" },
        { name: "Entity Framework", level: 5, levelLabel: "Expert" }
      ]
    },
    {
      id: "cloud-devops",
      label: "Cloud & DevOps",
      skills: [
        { name: "AWS (EKS)", level: 4, levelLabel: "Advanced" },
        { name: "Azure DevOps", level: 4, levelLabel: "Advanced" },
        { name: "CI/CD Pipelines", level: 4, levelLabel: "Advanced" }
      ]
    },
    {
      id: "monitoring-analytics",
      label: "Monitoring & Analytics",
      skills: [
        { name: "Splunk", level: 4, levelLabel: "Advanced" },
        { name: "SEQ", level: 4, levelLabel: "Advanced" },
        { name: "Adobe Analytics", level: 4, levelLabel: "Advanced" },
        { name: "Decibel", level: 4, levelLabel: "Advanced" }
      ]
    },
    {
      id: "tools",
      label: "Tools",
      skills: [
        { name: "Jira", level: 5, levelLabel: "Expert" },
        { name: "GitHub", level: 5, levelLabel: "Expert" },
        { name: "Postman", level: 5, levelLabel: "Expert" }
      ]
    },
    {
      id: "ai-tools",
      label: "AI Tools",
      layout: "chips",
      skills: [
        { name: "Agentic AI & Workflows" },
        { name: "Prompt Engineering" },
        { name: "Claude" },
        { name: "GitHub Copilot" },
        { name: "ChatGPT" },
        { name: "Gemini" },
        { name: "Microsoft Copilot" },
        { name: "Cursor" },
        { name: "MCP (Model Context Protocol)" },
        { name: "RAG" }
      ]
    }
  ],

  personalSkills: [
    {
      id: "ai-exploration",
      title: "AI Power User",
      description: "An early adopter of new AI tools and models, applying them across production integrations and everyday engineering practice.",
      icon: "spark"
    },
    {
      id: "learning",
      title: "Continuous Learning",
      description: "Ongoing technical experimentation — always building something on the side.",
      icon: "book"
    },
    {
      id: "photography",
      title: "Photography & Videography",
      description: "Capturing places and moments — a creative counterbalance to shipping code.",
      icon: "camera"
    },
    {
      id: "family",
      title: "Family Time",
      description: "Spending time with my wife and our 9-month-old son — the best reset button there is.",
      icon: "heart"
    }
  ],

  /**
   * Projects — card grid. Add new entries here; no code changes required.
   * links.live / links.repo are optional — omit a key to hide that button.
   */
  projects: [
    {
      id: "freightnexus",
      title: "FreightNexus",
      tagline: "Truck tendering marketplace",
      year: "2026",
      summary:
        "A mobile-first, pan-India truck tendering marketplace connecting shippers with verified truck drivers and fleet owners.",
      description:
        "A greenfield marketplace where business owners post shipment requirements and KYC-verified drivers bid on them with itemized pricing, rather than a fixed-dispatch model. Covers end-to-end trip lifecycle management, live tracking, manual peer-to-peer payment confirmation, KYC document review, disputes, ratings and a full admin portal — built with Next.js, Supabase (Postgres/Auth/Storage), and Google Maps Platform.",
      tags: ["Next.js", "Supabase", "TypeScript", "Marketplace", "Google Maps"],
      role: "Independent Developer",
      links: {},
      image: "assets/img/project-freightnexus.svg",
      featured: true
    },
    {
      id: "legalclear",
      title: "LegalClear",
      tagline: "Plain-English legal summaries",
      year: "2026",
      summary:
        "A secure web app that turns dense legal documents into clear, plain-English summaries with risk indicators.",
      description:
        "Upload a contract or legal document and get back a labeled, plain-English breakdown with HIGH/MEDIUM/NOTE risk indicators, a downloadable formatted PDF report, and optional email delivery. React + Tailwind frontend, FastAPI backend, and Anthropic Claude for document analysis.",
      tags: ["React", "FastAPI", "Claude API", "Document AI", "Tailwind"],
      role: "Independent Developer",
      links: {},
      image: "assets/img/project-legalclear.svg",
      featured: true
    },
    {
      id: "digital-wealth-journeys",
      title: "Digital Wealth Journeys",
      tagline: "Insurance · Wealth · Retirement",
      year: "2022 – Present",
      summary:
        "Customer-facing digital journeys for one of the UK's largest insurance, wealth and retirement companies.",
      description:
        "Led a cross-functional Agile team rebuilding the core navigation architecture for a major UK wealth platform. Significantly cut user drop-off and error rates and built a real-time Splunk dashboard for live monitoring of failures and business metrics.",
      tags: [".NET", "AWS", "Splunk", "Fintech", "Team Leadership"],
      role: "Tech Lead",
      links: {},
      image: "assets/img/project-wealth-journeys.svg",
      featured: false
    },
    {
      id: "ecrnow-fhir-integration",
      title: "eCRNow ↔ EHR FHIR Integration",
      tagline: "eCRNow ↔ Paragon EHR",
      year: "2018 – 2022",
      summary:
        "Integrated a Java-based public health reporting system with Allscripts EHR using FHIR APIs for COVID/lab reporting.",
      description:
        "Delivered interoperability between eCRNow and Paragon EHR using HL7 FHIR APIs, enabling automated COVID and lab reporting for healthcare providers during a period of high regulatory demand. Worked across distributed US + India teams.",
      tags: ["FHIR", "Healthcare", "Java", "Interoperability", "Azure"],
      role: "Senior Software Engineer / Tech Lead",
      links: {},
      image: "assets/img/project-ecrnow.svg",
      featured: false
    },
    {
      id: "legacy-cloud-migration",
      title: "Legacy → Cloud Migration",
      tagline: "ASP.NET MVC + Web API",
      year: "2016 – 2018",
      summary:
        "Migrated legacy enterprise systems to a cloud-based ASP.NET MVC + Web API architecture.",
      description:
        "Rebuilt access control, attendance, and workforce management systems on a modern ASP.NET MVC and Web API stack, ensuring backward compatibility for existing enterprise clients while resolving long-standing client-side issues.",
      tags: ["ASP.NET MVC", "Web API", "Cloud Migration", "Enterprise"],
      role: "Software Engineer",
      links: {},
      image: "assets/img/project-migration.svg",
      featured: false
    }
  ],

  courses: [
    { title: "Programming in C# – Exam 483", issuer: "Microsoft", date: "May 2018" },
    { title: "Developing ASP.NET MVC Applications – Exam 486", issuer: "Microsoft", date: "Jun 2018" }
  ],

  /**
   * Recommendations — pulled from LinkedIn (Received). Add new entries here;
   * no code changes required. `relationship` is how they know Bhavik professionally.
   */
  recommendations: [
    {
      id: "jason-riley",
      name: "Jason J Riley",
      title: "CSM, SSM, SASM, RTE",
      relationship: "Was senior to Bhavik but didn't manage him directly",
      quote:
        "I had the pleasure of working with Bhavik several years ago, and he stood out as someone who was professional, eager to learn, and genuinely committed to doing good work. He asked thoughtful questions, sought clarity when needed, and was always open to feedback. Those qualities made him easy to work with and helped him contribute effectively to the team."
    },
    {
      id: "thaedra-gramman",
      name: "Thaedra A Gramman",
      title: "Experienced Healthcare Product Owner",
      relationship: "Worked with Bhavik on the same team",
      quote:
        "I have known Bhavik Jadav for 3+ years now and have had nothing but good things to say about him. My experiences with him have always left me feeling more knowledgeable for having interacted with him. Bhavik has a gentle patient manner about him and can explain complex issues for his not so technical colleagues. He is bright, very hard working and does a great job overall."
    },
    {
      id: "yagnesh-patel",
      name: "Yagnesh Patel",
      title: "Director Development at Altera Digital Health",
      relationship: "Managed Bhavik directly",
      quote:
        "Bhavik is a great team member to have. He is passionate, well-spoken and a person with great patience. Bhavik uses his smartness and technical abilities to help anyone, at anytime. He has a great presentation skills. I like his attitude of learning from anyone and anywhere, that makes him different than others."
    },
    {
      id: "surendrababu-kakani",
      name: "Surendrababu Kakani",
      title: ".NET Technical Lead",
      relationship: "Managed Bhavik directly",
      quote:
        "Bhavik is an exceptional professional who truly takes ownership of his work and consistently delivers with high quality. He is highly committed, dependable, and always ensures things are driven to completion effectively. One of his biggest strengths is stakeholder engagement — he collaborates seamlessly across teams, communicates proactively, and builds strong working relationships."
    },
    {
      id: "poojita-mishra",
      name: "Poojita Mishra",
      title: "Certified ISTQB CTFL QA Engineer & QA Lead",
      relationship: "Worked with Bhavik on the same team",
      quote:
        "I've had the pleasure of working closely with Bhavik on the Wealth Web project, where he serves as our Development Lead. He consistently demonstrates strong technical expertise, especially in designing scalable and reliable solutions, and has been instrumental in driving the team toward successful deliveries."
    },
    {
      id: "vishwanath-more",
      name: "Vishwanath More",
      title: "Lead Consultant · FHIR Data SME",
      relationship: "Worked with Bhavik on the same team",
      quote:
        "I had the absolute pleasure of working alongside Bhavik at Allscripts, and I can say without hesitation that he is one of the most talented and brilliant developers I have ever had the privilege of collaborating with. What truly sets Bhavik apart is his exceptional ability to dissect and solve complex problems with a clarity and elegance that is rare in this field."
    },
    {
      id: "soumita-banerjee",
      name: "Soumita Banerjee",
      title: "Associate Manager · ASP.NET Core, Azure DevOps",
      relationship: "Worked with Bhavik on the same team",
      quote:
        "I had the pleasure of working with Bhavik, and I can confidently say he is an exceptional developer. He consistently brings strong technical expertise, a problem-solving mindset, and a calm, collaborative approach to every project. He has a great ability to break down complex problems into practical solutions."
    },
    {
      id: "nachiketan-thakkar",
      name: "Nachiketan Thakkar",
      title: "SAFe® SPC · Agile Coach",
      relationship: "Worked with Bhavik at Allscripts",
      quote:
        "I had the pleasure of working with Bhavik at Allscripts for over two years where I served as his Scrum Master and he as a developer. Despite being early in his career, he consistently demonstrated enthusiasm, energy, and an impressive ability to learn quickly. His problem-solving skills stood out, often helping the team navigate complex challenges with ease."
    },
    {
      id: "karn-panchal",
      name: "Karn Panchal",
      title: "Principal Software Engineer at Altera Digital Health",
      relationship: "Was senior to Bhavik but didn't manage him directly",
      quote:
        "I had the pleasure of working with Bhavik for around three years, and during that time he consistently demonstrated exceptional dedication and technical strength. Bhavik has a natural curiosity that drives him to go deep into every problem he tackles. He doesn't just aim to complete tasks — he strives to perfect them, no matter how small or personal they may seem. This attention to detail significantly improves the quality of his work and the team's overall output."
    }
  ],

  /**
   * Awards — recognition received across roles, grouped by award type.
   * `count` is the number of times that award has been received.
   */
  awards: [
    { id: "on-the-spot", name: "On The Spot Award", count: 6, icon: "bolt" },
    { id: "star-of-the-month", name: "Star of the Month Award", count: 2, icon: "star" },
    { id: "contextual-master", name: "Contextual Master Award", count: 1, icon: "target" },
    { id: "innovation-pride", name: "Innovation Pride Award", count: 1, icon: "bulb" }
  ],

  languages: [
    { name: "English", level: 100, levelLabel: "C2 – Proficiency" },
    { name: "Gujarati", level: 100, levelLabel: "Native" },
    { name: "Hindi", level: 70, levelLabel: "B2 – Upper Intermediate" }
  ]
};
