import Link from "next/link"

type ArticleItem = {
  id:string;
  name:string;
  logo:string;
}

async function getData() {
  const res = await fetch(process.env.ENDPOINT + '/api/article', { next : { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
  
export default async function ArticleList() {
  const data = await getData(); 

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
      {
        data.map((item:ArticleItem) => (
          <Link key={item.id} href={`/article?id=${item.id}`} className="block w-full md:w-6/12">
            <div className="m-2 p-4 border rounded">
            <h3 className="mb-4 font-bold text-lg">{item.name}</h3>
            <img
              src={item.logo}
              style={{width:200,height:70}}
              className="object-contain mx-auto"
            />
            </div>
          </Link>
        ))
      }
      </div>
    </div>
  );
}