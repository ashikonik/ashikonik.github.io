const profile = {
  name: "Md. Ashik-Uz-Zaman",
  initials: "AZ",
  email: "ashikonik052@gmail.com",
  phone: "+880 1533103481",
  location: "Dhaka, Bangladesh",
  university: "East West University",
  degree: "B.Sc. in Computer Science and Engineering",
  cgpa: "3.60 / 4.00",
  credits: 117,
  expectedGraduation: "Spring 2027",
  researchGroup: "DHMAINetRG — East West University",
  supervisor: "Dr. Hasan Mahmood Aminul Islam, Dept. of CSE",
  bio: "CS researcher and developer at East West University (Dhaka), and research assistant at DHMAINetRG working on Computer Networks and Network Protocols. My work on Internet-of-Vehicles simulation in the ONE Simulator and a context-aware partial-reliable IoT transport protocol (PRIoTP) has produced four IEEE conference papers (DCOSS-IoT 2026, ICCIT 2025, QPAIN 2026). I also build production software — a RAG-based laptop recommender, a patient-owned medical-records platform, a full-stack e-commerce stack, and cross-platform native shells for an open-source music player.",
  links: {
    github: "https://www.github.com/ashikonik",
    linkedin: "https://www.linkedin.com/in/ashikonik",
    googleScholar: "https://scholar.google.com/citations?user=6up31n8AAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0008-1047-4361",
    email: "mailto:ashikonik052@gmail.com",
  },
};

const projects = [
  {
    slug: "medicare",
    title: "MediCare — Personal Medical Record & Emergency Access",
    category: "software",
    year: 2025,
    github: "https://github.com/ashikonik/MediCare",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "MUI",
      "NextAuth v5",
      "Prisma 7",
      "PostgreSQL",
      "Google Cloud Vision",
      "Zod",
      "Vercel",
    ],
    summary:
      "A patient-owned medical-record and emergency-access platform — patients register, photograph prescriptions for OCR pre-fill, track medications on a calendar, and share time-limited access with verified doctors. A separate, QR-coded, no-login page gives first responders the critical bits.",
    problem:
      "Patients don't own their own medical records — they live in scattered paper prescriptions, clinic folders, and whatever a doctor's office remembers. Emergency responders have no reliable way to read blood type, allergies, conditions, meds, or next-of-kin when a patient can't speak.",
    approach:
      "Next.js 16 app with NextAuth (JWT sessions, role-based access) on top of Prisma 7 and Postgres. Patients fill in a medical profile, photograph prescriptions or lab reports and have them read via Google Cloud Vision OCR with a heuristic medication-form pre-fill, and track medications on a monthly calendar. Doctors must be verified before acting on patient data. Patients control who sees what via revokable sharing. A separate unauthenticated, QR-coded emergency page exposes only the minimum a first responder needs.",
    outcome:
      "Shipped as a full-stack Vercel deployment. The project went through three stages during CSE412: an SRS as MediVault, a design doc as CareNexus, and the published implementation as MediCare.",
    highlights: [
      "Role-based patients, doctors, and admin with a doctor-verification gate",
      "Prescription OCR via Google Cloud Vision + heuristic medication-form pre-fill",
      "Token-based, no-login emergency profile page with QR code and simulated SOS",
      "Patient-controlled shareable access to records with revocation",
    ],
  },
  {
    slug: "iov-simulation-dhaka",
    title: "IoV Simulation of Dhaka City in the ONE Simulator",
    category: "research",
    year: 2025,
    github: "https://github.com/ashikonik",
    tech: ["ONE Simulator", "Java", "OpenStreetMap", "DTN Routing"],
    summary:
      "Integrated and validated real Dhaka map data inside the ONE Simulator to study Internet-of-Vehicles performance in a dense, real-world city, and extended that work to measure how pedestrian movement changes IoV delivery.",
    problem:
      "Most IoV simulation studies use idealized or Western-city maps. Dhaka's road network — dense, irregular, mixed-traffic — behaves very differently, so results from generic maps don't transfer.",
    approach:
      "Imported and validated OpenStreetMap data for Dhaka into the ONE Simulator, fixed geometry and connectivity issues in the converted map, and ran DTN routing experiments over realistic vehicle movement. A follow-up study measured how pedestrian movement patterns change IoV delivery performance.",
    outcome:
      "Two peer-reviewed papers at IEEE ICCIT 2025: one on map-data integration and validation, one on the impact of pedestrian movement on IoV performance and simulation. The validated Dhaka map is now part of the DHMAINetRG research group's ongoing simulation pipeline.",
    highlights: [
      "Two IEEE ICCIT publications produced from this work",
      "Validated real Dhaka OSM data for reproducible IoV experiments",
      "Shared research asset inside the DHMAINetRG group",
    ],
  },
  {
    slug: "priotp",
    title: "PRIoTP — Context-Aware Partial-Reliable IoT Transport",
    category: "research",
    year: 2026,
    github: "https://github.com/ashikonik",
    tech: ["IoT", "Network Protocols", "Edge Computing"],
    summary:
      "A context-aware partial-reliable application-layer IoT transport protocol with edge intelligence, designed to decide which messages deserve guaranteed delivery.",
    problem:
      "IoT devices waste energy and bandwidth retransmitting data that has already lost its value — full reliability is too expensive, no reliability is too lossy.",
    approach:
      "PRIoTP sits at the application layer and uses context (data type, freshness, edge-side inference) to classify traffic into reliability tiers, so only the messages that matter get retransmission guarantees.",
    outcome:
      "Accepted as an IEEE paper at the 22nd International Conference on Distributed Computing in Smart Systems and the Internet of Things (DCOSS-IoT) 2026, Reykjavik, Iceland.",
    highlights: [
      "Accepted at IEEE DCOSS-IoT 2026",
      "Context-aware reliability tiers instead of all-or-nothing delivery",
      "Edge intelligence drives per-message transport decisions",
    ],
  },
  {
    slug: "lapwise-ai",
    title: "LapWise AI — RAG Expert Laptop Recommender",
    category: "software",
    year: 2025,
    github: "https://github.com/ashikonik/laptop_recommender",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PySpark",
      "Apache Spark",
      "FAISS HNSW",
      "Qdrant",
      "BAAI/bge-base-en-v1.5",
      "MinHash LSH",
    ],
    summary:
      "An end-to-end RAG expert recommendation system indexing 8,485 unique laptops across 127k passages, with hybrid metadata-vector retrieval, SSE chat streaming, and a React 19 dashboard.",
    problem:
      "Generic laptop shopping experiences don't understand natural-language constraints ('light, under $800, good battery for college') and treat specs as a flat list. Building a real RAG pipeline requires end-to-end Big Data work — ingestion, dedup, embedding, indexing, retrieval, re-ranking, grounded answer generation.",
    approach:
      "Architected an end-to-end RAG expert recommendation system indexing 8,485 unique laptops across 127k passages using BAAI/bge-base-en-v1.5 embeddings and FAISS HNSW / Qdrant. Engineered a distributed data pipeline in Apache Spark executing MinHash LSH deduplication and KNN missing-value imputation across multi-source scraped catalogues. Built an asynchronous FastAPI backend with hybrid metadata-vector filtering and SSE chat streaming, paired with a modern React 19, Vite, and Tailwind CSS dashboard.",
    outcome:
      "End-to-end production-shaped system with a Spark-side data pipeline, FAISS / Qdrant indexing, hybrid retrieval, and a streaming chat UI. Built as the CSE488 Big Data Analytics term project.",
    highlights: [
      "127k passages across 8,485 unique laptops, indexed with BAAI/bge-base-en-v1.5 + FAISS HNSW / Qdrant",
      "Spark pipeline: MinHash LSH dedup + KNN imputation on multi-source catalogues",
      "Hybrid metadata-vector retrieval with SSE chat responses",
      "React 19 + Vite + Tailwind dashboard on top of an async FastAPI backend",
    ],
  },
  {
    slug: "cherryso",
    title: "CherrySo — Full-Stack E-Commerce for Bangladesh",
    category: "software",
    year: 2026,
    github: "https://github.com/ashikonik/cherryso",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Drizzle ORM",
      "PostgreSQL",
      "Supabase",
      "Zustand",
      "Zod",
      "Upstash Redis",
      "Netlify",
    ],
    summary:
      "A high-performance full-stack e-commerce platform built for modern online retail in Bangladesh — SSR catalog, Bangladeshi payment flows, RBAC backoffice, and Steadfast courier integration.",
    problem:
      "Most off-the-shelf e-commerce stacks don't fit Bangladeshi reality: they don't know what bKash or Nagad looks like, they don't understand Inside-Dhaka vs Sub-Dhaka vs Outside-Dhaka shipping, and they force admin workflow through generic CMS forms.",
    approach:
      "Built with Next.js 15 (App Router), Drizzle ORM, Supabase (auth + storage), and Tailwind CSS v4. Customer side: SSR catalog, tag search, persistent cart via Zustand, guest checkout, bKash/Nagad payment flows with TrxID verification and COD fallback, and intelligent shipping-fee calculation. Admin side: RBAC, multi-image uploads to Supabase Storage, 1-click order-status updates, Steadfast courier booking + webhooks, and dynamic MFS configuration without redeploying. Hardened with Upstash Redis rate limits on auth/checkout/submit, Zod validation on every action, and Netlify scheduled functions for background reconciliation.",
    outcome:
      "Live deployment on Netlify. Demonstrates how a regionally-aware e-commerce stack can be built end-to-end on a modern, type-safe, server-rendered foundation.",
    highlights: [
      "Bangladeshi-payments-first: bKash/Nagad with TrxID verification + COD",
      "Zone-aware shipping across Inside Dhaka / Sub-Dhaka / Outside Dhaka",
      "RBAC admin with multi-image Supabase uploads and Steadfast courier booking",
      "Abuse protection via Upstash Redis rate limits on auth/checkout/submit",
    ],
  },
  {
    slug: "monochrome-music-apps",
    title: "Monochrome Music — Cross-Platform Native Shells",
    category: "software",
    year: 2025,
    github: "https://github.com/ashikonik/monochrome-music-apps",
    tech: [
      "Electron",
      "Capacitor",
      "JavaScript",
      "NSIS",
      "electron-builder",
      "Shell",
    ],
    summary:
      "Native desktop and mobile shells wrapping the open-source Monochrome music player — Windows (NSIS .exe), Linux (.deb / .pacman / .AppImage / Flatpak), Android (APK / AAB), and iOS (IPA via Xcode).",
    problem:
      "Monochrome is a great web-based music client, but most users want a real installed app on their phone and laptop, not a browser tab — and packaging the same web payload across four platforms from one codebase is fiddly.",
    approach:
      "Built one bundled Monochrome web build and packaged it in thin Electron (desktop) and Capacitor (Android/iOS) shells. Electron-builder produces installers for each Linux format plus a Windows NSIS installer; Capacitor wraps the same bundle for Android and iOS, with the iOS build assembled via Xcode on macOS. Upstream Monochrome is consumed via public API instances with automatic failover — no music stored in-repo.",
    outcome:
      "Shipped finished installable binaries in deliverables/ for all four platforms. Repo documents the full build/packaging process, fallbacks when a toolchain component was unavailable, and the release roadmap.",
    highlights: [
      "Four platforms from one bundled web payload",
      "Real packaged installers (.exe, .deb, .pacman, .AppImage, Flatpak, APK, AAB, IPA)",
      "Reuses the upstream Monochrome API with automatic instance failover",
    ],
  },
  {
    slug: "metro-rail-ticketing",
    title: "Metro Rail Ticketing System",
    category: "software",
    year: 2024,
    github: "https://github.com/ashikonik/Metro-Rail-Ticketing-System",
    tech: ["C", "CLI Design"],
    summary:
      "A fully functional CLI-based metro ticketing system with an intuitive, minimal-keyboard navigation interface, reducing user interaction steps while enforcing access control.",
    problem:
      "Ticketing flows are usually click-heavy. The challenge: make a terminal interface fast enough that buying a ticket takes fewer keystrokes than a GUI takes clicks — while still enforcing access control.",
    approach:
      "Designed a fully functional CLI-based ticketing system in C with an intuitive, minimal-keyboard navigation interface. Implemented role-based secure login (user and admin), enforcing access control at the application level.",
    outcome:
      "A complete ticketing system where routine purchases are a few keystrokes, and admin operations (fares, routes, reports) are walled off behind application-level access control.",
    highlights: [
      "Minimal-keyboard navigation reduces interaction steps",
      "Role-based secure login (user / admin) enforced in-app",
      "Written in portable, dependency-free C",
    ],
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    category: "software",
    year: 2024,
    github: "https://github.com/ashikonik/Library_Management_System",
    tech: ["Java", "JavaFX", "OOP", "File Persistence"],
    summary:
      "A GUI-based JavaFX desktop application with role-differentiated login for librarians and students, and a file-based data persistence system that requires no database.",
    problem:
      "Small libraries need real software — circulation, members, catalogs — but can't run or maintain a database server.",
    approach:
      "Built a GUI-based desktop application with role-differentiated login, enabling distinct workflows for librarians and students. Engineered a file-based data persistence system, ensuring secure and reliable storage of all records without a database dependency.",
    outcome:
      "A complete desktop system: librarians manage the catalog and loans, students browse and borrow, and all data survives restarts through the custom persistence layer.",
    highlights: [
      "Two distinct role workflows from a single codebase",
      "Custom file-based persistence — zero database dependency",
      "Full GUI desktop experience in JavaFX",
    ],
  },
];

const publications = [
  {
    title:
      "PRIoTP: Towards Context-Aware Partial Reliable Application-Layer IoT Protocol with Edge Intelligence",
    venue: "IEEE",
    conference:
      "22nd International Conference on Distributed Computing in Smart Systems and the Internet of Things (DCOSS-IoT) 2026",
    doi: "10.1109/DCOSS-IoT69657.2026.00109",
    link: "https://ieeexplore.ieee.org/document/11659426",
    date: "2026",
  },
  {
    title:
      "Integration and Validation of Map Data in the ONE Simulator: IoV in Dhaka City Perspective",
    venue: "IEEE",
    conference:
      "28th International Conference on Computer and Information Technology (ICCIT) 2025",
    doi: "10.1109/ICCIT68739.2025.11491083",
    link: "https://ieeexplore.ieee.org/abstract/document/11491083",
    date: "2025",
  },
  {
    title:
      "The Impact of Pedestrian Movement on IoV Performance and Simulation",
    venue: "IEEE",
    conference:
      "28th International Conference on Computer and Information Technology (ICCIT) 2025",
    doi: "10.1109/ICCIT68739.2025.11491296",
    link: "https://ieeexplore.ieee.org/abstract/document/11491296",
    date: "2025",
  },
  {
    title:
      "Design and Implementation of a Generative Pre-Trained Transformer for Universities of Bangladesh",
    venue: "IEEE",
    conference:
      "IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN) 2026",
    doi: "10.1109/QPAIN69676.2026.11545594",
    link: "https://ieeexplore.ieee.org/document/11545594/",
    date: "2026",
  },
];

const education = [
  {
    institution: "East West University",
    credential: "B.Sc. in Computer Science and Engineering",
    score: "3.60",
    scoreScale: "/ 4.00",
    scoreLabel: "CGPA",
    detail: "117 credits completed · second-last semester",
    periodRange: "Fall 2023 – Spring 2027",
    yearStart: "2023",
  },
  {
    institution: "Dhaka Imperial College",
    credential: "Higher Secondary Certificate (Science)",
    score: "5.00",
    scoreScale: "/ 5.00",
    scoreLabel: "GPA",
    detail: "Higher Secondary Certificate",
    periodRange: "2021 – 2022",
    yearStart: "2021",
  },
  {
    institution: "Ideal School and College",
    credential: "Secondary School Certificate (Science)",
    score: "4.83",
    scoreScale: "/ 5.00",
    scoreLabel: "GPA",
    detail: "Secondary School Certificate",
    periodRange: "2019 – 2020",
    yearStart: "2019",
  },
];

const experience = [
  {
    role: "Research Assistant",
    org: "DHMAINetRG – East West University",
    period: "Jun 2025 – Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Conducting research on Computer Networks and Network Protocols under Dr. Hasan Mahmood Aminul Islam, Dept. of CSE.",
      "Independently authored and contributed to literature reviews and academic manuscripts, improving the team's publication readiness.",
      "Analyzed network simulation results using the ONE Simulator, contributing to the group's ongoing research pipeline.",
    ],
  },
  {
    role: "Website Content Developer & QA Analyst",
    org: "East West University",
    period: "Oct 2025 – Jan 2026",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Restructured and migrated content for a newly launched university website using a CMS, ensuring accurate information architecture across all pages.",
      "Performed systematic quality assurance across the site, identifying and resolving content inconsistencies before public release.",
    ],
  },
  {
    role: "E-Commerce Seller",
    org: "Etsy",
    period: "May 2024 – Jun 2024",
    location: "Remote",
    bullets: [
      "Managed and maintained multiple seller accounts, consistently updating product listings to improve visibility.",
      "Enhanced product presentation by editing images with Adobe Photoshop, directly supporting sales readiness.",
    ],
  },
];

const skills = {
  "Programming Languages": [
    "C",
    "C++",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
  ],
  "Web & Frameworks": [
    "HTML",
    "CSS",
    "React",
    "React Native",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Vite",
    "Tailwind CSS",
  ],
  "Database & Big Data": [
    "MySQL",
    "PostgreSQL",
    "Qdrant",
    "FAISS",
    "Apache Spark",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "GitHub Actions",
    "Docker",
    "VS Code",
    "LaTeX",
    "Adobe Photoshop",
    "ONE Simulator",
  ],
};

const interests = [
  "Computer Networks",
  "Network Protocols",
  "Retrieval-Augmented Generation (RAG)",
  "Academic Research",
];

const activities = [
  {
    role: "Senior Member",
    org: "East West University Robotics Club",
    period: "Spring 2024 – Present",
    bullets: [
      "Led orientation sessions for new member cohorts, streamlining the onboarding process for incoming students.",
      "Volunteered at multiple workshops and seminars, actively supporting the club's technical and community events.",
    ],
  },
  {
    role: "Founding Member",
    org: "East West University Cyber Security Club",
    period: "Fall 2024 – Present",
    bullets: [
      "Helped establish the club from the ground up, contributing to its founding structure and initial membership drive.",
      "Organized and participated in multiple orientation programs and workshops, growing the club's active member base.",
    ],
  },
];

export {
  profile,
  projects,
  publications,
  education,
  experience,
  skills,
  activities,
  interests,
};