import{n as x,a as p,F as A,r as e,G as m,u as j,H as C,I as S,j as t,J as E}from"./index-75c58116.js";import{u as L,M as w,T as I,B as T,d as $,S as b,A as v}from"./index-f6ee3f29.js";const M=x(v)`
  min-height: 90vh;
  display: flex;
  align-content: start;
  gap: 20px;
  flex-wrap: wrap;
`,c=100;function B(){const s=p(A),[n,o]=e.useState(0),[i,h]=e.useState("asc"),l=e.useRef(null),f=L(l),[u,d]=e.useState(!1),g=p(m),r=j();return e.useEffect(()=>{f&&!u&&o(a=>a+c)},[f,u]),e.useEffect(()=>{n-c>s.length?d(!0):d(!1)},[n,s.length]),e.useEffect(()=>{n===s.length&&r(C(`?pagination=${n},${c}&order=title,${i}`))},[n,r,s.length,i]),e.useEffect(()=>{r(S()),o(0),window.scrollTo({top:0,behavior:"smooth"})},[r,i]),t.jsxs(w,{style:{gap:"20px"},children:[t.jsx(I,{children:"Članci"}),t.jsxs(T,{onClick:()=>{h(i==="asc"?"desc":"asc")},children:["Abecedno ",i==="asc"?"⇡":"⇣"]}),t.jsx(M,{children:s.map(a=>t.jsx($,{to:`/articles/${a.id}`,children:a.title},a.id))}),t.jsx(b,{ref:l,children:g&&t.jsx(E,{})})]})}export{B as default};
