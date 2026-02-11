import Index from "~/index";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Algorithms" },
    {
      name: "description",
      content: `This page was created because I wanted to learn more about algorithms
        and visualize them myself. If it helps someone, I'm glad. If you like
        this page, give it a star on GitHub. If you have an algorithm that's
        missing here or think it's cool, make a PR on GitHub.`,
    },
  ];
}

export default function Home() {
  return <Index />;
}
