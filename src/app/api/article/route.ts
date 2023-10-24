import { NextResponse } from "next/server"
import ArticleData, { TArticleS, TArticle} from "@/data/ArticlesData"

export async function GET() {
  return NextResponse.json(getArticles(ArticleData))
}

function getArticles(articles:TArticle[]):TArticleS[]{
  const list:TArticleS[] = articles.map((item) => {
    return { id: item.id, name: item.name, logo: item.logo };
  });
  return list;
}
