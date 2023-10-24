import HomeBanner from '@/components/client/Carousel';

export default function Home() {
    return (
        <div className="container mx-auto px-2">
            <div className="mx-auto">
                <HomeBanner />
            </div>
            <div className="mt-5">
                <p className="pb-4">Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework.</p>
                <br />
                <p className="pb-4">Vercels architecture is built around Jamstack, and deployments are handled through Git repositories. Vercel is a member of the MACH Alliance.</p>
                <br />
                <p className="pb-4">Vercel was founded by Guillermo Rauch in 2015 as ZEIT. Rauch had previously created the realtime event-driven communication library Socket.IO.</p>
                <p className="pb-4">In 2016, Nicolás Garro (aka Evil Rabbit) joined ZEIT as the Founding Designer and Head of Design. ZEIT was rebranded to Vercel in April 2020, although retained the companys triangular logo.</p>
                <p className="pb-4">In June 2021, Vercel raised $102 million in a Series C funding round. As of November 2021, the company is valued at $2.5 billion.</p>
                <br />
            </div>
        </div>
    );
}