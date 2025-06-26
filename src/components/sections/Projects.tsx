import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <div
      className="  py-12 bg-[url(/graph-paper.svg)] bg-center bg-fixed"
      id="projects"
    >
      <div className=" md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        <ProjectCard
          title="PixelSnag Desktop App"
          description="PixelSnag is a cross-platform tool with smart editing, AI-powered summaries, and seamless sharing, built for creators and devs."
          image="/PixelSnag.png"
          tags={["React", "Electron", "Python", "Supabase", "SQL"]}
          links={[
            {
              name: "Website",
              url: "https://pixelsnag.it.com/",
              variant: "neutral",
            },
            {
              name: "GitHub",
              url: "https://github.com/trevorphilbrick/pixelsnag",
              variant: "default",
            },
          ]}
          index={0}
        />
        <ProjectCard
          title="Pizza Hut Mobile App"
          description="Order your favorites fast with the Pizza Hut app. Customize pizzas, track deliveries, and access exclusive deals—all in one easy-to-use app."
          image="/PizzaHut.png"
          tags={["React Native", "Go", "Node.js", "Redux", "AWS"]}
          links={[
            {
              name: "App Store",
              url: "https://apps.apple.com/us/app/pizza-hut-delivery-takeout/id321560858",
              variant: "neutral",
            },
            {
              name: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.yum.pizzahut&hl=en_US&pli=1",
              variant: "neutral",
            },
          ]}
          index={1}
        />
        <ProjectCard
          title="PixelSnag Web App"
          description="Sign up, subscribe, and download the desktop app—or use the full-featured web editor instantly. Manage your screenshots and share with ease—all from one place."
          image="/PixelSnagWeb.png"
          tags={["Next.js", "Tailwind", "Supabase", "SQL", "Stripe"]}
          links={[
            {
              name: "Website",
              url: "https://pixelsnag.it.com/",
              variant: "neutral",
            },
            {
              name: "GitHub",
              url: "https://github.com/LoganPhilbrick/PixelSnag",
              variant: "default",
            },
          ]}
          index={2}
        />
      </div>
    </div>
  );
}

export default Projects;
