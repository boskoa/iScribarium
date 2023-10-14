import{n as r,a,s as l,g as u,t as m,u as g,r as d,V as h,j as s,J as f,U as x}from"./index-75c58116.js";import{e as A,A as j}from"./index-f6ee3f29.js";import{B as b}from"./NewArticleForm-d7d2f0bb.js";import"./index.esm-22e08e3a.js";const v=r(j)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 0;
  gap: 30px;
`,y=r.p`
  flex: 1;
`,c=r(b)`
  min-width: 70px;
`;function C(){const e=a(l),i=u(),n=a(m),o=g();d.useEffect(()=>{e!=null&&e.admin||i(-1)},[e,i]),d.useEffect(()=>{o(h("?order=username,asc"))},[o]);function p(t){console.log(t),o(x({id:t.id,token:e.token,newData:{approved:!t.approved}}))}return e!=null&&e.admin?n.length?s.jsx(A,{style:{paddingTop:40},children:n==null?void 0:n.map(t=>s.jsxs(v,{style:{minHeight:0},children:[s.jsx(y,{children:t.username}),s.jsx(c,{onClick:()=>p(t),$bg:"green",children:t.approved?"zabrani":"odobri"}),s.jsx(c,{$bg:"red",children:"obriši"})]},t.id))}):s.jsx(f,{}):(i(-1),"Not authorized")}export{C as default};
