import{s as a,c as l,n as h,b as p,l as x,u as m,p as g,o as u,j as e,P as f,a as b}from"./index-2782feee.js";import{r as d}from"./echarts-63d4abac.js";import{R as y,r as w}from"./index-e51d51b8.js";import{L as v}from"./react-router-dom-50fe5a57.js";const c=a.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(90vw - 50px);
  gap: 10px;
`,j=l`
  from {
    transform: scale(0.01);
  }
  to {
    transform: scale(1);
  }
`,k=a.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  width: 80vw;
  height: 17vh;
  border: 3px solid black;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${()=>h`0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${j} both`};

  &:nth-child(${({$order:t})=>t}) {
    animation-delay: ${({$order:t})=>`${t*.2+.3}s`};
  }

  @media (hover: none) {
    &:nth-child(${({$order:t})=>t}) {
      ${({$order:t})=>t>4?"display: none;":""};
    }

    @media only screen and (min-width: 100vh) {
      height: 30vh;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 40vw;
  }

  @media only screen and (max-width: 600px) {
    &:nth-child(${({$order:t})=>t}) {
      ${({$order:t})=>t>4?"display: none;":""};
    }
  }
`,$=a.img`
  border-radius: 7vh;
  border: 2px solid black;
  height: 12vh;
  width: 12vh;
  margin: 4px;
`,A=a.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  height: 95%;
`,r=a.p`
  font-size: 12px;
`;function D(t){const i=t.articles.map(n=>n.f5);return i.sort((n,s)=>new Date(s)-new Date(n)),i[0]?i[0]:t.created_at}function C(){const t=p(x),i=m();return d.useEffect(()=>{i(g()),i(u("?pagination=0,8&order=count,desc"))},[i]),e.jsx(c,{children:t==null?void 0:t.map((n,s)=>e.jsxs(k,{$order:s+1,children:[e.jsx($,{src:`/public/data/uploads/avatars/${n.id}.webp`,alt:"user avatar",onError:o=>{o.currentTarget.src=f,o.currentTarget.height="20",o.currentTarget.width="20"}}),e.jsxs(A,{children:[e.jsxs(r,{children:["Ime: ",n.name]}),e.jsxs(r,{children:["Broj članaka: ",n.count]}),e.jsxs(r,{children:["Član od: ",new Date(n.created_at).toLocaleDateString("de-DE")]}),e.jsxs(r,{children:["Aktivan: ",new Date(D(n)).toLocaleDateString("de-DE")," "]})]})]},n.id))})}const L={img:({alt:t,title:i})=>e.jsx("img",{alt:t,title:i,style:{display:"none",maxWidth:"100%",minWidth:180,maxHeight:400}}),table:t=>e.jsx("table",{style:{display:"none"},...t}),a:t=>e.jsx("a",{...t,style:{textDecoration:"none"}}),p:t=>e.jsx("p",{...t,style:{fontSize:11,textAlign:"justify",marginBottom:0}}),h2:t=>e.jsx("h2",{...t,style:{display:"none"},className:"subtitle"}),h3:t=>e.jsx("h3",{...t,style:{display:"none"}})},E=a.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  width: 80vw;
  overflow: hidden;
  padding: 3px;
  height: 23vh;
  position: relative;
  border: 3px solid black;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.1s;

  @media (hover: none) {
    &:nth-child(${({$order:t})=>t}) {
      ${({$order:t})=>t>3?"display: none;":""};
    }

    @media only screen and (min-width: 100vh) {
      height: 30vh;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 40vw;
  }

  @media only screen and (max-width: 600px) {
    &:nth-child(${({$order:t})=>t}) {
      ${({$order:t})=>t>3?"display: none;":""};
    }
  }
`,z=a.h4`
  font-size: 13px;
`,S=a.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: linear-gradient(
    to top,
    ${({theme:t})=>t.header.bg} 10%,
    transparent
  );
  text-align: right;
  font-size: 12px;
  padding: 10px;
`,T=a(v)`
  text-decoration: none;
  color: transparent;
  background: linear-gradient(
    to top,
    limegreen 50%,
    ${({theme:t})=>t.main.color} 50%
  );
  background-size: 100% 200%;
  background-position-y: top;
  background-clip: text;
  -webkit-background-clip: text;
  transition: all 0.3s;

  &:hover {
    background-position-y: bottom;
  }
`;function W(){const[t,i]=d.useState([]);return d.useEffect(()=>{async function n(){const s=await b.get("/api/articles?pagination=0,6&order=id,desc");i(s.data)}n()},[]),e.jsx(c,{children:t.map((n,s)=>e.jsxs(E,{$order:s+1,children:[e.jsx(z,{children:n.title}),e.jsx(y,{components:L,remarkPlugins:[w],children:n==null?void 0:n.content}),e.jsx(S,{children:e.jsx(T,{to:`/articles/${n.id}`,children:"Opširnije"})})]},n.id))})}export{C as A,S as L,T as a,W as b};
