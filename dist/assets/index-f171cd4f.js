import{n as x,j as e,F as f,r as o,m as j}from"./index-bdd633cb.js";import{A as C,a as g,b as p,c as A,d as k,M as B,T as E,F as $,B as h,e as F}from"./index-b89d6e88.js";const S=x(f)`
  font-weight: 600;
`;function T({category:n}){var s,c;if(!n)return;const a=((s=n.articles)==null?void 0:s.length)||0;return e.jsxs(C,{children:[e.jsx(S,{to:`/categories/${n.id}`,children:n.name}),e.jsxs(g,{children:[a," ",a===1?"članak":[2,3,4].includes(a)?"članka":"članaka"]}),a!==0&&e.jsx(p,{children:e.jsx(A,{children:(c=n.articles)==null?void 0:c.map(t=>e.jsx(k,{to:`/articles/${t.id}`,children:t.title},t.id))})})]})}function M(){const[n,a]=o.useState([]),[s,c]=o.useState("name"),[t,u]=o.useState("asc");return o.useEffect(()=>{async function i(){const r=await j.get("/api/categories/all");a(r.data)}i()},[]),o.useEffect(()=>{function i(r,l){const d=r.articles.length||0,m=l.articles.length||0;return s=="name"?t==="desc"?l.name.localeCompare(r.name):r.name.localeCompare(l.name):t==="asc"?d-m:m-d}a(r=>[...r].sort(i))},[s,t]),n?e.jsxs(B,{children:[e.jsx(E,{children:"Kategorije"}),e.jsxs($,{children:[e.jsxs(h,{"data-testid":"name",$selected:s==="name",onClick:()=>{c("name"),u(t==="asc"?"desc":"asc")},children:["Abecedno ",s==="name"?t==="asc"?"⇡":"⇣":""]}),e.jsxs(h,{$selected:s==="count",onClick:()=>{c("count"),u(t==="asc"?"desc":"asc")},children:["Broj članaka"," ",s==="count"?t==="asc"?"⇡":"⇣":""]})]}),e.jsx(F,{children:n.map(i=>e.jsx(T,{category:i},i.id))})]}):"Loading..."}export{M as default};
