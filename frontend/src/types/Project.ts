import type { ProjectLink } from "./ProjectLink";

export interface Project {
  id: number;
  name: string;
  description: string;
  myContributions: string;
  image: string;
  heroImage: string;
  tags: string[];
  links: ProjectLink[];
}
