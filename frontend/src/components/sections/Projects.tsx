import ProjectCard from "../ui/ProjectCard";
import { PROJECT_DATA } from "@/json/projectData";

function Projects() {
  return (
    <div
      className="  py-12 bg-[url(/graph-paper.svg)] bg-center bg-fixed"
      id="projects"
    >
      <div className=" md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {PROJECT_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            image={project.image}
            tags={project.tags}
            index={project.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
