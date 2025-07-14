import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { BLOG_DATA } from "@/json/blogData";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { navigate } = useRouter();
  return (
    <div className="w-full h-full bg-[url(/current.svg)] bg-fixed min-h-screen">
      <div className="container mx-auto py-24">
        <h1 className="text-4xl font-bold mb-4 text-center">My Blog</h1>
        <h2 className="text-2xl font-bold mb-12 text-center">
          Thoughts on building, debugging, and shipping.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
          {BLOG_DATA.map((blog) => (
            <Card key={blog.id}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <p className="text-sm text-gray-500">{blog.timestamp}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {blog.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-8">
                  {blog.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-secondary-background text-gray-800"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  className="w-full"
                  onClick={() =>
                    navigate({
                      to: "/blog/$postId",
                      params: { postId: blog.id.toString() },
                    })
                  }
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
