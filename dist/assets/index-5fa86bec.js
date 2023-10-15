import{j as e,s as d,c as u,n as b,R as f,r as y,a as j,L as k,B as v}from"./index-c6a04bd1.js";import{r as a}from"./echarts-41e97f80.js";import{u as w,b as C,L as $}from"./react-router-dom-6f0409ae.js";import{u as A}from"./useTimedMessage-4f41be4e.js";import{s as B}from"./stripMarkdown-33a6a140.js";import{B as E}from"./NewArticleForm-a466e66d.js";import"./zrender-e9104294.js";function I(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e.jsx("path",{fill:"black",d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"})})}const z=d.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  padding: 7px;
  border: 3px solid black;
  border-radius: 50%;
  background-color: yellow;
  transition: all 0.3s;
  z-index: 10;
  cursor: pointer;

  &:hover {
    border-color: red;
  }

  &:active {
    transform: scale(0.95);
  }
`;function L({articleId:t}){const i=w();return e.jsx(z,{"data-cyid":"edit",onClick:()=>i(`/edit-article/${t}`),children:e.jsx(I,{})})}const T={img:({alt:t,src:i,title:o})=>e.jsx("img",{alt:t,src:i,title:o,style:{display:"none"}}),table:t=>e.jsx("table",{style:{display:"none"},...t}),a:t=>e.jsx("a",{...t,className:"link",style:{display:"none"}}),p:t=>e.jsx("p",{...t,style:{textAlign:"justify",marginBottom:0}})},S=u`
  from {
    opacity: 0.1;
  } to {
    opacity: 1;
  }
`,M=d.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 200px;
  padding: 5px;
  font-size: 12px;
  border: 3px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
  opacity: 0;
  z-index: 5;
  transform: translate(${({$left:t})=>t}px, ${({$top:t})=>t}px);
  animation: ${()=>b`0.2s ${S} 0.2s forwards`};
`;function R({cloud:t}){var l,x,r;const[i,o]=a.useState({}),n=a.useRef(),c=window.innerWidth;if(a.useEffect(()=>{async function s(){const p=await j.get(`/api/articles/${t.id}`);o(B(p.data))}t!=null&&t.id&&s()},[t]),!!(t!=null&&t.id))return e.jsx(M,{ref:n,$top:(t==null?void 0:t.top)-50>((l=n==null?void 0:n.current)==null?void 0:l.getBoundingClientRect().height)?t.top-10-((x=n==null?void 0:n.current)==null?void 0:x.getBoundingClientRect().height):t.top+10+t.height,$left:(t==null?void 0:t.left)<c/2?t.left:t.left-((r=n==null?void 0:n.current)==null?void 0:r.getBoundingClientRect().width)+t.width,$id:i==null?void 0:i.id,children:e.jsx(f,{id:"markdown",components:T,remarkPlugins:[y],children:i==null?void 0:i.content})})}const W={img:({alt:t,src:i,title:o})=>e.jsx("img",{alt:t,src:i,title:o,loading:"lazy",style:{maxWidth:"100%",minWidth:180,maxHeight:400}}),table:t=>e.jsx("table",{style:{maxWidth:300,float:"right",border:"2px solid rgba(36, 43, 230, 0.3)",borderRadius:"7px",margin:"5px 5px 0 10px ",padding:5,fontSize:12,backgroundColor:"rgba(50, 150, 200, 0.3)"},...t}),a:t=>e.jsx("a",{...t,className:"link",style:{textDecoration:"none"}}),p:t=>e.jsx("p",{...t,style:{textAlign:"justify",marginBottom:15}}),h2:t=>e.jsx("h2",{...t,style:{margin:"0px 0px 10px 0px",display:"inline-block",position:"relative",borderBottom:"2px solid rgba(50, 50, 100, 0.3)"},className:"subtitle"}),h3:t=>e.jsx("h3",{...t,style:{margin:"5px 0"}})},N=d.div`
  margin: 20px;
  transition: all 0.1s;
  overflow: hidden;
`,P=d.h1`
  margin-bottom: 20px;
`,D=d.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: start;
  gap: 30px;
  margin-top: 10px;
`,_=d(E)`
  min-width: 70px;
`,h=d.p`
  color: #528a8a;
  margin-top: 10px;
  font-size: 13px;
  width: 100%;
`;function O(){const{id:t}=C(),[i,o]=a.useState(),[n,c]=a.useState(),l=A(),x=w();return a.useEffect(()=>{async function r(){try{const s=await j.get(`${v}/${t}`);o(s.data)}catch(s){l({content:s.response.data.error,variety:"error"}),setTimeout(()=>x(-1),6e3)}}r()},[t,l,x]),a.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"});const r=setTimeout(()=>{document.querySelectorAll(".link").forEach(s=>{s.addEventListener("mouseenter",p=>{const m=p.target.getAttribute("href").split("/"),g=p.target.getBoundingClientRect();c({id:m[m.length-1],top:g.top,left:g.left,height:g.height,width:g.width})}),s.addEventListener("mouseleave",()=>{c(p=>({...p,id:null}))})})},500);return()=>clearTimeout(r)},[]),i!=null&&i.id?e.jsxs(N,{children:[e.jsx(P,{title:`ID: ${i.id}`,children:i==null?void 0:i.title}),e.jsx(f,{id:"markdown",components:W,remarkPlugins:[y],children:i==null?void 0:i.content}),e.jsx(h,{style:{marginTop:40},children:"Kategorije:"}),e.jsx(D,{children:i==null?void 0:i.categories.map(r=>e.jsx($,{to:`/categories/${r.article_category.categoryId}`,children:e.jsx(_,{$bg:"green",children:r.name})},r.article_category.categoryId))}),e.jsxs(h,{children:[e.jsxs("i",{children:["Autor: ",i.author.name]}),", ",e.jsxs("i",{children:["ID: ",i.id]})]}),e.jsx(L,{articleId:t}),e.jsx(R,{cloud:n})]}):e.jsx(k,{})}export{P as Title,O as default};
