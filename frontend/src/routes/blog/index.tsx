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
export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

const BLOG_DATA = [
  {
    id: 1,
    title: "Why I Built PixelSnag",
    description:
      "A behind-the-scenes look at the inspiration and tech stack behind PixelSnag.",
    content:
      "Building PixelSnag was born out of a frustration with clunky screenshot tools. I wanted something fast, flexible, and cross-platform...",
    image: "/PixelSnag.png",
    timestamp: "2024-11-12",
    tags: [
      "founder story",
      "indie dev",
      "screenshot tool",
      "react",
      "electron",
    ],
  },
  {
    id: 2,
    title: "10 UI Tips for Indie Devs",
    description: "Level up your app design with these practical UI/UX tips.",
    content:
      "Design doesn’t have to be complicated. These 10 quick tips will help you improve clarity, consistency, and flow in your app’s interface...",
    image: "/PixelSnag.png",
    timestamp: "2024-12-05",
    tags: ["ui design", "ux", "indie hacking", "design tips", "frontend"],
  },
  {
    id: 3,
    title: "Launching on macOS First: Here’s Why",
    description:
      "A breakdown of why we prioritized macOS for PixelSnag's initial release.",
    content:
      "Code signing on macOS was more straightforward, and our early user base leaned toward macOS. Here's how we made the decision...",
    image: "/PixelSnag.png",
    timestamp: "2025-01-15",
    tags: [
      "macOS",
      "app launch",
      "code signing",
      "release strategy",
      "indie dev",
    ],
  },
  {
    id: 4,
    title: "How I Integrated Stripe Subscriptions in a Weekend",
    description:
      "A step-by-step breakdown of implementing Stripe subscriptions with React and Supabase.",
    content:
      "Integrating Stripe wasn’t as painful as I thought. Here’s how I connected pricing, auth, and billing flows in under 48 hours...",
    image: "/PixelSnag.png",
    timestamp: "2025-02-02",
    tags: ["stripe", "subscriptions", "react", "supabase", "saas"],
  },
  {
    id: 5,
    title: "Growing PixelSnag’s Reach with TikTok Ads",
    description:
      "What I learned running my first ad campaigns on TikTok and Instagram.",
    content:
      "Creating compelling ad creatives was just the start. Here’s how I tracked conversions, tested hooks, and adjusted budgets...",
    image: "/PixelSnag.png",
    timestamp: "2025-03-18",
    tags: [
      "marketing",
      "tiktok ads",
      "instagram",
      "user acquisition",
      "growth",
    ],
  },
];

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
