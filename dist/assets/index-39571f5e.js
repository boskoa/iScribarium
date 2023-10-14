import{n as r,b as l,r as i,p as d,j as e,m as p,B as x,L as u}from"./index-bdd633cb.js";const f=r.div`
  margin: 50px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,h=r.div`
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`,m=r(u)`
  text-decoration: none;
  font-weight: 600;
  color: ${({theme:s})=>s.main.color};
`;function j(){const{title:s}=l(),[n,a]=i.useState(null),o=n==null?void 0:n.map(t=>d(t));return i.useEffect(()=>{async function t(){const c=await p.get(`${x}?title=${s}&pagination=0,10`);a(c.data)}s?t():a(null)},[s]),n?e.jsxs(f,{children:[e.jsxs("h2",{children:['Rezultati pretrage za "',s,'":']}),o.map(t=>e.jsxs(h,{children:[e.jsx(m,{to:`/articles/${t.id}`,children:t.title}),e.jsx("p",{children:t.content||""})]},t.id))]}):""}export{j as default};
