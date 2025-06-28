import { ProjectLinkVariant } from "@/types/ProjectLinkVarient";
import type { Project } from "@/types/Project";

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    name: "PixelSnag Desktop App",
    description:
      "A cross-platform tool with smart editing, AI-powered summaries, and seamless sharing, built for creators and devs.",
    myContributions:
      "PixelSnag is a passion project of mine that I started at the beginning of 2025. I built it using React wrapped in Electron on the front-end, Python to handle screenshot logic, Supabase as a backend, and AWS to handle OTA updates. The app allows users to take screenshots on both Mac and Windows using a small Python server I wrote running in the background to capture images and send them to the front end for editing. I set up authentication with Supabase and added a chatgpt integration to the app to allow users to summarize their screenshots.",
    image: "/PixelSnag.png",
    heroImage: "/PixelSnagHero.png",
    tags: ["React", "Electron", "Python", "Supabase", "AWS"],
    links: [
      {
        name: "Website",
        url: "https://pixelsnag.it.com/",
        variant: ProjectLinkVariant.Neutral,
      },
      {
        name: "GitHub",
        url: "https://github.com/trevorphilbrick/pixelsnag",
        variant: ProjectLinkVariant.Default,
      },
    ],
  },
  {
    id: 2,
    name: "Pizza Hut Mobile App",
    description:
      "Order your favorites fast with the Pizza Hut app. Customize pizzas, track deliveries, and access exclusive deals—all in one easy-to-use app.",
    myContributions:
      "My contributions to  Pizza Hut include using React Native and Redux to build the application, Jest and Maestro to test the app, Node to build an npm package for mocking network requests, and Go to build out backend support needed for the application. I handled much of the front end UI and business logic including location and store selection, authentication logic, and checking users out with their cards. The app is thoroughly tested with both Jest and Maestro from integration and e2e tests, which I wrote many of. In my time at Pizza Hut, it became apparent the back end would be down in staging environments frequently. To keep developers from losing time, I built an npm package to serve api mocks using Node.js. Finally, I have spent time building lambda functions to handle gathering and preparing data to be delivered to the application.",
    image: "/PizzaHut.png",
    heroImage: "/PIzzaHutHero.png",
    tags: ["React Native", "Go", "Node.js", "Redux"],
    links: [
      {
        name: "App Store",
        url: "https://apps.apple.com/us/app/pizza-hut-delivery-takeout/id321560858",
        variant: ProjectLinkVariant.Neutral,
      },
    ],
  },
  {
    id: 3,
    name: "PixelSnag Web App",
    description:
      "PixelSnag is a cross-platform tool with smart editing, AI-powered summaries, and seamless sharing, built for creators and devs.",
    myContributions:
      "I built the web app using React, Next.js, and Tailwind CSS. I also built the backend using Node.js. I used Supabase to store the data and handle user account creation and session management. I also built the payment processing and subscription management using Stripe.",
    image: "/PixelSnagWeb.png",
    heroImage: "/PixelSnagWebHero.png",
    tags: ["React", "Electron", "Python", "Supabase", "Stripe"],
    links: [
      {
        name: "Website",
        url: "https://pixelsnag.it.com/",
        variant: ProjectLinkVariant.Neutral,
      },
      {
        name: "GitHub",
        url: "https://github.com/trevorphilbrick/pixelsnag",
        variant: ProjectLinkVariant.Default,
      },
    ],
  },
];
