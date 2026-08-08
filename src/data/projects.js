// Each project maps to a case study page at /projects/:slug
// Fields left empty or marked [ADD ...] are intentional placeholders —
// fill them in rather than letting Claude invent results, metrics, or screenshots.

export const projects = [
  {
    slug: "daqbin-embedded-dashboard",
    title: "DAQBIN Embedded Devices Dashboard",
    company: "TD4PAI Hardtech Hub",
    category: "Full-Stack / Cloud",
    featured: true,
    image: "/src/assets/images/projects/daqbin-embedded/cover.png",
    gallery: [], // [ADD SCREENSHOTS] e.g. "/src/assets/images/projects/daqbin-embedded-dashboard/gallery/1.png"
    shortDescription:
      "Real-time dashboards visualizing live embedded device status, backed by production infrastructure built end-to-end.",
    myRole:
      "Full-Stack Engineer — frontend dashboards, backend services, and infrastructure",
    liveUrls: [
      { label: "Enugu Instance", url: "https://enugu.daqbin.ng" },
      { label: "Lagos Instance", url: "https://lagos.daqbin.ng" },
    ],
    githubUrl: null,
    technologies: [
      "React",
      "Node.js",
      "Docker",
      "Docker Compose",
      "Nginx",
      "AWS",
      "GitHub Actions",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
    architecture: [
      "React Dashboard (Frontend)",
      "Node.js API",
      "MySQL / MongoDB / PostgreSQL / Redis",
      "Docker + Docker Compose",
      "Nginx Reverse Proxy",
      "AWS Production Infrastructure",
    ],
    overview:
      "A real-time dashboard system that visualizes live status data from embedded devices deployed across two locations, built and operated end-to-end — from frontend UI to the servers it runs on.",
    problem:
      "[ADD PROBLEM DESCRIPTION] — e.g. what teams needed visibility into device state and didn't have before this dashboard existed.",
    solution:
      "[ADD SOLUTION DESCRIPTION] — e.g. how the dashboard surfaces live device data and what makes it reliable in production.",
    keyFeatures: [
      "Live visualization of embedded/IoT device status across multiple deployment sites",
      "Full production infrastructure: Dockerized services behind an Nginx reverse proxy on AWS",
      "GitHub-to-server deployment workflow with CI/CD via GitHub Actions",
      "Multi-database backend spanning MySQL, MongoDB, PostgreSQL, and Redis",
    ],
    challenges: [
      {
        challenge:
          "Serving live device data reliably to a frontend dashboard without overloading backend services.",
        approach: "[ADD APPROACH]",
        solution: "[ADD SOLUTION]",
      },
      {
        challenge:
          "Deploying and networking multiple containerized services on a single production server.",
        approach:
          "Used Docker Compose to define and network services, with Nginx as a reverse proxy routing traffic to the correct container.",
        solution:
          "Connected the production server directly to GitHub so new commits could be deployed straight into Docker containers as part of the release workflow, automated via GitHub Actions.",
      },
    ],
    results: null, // do not invent metrics — add real ones if/when available
  },
  {
    slug: "cbt-platform",
    title: "Computer-Based Testing Platform",
    company: "AS Code Elevate Solution",
    category: "Full-Stack / SaaS",
    featured: true,
    image: "/src/assets/images/projects/cbt-platform/cover.png", // [ADD PROJECT SCREENSHOT]
    gallery: [],
    shortDescription:
      "A multi-tenant CBT platform serving real schools, with a rich exam editor supporting math, chemistry, and images.",
    myRole:
      "Full-Stack Developer — exam authoring, rich-text editor extensions, backend, deployment",
    liveUrls: [
      { label: "cbt.ascodeelevate.com", url: "https://cbt.ascodeelevate.com" },
    ],
    githubUrl: null,
    technologies: [
      "React",
      "Tiptap",
      "KaTeX / mhchem",
      "MathLive",
      "Express",
      "Prisma",
      "MongoDB",
      "Socket.io",
      "Cloudinary",
      "Vercel",
    ],
    architecture: [
      "React + Tiptap (Frontend)",
      "Express REST API",
      "Prisma ORM",
      "MongoDB",
      "Cloudinary (media)",
      "Vercel (deployment)",
    ],
    overview:
      "A production computer-based testing platform used by multiple schools from a single multi-tenant codebase, covering exam delivery, result processing, and accounting/fees management.",
    problem:
      "Schools needed a way for staff to author exam questions with real mathematical and chemical notation and embedded images — not just plain text — while keeping media handling efficient and reliable at scale.",
    solution:
      "Built a manual exam question upload feature on top of Tiptap, extended with custom MathLive and KaTeX/mhchem support for equations and chemical notation, plus a resizable image extension.",
    keyFeatures: [
      "Rich exam question editor with custom MathLive and KaTeX/mhchem Tiptap extensions",
      "Resizable image support inside the question editor",
      "Deferred image upload pattern — images held in memory (a pendingImagesRef map) and only uploaded to Cloudinary on submit",
      "Backend cleanup that removes Cloudinary assets automatically when a question or exam is deleted",
      "Multi-tenant architecture serving multiple schools from one codebase",
      "Companion accounting and fees management module alongside the exam module",
    ],
    challenges: [
      {
        challenge:
          "Supporting rich content (math, chemistry, images) in exam questions without a clunky or fragile editing experience.",
        approach:
          "Extended Tiptap with custom nodes for MathLive equation input and KaTeX/mhchem rendering, alongside a purpose-built resizable image extension.",
        solution:
          "Authors can insert and resize equations, chemical notation, and images inline while writing questions, with output rendered consistently for students at exam time.",
      },
      {
        challenge:
          "Avoiding orphaned image uploads when an author adds images while drafting a question but doesn't finish submitting.",
        approach:
          "Held pending images in a pendingImagesRef Map on the client instead of uploading immediately on insert.",
        solution:
          "Images are only uploaded to Cloudinary at submit time, and the backend removes associated Cloudinary assets when a question or exam is deleted — keeping storage clean.",
      },
      {
        challenge:
          "Serving multiple schools from a single codebase without data leaking across tenants.",
        approach: "[ADD APPROACH — tenant scoping strategy]",
        solution: "[ADD SOLUTION]",
      },
    ],
    results: null,
  },
  {
    slug: "school-management-software",
    title: "School Management Software",
    company: "AS Code Elevate Solution Limited",
    category: "Full-Stack / SaaS",
    featured: false,
    image: "/src/assets/images/projects/result-manager/cover.png",

    gallery: [],

    shortDescription:
      "Multi-tenant school management software for managing student records, academic operations, results, and school administration.",

    myRole: "Full-Stack Developer",

    liveUrls: [
      {
        label: "School Management Software",
        url: "https://resultmanager.ascodeelevate.com",
      },
    ],

    githubUrl: null,

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Prisma",
      "Socket.io",
    ],

    architecture: null,

    overview:
      "A multi-tenant school management SaaS platform developed for AS Code Elevate Solution Limited, enabling multiple schools to manage student information, academic activities, results, and administrative workflows from a centralized platform.",

    problem:
      "Schools needed a centralized and scalable system for managing student records, academic information, results, and administrative processes without relying on disconnected manual workflows.",

    solution:
      "Developed a multi-tenant school management platform that allows individual schools to securely manage their academic and administrative operations while maintaining isolated data and configurations within a shared SaaS infrastructure.",
    keyFeatures: [
      "Multi-tenant school management",
      "Student registration and management",
      "Academic and subject management",
      "Result processing and management",
      "School administration workflows",
      "Role-based access and permissions",
      "Real-time application features with Socket.io",
    ],

    challenges: [],
    results: null,
  },
  {
    slug: "accounting-system",
    title: "Accounting System",
    company: "AS Code Elevate Solution Limited",
    category: "Full-Stack / SaaS",
    featured: false,
    image: "/src/assets/images/projects/accounting-system/cover.png",
    gallery: [],

    shortDescription:
      "Multi-tenant accounting and fees management SaaS platform designed to help schools manage financial records, fees, transactions, and accounting operations.",

    myRole: "Full-Stack Developer",

    liveUrls: [
      {
        label: "Accounting System",
        url: "https://acct.ascodeelevate.com",
      },
    ],

    githubUrl: null,

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Prisma",
      "Socket.io",
    ],

    architecture: null,

    overview:
      "A multi-tenant accounting SaaS platform developed for AS Code Elevate Solution Limited to help schools manage fees, financial transactions, accounting records, and other school-related financial operations.",

    problem:
      "Schools needed a dedicated financial management system to organize fee collection, transactions, and accounting records while keeping financial data separated across different organizations.",

    solution:
      "Developed a multi-tenant accounting platform that provides schools with centralized financial management capabilities while maintaining tenant-level data isolation and supporting scalable SaaS operations.",

    keyFeatures: [
      "Multi-tenant accounting management",
      "School fees management",
      "Financial transaction management",
      "Accounting records and reporting",
      "Tenant-level data isolation",
      "Role-based access and permissions",
      "Real-time updates with Socket.io",
    ],

    challenges: [],

    results: null,
  },
  {
    slug: "petrolapp",
    title: "petrolapp",
    company: "Splantom Technology",
    category: "Mobile",
    featured: true,
    image: "/src/assets/images/projects/petrolapp/cover.png", // [ADD PROJECT SCREENSHOT]
    gallery: [],
    shortDescription:
      "A production React Native mobile app shipped to the Google Play Store, built with Firebase and a Node.js/Express backend.",
    myRole: "Mobile App Full Stack Developer",
    liveUrls: [], // [ADD Google Play link]
    githubUrl: null,
    technologies: [
      "React Native",
      "Firebase Auth",
      "Firestore",
      "Cloud Messaging",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
    ],
    architecture: [
      "React Native (Mobile Client)",
      "Firebase Auth / Firestore / Cloud Messaging",
      "Node.js / Express API",
      "MongoDB",
    ],
    overview:
      "A production mobile application integrating Firebase services with a custom Node.js/Express backend, shipped live on the Google Play Store.",
    problem: "[ADD PROBLEM DESCRIPTION]",
    solution: "[ADD SOLUTION DESCRIPTION]",
    keyFeatures: [
      "Firebase Authentication, Firestore, and Cloud Messaging for real-time functionality",
      "JWT-based authentication alongside Firebase Auth",
      "MongoDB-backed Express API for custom backend logic",
      "Shipped and maintained on the Google Play Store",
    ],
    challenges: [
      {
        challenge:
          "Combining Firebase's real-time services with a custom Express/MongoDB backend in one mobile app.",
        approach: "[ADD APPROACH]",
        solution: "[ADD SOLUTION]",
      },
    ],
    results: null,
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
