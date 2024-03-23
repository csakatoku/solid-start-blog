import { A } from "@solidjs/router";
import { ArticleDefinition } from "~/types";

interface Props {
  article: ArticleDefinition;
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
