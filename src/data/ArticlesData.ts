export type TArticleS = {
    id:number;
    name:string;
    logo:string;
}
  
export type TArticle = TArticleS & {
    content:string;
}

const ArticleData:TArticle[] = [
    {
        id: 1,
        name: 'Next.js',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/320px-Nextjs-logo.svg.png',
        content: 'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.\n React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with Node.js".\n Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.\n The copyright and trademarks for Next.js are owned by Vercel, which also maintains and leads its open-source development.',
    },
    {
        id: 2,
        name: 'Laravel',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/archive/9/9a/20190820171149%21Laravel.svg',
        content: 'Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony.\nSome of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.\n The source code of Laravel is hosted on GitHub and licensed under the terms of MIT License.'
    },
    {
        id: 3,
        name: 'Spring Boot',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/240px-Spring_Boot.svg.png',
        content: 'Spring Boot Extension is Spring\'s convention-over-configuration solution for creating production-grade Spring applications with minimal amounts of configuration.\n Most of the application can be preconfigured using Spring team\'s "opinionated view" of the best configuration and use of the Spring platform and third-party libraries.\n A Spring Boot application can be written using several programming languages, including Java and Kotlin.'
    },
    {
        id: 4,
        name: 'Django',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/260px-Django_logo.svg.png',
        content: 'Django is a free and open-source, Python-based web framework that follows the model–template–views (MTV) architectural pattern.\n It is maintained by the Django Software Foundation (DSF), an independent organization established in the US as a 501(c)(3) non-profit.\n Django\'s primary goal is to ease the creation of complex, database-driven websites.\n The framework emphasizes reusability and "pluggability" of components, less code, low coupling, rapid development, and the principle of don\'t repeat yourself.\n Python is used throughout, even for settings, files, and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.\n Some well-known sites that use Django include Instagram, Mozilla, Disqus, Bitbucket, Nextdoor and Clubhouse.',
    },
    {
        id: 5,
        name: 'Jenkins',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jenkins_logo_with_title.svg/320px-Jenkins_logo_with_title.svg.png',
        content: 'Jenkins is an open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration, and continuous delivery.\nIt is a server-based system that runs in servlet containers such as Apache Tomcat. It supports version control tools, including AccuRev, CVS, Subversion, Git, Mercurial, Perforce, ClearCase, and RTC, and can execute Apache Ant, Apache Maven, and sbt based projects as well as arbitrary shell scripts and Windows batch commands.'
    },
    {
        id: 6,
        name: 'Docker',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/320px-Docker_%28container_engine%29_logo.svg.png',
        content: 'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first released in 2013 and is developed by Docker, Inc.\nDocker is a tool that is used to automate the deployment of applications in lightweight containers so that applications can work efficiently in different environments in isolation.'
    }
];

export default ArticleData;