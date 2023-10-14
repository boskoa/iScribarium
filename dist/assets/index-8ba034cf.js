import{n as x,a as p,F as A,r as e,G as m,u as j,H as C,I as S,j as s,J as E}from"./index-2ddb8e57.js";import{u as L,M as w,T as I,B as T,d as $,S as b,A as v}from"./index-86528613.js";const M=x(v)`
  min-height: 90vh;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`,c=100;function B(){const t=p(A),[i,o]=e.useState(0),[n,h]=e.useState("asc"),l=e.useRef(null),f=L(l),[u,d]=e.useState(!1),g=p(m),r=j();return e.useEffect(()=>{f&&!u&&o(a=>a+c)},[f,u]),e.useEffect(()=>{i-c>t.length?d(!0):d(!1)},[i,t.length]),e.useEffect(()=>{i===t.length&&r(C(`?pagination=${i},${c}&order=title,${n}`))},[i,r,t.length,n]),e.useEffect(()=>{r(S()),o(0),window.scrollTo({top:0,behavior:"smooth"})},[r,n]),s.jsxs(w,{style:{gap:"20px"},children:[s.jsx(I,{children:"Članci"}),s.jsxs(T,{onClick:()=>{h(n==="asc"?"desc":"asc")},children:["Abecedno ",n==="asc"?"⇡":"⇣"]}),s.jsx(M,{children:t.map(a=>s.jsx($,{to:`/articles/${a.id}`,children:a.title},a.id))}),s.jsx(b,{ref:l,children:g&&s.jsx(E,{})})]})}export{B as default};
