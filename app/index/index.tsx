export default function Index() {
  return (
    <main className="flex flex-col mx-auto h-dvh max-w-6xl p-5">
      <h1 className="font-bold text-3xl">Algorithms</h1>
      <p className="text-white/75">
        This page was created because I wanted to learn more about algorithms
        and visualize them myself. If it helps someone, I'm glad. If you like
        this page, give it a star on GitHub. If you have an algorithm that's
        missing here or think it's cool, make a PR on GitHub.
      </p>
      <div className="flex flex-col gap-5 mt-15">
        {pages.map(({ href, text, diff }) => (
          <a
            href={href}
            className={`w-full flex justify-between text-center align-middle rounded-2xl border-2 transition-all transition-300 p-5 ${difficulties[diff].css}`}
          >
            <span className="my-auto">{text}</span>
            <span className="text-xl font-bold my-auto">
              {difficulties[diff].text}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}

const pages = [
  {
    href: "/linear-search",
    text: "Linear Search",
    diff: 0,
  },
];

const difficulties = [
  {
    text: "Easy",
    css: "bg-green-500/20 border-green-500 hover:bg-green-500/40",
  },
];
