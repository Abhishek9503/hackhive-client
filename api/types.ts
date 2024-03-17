export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  date: string;
}

export interface JobState {
  jobs: Job[];
  loading: boolean;
  error: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  linkedInUrl?: string;
  githubUrl?: string;
  JobStatus?: "Looking" | "Not Looking" | "Open to Offers";
  About: "string";
}

export interface location {
  city: string;
  country: string;
}

export type JobType =
  | "Engineering"
  | "Marketing"
  | "Sales"
  | "Design"
  | "Product"
  | "Customer Support"
  | "Data"
  | "Finance"
  | "Operations"
  | "HR"
  | "Legal"
  | "Other";

export type JobRoles =
  | "Backend"
  | "Frontend"
  | "Fullstack"
  | "Mobile"
  | "DevOps"
  | "QA"
  | "Data"
  | "Security"
  | "Design"
  | "Product"
  | "Marketing"
  | "Sales"
  | "Customer Support"
  | "Finance"
  | "Operations"
  | "HR"
  | "Legal"
  | "Other";

export interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface Experience {
  WorkExperience: WorkExperience[];
  Education: Education[];
}

export interface WorkExperience {
  employerName: string;
  jobTitle: string;
  location?: string;
  jobDescription: string;
}

export type skills =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Node.js"
  | "Python"
  | "Ruby"
  | "Java"
  | "C#"
  | "C++"
  | "Go"
  | "Swift"
  | "Kotlin"
  | "PHP"
  | "SQL"
  | "NoSQL"
  | "HTML"
  | "CSS"
  | "SASS"
  | "LESS"
  | "GraphQL"
  | "REST"
  | "AWS"
  | "Azure"
  | "GCP"
  | "Docker"
  | "Kubernetes"
  | "Jenkins"
  | "Git"
  | "CI/CD"
  | "TDD"
  | "BDD"
  | "Agile"
  | "Scrum"
  | "Kanban"
  | "Jira"
  | "Confluence"
  | "Slack"
  | "Trello"
  | "Asana"
  | "Notion"
  | "Figma"
  | "Sketch"
  | "Adobe XD"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle"
  | "Adobe Creative Suite"
  | "Sketch"
  | "Figma"
  | "InVision"
  | "Zeplin"
  | "Abstract"
  | "Framer"
  | "Principle";
