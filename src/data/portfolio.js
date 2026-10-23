// ============================================================
// Central data source — every section pulls from here.
// Edit this file to update content across the whole site.
// ============================================================

export const profile = {
  fullName: "Peddanolla Ragichettukindi Vishal",
  shortName: "Vishal",
  initials: "PV",
  brand: "Vishal.",
  roles: [
    "Full Stack Developer",
    "AI Engineer",
    "MERN Stack Developer",
    "Product Builder",
  ],
  location: "Hyderabad, Telangana, India",
  email: "prvishal200416@gmail.com",
  phone: "+91 9398158442",
  github: "https://github.com/prvishal16",
  linkedin: "https://linkedin.com/in/prvishal16",
  resumeFile: "/resume/vishal-software-engineer.pdf",
  summary:
    "Full Stack Developer × AI Engineer — I build scalable, production-ready software using Java, Python, React, Node.js, Express, Spring Boot and modern databases. Passionate about solving real-world problems through clean architecture, high-performance systems and exceptional user experiences.",
  bio:
    "I'm Vishal — a Full Stack Developer and AI Engineer based in Hyderabad who builds intelligent software end-to-end. My core stack is Java, Python, the MERN (React, Node, Express, MongoDB) with TypeScript, Next.js and real-time systems, woven together with an intelligence layer of LLMs, RAG, computer vision and autonomous agents (OpenRouter, LangChain, PyTorch, MediaPipe).",
  bio2:
    "I graduated from MRCET with a CGPA of 8.76/10 in Computer Science (AI & ML), currently build production interfaces at PraNaga, and ship products where full-stack engineering and AI aren't two things — they're one.",
};

export const skillCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", icon: "html5" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Material UI", icon: "mui" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
      { name: "REST APIs", icon: "api" },
      { name: "Spring Boot", icon: "spring" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    label: "Artificial Intelligence",
    skills: [
      { name: "Machine Learning", icon: "machinelearning" },
      { name: "Deep Learning", icon: "deeplearning" },
      { name: "Computer Vision", icon: "computervision" },
      { name: "Natural Language Processing", icon: "nlp" },
      { name: "Explainable AI", icon: "explainableai" },
      { name: "Agentic AI", icon: "agenticai" },
    ],
  },
  {
    label: "AI Frameworks",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "LangChain", icon: "langchain" },
      { name: "OpenRouter", icon: "openrouter" },
      { name: "MediaPipe", icon: "mediapipe" },
      { name: "OpenCV", icon: "opencv" },
    ],
  },
  {
    label: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", icon: "dsa" },
      { name: "OOP", icon: "oop" },
      { name: "DBMS", icon: "dbms" },
      { name: "Operating Systems", icon: "os" },
      { name: "SDLC", icon: "sdlc" },
      { name: "Agile", icon: "agile" },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Jira", icon: "jira" },
      { name: "Docker", icon: "docker" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "AWS", icon: "aws" },
    ],
  },
];

export const experience = [
  {
    id: "hdm",
    role: "AI Full-Stack Software Intern",
    org: "HDM Innovations Private Limited",
    period: "Jul 2026 — Aug 2026",
    current: false,
    track: "software",
    points: [
      "Contributed 12+ production-ready modules and 10+ feature enhancements across ACA and MA healthcare applications, building React frontends with FastAPI, MongoDB and Azurite for end-to-end payer workflows.",
      "Delivered 5+ production UI and backend enhancements across Encounter, Service Line, File Upload, Change History and Error Validation workflows through GitHub PRs, code reviews and dev-branch merges.",
      "Analyzed ACA/EDPS and MA workflows across 10+ modules, validating flows and tracking tasks through Jira.",
    ],
  },
  {
    id: "pranaga",
    role: "Full-Stack Developer Intern",
    org: "PraNaga Private Limited",
    period: "May 2026 — Present",
    current: true,
    track: "software",
    points: [
      "Led frontend development for business web applications, building responsive UIs and scalable, high-performance modules.",
      "Collaborated with development teams on project execution, feature delivery, and milestone completion across cycles.",
      "Integrated REST APIs for seamless frontend-backend communication and reliable data workflows.",
      "Performed testing, debugging, and performance optimization to improve reliability and UX.",
    ],
  },
  {
    id: "vaultofcodes",
    role: "Web Developer Intern",
    org: "VaultofCodes",
    period: "Mar 2025 — Apr 2025",
    current: false,
    track: "software",
    points: [
      "Developed a real-time collaborative CodeX Editor enabling multiple users to edit and sync code simultaneously using WebSocket-based communication.",
      "Reduced code update latency by 15% through optimizing event-driven data flow and minimizing redundant socket emissions during concurrent edits.",
      "Integrated secure user sessions to manage concurrent connections and ensure isolated editing environments across users.",
      "Improved code synchronization reliability by 10% through refined backend state handling and resolving race conditions.",
    ],
  },
  {
    id: "ey",
    role: "Full-Stack Developer Intern",
    org: "EY Global Delivery Services (EY GDS)",
    period: "Feb 2025 — Mar 2025",
    current: false,
    track: "software",
    points: [
      "Built a MERN-based recipe sharing platform for creating, browsing, and interacting with content.",
      "Improved API efficiency with optimized REST endpoints, boosting response time by 15%.",
      "Applied secure JWT authentication workflows to manage sessions and protect resources.",
      "Refactored reusable components and backend routes, cutting redundancy by 5%.",
    ],
  },
  {
    id: "techsaksham",
    role: "Artificial Intelligence Developer Intern",
    org: "Microsoft & SAP · TechSaksham CSR Program",
    period: "Jan 2025 — Mar 2025",
    current: false,
    track: "ai",
    points: [
      "Engineered an end-to-end Potato Leaf Disease Detection platform combining CNN with VGG16 transfer learning, reaching 92%+ multi-class accuracy on field-captured crop imagery.",
      "Cut diagnostic turnaround by 40% through an accelerated preprocessing pipeline and confidence-scored inference, giving farmers instant, trust-calibrated predictions.",
      "Shipped the model behind a lightweight Streamlit interface with real-time upload, class probabilities and severity insight — production-ready for low-bandwidth rural use.",
    ],
  },
  {
    id: "infosys",
    role: "Deep Learning Developer Intern",
    org: "Infosys Springboard · Program v5.0",
    period: "Oct 2024 — Dec 2024",
    current: false,
    track: "ai",
    points: [
      "Architected DigitWise, a comparative handwriting recognition system benchmarking MLP, CNN and LeNet-5, achieving 96.16% on MNIST and 71.6% on CIFAR-10 with aggressive augmentation and cross-dataset generalization.",
      "Rebuilt the data pipeline with custom augmentation, normalization and metric-driven checkpoints — lifting preprocessing efficiency and training stability by 30%.",
      "Delivered a reproducible experiment framework with per-architecture confusion matrices and per-class F1 dashboards for clean model comparability.",
    ],
  },
];

export const projects = [
  {
    id: "talentforge",
    title: "TalentForge AI",
    tagline: "Multi-Model Autonomous TalentOS",
    category: "Personal · AI Platform",
    description:
      "An autonomous hiring operating system that fuses resume intelligence, ATS scoring and browser-based ML interview analytics into one recruiter cockpit — turning raw applications into ranked, interview-ready shortlists.",
    tech: ["Python", "Django REST", "PostgreSQL", "React", "TensorFlow.js", "MediaPipe", "OpenRouter", "Docker"],
    features: [
      "30+ AI recruitment workflows",
      "Real-time interview analytics",
      "Smart resume + ATS matching",
      "Recruiter & candidate lifecycle",
    ],
    cover: "talentforge",
    github: "https://github.com/prvishal16/TalentForge-AI-Multi-Model-Full-Stack-Autonomous-Hiring-Platform",
    live: "https://talent-forge-ai-multi-model-full-st.vercel.app/",
    accent: "#ff2a2a",
  },
  {
    id: "deployai",
    title: "Deploy.AI",
    tagline: "Zero to Production AI Web Forge",
    category: "Personal · Developer Tool",
    description:
      "A prompt-to-production web forge — describe a site in natural language and Deploy.AI generates the full MERN codebase, previews it live in the browser, and ships it to a public URL in a single click.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenRouter LLM", "REST APIs", "Web Crypto"],
    features: [
      "Natural-language site generation",
      "Live in-browser preview",
      "One-click deployment",
      "Encrypted key vault",
    ],
    cover: "deployai",
    github: "https://github.com/prvishal16/Deploy.AI---Zero-to-Production-grade-AI-web-engine",
    live: "https://deploy-ai-zero-to-production-grade.vercel.app/",
    accent: "#ff2a2a",
  },
  {
    id: "workloom",
    title: "WorkLoom",
    tagline: "Real-Time Freelance Collaboration",
    category: "Personal · Collaboration",
    description:
      "A live freelancing workspace where clients post briefs, freelancers counter-bid in real time, and both sides collaborate through instant messaging and milestone-based Stripe payments — end-to-end in one place.",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe"],
    features: [
      "Live bidding over WebSockets",
      "In-app real-time chat",
      "Milestone Stripe payouts",
      "Project lifecycle tracking",
    ],
    cover: "workloom",
    github: "https://github.com/prvishal16/Workloom---Freelancing-platform-using-MERN",
    live: "https://workloom-freelancing-platform-using-pi.vercel.app/",
    accent: "#ff2a2a",
  },
  {
    id: "gethired",
    title: "GetHired",
    tagline: "Talent Acquisition Platform",
    category: "Personal · Recruitment",
    description:
      "A recruiter-first job portal with role-based access — companies publish openings, candidates apply in a click, and every stage of the hiring pipeline stays organised behind secure REST APIs and JWT sessions.",
    tech: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT", "RBAC"],
    features: [
      "Role-based access control",
      "Recruiter job posting",
      "Application pipeline tracking",
      "Secure JWT auth flows",
    ],
    cover: "gethired",
    github: "https://github.com/prvishal16/GetHired-Job-Portal-Platform.",
    live: "https://get-hired-job-portal-platform.vercel.app/login",
    accent: "#ff2a2a",
  },
  {
    id: "enviroclass",
    title: "EnviroClass AI",
    tagline: "Reuse-Waste Vision Classifier",
    category: "AI · Computer Vision",
    description:
      "A deep-learning waste classification engine that benchmarks VGG16, ResNet50 and InceptionV3 across 8,300+ curated images and 8+ waste categories — served through a Flask app with real-time uploads and YouTube-powered recycling guidance.",
    tech: ["TensorFlow", "VGG16", "ResNet50", "InceptionV3", "Flask", "PIL", "Matplotlib"],
    features: [
      "90%+ multi-class accuracy",
      "Transfer learning + fine-tuning",
      "Real-time image upload API",
      "YouTube reuse guidance layer",
    ],
    cover: "enviroclass",
    github: "https://github.com/prvishal16",
    live: "https://github.com/prvishal16",
    accent: "#ff2a2a",
  },
  {
    id: "graftluminex",
    title: "GraftLuminex Intelligence",
    tagline: "NLP Transplant Success Predictor",
    category: "AI · NLP + Medical",
    description:
      "An NLP-driven LSTM system that predicts organ transplant success from clinical patient records — layered with confidence-score calibration, ROC-AUC evaluation and real-time risk segmentation for post-op decision support.",
    tech: ["PyTorch", "LSTM", "SpaCy", "NLTK", "Scikit-learn", "Flask", "JavaScript"],
    features: [
      "20% accuracy uplift",
      "35% faster processing",
      "Confidence-calibrated scoring",
      "Real-time risk segmentation",
    ],
    cover: "graftluminex",
    github: "https://github.com/prvishal16",
    live: "https://github.com/prvishal16",
    accent: "#ff2a2a",
  },
  {
    id: "netoptix",
    title: "NetOptiX-AI",
    tagline: "AI-Enhanced Network Routing",
    category: "AI · Systems",
    description:
      "A hybrid AI routing engine that adaptively steers traffic across 100+ network nodes — lifting throughput, shrinking latency and cutting packet loss under constrained conditions where classical routing degrades.",
    tech: ["Python", "Reinforcement Learning", "NetworkX", "NumPy", "Matplotlib"],
    features: [
      "30% higher throughput",
      "30% lower routing delay",
      "40% packet-loss reduction",
      "35% SLA compliance gain",
    ],
    cover: "netoptix",
    github: "https://github.com/prvishal16/NetOptiX-AI-Enhanced-Network-Routing-and-Traffic-Control-Using-Deep-Packet-Inception-RL.git",
    live: "https://github.com/prvishal16/NetOptiX-AI-Enhanced-Network-Routing-and-Traffic-Control-Using-Deep-Packet-Inception-RL.git",
    accent: "#ff2a2a",
  },
  {
    id: "backrise",
    title: "BackRise Nexus",
    tagline: "Full-Stack Crowdfunding Platform",
    category: "Personal · FinTech",
    description:
      "A robust MERN crowdfunding platform with real-time messaging, campaign analytics and a PCI-DSS compliant Stripe/Razorpay payment pipeline — tokenized encryption and adaptive failure recovery pushed transaction success rate up by 25%.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Talend API", "Razorpay", "JWT"],
    features: [
      "Real-time messaging & onboarding",
      "Tokenized PCI-DSS payments",
      "Campaign analytics & trust signals",
      "Adaptive failure recovery (+25%)",
    ],
    cover: "backrise",
    github: "https://github.com/prvishal16/Backrise---CROWDFUNDING-PLATFORM-.git",
    live: "https://crowdfunding-git-main-prvishal200416-7342s-projects.vercel.app/",
    accent: "#ff2a2a",
  },
  {
    id: "codex",
    title: "CodeX Editor",
    tagline: "Real-Time Collaborative IDE",
    category: "Personal · Developer Tool",
    description:
      "A live collaborative code editor letting multiple developers edit and sync code together over WebSockets — with secure sessions, isolated rooms and hardened backend state handling that eliminates race conditions.",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "JWT"],
    features: [
      "Multi-user live editing",
      "15% lower update latency",
      "Isolated secure sessions",
      "10% better sync reliability",
    ],
    cover: "codex",
    github: "https://github.com/prvishal16/CodeX-Editor---Lets-code-Together",
    live: "https://code-x-editor-lets-code-together.vercel.app/",
    accent: "#ff2a2a",
  },
  {
    id: "friday",
    title: "F.R.I.D.A.Y",
    tagline: "Fully Offline Agentic AI Assistant",
    category: "AI · Agentic",
    description:
      "A privacy-first offline AI assistant powered by phi3:mini and deepseek-coder — with intelligent task routing across document analysis, mock interviews, voice transcription and exam answer generation, all running locally.",
    tech: ["Python", "Streamlit", "Ollama", "Phi-3 Mini", "DeepSeek-Coder"],
    features: [
      "100% offline & private",
      "Agentic task routing",
      "Voice + document pipelines",
      "Mock interview & exam modes",
    ],
    cover: "friday",
    github: "https://github.com/prvishal16/F.R.I.D.A.Y.git",
    live: "https://github.com/prvishal16/F.R.I.D.A.Y.git",
    accent: "#ff2a2a",
  },
  {
    id: "fincortex",
    title: "FinCortex Engine",
    tagline: "Cognitive Financial Analytics",
    category: "AI · FinTech",
    description:
      "A cognitive financial analytics system built on Flask + MySQL + SQLAlchemy ORM with Plotly Dash dashboards, voice-controlled analytics and Airflow-automated pipelines — driving a 35% response efficiency lift and personalized guidance.",
    tech: ["Flask", "MySQL", "SQLAlchemy", "SK-Learn", "Plotly Dash", "Pocketsphinx", "Google API"],
    features: [
      "Voice-query analytics",
      "Automated Airflow pipelines",
      "35% efficiency uplift",
      "Personalized recommendations",
    ],
    cover: "fincortex",
    github: "https://github.com/prvishal16/NeuroSpend-AI-Cognitive-Financial-Behavior-Analytics-System",
    live: "https://github.com/prvishal16/NeuroSpend-AI-Cognitive-Financial-Behavior-Analytics-System",
    accent: "#ff2a2a",
  },
];


export const education = [
  {
    school: "Malla Reddy College of Engineering and Technology",
    degree: "B.Tech, Computer Science & Engineering (AI & ML)",
    period: "2022 — 2026",
    detail: "GPA: 8.76 / 10",
  },
  {
    school: "Deeksha Junior College",
    degree: "Senior Secondary Education",
    period: "2020 — 2022",
    detail: "Percentage: 87.6%",
  },
];

export const certifications = [
  "AWS Machine Learning Foundations & Cloud Foundations — AWS Academy Graduate",
  "Data Structures and Management with MySQL — Meta",
  "Test-Driven Development in Java — Coursera",
];

// Knowledge base the on-site AI assistant draws answers from.
export const assistantKnowledge = {
  greeting:
    "Hey, I'm Vishal's portfolio assistant 👋 Ask me about his skills, experience, projects, education or how to get in touch.",
  qa: [
    {
      keywords: ["skill", "tech", "stack", "language", "tool"],
      answer:
        "Vishal's core stack is Java, Python, the MERN stack (React.js, Node.js, Express.js & MongoDB), plus TypeScript, SQL, Next.js, Tailwind CSS, Material UI, Spring Boot, FastAPI, Flask, REST APIs, PostgreSQL, MySQL, SQLite, Docker, Git, GitHub, Jira, VS Code, Postman and AWS — backed by strong fundamentals in Data Structures & Algorithms, OOP, DBMS, Operating Systems, SDLC and Agile. On the AI side he works with Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Explainable AI and Agentic AI using PyTorch, TensorFlow, LangChain, OpenRouter, MediaPipe and OpenCV. He's also AWS Machine Learning certified.",
    },
    {
      keywords: ["experience", "work", "job", "intern", "company", "hdm", "pranaga", "ey", "vaultofcodes", "techsaksham", "infosys", "microsoft", "sap"],
      answer:
        "Vishal's work experience runs on two tracks. Software Engineering: AI Full-Stack Software Intern at HDM Innovations Private Limited (Jul–Aug 2026) contributing 12+ production modules to ACA/MA healthcare applications with React, FastAPI, MongoDB and Jira; currently Full-Stack Developer Intern at PraNaga Private Limited (May 2026–Present); Web Developer Intern at VaultofCodes (Mar–Apr 2025) on a real-time collaborative CodeX Editor; Full-Stack Intern at EY Global Delivery Services (Feb–Mar 2025) on a MERN recipe platform. AI Engineering: Artificial Intelligence Developer Intern with Microsoft & SAP under the TechSaksham CSR Program (Jan–Mar 2025) building a CNN + VGG16 Potato Leaf Disease Detection system at 92%+ accuracy; Deep Learning Developer Intern at Infosys Springboard v5.0 (Oct–Dec 2024) building DigitWise with MLP, CNN and LeNet-5 (96.16% MNIST).",
    },
    {
      keywords: ["project", "talentforge", "deploy.ai", "deployai", "workloom", "gethired", "built", "build"],
      answer:
        "Some highlights: TalentForge AI (Multi-Model Autonomous TalentOS with resume intelligence, ATS scoring and browser-based ML interview analytics), Deploy.AI (LLM-powered site generator with one-click deploy), WorkLoom (real-time freelance platform with WebSockets + Stripe), and GetHired (role-based recruitment platform). Check the Projects section for details and GitHub links!",
    },
    {
      keywords: ["education", "college", "degree", "cgpa", "gpa", "mrce", "study"],
      answer:
        "Vishal is a 2026 B.Tech graduate in Computer Science (AI & ML) from Malla Reddy College of Engineering and Technology, Hyderabad, with a CGPA of 8.76/10.",
    },
    {
      keywords: ["certif", "aws", "meta", "coursera"],
      answer:
        "He holds AWS Machine Learning & Cloud Foundations (AWS Academy), Data Structures & Management with MySQL (Meta), and Test-Driven Development in Java (Coursera).",
    },
    {
      keywords: ["contact", "email", "phone", "reach", "hire", "linkedin", "github"],
      answer:
        "You can reach Vishal at prvishal200416@gmail.com. He's also on GitHub and LinkedIn as @prvishal16 — or just use the contact form below!",
    },
    {
      keywords: ["resume", "cv", "download"],
      answer:
        'Click "Download Resume" in the navbar or hero — you will get to choose between his Software Engineering profile (Full-Stack, Java, Python, MERN, SDE) and his Artificial Intelligence profile (ML, LLMs, CV, NLP, GenAI). You can also preview each as a book before downloading.',
    },
    {
      keywords: ["hello", "hi", "hey", "yo"],
      answer: "Hello! I'm here to help you explore Vishal's portfolio — ask away.",
    },
    {
      keywords: ["who", "about", "vishal"],
      answer:
        "Vishal is a Full Stack Developer and AI Engineer based in Hyderabad who builds intelligent software end-to-end. His core stack is Java, Python, the MERN stack with TypeScript, Next.js and real-time systems, woven together with an intelligence layer of LLMs, RAG, computer vision and autonomous agents. He graduated from MRCET with a CGPA of 8.76/10 in Computer Science (AI & ML), currently builds production interfaces at PraNaga, and ships products where full-stack engineering and AI aren't two things — they're one.",
    },
  ],
  fallback:
    "I don't have a specific answer for that yet — but you can explore the Skills, Experience and Projects sections above, or reach Vishal directly at prvishal200416@gmail.com.",
};
