export const services = [
  { n: '01', title: 'AI Lead Conversion Systems', desc: 'Capture enquiries, qualify leads, organize follow-ups, and create smoother appointment workflows.', detail: 'Turn every enquiry into a clear next step with structured capture, qualification, pipeline visibility, and follow-up workflows.', tags: ['Lead capture', 'Qualification', 'CRM pipelines'] },
  { n: '02', title: 'CRM & Workflow Automation', desc: 'Build structured customer pipelines, notifications, and automated business workflows.', detail: 'Connect the tools your team already uses and reduce repetitive work with reliable, observable processes.', tags: ['GoHighLevel', 'Workflow design', 'Integrations'] },
  { n: '03', title: 'AI Chatbots & Voice Agents', desc: 'Create chat and voice experiences that support enquiries and collect lead information.', detail: 'Design guided conversations for common questions, lead intake, and handoff to a human when needed.', tags: ['Chat experiences', 'Voice workflows', 'Human handoff'] },
  { n: '04', title: 'Website Design & Development', desc: 'Modern, responsive websites focused on user experience, performance, and business goals.', detail: 'From information architecture to polished responsive interfaces, build a website that is useful and clear.', tags: ['React', 'Responsive UI', 'SEO foundations'] },
  { n: '05', title: 'Full-Stack & SaaS Development', desc: 'Web applications, dashboards, APIs, authentication, and database-backed products.', detail: 'Build the product foundations: frontend experiences, backend services, data models, and integrations.', tags: ['React', 'Node.js', 'Python'] },
  { n: '06', title: 'E-commerce Development', desc: 'Tailored online shopping experiences with product management and checkout integrations.', detail: 'Create clear product discovery and shopping flows with the integrations appropriate to your business.', tags: ['Catalogues', 'Checkout', 'Storefronts'] },
  { n: '07', title: 'API & AI Integrations', desc: 'Connect applications, third-party services, and AI capabilities through practical integrations.', detail: 'Make systems work together through well-defined APIs, thoughtful error handling, and useful automation.', tags: ['REST APIs', 'OpenAI API', 'Third-party tools'] },
  { n: '08', title: 'Guest Posting & SEO Outreach', desc: 'Support content outreach and digital visibility through relevant publishing opportunities.', detail: 'Organize relevant outreach and publishing workflows without promising rankings or guaranteed outcomes.', tags: ['Research', 'Outreach', 'Publishing'] },
  {
  number: "09",
  title: "Android App Development",
  description:
    "Android application development focused on useful features, intuitive user experiences, and reliable functionality for businesses and digital products.",
  category: "Mobile Development",
  features: [
    "Android application development",
    "User-friendly mobile interfaces",
    "API and backend integration",
    "Testing and performance improvements",
    "App maintenance and updates"
  ]
}
]

export type Project = {
  title: string;
  category: string;
  description: string;
  url?: string;
  kind: string;
  tech: string[];
  featured?: boolean;
  image?: string;
}
export const projects: Project[] = [
  { title: 'AI Roofing Voice Agent', category: 'AI Automation', description: 'A voice receptionist for roofing businesses, designed to handle incoming enquiries and support lead capture.', url: 'https://ai-voice-agent-roofing.vercel.app/', kind: 'Demo', tech: ['Voice AI', 'Lead capture'], image: '/projects/images/ai-roofing-voice-agent1.png', featured: true },
  { title: 'NovaPay', category: 'Fintech', description: 'A fintech and payments product focused on clear money-movement interfaces.', kind: 'LIVE', tech: ['React', 'UI design'], image: '/projects/images/novapay.png' },
  { title: 'Luma Stay', category: 'Travel', description: 'A luxury travel and accommodation website presenting stays with an editorial feel.', kind: 'LIVE', tech: ['Web design', 'React'],image: '/projects/images/luma-stay.png' },
  { title: 'Savora', category: 'Food', description: 'A food-related web product built around browsing and discovery.', kind: 'LIVE', tech: ['React', 'Discovery'],image: '/projects/images/savora.png' },
  { title: 'FitPulse', category: 'Wellness', description: 'A fitness and wellness web product for presenting programs and routines.', kind: 'LIVE', tech: ['React', 'Responsive UI'],image: '/projects/images/fitpulse.png' },
  { title: 'Kora', category: 'E-commerce', description: 'A full-stack e-commerce store with product listing and shopping flows.', url: 'https://code-alpha-ecommerce-store-two.vercel.app/', kind: 'LIVE', tech: ['E-commerce', 'Full-stack'],image: '/projects/images/kora.png' },
  { title: 'Verdant', category: 'Web Development', description: 'A sustainability and nature-themed website.', kind: 'LIVE', tech: ['Next.js', 'Web design'],image: '/projects/images/verdant.png' },
  { title: 'Aurelia Escapes', category: 'Travel', description: 'A luxury travel website showcasing curated destinations.', url: 'https://aurelia-escapes-travel.vercel.app/', kind: 'LIVE', tech: ['Editorial UI', 'Travel'],image: '/projects/images/aurelia-escapes.png' },
  { title: 'Ripple Social', category: 'Social', description: 'A social platform exploring feeds and profiles.', url: 'http://ripple-social-phi.vercel.app/', kind: 'LIVE', tech: ['React', 'Social UI'],image: '/projects/images/ripple-social.png' },
  { title: 'StackIt.io', category: 'SaaS', description: 'A project management SaaS for organizing tasks and teams.', url: 'https://stackit-io.vercel.app/', kind: 'LIVE', tech: ['SaaS', 'Dashboard'],image: '/projects/images/stackit.png' },
  { title: 'Verdant Dental Studio', category: 'Web Development', description: 'A modern dental clinic website presenting services and an appointment enquiry experience.', url: 'https://verdant-dental-studio.vercel.app/', kind: 'Demo', tech: ['React', 'Forms'],image: '/projects/images/verdant-dental-studio.png' }
]
export const categories = ['All', 'Android Applications', 'AI Automation', 'Fintech', 'Travel', 'Food', 'Wellness', 'E-commerce', 'SaaS', 'Web Development', 'Social']
export const technologies = {
  Frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'REST APIs'],
  Database: ['MongoDB', 'Mongoose', 'PostgreSQL', 'SQL'],
  'Frameworks & Integrations': ['Next.js', 'Stripe', 'OpenAI API', 'Vercel', 'Git', 'GitHub', 'GoHighLevel', 'Voice AI']
}
export const contact = {
  email: 'haseeb778nawaz@gmail.com',
  portfolio: 'https://buildwithhaseebthedev.vercel.app/',
  github: 'https://github.com/haseeb778nawaz-collab/',
  linkedin: 'https://www.linkedin.com/in/muhammad-haseeb-nawaz-61356542b/',
  facebook: 'https://www.facebook.com/codewithhaseeb',
  instagram: 'https://www.instagram.com/buildwithhaseebthedev?xtok=MTdhaXBmaWViaWx2MQ==',
  fiverr: 'https://www.fiverr.com/muhammadnawaz13',
  calendly: 'https://calendly.com/haseeb778nawaz'
}
