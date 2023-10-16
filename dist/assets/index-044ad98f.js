import{s as i,b as a,d as m,N as u,u as l,o as h,j as s,L as f,M as g}from"./index-2782feee.js";import{r as d}from"./echarts-63d4abac.js";import{e as x,A}from"./authorStyledComponents-3067073a.js";import{B as j}from"./NewArticleForm-66c1136f.js";import{u as b}from"./react-router-dom-50fe5a57.js";import"./zrender-1584b751.js";import"./useTimedMessage-d0ae0a00.js";const v=i(A)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 0;
  gap: 30px;
`,N=i.p`
  flex: 1;
`,p=i(j)`
  min-width: 70px;
`;function z(){const e=a(m),n=b(),r=a(u),o=l();d.useEffect(()=>{e!=null&&e.admin||n(-1)},[e,n]),d.useEffect(()=>{o(h("?order=username,asc"))},[o]);function c(t){o(g({id:t.id,token:e.token,newData:{approved:!t.approved}}))}return e!=null&&e.admin?r.length?s.jsx(x,{style:{paddingTop:50},children:r.map(t=>s.jsxs(v,{style:{minHeight:0},children:[s.jsx(N,{children:t.username}),s.jsx(p,{onClick:()=>c(t),$bg:"green",children:t.approved?"zabrani":"odobri"}),s.jsx(p,{$bg:"red",children:"obriši"})]},t.id))}):s.jsx(f,{}):(n(-1),"Not authorized")}export{z as default};
