import{s as h,j as e,a as x}from"./index-2782feee.js";import{r as c}from"./echarts-63d4abac.js";import{A as j,a as C,b as p,c as g,d as A,M as k,T as B,F as E,B as f,e as $}from"./authorStyledComponents-3067073a.js";import{a as S}from"./LastArticles-3c8e2eab.js";import"./react-router-dom-50fe5a57.js";import"./zrender-1584b751.js";import"./index-e51d51b8.js";const T=h(S)`
  font-weight: 600;
`;function w({category:a}){var s,o;if(!a)return;const n=((s=a.articles)==null?void 0:s.length)||0;return e.jsxs(j,{children:[e.jsx(T,{to:`/categories/${a.id}`,children:a.name}),e.jsxs(C,{children:[n," ",n===1?"članak":[2,3,4].includes(n)?"članka":"članaka"]}),n!==0&&e.jsx(p,{children:e.jsx(g,{children:(o=a.articles)==null?void 0:o.map(t=>e.jsx(A,{to:`/articles/${t.id}`,children:t.title},t.id))})})]})}function b(){const[a,n]=c.useState([]),[s,o]=c.useState("name"),[t,u]=c.useState("asc");return c.useEffect(()=>{async function i(){const r=await x.get("/api/categories/all");n(r.data)}i()},[]),c.useEffect(()=>{function i(r,l){const d=r.articles.length||0,m=l.articles.length||0;return s=="name"?t==="desc"?l.name.localeCompare(r.name):r.name.localeCompare(l.name):t==="asc"?d-m:m-d}n(r=>[...r].sort(i))},[s,t]),a?e.jsxs(k,{children:[e.jsx(B,{children:"Kategorije"}),e.jsxs(E,{children:[e.jsxs(f,{"data-testid":"name",$selected:s==="name",onClick:()=>{o("name"),u(t==="asc"?"desc":"asc")},children:["Abecedno ",s==="name"?t==="asc"?"⇡":"⇣":""]}),e.jsxs(f,{$selected:s==="count",onClick:()=>{o("count"),u(t==="asc"?"desc":"asc")},children:["Broj članaka"," ",s==="count"?t==="asc"?"⇡":"⇣":""]})]}),e.jsx($,{children:a.map(i=>e.jsx(w,{category:i},i.id))})]}):"Loading..."}export{b as default};
