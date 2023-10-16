import{s as o,j as e,a as l,B as p}from"./index-2782feee.js";import{r as n}from"./echarts-63d4abac.js";import{b as d,L as x}from"./react-router-dom-50fe5a57.js";import{s as u}from"./stripMarkdown-33a6a140.js";import"./zrender-1584b751.js";const m=o.div`
  margin: 50px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,f=o.div`
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`,h=o(x)`
  text-decoration: none;
  font-weight: 600;
  color: ${({theme:s})=>s.main.color};
`;function R(){const{title:s}=d(),[r,i]=n.useState(null),a=r==null?void 0:r.map(t=>u(t));return n.useEffect(()=>{async function t(){const c=await l.get(`${p}?title=${s}&pagination=0,10`);i(c.data)}s?t():i(null)},[s]),r?e.jsxs(m,{children:[e.jsxs("h2",{children:['Rezultati pretrage za "',s,'":']}),a.map(t=>e.jsxs(f,{children:[e.jsx(h,{to:`/articles/${t.id}`,children:t.title}),e.jsx("p",{children:t.content||""})]},t.id))]}):""}export{R as default};
