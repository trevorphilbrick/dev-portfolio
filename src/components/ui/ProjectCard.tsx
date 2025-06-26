import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
function ProjectCard({
  title,
  description,
  image,
  tags,
  links,
  index,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  links?: {
    name: string;
    url: string;
    icon?: React.ReactNode;
    variant?: "default" | "reverse" | "neutral" | "noShadow";
    index?: number;
  }[];
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
        <div className="flex gap-2 mb-2 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <CardDescription className="mb-4 line-clamp-3">
          {description}
        </CardDescription>
        <div className="flex gap-2">
          {links &&
            links.map((link) => (
              <Button key={link.name} variant={link.variant} className="px-0">
                <a
                  href={link.url}
                  className={`px-4 py-2 ${
                    link.variant === "default"
                      ? "bg-default text-default-foreground"
                      : ""
                  }`}
                >
                  {link.icon} {link.name}
                </a>
              </Button>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
