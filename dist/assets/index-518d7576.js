import{s as o,a as p,r as c,j as s,b as x,B as u,L as f}from"./index-8f26b1f9.js";const h=o.div`
  margin: 50px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,g=o.div`
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`,m=o(f)`
  text-decoration: none;
  font-weight: 600;
`;function b(){const{title:e}=p(),[n,r]=c.useState(null),l=n==null?void 0:n.map(t=>d(t));function d(t){var i,a;return{id:t.id,title:t.title,content:((a=(i=t.content)==null?void 0:i.split("## Uvod")[1])==null?void 0:a.split(".")[0].trim())||t.content.split(".")[0]}}return c.useEffect(()=>{async function t(){const i=await x.get(`${u}?title=${e}&pagination=0,10`);r(i.data)}e?t():r(null)},[e]),n?s.jsxs(h,{children:[s.jsxs("h2",{children:['Rezultati pretrage za "',e,'":']}),l.map(t=>s.jsxs(g,{children:[s.jsx(m,{to:`/articles/${t.id}`,children:t.title}),s.jsx("p",{children:t.content||""})]},t.id))]}):""}export{b as default};
