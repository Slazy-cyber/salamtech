import { Cross } from "recharts/types/shape/Cross"
import { text } from "stream/consumers"

export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "AI-Assistant-app",
    title: "AI Assistant App",
    category: "Web Application",
    shortDescription: "The AI Integration Project is a web application that leverages AI technologies to provide personalized user experiences.",
    description: [
      "The AI Assistant App is a comprehensive mobile application designed to streamline personal task management. It provides an intuitive interface for users to organize their tasks, set reminders, and receive intelligent suggestions.",
      "The app features AI-driven recommendations, chatbots, and data analysis tools to help users make informed decisions.",
      "With a focus on innovation and user-centric design, the AI Integration Project aims to showcase the potential of AI in modern web applications.",
    ],
    features: [
      "AI-driven recommendations for personalized content",
      "Chatbot integration for real-time user support",
      "Data analysis tools for insights and reporting",
      "User-friendly interface with intuitive navigation",
      "Integration with popular AI platforms and services",
      "Responsive design for use on any device",
      "Secure data handling and privacy features",
    ],
    technologies: ["React", "Next.js", "JavaScript", "Node.js", "Vercel", "Render", "API", "Tailwind CSS"],
    coverImage: "/AI-img1.jpg",
    thumbnailImage: "/AI-img3.jpg",
    gallery: [
      { url: "/AI-img1.jpg", caption: "Home Screen with AI Recommendations" },
      { url: "/AI-img2.jpg", caption: "AI Detail View" },
      { url: "/AI-img3.jpg", caption: "User Profile and Skills" },
      { url: "/AI-img4.jpg", caption: "Application Tracking Dashboard" },
    ],
    timeline: "2 weeks (Q2 2025)",
    role: "Frontend Developer",
    liveUrl: "https://salam-capital.onrender.com/transfer/",
    githubUrl: "https://github.com/Slazy-cyber/Salam-capital-frontend.git",
  },


  {
    id: 2,
    slug: "Banking-App",
    title: "Banking App",
    category: "Web Application",
    shortDescription:
      "Salam Capital is a full-featured online banking application that enables users to manage their finances from anywhere. The platform offers account management, fund transfers, bill payments, and transaction history, all within a user-friendly interface.",
    description: [
      "The Banking App is a powerful web application designed to help users manage their personal finances in one centralized location. It provides real-time insights into spending patterns, investment performance, and progress toward financial goals.",
      "Users can open accounts, view balances, and perform transactions in real-time. The app includes robust security features such as two-factor authentication and encrypted data storage to ensure user safety",
      "The application was designed with a focus on security, using bank-level encryption and authentication protocols to protect sensitive financial information.",
     " Additional features include budgeting tools, spending analytics, and instant notifications for all account activities. The platform is designed for scalability and reliability, supporting thousands of concurrent users.",
      "The Banking App was developed using modern web technologies, including React for the frontend and Node.js for the backend. The application is deployed on Vercel, ensuring high availability and performance.",
    ],
    features: [
      "Open and manage multiple bank accounts digitally",
      "Instant fund transfers and bill payments",
      "Real-time transaction notifications",
      "Detailed analytics for financial insights",
      "Mobile-responsive design for on-the-go access",
      "Integration with third-party financial services",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Express", "MongoDB", "Render", "Vercel"],
    coverImage: "/capitalBank.png",
    thumbnailImage: "/capitalBank.png",
    gallery: [
      { url: "/capitalBank2.png", caption: "Main Dashboard Overview" },
      { url: "/capitalBank3.png", caption: "Expense Analysis" },
      { url: "/capitalBank4.png", caption: "Investment Portfolio" },
      { url: "/capitalBank5.png", caption: "Financial Goals Tracker" }, 
    ],
    timeline: "2 months (Q3-Q4 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://salam-capital.onrender.com/transfer",
    githubUrl: "https://github.com/Slazy-cyber/Salam-capital-frontend.git",
  },


  {
    id: 3,
    slug: "Yes-FidelityMultiresources",
    title: "Yes-FidelityMultiresources",
    category: "Web Application",
    shortDescription:
      "YES-FIDELITYMULTIRESOURCES CONCEPT LIMITED is a forward-thinking enterprise focused on sustainable resource management, recycling, and agricultural development",
        description: [
      `*Our Services*

    *YES-FIDELITYMULTIRESOURCES CONCEPT LIMITED*
    provides reliable and environmentally friendly services for both homes and offices, including:

    *Home and Office Cleaning:* Professional cleaning services that ensure neat, hygienic, and well-maintained spaces for residential and corporate environments.

    *Waste Evacuation:* Efficient collection and proper disposal of household and office waste to keep surroundings clean and reduce environmental pollution.

    *Recyclable Materials Buying and Selling:* We buy and sell recyclable materials such as plastics, cartons, paper, and metals from homes, offices, and businesses, promoting a circular economy and reducing landfill waste.

    *Agricultural Services* : Engaging in crop production, agro-waste recycling, and support services for farmers and agribusinesses to enhance sustainable agriculture and food security.

    Our services are designed to deliver convenience, cleanliness, sustainability, and economic value to individuals, households, and organizations.`,
        ],
    features: [
      "Our company provides sustainable agricultural solutions",
      "encompassing the production, supply, and distribution of processed and unprocessed products ",
      "We also specialize in buying and selling recyclable materials like plastics, paper, cartons, and metals",
     "ditionally, our comprehensive cleaning services ensure hygienic, organized, and safe environments for homes and offices through efficient, tailored residential and corporate solutions.",
      
    ],
    technologies: ["React",   "Tailwind CSS",   "Vercel"],
    coverImage: "/Yes-fide1.png",
    thumbnailImage: "/Yes-fide.png",
    gallery: [
      { url: "/Yes-fide1.png", caption: "Main Dashboard Overview" },
      { url: "/Yes-fide2.png", caption: "Expense Analysis" },
      { url: "/Yes-fide3.png", caption: "Investment Portfolio" },
      { url: "/Yes-fide4.png", caption: "Financial Goals Tracker" },
    ],
    timeline: "2 months (Q3-Q4 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://yesfidelitymultipurpose.vercel.app/",
    githubUrl: "https://github.com/Slazy-cyber/yesfidelitymultipurpose.git",
  },


  {
    id: 4,
    slug: "CBT-Test-Engine",
    title: "CBT Test Engine",
    category: "Web Application",
    shortDescription:
      "CBT Test Engine is a web application designed to help users take computer-based tests with ease.",
    description: [
      "CBT Test Engine is a powerful web application designed to help users take computer-based tests in one centralized location. It provides real-time insights into test performance, results, and progress toward learning objectives.",
      "The application features a user-friendly interface that allows customers to schedule tests, track their performance in real-time, and receive notifications about their test status.",
      "Built with a focus on reliability and efficiency, the CBT Test Engine aims to provide a seamless experience for both customers and test administrators.",
    ],
    features: [
      "Test scheduling and management",
      "Real-time performance tracking",
      "Progress monitoring toward learning objectives",
      "Notification system for test updates",
      "User-friendly interface for test administration",
      "Comprehensive reporting and analytics",
    ],
    technologies: ["HTML/CSS", "Bootstrap", "Vercel", "JavaScript",  ],
    coverImage: "/Cbt.png",
    thumbnailImage: "/Cbt.png",
    gallery: [
      { url: "/Cbt.png", caption: "Main Dashboard Overview" },
      { url: "/Cbt.png1", caption: "Expense Analysis" },
      { url: "/Cbt.png", caption: "Investment Portfolio" },
      { url: "/Cbt.png4", caption: "Financial Goals Tracker" },
    ],
    timeline: "1 month (Q3-Q4 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://cbt-test-engine.vercel.app/",
    githubUrl: "https://github.com/Slazy-cyber/CBT-test-engine.git",
  },

  
  {
    id: 5,
    slug: "Todo-App",
    title: "Todo App",
    category: "Web Application",
    shortDescription:
      "Todo App is a web application designed to help users manage their tasks and to-do lists with ease.",
    description: [
      "The Todo Dashboard is a powerful web application designed to help users manage their tasks and projects in one centralized location. It provides real-time insights into task progress, deadlines, and team collaboration.",
      "Todo App is a powerful web application designed to help users manage their tasks and to-do lists in one centralized location.",
      "The dashboard features interactive charts and visualizations that make complex task data easy to understand at a glance. Users can connect multiple accounts, categorize tasks automatically, and receive personalized recommendations to improve their productivity.",
    ],
    features: [
      "Account aggregation from multiple task management tools",
      "Automated task categorization and tagging",
      "Project creation and deadline tracking",
      "Team collaboration features with real-time updates",
      "Goal setting with progress tracking",
      "Customizable reports and data exports",
      "Task insights and recommendations",
    ],
    technologies: ["Vercel", "HTML/CSS", "JavaScript", "Bootstrap"],
    coverImage: "/Todo-app1.jpg",
    thumbnailImage: "/Todo-app2.jpg",
    gallery: [
      { url: "/Todo-app3.jpg", caption: "Main Dashboard Overview" },
      { url: "/Todo-app4.jpg", caption: "Expense Analysis" },
      { url: "/Todo-app1.jpg", caption: "Investment Portfolio" },
      { url: "/Todo-app2.jpg", caption: "Financial Goals Tracker" },
    ],
    timeline: "2 months (Q3-Q4 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://to-do-self-phi-74.vercel.app/",
    githubUrl: "https://github.com/Slazy-cyber/To-do",
  },


  {
    id: 6,
    slug: "Google-Clone",
    title: "Google Clone",
    category: "Web Application",
    shortDescription:
      "Google Keep is a versatile and user-friendly note-taking service that is part of the free, web-based Google Docs Editors suite. It is designed for quickly capturing thoughts and ideas in a simple, organized, and easily accessible way. It's often compared to digital sticky notes due to its card-based interface and straightforward approach.",
    description: [
      "Google Clone is a powerful web application designed to help users search the web with ease. It provides real-time insights into search trends, personalized recommendations, and a user-friendly interface.",
      "The application features a minimalist design that allows users to focus on their search queries without distractions.",
      "Built with a focus on speed and efficiency, Google Clone aims to provide a seamless experience for all users.",
    ],
    features: [
      "Diverse Note Creation: You can create notes in various formats, including text, checklists, images, and audio recordings.",
      "Voice Transcription: A notable feature is its ability to automatically transcribe voice memos, turning spoken notes into text.",
      "Optical Character Recognition (OCR): Google Keep can extract text from images, which is incredibly useful for saving information from photos of documents, signs, or whiteboards.",
      "Organization and Search: To help you find notes quickly, you can:",
      "Color-code your notes with a variety of colors.",
      "Add labels to categorize notes by topic or project.",  
      "Pin important notes to the top of your list for quick access.",
      "Reminders: You can set time-based or location-based reminders on your notes, which integrate with your Google Calendar and other Google services.",
      "Collaboration: Google Keep allows you to share notes with others and collaborate in real-time on things like shopping lists or project plans.",
      "Cross-Platform Syncing: Your notes sync in real-time across all your devices, including web, Android, iOS, and Wear OS, ensuring your thoughts are always accessible.",  
      "Integration with Google Workspace: Keep integrates seamlessly with other Google services. For example, you can copy the text from a Keep note directly into a new Google Docs document."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Express", "MongoDB", "Render", "Vercel"],
    coverImage: "/google-clone4.jpg",
    thumbnailImage: "/google-clone3.jpg",
    gallery: [
      { url: "/google-clone2.jpg", caption: "Main Dashboard Overview" },
      { url: "/google-clone1.jpg", caption: "Expense Analysis" },
      { url: "/google-clone3.jpg", caption: "Investment Portfolio" },
      { url: "/google-clone4.jpg", caption: "Financial Goals Tracker" },
    ],
    timeline: "2 months (Q3-Q4 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://salam-capital.onrender.com/transfer",
    githubUrl: "https://github.com/Slazy-cyber/Salam-capital-frontend.git",
  },

]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  if (!slug) return undefined

  const normalize = (s: string) =>
    decodeURIComponent(s)
      .toLowerCase()
      .replace(/\s+/g, "-")

  const target = normalize(slug)

  return projects.find((project) => normalize(project.slug) === target)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
