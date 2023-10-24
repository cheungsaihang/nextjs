import { type NextRequest, NextResponse } from "next/server"
import ArticleData, { TArticle } from "@/data/ArticlesData"

type Params = {
    [key:string]:string | undefined
}

export async function GET(request: NextRequest, context: { params: Params } ) {
    const articleId = context.params['articleId'];

    if(articleId){
        let id = parseInt(articleId);
        if(!isNaN(id)){
            return NextResponse.json(getArticleById(ArticleData,id));
        }
    }
    return NextResponse.json(null);
}

function getArticleById(articles:TArticle[], articleId: number):TArticle | null {
    let result = articles.filter((obj) => obj.id == articleId);
    return result.length ? result[0] : null;
}
