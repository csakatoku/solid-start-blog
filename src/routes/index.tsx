import { For } from "solid-js";
import { Title } from "@solidjs/meta";
import Article from "~/components/Article/Article";

export default function Home() {
  const articles = [
    {
      id: 1,
      title: "Article 1",
    },
    {
      id: 2,
      title: "Article 2",
    },
    {
      id: 3,
      title: "Article 3",
    },
  ] as const;

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello World</h1>
      <For each={articles}>{(article) => <Article article={article} />}</For>
    </main>
  );
}
