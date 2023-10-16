import{s as i,j as t,a as b}from"./index-2782feee.js";import{r as c}from"./echarts-63d4abac.js";import{L as w,a as m,b as k,A as $}from"./LastArticles-3c8e2eab.js";import{R as C,r as L}from"./index-e51d51b8.js";import"./react-router-dom-50fe5a57.js";import"./zrender-1584b751.js";const E="/assets/helm-e48041ca.svg",A={img:({alt:e,title:s})=>t.jsx("img",{alt:e,title:s,style:{display:"none",maxWidth:"100%",minWidth:180,maxHeight:400}}),table:e=>t.jsx("table",{style:{display:"none"},...e}),a:e=>t.jsx("a",{...e,style:{textDecoration:"none"}}),p:e=>t.jsx("p",{...e,style:{textAlign:"justify",marginBottom:15}}),h2:e=>t.jsx("h2",{...e,style:{margin:"0px 0px 10px 0px",display:"inline-block",position:"relative",borderBottom:"2px solid rgba(50, 50, 100, 0.3)"},className:"subtitle"}),h3:e=>t.jsx("h3",{...e,style:{margin:"5px 0"}})},y=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: calc(90vw - 50px);
  gap: 10px;
  border: 3px solid black;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 30px 10px 10px 10px;
  height: 70vh;
  position: relative;
`,S=i.button`
  text-decoration: none;
  cursor: pointer;
  color: ${({theme:e})=>e.main.color};
  background-color: ${({theme:e})=>e.header.bg};
  border: 3px solid black;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: all 0.2s;

  &:hover {
    border-color: limegreen;
  }

  &:active {
    transform: scale(1.03);
  }
`,H=i.h1`
  margin-bottom: 20px;
`;function R(){const[e,s]=c.useState(),[n,r]=c.useState(0);return c.useEffect(()=>{async function l(){const d=await b.get("/api/articles/random");s(d.data)}l()},[n]),e?t.jsxs(y,{children:[t.jsx(S,{onClick:()=>r(n+1),children:"novi"}),t.jsx(H,{children:e==null?void 0:e.title}),t.jsx(C,{components:A,remarkPlugins:[L],children:e==null?void 0:e.content}),t.jsx(w,{children:t.jsx(m,{"data-cyid":"lucky",to:`/articles/${e.id}`,children:"Opširnije"})})]}):"Loading..."}const X=i(y)`
  flex-wrap: wrap;
`;function O(){const[e,s]=c.useState();return c.useEffect(()=>{async function n(){const r=await b.get("/api/categories/count");s(r.data)}n()},[]),t.jsxs(X,{children:[e==null?void 0:e.map(n=>t.jsxs(m,{style:{width:"50%"},to:`/categories/${n.id}`,children:[n.name," ",n.count]},n.id)),t.jsx(w,{children:t.jsx(m,{to:"/categories",children:"Sve kategorije"})})]})}const g="100vw",f="85vh",Y="200vw",W="170vh",B=i.div`
  width: ${g};
  height: ${f};
  position: relative;
  overflow: hidden;

  @media (hover: none) {
    margin-top: 0px;
  }
`,D=i.div`
  width: ${Y};
  height: ${W};
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(${({$turn:e})=>e}deg);
  transform-origin: center center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,P=i.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  z-index: 100;
  opacity: 1;
  cursor: pointer;

  @media (hover: none) {
    cursor: default;
  }
`,u=i.div``,h=i.div`
  padding-top: 50px;
  padding-left: 80px;

  @media only screen and (max-width: 100vh) {
    padding-top: 80px;
    padding-left: 50px;
  }
`;function q(){const e=c.useRef(0),[s,n]=c.useState(e.current);return c.useEffect(()=>{let r,l,d,p,o=0,x=!1;function v(a){o++,!(o<20)&&(a.deltaY<0?e.current-=90:e.current+=90,o=0,n(e.current))}function j(a){a.preventDefault(),x&&(o++,!(o<=5)&&(l=a.touches[0].screenY,p=a.touches[0].clientX,l-r>20?(e.current-=90,r=l,o=0):r-l>20&&(e.current+=90,r=l,o=0),p-d>20?(e.current-=90,d=p,o=0):d-p>20&&(e.current+=90,d=p,o=0),n(e.current)))}return document.addEventListener("wheel",v),"ontouchstart"in window&&(document.addEventListener("touchstart",a=>{x=!0,r=a.touches[0].screenY,d=a.touches[0].clientX}),document.addEventListener("touchend",()=>{x=!1}),document.addEventListener("touchmove",j)),()=>{document.removeEventListener("wheel",v),document.removeEventListener("touchmove",j)}},[]),t.jsx(B,{children:t.jsxs(D,{$turn:s,children:[t.jsx(P,{onClick:()=>{e.current=s+90,n(r=>r+90)},src:E,alt:"helm image"}),t.jsx(u,{children:t.jsx(h,{style:{transform:`rotate(-180deg) translateX(-${g}) translateY(-${f})`,transformOrigin:"top left"},children:t.jsx(R,{})})}),t.jsx(u,{children:t.jsx(h,{style:{transform:`rotate(-90deg) translateX(-${f})`,transformOrigin:"top left"},children:t.jsx(k,{})})}),t.jsx(u,{children:t.jsx(h,{style:{transform:`rotate(90deg) translateX(${g})`,transformOrigin:"top right"},children:t.jsx(O,{})})}),t.jsx(u,{children:t.jsx(h,{children:t.jsx($,{})})})]})})}export{q as default};
