import {
  createFileRoute,
  useCanGoBack,
  useRouter,
} from "@tanstack/react-router";
import { PROJECT_DATA } from "@/json/projectData";
import FixedMenuBox from "@/components/ui/FixedMenuBox";
import { FiArrowLeft } from "react-icons/fi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/ProjectCard";

export const Route = createFileRoute("/projects/$projectId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { history, navigate } = useRouter();
  const { projectId } = Route.useParams();
  const canGoBack = useCanGoBack();
  const project = PROJECT_DATA.find((p) => p.id === parseInt(projectId));
  console.log(project);
  return (
    <div className=" py-24  bg-[url(/plus.svg)] bg-center bg-fixed min-h-screen">
      <FixedMenuBox containerStyle="group">
        <FiArrowLeft
          className=" text-2xl  m-4  group-hover:cursor-pointer group-hover:scale-110 transition-all duration-300 group-hover:text-primary"
          onClick={() => {
            if (canGoBack) {
              history.back();
            } else {
              navigate({ to: "/" });
            }
          }}
        />
      </FixedMenuBox>

      <div className="container mx-auto px-4 md:px-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">{project?.name}</h1>
        <h2 className="text-2xl font-bold mb-12 text-center">
          {project?.description}
        </h2>
        <Card className="w-full h-full flex flex-col md:flex-row">
          <CardHeader className="flex-1 relative">
            <div className="w-32 h-32 rounded-full bg-[#ffff00] absolute -top-14 -left-12 text-center flex items-center justify-center border-border border-2 -rotate-20  shadow-shadow ">
              <p className="text-black font-bold">Taken with PixelSnag!</p>
            </div>
            <img
              src={project?.heroImage}
              alt={project?.name}
              className="w-full h-full object-cover rounded-sm border-2 border-border shadow-shadow "
            />
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project?.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">What is it?</h3>
                <p>{project?.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">My Contributions</h3>
                <p>{project?.myContributions}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Links</h3>
                <div className="flex flex-wrap gap-2">
                  {project?.links.map((link) => (
                    <Button key={link.name} variant={link.variant}>
                      {link.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-12">
          <h1 className="text-2xl font-bold mb-4">Other Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECT_DATA.filter((p) => p.id !== project?.id).map((project) => (
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
      </div>
    </div>
  );
}
