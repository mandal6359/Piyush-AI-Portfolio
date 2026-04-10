// ============================================
// PORTFOLIO CONFIG — Edit everything here
// Changes reflect across the entire site
// ============================================

const portfolio = {
  // Personal Info
  name: "Piyush Prabhakar Mandal",
  title: "AI / ML Developer",
  roles: [
    "AI / ML Developer",
    "Data Scientist",
    "Cloud Enthusiast",
    "Python Developer",
    "Problem Solver",
  ],
  bio: "Building intelligent ML systems, data dashboards and AI-powered applications that solve real-world problems. Passionate about turning data into decisions.",
  bioLong:
    "I'm an AI/ML Developer and Data Science enthusiast passionate about building systems that learn, adapt, and solve real-world problems at scale. From fraud detection systems to credit risk models, I work across the full ML pipeline — data wrangling, model training, evaluation, and deployment.",
  location: "India 🇮🇳",
  focus: "Machine Learning & AI",
  photo: "/piyush.jpeg",
  resume: "/Piyush_Resume_2026.pdf",
  available: true, // shows "Open to opportunities" badge

  // Social Links — update these anytime
  socials: {
    github: "https://github.com/mandal6359",
    githubUsername: "mandal6359",
    linkedin: "https://www.linkedin.com/in/piyushmandal/",
    linkedinHandle: "piyushmandal",
    credly: "https://www.credly.com/users/piyush-prabhakar-mandal",
    credlyHandle: "piyush-prabhakar-mandal",
    email: "piyushmandal6359@gmail.com",
    whatsapp: "https://wa.me/916359174426",
    whatsappNumber: "+91 63591 74426",
  },

  // Stats shown in About section
  stats: [
    { value: "6+", label: "ML Projects" },
    { value: "5+", label: "Certifications" },
    { value: "3+", label: "Tech Stacks" },
    { value: "37+", label: "GitHub Commits" },
  ],

  // Projects
  projects: [
    {
      title: "Fraud Detection ML System",
      description:
        "End-to-end ML pipeline analyzing financial transactions to detect fraud using Logistic Regression, Random Forest & XGBoost. Deployed via FastAPI.",
      tech: ["Python", "XGBoost", "FastAPI", "Scikit-Learn", "Pandas"],
      category: "ML",
      github: "https://github.com/mandal6359/fraud-detection-ml",
      color: "from-cyan-500 to-blue-600",
      icon: "🛡️",
    },
    {
      title: "Car Price Prediction",
      description:
        "Regression model predicting used car prices based on features like brand, year, mileage and fuel type with high accuracy.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Jupyter"],
      category: "ML",
      github: "https://github.com/mandal6359/Car_Price_Prediction_Model",
      color: "from-purple-500 to-pink-600",
      icon: "🚗",
    },
    {
      title: "Credit-Wise Loan System",
      description:
        "AI-powered system predicting loan approval using machine learning, analyzing credit history, income and risk factors.",
      tech: ["Python", "ML", "Jupyter", "Pandas"],
      category: "AI",
      github: "https://github.com/mandal6359/credit-wise-loan-system",
      color: "from-green-500 to-teal-600",
      icon: "💳",
    },
    {
      title: "EXECOS-AI",
      description:
        "AI-powered execution system built with TypeScript. Active development with 17 commits in April 2026.",
      tech: ["TypeScript", "AI", "Next.js"],
      category: "AI",
      github: "https://github.com/mandal6359/EXECOS-AI",
      color: "from-orange-500 to-red-600",
      icon: "🤖",
      badge: "Latest",
    },
    {
      title: "Python File Management System",
      description:
        "A robust file management system built in Python with features for organizing, searching and managing files efficiently.",
      tech: ["Python", "CLI", "OS Module"],
      category: "Tools",
      github: "https://github.com/mandal6359/Python_File_Mangment_System",
      color: "from-yellow-500 to-orange-600",
      icon: "📁",
    },
    {
      title: "T20 World Cup Dashboard",
      description:
        "Interactive Power BI dashboard analyzing T20 World Cup statistics, player performance and match insights.",
      tech: ["Power BI", "Python", "Data Analysis"],
      category: "Data",
      github: "https://github.com/mandal6359",
      color: "from-pink-500 to-rose-600",
      icon: "🏏",
    },
  ],

  // Certifications
  certifications: [
    {
      title: "Google Cloud Associate",
      issuer: "Google Cloud",
      icon: "☁️",
      color: "from-blue-500 to-cyan-500",
      year: "2024",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera / DeepLearning.AI",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      year: "2024",
    },
    {
      title: "Python for Data Science",
      issuer: "IBM / Coursera",
      icon: "🐍",
      color: "from-yellow-500 to-orange-500",
      year: "2023",
    },
    {
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      icon: "📊",
      color: "from-green-500 to-teal-500",
      year: "2023",
    },
    {
      title: "SQL & Database Management",
      issuer: "LinkedIn Learning",
      icon: "🗄️",
      color: "from-cyan-500 to-blue-500",
      year: "2023",
    },
  ],
};

export default portfolio;
