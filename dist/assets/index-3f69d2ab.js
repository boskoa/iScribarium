import{n as r,a,s as l,g as u,t as m,u as g,r as c,V as h,j as s,J as f,U as x}from"./index-2ddb8e57.js";import{e as A,A as j}from"./index-86528613.js";import{B as b}from"./NewArticleForm-c13a6a2f.js";import"./index.esm-c6d4536d.js";const v=r(j)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 0;
  gap: 30px;
`,E=r.p`
  flex: 1;
`,d=r(b)`
  min-width: 70px;
`;function C(){const e=a(l),i=u(),n=a(m),o=g();c.useEffect(()=>{e!=null&&e.admin||i(-1)},[e,i]),c.useEffect(()=>{o(h("?order=username,asc"))},[o]);function p(t){console.log(t),o(x({id:t.id,token:e.token,newData:{approved:!t.approved}}))}return e!=null&&e.admin?n.length?s.jsx(A,{children:n==null?void 0:n.map(t=>s.jsxs(v,{style:{minHeight:0},children:[s.jsx(E,{children:t.username}),s.jsx(d,{onClick:()=>p(t),$bg:"green",children:t.approved?"zabrani":"odobri"}),s.jsx(d,{$bg:"red",children:"obriši"})]},t.id))}):s.jsx(f,{}):(i(-1),"Not authorized")}export{C as default};
