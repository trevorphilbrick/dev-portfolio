import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full bg-[url(/current.svg)] min-h-screen">
      <div className="container mx-auto py-24">
        <h1 className="text-4xl font-bold mb-4 text-center">My Blog</h1>
        <h2 className="text-2xl font-bold mb-12 text-center">
          Thoughts on building, debugging, and shipping.
        </h2>
      </div>
    </div>
  );
}
