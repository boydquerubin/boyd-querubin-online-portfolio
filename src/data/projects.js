/**
 * Personal & School Projects data.
 * To add a new project, copy one entry and fill in your details.
 * Gradients: pick any CSS gradient — each card gets its own color identity.
 */
const projects = [
  {
    id: "rubyx-qube",
    emoji: "🎮",
    category: "Full-Stack Capstone",
    title: "Rubyx Qube Trivia App",
    description:
      "An interactive trivia web application where users can create an account, answer timed questions, and track high scores. Built to practice React, user authentication, Supabase database interactions, and game logic.",
    tags: ["React", "JavaScript", "Supabase", "CSS"],
    gradient: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
    live: "https://rubyx-qube-trivia.vercel.app/",
    github:
      "https://github.com/boydquerubin/devmountain-react-capstone-trivia-app",
  },
  {
    id: "budbudget",
    emoji: "💰",
    category: "React Application",
    title: "BudBudget — Savings App",
    description:
      "A budgeting web application for organizing income, expenses, and savings goals. Focused on form handling, state management, reusable components, and presenting financial data in a clean, user-friendly interface.",
    tags: ["React", "JavaScript", "Supabase", "State Management"],
    gradient: "linear-gradient(135deg, #059669, #0d9488)",
    live: "https://budbudget.netlify.app/",
    github: "https://github.com/boydquerubin/devmountain-capstone-project",
  },
  {
    id: "filipino-home",
    emoji: "🍚",
    category: "Responsive Website",
    title: "A Taste of Filipino Home",
    description:
      "A responsive website celebrating Filipino cuisine through featured dishes and cultural storytelling. Combined web development with personal narrative, layout design, and mobile-friendly styling.",
    tags: ["HTML", "JavaScript", "CSS", "Responsive"],
    gradient: "linear-gradient(135deg, #d97706, #ea580c)",
    live: "https://boydquerubin.github.io/wdd131/project/index.html",
    github: "https://github.com/boydquerubin/wdd131/tree/main/project",
  },
  {
    id: "chamber",
    emoji: "🏛️",
    category: "Data-Driven Layout",
    title: "Meridian Chamber of Commerce",
    description:
      "A chamber of commerce site showcasing local businesses and community information. Practiced JSON data rendering, CSS Grid, responsive design, and multi-page navigation structure.",
    tags: ["HTML", "CSS Grid", "JavaScript", "JSON"],
    gradient: "linear-gradient(135deg, #0369a1, #0891b2)",
    live: "https://boydquerubin.github.io/wdd231/chamber/index.html",
    github: "https://github.com/boydquerubin/wdd231/tree/main/chamber",
  },
  {
    id: "ecommerce",
    emoji: "🛍️",
    category: "Ecommerce Practice",
    title: "Sample Ecommerce Store",
    description:
      "A sample online store demonstrating product browsing, shopping cart interactions, and a clean customer-facing layout. Built around JavaScript functionality, localStorage, and reusable page structure.",
    tags: ["JavaScript", "CSS", "LocalStorage", "Responsive"],
    gradient: "linear-gradient(135deg, #7c3aed, #db2777)",
    live: "https://boydquerubin.github.io/wdd231/project/index.html",
    github: "https://github.com/boydquerubin/wdd231/tree/main/project",
  },
  // ── Add future projects below ──────────────────────────────────────────────
  // {
  //   id: "my-next-project",
  //   emoji: "🚀",
  //   category: "Category Label",
  //   title: "Project Name",
  //   description: "Short description of what you built and what you learned.",
  //   tags: ["Tag1", "Tag2", "Tag3"],
  //   gradient: "linear-gradient(135deg, #startColor, #endColor)",
  //   live: "https://live-url.com",
  //   github: "https://github.com/...",
  // },
];

export default projects;
