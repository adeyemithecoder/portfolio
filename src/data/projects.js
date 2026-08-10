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
    gallery: [],
    shortDescription:
      "Real-time dashboards for monitoring embedded devices across multiple deployment locations, supported by production infrastructure built and maintained end-to-end.",
    myRole:
      "Full-Stack Engineer — frontend dashboards, backend services, database integration, containerization, and production infrastructure",
    liveUrls: [
      {
        label: "Enugu Instance",
        url: "https://enugu.daqbin.ng",
      },
      {
        label: "Lagos Instance",
        url: "https://lagos.daqbin.ng",
      },
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
      "Redis",
    ],

    architecture: [
      "React Dashboard (Frontend)",
      "Node.js API",
      "MySQL + Redis",
      "Docker + Docker Compose",
      "Nginx Reverse Proxy",
      "AWS Production Infrastructure",
      "GitHub Actions CI/CD",
    ],

    overview:
      "A real-time dashboard system for visualizing the status and operational data of embedded devices deployed across multiple locations. The project involved building the application layer as well as the infrastructure required to run and maintain the system in production.",

    problem:
      "Device deployments needed a centralized way to monitor operational status and access device data remotely across different locations. Without a dedicated dashboard, understanding the state of distributed devices could require checking individual systems or relying on disconnected sources of information.",

    solution:
      "Built a centralized React dashboard backed by Node.js services to surface device information in a clear and accessible interface. The application was deployed as containerized services using Docker Compose, exposed through Nginx, and hosted on AWS with an automated GitHub Actions deployment workflow.",

    keyFeatures: [
      "Real-time visualization of embedded device status across multiple deployment sites",
      "Centralized dashboard for monitoring distributed device information",
      "Node.js backend services supporting frontend data access",
      "Dockerized application services for consistent production deployment",
      "Docker Compose service orchestration and internal container networking",
      "Nginx reverse proxy for production traffic routing",
      "AWS-hosted production infrastructure",
      "GitHub Actions CI/CD workflow for automated deployments",
    ],

    challenges: [
      {
        challenge:
          "Serving live device data reliably to a frontend dashboard without unnecessarily increasing backend load.",
        approach:
          "Designed the dashboard around backend APIs and efficient data retrieval so the frontend could request the information it needed without directly interacting with the underlying device infrastructure.",
        solution:
          "Created a centralized application layer between the embedded systems and dashboard, allowing device information to be consumed through controlled backend services while keeping the frontend focused on visualization and user interaction.",
      },
      {
        challenge:
          "Deploying and networking multiple containerized services on a production server.",
        approach:
          "Used Docker Compose to define application services and their networking requirements while keeping external traffic behind an Nginx reverse proxy.",
        solution:
          "The services run as coordinated containers with Nginx handling external routing. The production server is connected to GitHub Actions so application changes can be deployed through an automated release workflow.",
      },
      {
        challenge:
          "Maintaining a production environment that could support multiple application services and databases.",
        approach:
          "Separated application services into containerized components and used dedicated infrastructure and database services according to each application's requirements.",
        solution:
          "Established a structured production environment using Docker, Docker Compose, Nginx, AWS, and multiple data stores, making the system easier to deploy, maintain, and extend.",
      },
    ],

    results: [
      "Delivered a centralized interface for monitoring distributed embedded device deployments.",
      "Established a repeatable containerized production deployment architecture.",
      "Automated application deployment from GitHub through GitHub Actions.",
      "Created infrastructure capable of supporting multiple backend services and data stores.",
    ],
  },

  {
    slug: "cbt-platform",
    title: "Computer-Based Testing Platform",
    company: "AS Code Elevate Solution",
    category: "Full-Stack / SaaS",
    featured: true,
    image: "/src/assets/images/projects/cbt-platform/cover.png",
    gallery: [],

    shortDescription:
      "A multi-tenant CBT platform serving real schools, with a rich exam editor supporting mathematical notation, chemical equations, images, exam delivery, results, and school financial workflows.",

    myRole:
      "Full-Stack Developer — exam authoring, rich-text editor extensions, backend services, data management, and deployment",

    liveUrls: [
      {
        label: "CBT Platform",
        url: "https://cbt.ascodeelevate.com",
      },
    ],

    githubUrl: null,

    technologies: [
      "React",
      "Tiptap",
      "KaTeX",
      "mhchem",
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
      "Custom Tiptap Extensions",
      "MathLive Equation Input",
      "KaTeX / mhchem Rendering",
      "Express REST API",
      "Prisma ORM",
      "MongoDB",
      "Cloudinary Media Storage",
      "Socket.io Real-Time Communication",
      "Vercel Deployment",
    ],

    overview:
      "A production computer-based testing platform used by multiple schools from a shared multi-tenant codebase. The platform supports exam creation and delivery, rich question authoring, mathematical and chemical notation, image-based questions, result processing, and accounting and fees management.",

    problem:
      "Schools needed more than a basic text-based exam system. Teachers and administrators needed to create questions containing mathematical equations, chemical notation, and images while students needed to receive that content consistently during examinations. The platform also needed to support multiple schools from a shared SaaS codebase without mixing organizational data.",

    solution:
      "Built a rich exam authoring experience on top of Tiptap and extended it with custom MathLive and KaTeX/mhchem integrations. Implemented image handling through Cloudinary and designed the application as a multi-tenant SaaS platform so multiple schools could use the same application while maintaining separation between their data and workflows.",

    keyFeatures: [
      "Multi-tenant CBT platform serving multiple schools from one codebase",
      "Rich exam question editor built with Tiptap",
      "Mathematical equation input using MathLive",
      "Mathematical rendering using KaTeX",
      "Chemical notation rendering using mhchem",
      "Resizable images inside exam questions",
      "Deferred image upload workflow for better draft handling",
      "Cloudinary integration for question and exam media",
      "Automatic cleanup of Cloudinary assets when related questions or exams are deleted",
      "Exam delivery and result processing",
      "Companion accounting and school fees management module",
      "Real-time application functionality using Socket.io",
    ],

    challenges: [
      {
        challenge:
          "Supporting rich content such as mathematics, chemistry, and images without creating a complicated or fragile question-authoring experience.",
        approach:
          "Extended Tiptap with custom nodes and editor functionality for MathLive equation input, KaTeX rendering, mhchem chemical notation, and resizable images.",
        solution:
          "Teachers can create structured exam questions containing equations, chemical notation, images, and regular text from the same editor, while the resulting content can be rendered consistently for students during examinations.",
      },
      {
        challenge:
          "Avoiding orphaned image uploads when an author adds images while drafting a question but does not submit the question.",
        approach:
          "Images are first tracked on the client using a pendingImagesRef Map instead of being immediately uploaded to permanent storage.",
        solution:
          "Images are uploaded to Cloudinary only when the question is submitted. Backend cleanup also removes associated Cloudinary assets when questions or exams are deleted, reducing unnecessary storage and orphaned files.",
      },
      {
        challenge:
          "Serving multiple schools from one application while maintaining tenant-level data separation.",
        approach:
          "Structured application data and backend operations around the organization or school associated with each authenticated user and resource.",
        solution:
          "The platform supports multiple schools from a shared SaaS application while keeping school-specific records and workflows logically separated within the application architecture.",
      },
      {
        challenge:
          "Supporting an exam platform that also needed administrative and financial workflows.",
        approach:
          "Extended the core platform beyond exam delivery by integrating school administration, accounting, and fees-related functionality into the broader SaaS system.",
        solution:
          "The platform provides a more centralized workflow for schools by combining examination operations with supporting administrative and financial management features.",
      },
    ],

    results: [
      "Delivered a production CBT platform used by multiple schools.",
      "Enabled teachers to author questions containing mathematics, chemistry, images, and rich text.",
      "Reduced unnecessary media storage through deferred uploads and asset cleanup.",
      "Established a reusable multi-tenant architecture for school-based SaaS operations.",
      "Extended the platform beyond examinations with accounting and fees management capabilities.",
    ],
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

    myRole:
      "Full-Stack Developer — frontend development, backend services, database architecture, authentication, and real-time application functionality",

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

    architecture: [
      "React Frontend",
      "Node.js / Express Backend",
      "REST APIs",
      "Prisma ORM",
      "MongoDB",
      "Socket.io Real-Time Layer",
      "Multi-Tenant Application Architecture",
    ],

    overview:
      "A multi-tenant school management SaaS platform developed for AS Code Elevate Solution Limited, enabling multiple schools to manage student information, academic activities, results, and administrative workflows from a centralized platform.",

    problem:
      "Schools needed a centralized and scalable system for managing student records, academic information, results, and administrative processes without relying on disconnected manual workflows or separate systems for each school.",

    solution:
      "Developed a multi-tenant school management platform that provides schools with centralized tools for managing students, subjects, academic records, results, and administrative activities while keeping individual school data and workflows logically separated.",

    keyFeatures: [
      "Multi-tenant school management",
      "Student registration and management",
      "Student profile and academic record management",
      "Academic session and subject management",
      "Result processing and management",
      "School administration workflows",
      "Role-based access and permissions",
      "Tenant-level data separation",
      "RESTful backend APIs",
      "Real-time application features with Socket.io",
    ],

    challenges: [
      {
        challenge:
          "Building a reusable school management system that could support multiple schools without maintaining separate applications for each organization.",
        approach:
          "Designed the application around reusable school-level entities and tenant-aware data relationships so common functionality could be shared across organizations.",
        solution:
          "Multiple schools can operate from the same SaaS platform while maintaining their own students, academic records, results, and administrative information.",
      },
      {
        challenge:
          "Managing large sets of interconnected academic data such as students, subjects, sessions, and results.",
        approach:
          "Structured backend models and API operations around the relationships between schools, students, academic activities, and results.",
        solution:
          "Created a centralized data model that allows academic information to be managed consistently while reducing duplication across school workflows.",
      },
      {
        challenge:
          "Providing different levels of access for users involved in school administration.",
        approach:
          "Implemented role-based access and permission handling across relevant application workflows.",
        solution:
          "Different users can access the functionality appropriate to their responsibilities while administrative operations remain controlled.",
      },
    ],

    results: [
      "Delivered a reusable multi-tenant school management SaaS platform.",
      "Centralized student, academic, result, and administrative workflows.",
      "Enabled multiple schools to operate within a shared application architecture.",
      "Introduced real-time capabilities for relevant application workflows.",
    ],
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

    myRole:
      "Full-Stack Developer — frontend development, backend services, database operations, multi-tenant workflows, and real-time functionality",

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

    architecture: [
      "React Frontend",
      "Node.js / Express Backend",
      "REST APIs",
      "Prisma ORM",
      "MongoDB",
      "Socket.io Real-Time Layer",
      "Multi-Tenant SaaS Architecture",
    ],

    overview:
      "A multi-tenant accounting SaaS platform developed for AS Code Elevate Solution Limited to help schools manage fees, financial transactions, accounting records, and other school-related financial operations.",

    problem:
      "Schools needed a dedicated financial management system to organize fee collection, transactions, and accounting records while keeping financial information separated across different organizations.",

    solution:
      "Developed a multi-tenant accounting platform that centralizes school financial operations and provides structured workflows for managing fees, transactions, accounting records, and financial information while maintaining tenant-level separation.",

    keyFeatures: [
      "Multi-tenant accounting management",
      "School fees management",
      "Fee payment and transaction records",
      "Financial transaction management",
      "Accounting records and reporting",
      "Tenant-level data isolation",
      "Role-based access and permissions",
      "Centralized financial management workflows",
      "Real-time updates with Socket.io",
      "RESTful backend APIs",
    ],

    challenges: [
      {
        challenge:
          "Managing financial records for multiple schools within one shared SaaS application.",
        approach:
          "Structured financial entities around school-specific ownership and tenant-aware application workflows.",
        solution:
          "Each school can manage its own financial records and fee-related operations within the shared platform while maintaining logical separation from other tenants.",
      },
      {
        challenge:
          "Providing a clear workflow for managing school fees and financial transactions.",
        approach:
          "Organized financial operations into dedicated fee, transaction, and accounting workflows rather than treating financial records as unstructured data.",
        solution:
          "The platform gives schools a centralized way to manage fee-related activities and maintain consistent financial records.",
      },
      {
        challenge:
          "Ensuring financial operations are accessible only to appropriate users.",
        approach:
          "Applied role-based access controls to administrative and financial workflows.",
        solution:
          "Financial operations are exposed according to user permissions, helping keep sensitive accounting functionality within the appropriate administrative scope.",
      },
    ],

    results: [
      "Delivered a dedicated accounting and fees management SaaS platform for schools.",
      "Centralized fee, transaction, and accounting workflows.",
      "Enabled multiple schools to manage financial records from a shared platform.",
      "Implemented tenant-level separation and role-based access for financial operations.",
    ],
  },

  {
    slug: "petrolapp",
    title: "PetrolApp",
    company: "Splantom Technology",
    category: "Mobile",
    featured: true,
    image: "/src/assets/images/projects/petrolapp/cover.png",
    gallery: [],

    shortDescription:
      "A production React Native mobile application shipped to the Google Play Store, integrating Firebase services with a custom Node.js and Express backend.",

    myRole:
      "Mobile App Full-Stack Developer — React Native development, Firebase integration, backend APIs, authentication, database integration, and production release",

    liveUrls: [],

    githubUrl: null,

    technologies: [
      "React Native",
      "Firebase Authentication",
      "Firestore",
      "Firebase Cloud Messaging",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
    ],

    architecture: [
      "React Native Mobile Client",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Cloud Messaging",
      "Node.js / Express API",
      "JWT Authentication",
      "MongoDB",
    ],

    overview:
      "A production React Native mobile application integrating Firebase services with a custom Node.js and Express backend. The application combines Firebase's mobile-focused services with custom server-side business logic and MongoDB persistence and was shipped to the Google Play Store.",

    problem:
      "The application required a mobile experience capable of handling authentication, application data, notifications, and custom backend operations while maintaining a reliable connection between the mobile client and server-side services.",

    solution:
      "Built the mobile application with React Native and combined Firebase Authentication, Firestore, and Cloud Messaging with a custom Node.js/Express API backed by MongoDB. Firebase handled mobile-oriented services while the custom backend provided application-specific business logic and data operations.",

    keyFeatures: [
      "Cross-platform mobile application built with React Native",
      "Firebase Authentication for user authentication",
      "Cloud Firestore integration for application data",
      "Firebase Cloud Messaging for push notifications",
      "JWT-based authentication for custom backend operations",
      "Node.js and Express REST API",
      "MongoDB-backed server-side data management",
      "Integration between Firebase services and custom backend infrastructure",
      "Production release and maintenance through the Google Play Store",
    ],

    challenges: [
      {
        challenge:
          "Combining Firebase's mobile services with a custom Express and MongoDB backend in one application.",
        approach:
          "Separated responsibilities between Firebase-managed mobile services and custom backend operations, using each system where it provided the most appropriate functionality.",
        solution:
          "The React Native application can use Firebase for authentication, real-time data capabilities, and notifications while communicating with the custom Express API for application-specific backend logic.",
      },
      {
        challenge:
          "Maintaining consistent authentication between the mobile application and custom backend services.",
        approach:
          "Used Firebase Authentication for the mobile authentication flow alongside JWT-based authentication for protected custom API operations.",
        solution:
          "The application combines managed authentication services with token-based authorization for backend endpoints, providing a structured authentication flow across the mobile and server layers.",
      },
      {
        challenge:
          "Delivering a production-ready mobile application rather than only developing the application locally.",
        approach:
          "Integrated the required backend and Firebase services, tested the application across its core workflows, and prepared the React Native application for production distribution.",
        solution:
          "Successfully shipped the application to the Google Play Store and established the foundation for continued maintenance and updates.",
      },
    ],

    results: [
      "Delivered a production React Native mobile application.",
      "Successfully integrated Firebase and custom Node.js backend services.",
      "Implemented authentication, cloud data, notifications, and custom API functionality.",
      "Shipped the application to the Google Play Store.",
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
