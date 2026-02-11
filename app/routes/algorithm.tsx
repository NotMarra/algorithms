import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { Route } from "./+types/algorithm";
import { Suspense, lazy } from "react";

interface AlgorithmData {
  title: string;
  description: string;
  snippets: {
    language: string;
    code: string;
  }[];
}
const Visualizations: Record<string, React.LazyExoticComponent<any>> = {
  linear_search: lazy(() => import("../visualizations/linear_search")),
};

export async function loader({
  params,
}: Route.LoaderArgs): Promise<AlgorithmData> {
  try {
    const algorithmModule = (await import(
      `../algorithms/${params.algorithm}.json`
    )) as { default: AlgorithmData };

    return algorithmModule.default;
  } catch (error) {
    throw new Response("Algoritmus nenalezen", { status: 404 });
  }
}
export default function Algorithm({
  loaderData,
  params,
}: Route.ComponentProps) {
  const data = loaderData as unknown as AlgorithmData;
  const VisualizationComponent = Visualizations[params.algorithm];
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex flex-col mx-auto h-dvh max-w-6xl p-5">
      <h1 className="font-bold text-3xl mb-4">
        {data.title || "Unknown Algorithm"}
      </h1>
      <p className="text-white/75">{data.description}</p>
      <h3 className="mt-5 font-bold">Code snippet:</h3>
      <SyntaxHighlighter
        language={data.snippets[0].language}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          background: "rgba(0, 0, 0, 0.3)",
          fontSize: "0.9rem",
        }}
        wrapLongLines={true}
      >
        {data.snippets[0].code}
      </SyntaxHighlighter>

      <section className="my-8 border-2 border-white/10 rounded-2xl p-6 bg-black/20">
        <h3 className="text-xl font-bold mb-4 text-white/80">Visualization</h3>

        {VisualizationComponent ? (
          <Suspense
            fallback={
              <div className="text-center p-10">Loading Visualization...</div>
            }
          >
            <VisualizationComponent />
          </Suspense>
        ) : (
          <div className="text-gray-500 italic">
            No visualization available for this algorithm yet.
          </div>
        )}
      </section>
    </main>
  );
}
