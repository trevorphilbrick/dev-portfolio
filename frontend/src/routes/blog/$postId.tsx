import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  return <div>{postId}</div>;
}
