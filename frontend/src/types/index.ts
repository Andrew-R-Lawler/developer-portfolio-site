export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
}
