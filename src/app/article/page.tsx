import ArticleDetailPage from "./detail";
import ArticlelistPage from "./list";

type SearchParams = {
  [key:string]: string | string[] | undefined;
} | undefined;

export default async function articlePage({searchParams}:{searchParams:SearchParams;}) {
  const articleId = getParameter(searchParams,'id');
  return (
    <>
      { articleId ? <ArticleDetailPage articleId={articleId} /> : <ArticlelistPage />}
    </>
  );
}

function getParameter(searchParams:SearchParams, key:string):string | null {
  const str = searchParams && searchParams[key] ? searchParams[key] : null;
  if(str){
    let pattern = /[^0-9]/;
    if(typeof str === 'string' && !pattern.test(str)){
      return str;
    } 
  }
  return null;
}