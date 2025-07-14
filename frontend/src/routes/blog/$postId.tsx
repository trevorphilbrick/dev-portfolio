import { createFileRoute } from "@tanstack/react-router";
import { BLOG_DATA } from "@/json/blogData";
import { Card, CardContent } from "@/components/ui/card";
import Markdown, { MarkdownAsync } from "react-markdown";
import rehypeExpressiveCode from "rehype-expressive-code";

export const Route = createFileRoute("/blog/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  const currentBlogPost = BLOG_DATA.find(
    (post) => post.id === parseInt(postId)
  );
  return (
    <div className="w-full h-full bg-[url(/current.svg)] bg-fixed min-h-screen">
      <div className="container mx-auto py-24">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {currentBlogPost?.title}
        </h1>
        <Card>
          <CardContent>
            <MarkdownAsync rehypePlugins={[rehypeExpressiveCode]}>
              {currentBlogPost?.content}
            </MarkdownAsync>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
