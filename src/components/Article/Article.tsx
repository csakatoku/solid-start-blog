import { A } from "solid-start/router";

interface Props {
  article: {
    id: number;
    title: string;
  };
}

export default function Article({ article }: Props) {
  return (
    <article>
      <header>
        <h2>
          <A href={`/articles/${article.id}`}>{article.title}</A>
        </h2>
      </header>
      <p>article.body</p>
      <div>Posted at: article.createdAt</div>
    </article>
  );
}
