import{n as r,j as e,a as u,s as z,c as B,e as D,u as I,r as d,f as _,g as F,i as R,o as q}from"./index-bdd633cb.js";import{u as H,D as O}from"./index.esm-549e5546.js";const U=r.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  transform: translateY(${({$height:t})=>t}px);
`,K=r.div`
  background-color: teal;
  border: 3px solid black;
  border-radius: 8px;
  height: 100px;
  padding: 20px;
`,w=r.button`
  background-color: ${({$bg:t})=>t};
  border: 3px solid black;
  border-radius: 8px;
  font-weight: 600;
  color: white;
  padding: 5px;
  cursor: pointer;

  &:hover {
    border-color: yellow;
  }

  &:active {
    transform: scale(0.95);
  }
  width: 50px;
  float: ${({$float:t})=>t};
`;function Y({setShowModal:t,reset:a}){function n(){t(!1),a(),window.scrollTo({top:0,behavior:"smooth"})}return e.jsx(U,{id:"modal",children:e.jsxs(K,{children:[e.jsx("p",{style:{marginBottom:"10px"},children:"Sigurno želiš da poništiš unos?"}),e.jsx(w,{$bg:"green",$float:"left",onClick:()=>t(!1),children:"Ne"}),e.jsx(w,{$bg:"green",$float:"right",onClick:n,children:"Da"})]})})}const G=r.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  max-width: 600px;
  gap: 20px;
  flex: 2;
`,C=r.input`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${({theme:t})=>t.main.color};
  height: 30px;
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;

  &:focus {
    outline: 2px solid red;
  }
`,J=r.textarea`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${({theme:t})=>t.main.color};
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;
  resize: none;

  &:focus {
    outline: 2px solid red;
  }
`,Q=r(C)`
  max-width: 600px;
`,y=r.button`
  background-color: ${({$bg:t})=>t};
  border: 3px solid black;
  border-radius: 8px;
  font-weight: 600;
  color: white;
  padding: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: yellow;
  }

  &:active {
    transform: scale(0.95);
  }
`;function V(){var k,v;const t=u(z),a=u(B),n=u(s=>s.articles.ids.length),o=D(),h=I(),p=d.useRef(null),[M,m]=d.useState(!1),f=u(_),b=F(),{register:g,handleSubmit:T,formState:{errors:i},reset:j,control:E}=H({mode:"onBlur"});function L(s){var l;if(t){const x={...s,authorId:t.id};h(q({newData:x,categories:(l=s.categories)!=null&&l.length?s.categories.split(", ").map(c=>c[0].toUpperCase()+c.slice(1)):[],token:t.token}))}else o({content:"Samo prijavljeni autori mogu praviti članke",variety:"error"})}function P(){m(!0)}return d.useEffect(()=>{var s,l,x,c;(s=i.title)!=null&&s.message&&o({content:(l=i.title)==null?void 0:l.message,variety:"error"}),(x=i.content)!=null&&x.message&&o({content:(c=i.content)==null?void 0:c.message,variety:"error"})},[o,(k=i.title)==null?void 0:k.message,(v=i.content)==null?void 0:v.message]),d.useEffect(()=>{a&&o({content:a,variety:"error"})},[a,o]),d.useEffect(()=>{!p.current&&n&&(p.current=n),n>p.current&&(o({content:"Članak je uspešno napravljen",variety:"success"}),p.current=n,j(),setTimeout(()=>{b(`/articles/${f}`),h(R())},7e3))},[o,n,j,b,f,h]),e.jsxs(G,{onSubmit:T(L),children:[e.jsx(C,{type:"text",placeholder:"Naslov članka",...g("title",{required:!0,minLength:{value:1,message:"Naslov članka mora imati najmanje 1 karakter."}})}),e.jsx(J,{rows:"45",placeholder:"Sadržaj članka",...g("content",{required:!0,minLength:{value:10,message:"Sadržaj članka mora imati najmanje 10 karaktera."}})}),e.jsx(Q,{type:"text",placeholder:"Kategorije",...g("categories")}),e.jsx(y,{$bg:"red",type:"button",onClick:P,children:"Poništi"}),e.jsx(y,{$bg:"green",type:"submit",children:"Sačuvaj"}),e.jsx(O,{control:E}),M&&e.jsx(Y,{setShowModal:m,reset:j})]})}const S=r.div`
  margin: 20px;
  flex: 1;
`,$=r.h3`
  margin-bottom: 20px;
`,A=r.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`,N=r.div`
  max-width: 600px;
  background-color: rgba(200, 200, 0, 0.3);
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;
  flex: 1;
  font-size: 14px;
  height: 320px;
  padding: 10px;
  position: sticky;
  top: 10px;
`;function W(){return e.jsxs(S,{children:[e.jsx($,{children:"Novi članak"}),e.jsxs(A,{children:[e.jsx(V,{}),e.jsxs(N,{children:[e.jsx("h4",{children:"Uputstvo za formatiranje"}),e.jsx("br",{}),e.jsx("p",{children:"## Podnaslov"}),e.jsx("br",{}),e.jsx("p",{children:"### Podpodnaslov"}),e.jsx("br",{}),e.jsx("p",{children:"Tekst"}),e.jsx("br",{}),e.jsxs("p",{children:["(",e.jsx("i",{children:"postavljanje slike"}),")"]}),e.jsx("p",{children:"|     |"}),e.jsx("p",{children:"|:---:|"}),e.jsxs("p",{children:["|![",e.jsx("i",{children:"opis slike"}),"](",e.jsx("i",{children:"link ka slici"}),")|"]}),e.jsxs("p",{children:["|",e.jsx("i",{children:"naslov slike"}),"|"]}),e.jsx("br",{}),e.jsxs("p",{children:["(",e.jsx("i",{children:"linkovanje"}),")"]}),e.jsxs("p",{children:["[",e.jsx("i",{children:"tekst linka"}),"](",e.jsx("i",{children:"/articles/:id"}),")"]})]})]})]})}const ee=Object.freeze(Object.defineProperty({__proto__:null,ArticleContainer:A,Helper:N,NewArticleContainer:S,PageTitle:$,default:W},Symbol.toStringTag,{value:"Module"}));export{A,y as B,J as C,N as H,U as M,S as N,$ as P,G as S,C as T,K as a,w as b,Q as c,ee as i};
