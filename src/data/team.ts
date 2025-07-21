export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "john-doe",
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Former engineer at AWS with 10+ years experience in distributed systems and CDN technologies. Passionate about making high-performance web infrastructure accessible to developers.",
    image: "/team/john-doe.jpg",
    social: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe"
    }
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    role: "CTO",
    bio: "Expert in edge computing and caching systems. Previously led infrastructure teams at Cloudflare and Fastly. Drives the technical vision and architecture of Snapbyte.",
    image: "/team/jane-smith.jpg",
    social: {
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith"
    }
  },
  {
    id: "mike-johnson",
    name: "Mike Johnson",
    role: "Lead Engineer",
    bio: "Full-stack developer with expertise in performance optimization and developer experience. Focuses on making Snapbyte's API intuitive and powerful for developers.",
    image: "/team/mike-johnson.jpg",
    social: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson"
    }
  },
  {
    id: "sarah-wilson",
    name: "Sarah Wilson",
    role: "Developer Relations",
    bio: "Developer advocate with a passion for helping teams build better, faster applications. Creates content and tools to help developers get the most out of Snapbyte.",
    image: "/team/sarah-wilson.jpg",
    social: {
      twitter: "https://twitter.com/sarahwilson",
      linkedin: "https://linkedin.com/in/sarahwilson"
    }
  }
];

export const companyInfo = {
  founded: "2024",
  headquarters: "San Francisco, CA",
  employees: "10-50",
  mission: "To make high-performance web infrastructure accessible to every developer, without the complexity of traditional CDN solutions.",
  vision: "A world where every application can achieve lightning-fast performance, regardless of scale or technical expertise.",
  values: [
    {
      title: "Developer-First",
      description: "We build tools that developers love to use, with intuitive APIs and comprehensive documentation."
    },
    {
      title: "Performance",
      description: "Speed and reliability are at the core of everything we do. Your users deserve the fastest experience."
    },
    {
      title: "Simplicity",
      description: "Complex infrastructure should be simple to use. We handle the complexity so you can focus on building."
    },
    {
      title: "Transparency",
      description: "Clear pricing, no hidden fees, and honest communication about what we can and cannot do."
    }
  ]
};
