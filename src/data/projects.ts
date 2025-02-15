interface Project {
  title: string;
  description: string;
  icon: string
  link: string 
  // Add other properties as needed
}

export const projects: Project[] = [
    {
      title: "E-Commerce Dashboard",
      description: "A powerful React-based e-commerce admin dashboard with real-time analytics and inventory management.",
      icon: "🛍️",
      link: "#"
    },
    {
      title: "AI-Powered Blog Generator",
      description: "A Next.js application that generates blog content using OpenAI's GPT model, featuring markdown support and SEO optimization.",
      icon: "🤖",
      link: "#"
    },
    {
      title: "Crypto Tracker Web App",
      description: "A cryptocurrency price tracking app with live updates, portfolio management, and news aggregation.",
      icon: "🌐",
      link: "#"
    }
  ];