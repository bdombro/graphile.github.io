(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{427:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return y}),a.d(t,"default",function(){return O});a(73);var i=a(182),n=a.n(i),o=(a(0),a(74)),s=a(19),r=a(24),l=a(20),c=a(16),b=a(21),p=a(22),m=a(25),d=a(26),u=a(41),h=a.n(u),g=a(27),y={layout:"marketing",path:"/postgraphile/",title:"PostGraphile - full GraphQL API server in an instant from PostgreSQL database"},f={_frontmatter:y},j="wrapper";function O(e){var t=e.components,a=n()(e,["components"]);return Object(o.b)(j,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{blue:!0,mdxType:"MarketingLayout"},Object(o.b)(l.a,{bg:"white",mdxType:"Hero"},Object(o.b)("h2",null,"PostGraphile Instant GraphQL API"),Object(o.b)("br",null),Object(o.b)("div",{className:"flex"},Object(o.b)("a",{className:"button--solid-light",href:"/postgraphile/introduction/"},Object(o.b)("span",{className:"fas fa-book-open"})," Documentation ",Object(o.b)("span",{className:"fas fa-fw fa-arrow-right"}))),Object(o.b)("div",{className:"flex"},Object(o.b)("div",{style:{margin:"0 0.5rem 0 0"}},Object(o.b)("a",{className:"button--solid",href:"https://discord.gg/graphile"},Object(o.b)("span",{className:"fab fa-discord"})," Join Chat")),Object(o.b)("div",{style:{margin:"0 0.5rem 0 0"}},Object(o.b)("a",{className:"button--solid",href:"https://github.com/graphile/postgraphile"},Object(o.b)("span",{className:"fas fa-star"})," View on GitHub")))),Object(o.b)(b.a,{bg:"white",mdxType:"MarketingSection"},Object(o.b)(c.b,{mdxType:"Flex"},Object(o.b)(c.a,{className:"center",span:"8",mdxType:"Col"},Object(o.b)("img",{src:h.a,style:{maxWidth:"100%"}})))),Object(o.b)(p.a,{from:"white",to:"dark",mdxType:"MarketingDivide"}),Object(o.b)(b.a,{bg:"dark",mdxType:"MarketingSection"},Object(o.b)(c.b,{mdxType:"Flex"},Object(o.b)(c.a,{span:"8",offset:"2",className:"tc",mdxType:"Col"},Object(o.b)("h3",null,"Instantly spin-up a GraphQL API server by pointing PostGraphile at your existing PostgreSQL database")))),Object(o.b)(p.a,{from:"dark",to:"light",via:"medium",mdxType:"MarketingDivide"}),Object(o.b)(b.a,{bg:"light",mdxType:"MarketingSection"},Object(o.b)(m.a,{mdxType:"MarketingCodebox"},Object(o.b)("big",null,"Try it now:"),Object(o.b)("div",{className:"mv4"},Object(o.b)("big",null,Object(o.b)("code",null,"npx postgraphile -c my_db --watch"))),Object(o.b)("small",null,Object(o.b)("em",null,"requires Node.js 8.6 or higher"))),Object(o.b)("p",{className:"f7"},"If your database is on another machine, you may pass a connection string in place of ",Object(o.b)("tt",null,"my_db"),". Connection strings have the form:"),Object(o.b)("p",{className:"f7"},Object(o.b)("tt",null,"postgres://pg_user:pg_pass@pg_host:pg_port/pg_db?ssl=1"))),Object(o.b)(p.a,{from:"light",to:"nodes",via:"medium",down:!0,mdxType:"MarketingDivide"}),Object(o.b)(b.a,{bg:"nodes",mdxType:"MarketingSection"},Object(o.b)("div",{style:{maxWidth:"48em",margin:"auto"}},Object(o.b)("h3",null,"Rapidly develop lightning-fast powerful applications"),Object(o.b)("big",null,"PostGraphile automatically detects tables, columns, indexes, relationships, views, types, functions, comments, and more — providing a GraphQL server that is highly intelligent about your data, and that automatically updates itself without restarting when you modify your database."),Object(o.b)(d.a,{bullets:["Strong PostgreSQL support","GraphQL best practices","Simple to deploy and scale","Highly customisable","Impressively high performance","Granular authorisation via RLS","Open source under MIT license","Powerful plugin system"],mdxType:"MarketingBullets"}))),Object(o.b)(p.a,{from:"nodes",to:"dark",via:"medium",mdxType:"MarketingDivide"}),Object(o.b)(b.a,{bg:"dark",mdxType:"MarketingSection"},Object(o.b)("h3",null,"What people are saying"),Object(o.b)("div",{className:"mw9 ph3-ns flex flex-wrap justify-between"},Object(o.b)(g.a,{name:"Chad F",role:"senior technical lead",link:"https://chads.website/development/2018/08/03/How-GraphQL-Saved-My-Project.html",mdxType:"Testimonial"},"Thanks for making GraphQL something I can use on my project in a robust way with ",Object(o.b)("strong",null,"minimal effort"),". 500-1500 requests per second on a single server is pretty awesome."),Object(o.b)(g.a,{name:"Sam L",role:"full stack developer",link:"https://gitter.im/graphile/postgraphile?at=5b65d555e9ab53770c8c41a1",mdxType:"Testimonial"},"This project, Benjie's handling of it, the docs, support, and community is awesome all around. ",Object(o.b)("strong",null,"PostGraphile is a powerful, idomatic, and elegant tool.")),Object(o.b)(g.a,{name:"Max D",role:"software consultant",link:"https://twitter.com/maxdesiatov/status/1001419221102940160",linkIcon:"fab fa-twitter",mdxType:"Testimonial"},"Recently I launched a few mobile and web apps using GraphQL, Great stuff, not least thanks to wonderful PostGraphile and Apollo. ",Object(o.b)("strong",null,"At this point, it’s quite hard for me to come back and enjoy working with REST.")),Object(o.b)(g.a,{name:"Bradley A",role:"CTO",link:"https://twitter.com/bradleyayers/status/1012557510346080256",linkIcon:"fab fa-twitter",mdxType:"Testimonial"},"I setup my backend to use PostGraphile directly when querying the local database. It's removed a bunch of hand-written SQL, added type-safety to verify Postgres schema compatibility, and ",Object(o.b)("strong",null,"created a more consistent dev experience for frontend/backend code.")),Object(o.b)(g.a,{name:"Steven M",role:"VP engineering",mdxType:"Testimonial"},"Our company is under going a technology shift to use more a more modern stack. A large piece of this shift is our desire to use a GraphQL interface to our Postgres server. After researchiing we decided to try PostGraphile from the graphile.org site and ",Object(o.b)("strong",null,"we couldn't be happier"),". It's very expansive and configurable and the maintainers are available to ask questions and it's nice to see such an active group fixing bugs and adding enhancements. We're very happy with our choice!"))),Object(o.b)(p.a,{from:"dark",to:"light",down:!0,mdxType:"MarketingDivide"}),Object(o.b)(b.a,{bg:"light",mdxType:"MarketingSection"},Object(o.b)(r.a,{mdxType:"MailchimpSignup"})),Object(o.b)(p.a,{from:"light",to:"medium",mdxType:"MarketingDivide"}),Object(o.b)(b.a,{bg:"medium",mdxType:"MarketingSection"},Object(o.b)(d.a,{bullets:[["Client-facing GraphQL server","No need for complex server architectures, containers, etc: PostGraphile is pure Node.js and can be embedded in your existing Node.js project"],["Server-side rendering","Issue requests to your PostGraphile API without network roundtrips, fantastic for React SSR"],["Hot-reloading GraphQL API","Automatically re-generate the GraphQL schema when your database changes when you're using `--watch`"],["Lightning fast","Much faster [performance](/postgraphile/performance/) than even a hand-rolled GraphQL schema using `DataLoader`"],["No N+1 problem","PostGraphile compiles a query tree of any depth into a single SQL statement, resulting in extremely efficient execution"],["Auto-generated documentation","Database comments are exported to GraphQL and browsable via the built in PostGraphiQL IDE"],["GraphQL best practices","Including: [cursor pagination](https://facebook.github.io/relay/graphql/connections.htm), [global object identification](https://facebook.github.io/relay/graphql/objectidentification.htm), and [Relay mutations](https://facebook.github.io/relay/graphql/mutations.htm)"],["Super secure","Implement authorization via PostgreSQL's RBAC and Row-Level Security features, get full-stack security you can trust"],["Respects database permissions","Tables and columns that you don't `GRANT` access to will not be exported via GraphQL when using `--no-ignore-rbac`"],["Customisable with SQL","Excellent PostgreSQL function support, mapping to [custom queries](/postgraphile/custom-queries/), [custom mutations](/postgraphile/custom-mutations/) and [computed columns](/postgraphile/computed-columns/)"],["Customisable via smart-comments","Refine your GraphQL schema with [smart comments](/postgraphile/smart-comments/): rename, omit, enhance with a simple `COMMENT`"],["Customisable via JS","PostGraphile is built from a large number of plugins; get the exact API you desire by replacing or removing existing plugins, building your own with our helpers, or selecting from community plugins"],["Fully GraphQL compatible","We use the [reference GraphQL implementation](http://graphql.org/graphql-js/) under the hood, so you know we're spec compliant"]],mdxType:"MarketingBullets"}))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-postgraphile-index-mdx-3e0ea9032c50753e7000.js.map