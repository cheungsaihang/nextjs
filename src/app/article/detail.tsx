import parse from 'html-react-parser'
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';

type Article = {
    id:string;
    name:string;
    logo:string;
    content:string;
  }
  
  async function getData(id:string) {
    const res = await fetch(`${process.env.ENDPOINT}/api/article/${id}`, { next : { revalidate: 10 } });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
   
  export default async function ArticleDetail({articleId}:{articleId:string}) {
    const data:Article = await getData(articleId); 
  
    return (
      <div className="container mx-auto pt-5 px-2">
        <div className="mb-8"><img 
          src={data.logo} 
          style={{width:200,height:70}}
          className="object-contain mx-auto"
        /></div>
        <p>{parse(data.content.replace(/(?:\r\n|\r|\n)/g, '<br/><br/>'))}</p>
        <Link href='/article' className='px-3 py-1 bg-slate-200 rounded mt-5 inline-block'>Back</Link>
      </div>
    );
  }