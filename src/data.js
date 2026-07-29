const profile = {
  name: "Md. Ashik-Uz-Zaman",
  email: "ashikonik052@gmail.com",
  phone: "+880 1533103481",
  location: "Dhaka, Bangladesh",
  university: "East West University",
  degree: "B.Sc. in Computer Science & Engineering",
  cgpa: "3.59 / 4.00",
  credits: 106,
  researchGroup: "DHMAINetRG — East West University",
  supervisor: "Dr. Hasan Mahmood Aminul Islam, Dept. of CSE",
  bio: "I'm a Computer Science student at East West University in Dhaka and a research assistant at DHMAINetRG, where I work on computer networks and IoT protocols. Most of my research uses the ONE Simulator to study how Internet-of-Vehicles traffic behaves on real Dhaka road networks — that work has produced three IEEE conference papers and one accepted at ISIoT 2026. I also build software: a patient-owned health records platform, a metro ticketing CLI in C, and a library management desktop app in JavaFX.",
  links: {
    github: "https://github.com/ashikonik",
    linkedin: "https://linkedin.com/in/ashikonik",
    googleScholar: "https://scholar.google.com/citations?user=6up31n8AAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0008-1047-4361",
    email: "mailto:ashikonik052@gmail.com",
  },
};

const projects = [
  {
    slug: "iov-simulation-dhaka",
    title: "IoV Simulation of Dhaka City in the ONE Simulator",
    category: "research",
    year: 2025,
    github: "https://github.com/ashikonik",
    tech: ["ONE Simulator", "Java", "OpenStreetMap", "DTN Routing"],
    summary:
      "Integrated and validated real map data of Dhaka city inside the ONE Simulator to study Internet-of-Vehicles performance in a dense, real-world road network.",
    problem:
      "Most IoV simulation studies use idealized or Western city maps. Dhaka's road network — dense, irregular, and mixed-traffic — behaves very differently, so results from generic maps don't transfer.",
    approach:
      "Imported and validated OpenStreetMap data for Dhaka into the ONE Simulator, fixed geometry and connectivity issues in the converted map, and ran DTN routing experiments over realistic vehicle movement. A follow-up study measured how pedestrian movement patterns change IoV delivery performance.",
    outcome:
      "Two peer-reviewed papers at ICCIT 2025 (IEEE): one on map data integration and validation, and one on the impact of pedestrian movement on IoV performance. The validated Dhaka map is now part of the research group's ongoing simulation pipeline.",
    highlights: [
      "Two IEEE ICCIT publications came out of this pipeline",
      "Validated real Dhaka OSM data for reproducible IoV experiments",
      "Now used by DHMAINetRG as a shared research asset",
    ],
  },
  {
    slug: "priotp",
    title: "PRIoTP: Partial-Reliable IoT Protocol",
    category: "research",
    year: 2026,
    github: "https://github.com/ashikonik",
    tech: ["IoT", "Network Protocols", "Edge Computing"],
    summary:
      "A context-aware, partially reliable application-layer protocol for IoT, using edge intelligence to decide which data deserves guaranteed delivery.",
    problem:
      "IoT devices waste energy and bandwidth retransmitting data that has already lost its value — full reliability is too expensive, no reliability is too lossy.",
    approach:
      "PRIoTP sits at the application layer and uses context (data type, freshness, edge-side inference) to classify traffic into reliability tiers, so only the messages that matter get retransmission guarantees.",
    outcome:
      "Accepted at ISIoT 2026. The protocol design and evaluation contribute toward smarter, energy-aware transport decisions for constrained IoT deployments.",
    highlights: [
      "Accepted at ISIoT 2026",
      "Context-aware reliability tiers instead of all-or-nothing delivery",
      "Edge intelligence drives per-message transport decisions",
    ],
  },
  {
    slug: "carenexus",
    title: "CareNexus",
    category: "software",
    year: 2026,
    github: "https://github.com/ashikonik/CareNexus",
    tech: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MinIO",
      "Docker",
      "JWT",
      "HL7 FHIR R4",
    ],
    summary:
      "A patient-owned medical history application that lets users securely store, manage, and share their personal health records across mobile and web.",
    problem:
      "Patients lack centralized control over their own medical records. Data is fragmented across providers, making care coordination difficult and emergency access unreliable.",
    approach:
      "Built cross-platform mobile apps (React Native) and a web portal (React) backed by a Node.js/Express API with PostgreSQL. Implements HL7 FHIR R4 for data interoperability, AES-256/RSA encryption, selective record sharing with granular access control, audit logging, and emergency access to critical health info.",
    outcome:
      "Ongoing project. Architecture includes patient profiles, medical record CRUD, document attachments (MinIO object storage), medication/appointment reminders, share-grant system with cryptographic access control, and full audit trails.",
    highlights: [
      "FHIR R4 compliant data model for healthcare interoperability",
      "End-to-end encryption with selective sharing via public-key cryptography",
      "Cross-platform: React Native (iOS/Android) + React (web)",
    ],
  },
  {
    slug: "metro-rail-ticketing",
    title: "Metro Rail Ticketing System",
    category: "software",
    year: 2024,
    github: "https://github.com/ashikonik/Metro-Rail-Ticketing-System",
    tech: ["C", "File I/O", "CLI Design"],
    summary:
      "A CLI-based ticketing system for the metro, designed around minimal-keyboard navigation and role-based secure login for users and admins.",
    problem:
      "Ticketing flows are usually click-heavy. The challenge: make a terminal interface fast enough that buying a ticket takes fewer keystrokes than a GUI takes clicks — while still enforcing access control.",
    approach:
      "Built in pure C with an intuitive, minimal-keyboard navigation model that cuts user interaction steps. Implemented role-based login so users and admins land in completely separate, permission-checked workflows.",
    outcome:
      "A fully functional ticketing system where routine purchases are a few keystrokes, and admin operations (fares, routes, reports) are walled off behind application-level access control.",
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
    github: "https://github.com/ashikonik",
    tech: ["Java", "JavaFX", "OOP", "File Persistence"],
    summary:
      "A JavaFX desktop application with role-differentiated logins and a file-based persistence engine — no database required.",
    problem:
      "Small libraries need real software — circulation, members, catalogs — but can't run or maintain a database server.",
    approach:
      "Designed a GUI desktop app in JavaFX with separate librarian and student workflows behind role-differentiated login. Engineered a file-based data persistence layer that keeps every record safe and consistent without any database dependency.",
    outcome:
      "A complete, installable desktop system: librarians manage the catalog and loans, students browse and borrow, and all data survives restarts through the custom persistence layer.",
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
    venue: "ISIoT 2026",
    doi: null,
    link: null,
    status: "Accepted",
  },
  {
    title:
      "Integration and Validation of Map Data in the ONE Simulator: IoV in Dhaka City Perspective",
    venue:
      "28th International Conference on Computer and Information Technology (ICCIT), IEEE",
    doi: "10.1109/ICCIT68739.2025.11491083",
    link: "https://doi.org/10.1109/ICCIT68739.2025.11491083",
    status: "Published",
  },
  {
    title:
      "The Impact of Pedestrian Movement on IoV Performance and Simulation",
    venue:
      "28th International Conference on Computer and Information Technology (ICCIT), IEEE",
    doi: "10.1109/ICCIT68739.2025.11491296",
    link: "https://doi.org/10.1109/ICCIT68739.2025.11491296",
    status: "Published",
  },
  {
    title:
      "Design and Implementation of a GPT for Universities of Bangladesh, 2026",
    venue:
      "2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), IEEE",
    doi: "10.1109/QPAIN69676.2026.11545594",
    link: "https://doi.org/10.1109/QPAIN69676.2026.11545594",
    status: "Published",
  },
];

const education = [
  {
    institution: "East West University",
    credential: "B.Sc. in Computer Science & Engineering",
    score: "CGPA 3.59 / 4.00, 106 credits",
    period: "Fall 2023 – Present",
  },
  {
    institution: "Dhaka Imperial College",
    credential: "Higher Secondary Certificate (Science)",
    score: "GPA 5.00 / 5.00",
    period: "2021 – 2022",
  },
  {
    institution: "Ideal School and College",
    credential: "Secondary School Certificate (Science)",
    score: "GPA 4.83 / 5.00",
    period: "2019 – 2020",
  },
];

const experience = [
  {
    role: "Research Assistant",
    org: "DHMAINetRG — East West University, Dhaka",
    period: "Jun 2025 – Present",
    bullets: [
      "Conducting research on Computer Networks and Network Protocols under Dr. Hasan Mahmood Aminul Islam",
      "Independently authored literature reviews and academic manuscripts, improving the team's publication readiness",
      "Analyzed network simulation results using the ONE Simulator, contributing to the group's ongoing research pipeline",
    ],
  },
  {
    role: "Website Content Developer & QA Analyst",
    org: "East West University, Dhaka",
    period: "Oct 2025 – Jan 2026",
    bullets: [
      "Restructured and migrated content for a newly launched university website using a CMS, ensuring accurate information architecture across all pages",
      "Performed systematic quality assurance across the site, identifying and resolving content inconsistencies before public release",
    ],
  },
  {
    role: "E-Commerce Seller",
    org: "Etsy (Remote)",
    period: "May 2024 – Jun 2024",
    bullets: [
      "Managed and maintained multiple seller accounts, consistently updating product listings to improve visibility",
      "Enhanced product presentation by editing images with Adobe Photoshop, directly supporting sales readiness",
    ],
  },
];

const skills = {
  "Programming Languages": ["C", "C++", "Java", "Python", "JavaScript"],
  "Web & Database": ["HTML", "CSS", "React", "Express", "MySQL"],
  "Research Tools": ["ONE Simulator", "LaTeX", "Git & GitHub"],
  Other: ["VS Code", "Adobe Photoshop", "Academic Writing"],
};

const activities = [
  {
    role: "Senior Member",
    org: "EWU Robotics Club",
    period: "Spring 2024 – Present",
    bullets: [
      "Led orientation sessions for new member cohorts, streamlining the onboarding process",
      "Volunteered at multiple workshops and seminars, supporting technical and community events",
    ],
  },
  {
    role: "Founding Member",
    org: "EWU Cyber Security Club",
    period: "Fall 2024 – Present",
    bullets: [
      "Helped establish the club from the ground up, contributing to founding structure and initial membership drive",
      "Organized and participated in multiple orientation programs and workshops",
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
};
