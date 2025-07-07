import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Route as baseRoute } from "../index";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  console.log(Route);
  const navigate = useNavigate();

  navigate({ to: baseRoute.to });
  return null;
}
