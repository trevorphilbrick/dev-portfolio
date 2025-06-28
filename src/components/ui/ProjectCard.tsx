import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Badge } from "./badge";
import { Link } from "@tanstack/react-router";
import { Route as ProjectIdRoute } from "@/routes/projects/$projectId";
import { Button } from "./button";
function ProjectCard({
  title,
  image,
  tags,
  index,
}: {
  title: string;
  image: string;
  tags: string[];
  index: number;
}) {
  return (
    <Card className="w-full hover:scale-105 transition-all duration-300 group">
      <CardHeader>
        <img
          src={image}
          alt="Projects"
          className={`w-full object-cover border-2 border-border shadow-shadow rounded-sm group-hover:-translate-y-6 group-hover:scale-105 transition-all duration-300 ${
            index % 2 === 0 ? "group-hover:-rotate-10" : "group-hover:rotate-10"
          }`}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{title}</CardTitle>
        <div className="flex gap-2 mb-6 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-secondary-background">
              {tag}
            </Badge>
          ))}
        </div>

        <Link
          to={ProjectIdRoute.to}
          params={{ projectId: index.toString() }}
          className="w-full"
        >
          <Button variant="default" className="w-full">
            View Project
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
