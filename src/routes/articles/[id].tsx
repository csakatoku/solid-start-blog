import { Title, useParams } from "solid-start";
import Article from "~/components/Article/Article";

export default function ArticlePage() {
  const params = useParams();

  const article = {
    id: parseInt(params.id),
    title: `Article ${params.id}`,
  } as const;

  return (
    <main>
      <Title>Article {params.id}</Title>
      <Article article={article} />
    </main>
  );
}
