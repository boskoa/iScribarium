import{s as x,b as d,A as m,C as A,u as j,D as C,E,j as t,L as S}from"./index-c6a04bd1.js";import{r as e}from"./echarts-41e97f80.js";import{u as L,M as b,T as w,B as T,d as $,S as v,A as I}from"./index-de8861e9.js";import"./react-router-dom-6f0409ae.js";import"./zrender-e9104294.js";const M=x(I)`
  min-height: 90vh;
  display: flex;
  align-content: start;
  gap: 20px;
  flex-wrap: wrap;
`,o=100;function k(){const s=d(m),[i,c]=e.useState(0),[n,h]=e.useState("asc"),l=e.useRef(null),f=L(l),[p,u]=e.useState(!1),g=d(A),a=j();return e.useEffect(()=>{f&&!p&&c(r=>r+o)},[f,p]),e.useEffect(()=>{i-o>s.length?u(!0):u(!1)},[i,s.length]),e.useEffect(()=>{i===s.length&&a(C(`?pagination=${i},${o}&order=title,${n}`))},[i,a,s.length,n]),e.useEffect(()=>{a(E()),c(0),window.scrollTo({top:0,behavior:"smooth"})},[a,n]),t.jsxs(b,{style:{gap:"20px"},children:[t.jsx(w,{children:"Članci"}),t.jsxs(T,{onClick:()=>{h(n==="asc"?"desc":"asc")},children:["Abecedno ",n==="asc"?"⇡":"⇣"]}),t.jsx(M,{children:s.map(r=>t.jsx($,{to:`/articles/${r.id}`,children:r.title},r.id))}),t.jsx(v,{ref:l,children:g&&t.jsx(S,{})})]})}export{k as default};
