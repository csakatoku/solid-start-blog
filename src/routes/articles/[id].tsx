import { Title } from "@solidjs/meta";
import { Show } from "solid-js";
import {
  createAsync,
  type RouteDefinition,
  type RouteSectionProps,
} from "@solidjs/router";
import Article from "~/components/Article/Article";
import { type ArticleDefinition } from "~/types";

export const route = {
  load({ params }) {},
} satisfies RouteDefinition;

export default function ArticlePage(props: RouteSectionProps) {
  const article = createAsync(() =>
    Promise.resolve({
      id: parseInt(props.params.id),
      title: `Article ${props.params.id}`,
      content: `This is the content of article ${props.params.id}`,
    } as ArticleDefinition)
  );

  return (
    <main>
      <Title>Article {article()?.id}</Title>
      <Show when={article()}>
        <Article article={article()!} />
      </Show>
    </main>
  );
}
