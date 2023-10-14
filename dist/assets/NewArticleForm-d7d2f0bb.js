import{n as a,j as t,a as g,s as N,c as E,e as L,u as B,r as d,f as I,g as T,i as D,W as F}from"./index-75c58116.js";import{u as R}from"./index.esm-22e08e3a.js";const q=a.div`
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
  transform: translateY(${({$height:e})=>e}px);
`,z=a.div`
  background-color: teal;
  border: 3px solid black;
  border-radius: 8px;
  height: 100px;
  padding: 20px;
`,w=a.button`
  background-color: ${({$bg:e})=>e};
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
  float: ${({$float:e})=>e};
`;function K({setShowModal:e,reset:i}){function s(){e(!1),i(),window.scrollTo({top:0,behavior:"smooth"})}return t.jsx(q,{id:"modal",children:t.jsxs(z,{children:[t.jsx("p",{style:{marginBottom:"10px"},children:"Sigurno želiš da poništiš unos?"}),t.jsx(w,{$bg:"green",$float:"left",onClick:()=>e(!1),children:"Ne"}),t.jsx(w,{$bg:"green",$float:"right",onClick:s,children:"Da"})]})})}const P=a.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  max-width: 600px;
  gap: 20px;
  flex: 2;
`,C=a.input`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${({theme:e})=>e.main.color};
  height: 30px;
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;

  &:focus {
    outline: 2px solid red;
  }
`,U=a.textarea`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${({theme:e})=>e.main.color};
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;
  resize: none;

  &:focus {
    outline: 2px solid red;
  }
`,W=a(C)`
  max-width: 600px;
`,y=a.button`
  background-color: ${({$bg:e})=>e};
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
`;function H(){var k,v;const e=g(N),i=g(E),s=g(o=>o.articles.ids.length),r=L(),x=B(),u=d.useRef(null),[$,f]=d.useState(!1),b=g(I),j=T(),{register:m,handleSubmit:S,formState:{errors:n},reset:h}=R({mode:"onBlur"});function A(o){var l;if(e){const p={...o,authorId:e.id};x(F({newData:p,categories:(l=o.categories)!=null&&l.length?o.categories.split(", ").map(c=>c[0].toUpperCase()+c.slice(1)):[],token:e.token}))}else r({content:"Samo prijavljeni autori mogu praviti članke",variety:"error"})}function M(){f(!0)}return d.useEffect(()=>{var o,l,p,c;(o=n.title)!=null&&o.message&&r({content:(l=n.title)==null?void 0:l.message,variety:"error"}),(p=n.content)!=null&&p.message&&r({content:(c=n.content)==null?void 0:c.message,variety:"error"})},[r,(k=n.title)==null?void 0:k.message,(v=n.content)==null?void 0:v.message]),d.useEffect(()=>{i&&r({content:i,variety:"error"})},[i,r]),d.useEffect(()=>{!u.current&&s&&(u.current=s),s>u.current&&(r({content:"Članak je uspešno napravljen",variety:"success"}),u.current=s,h(),setTimeout(()=>{j(`/articles/${b}`),x(D())},7e3))},[r,s,h,j,b,x]),t.jsxs(P,{onSubmit:S(A),children:[t.jsx(C,{type:"text",placeholder:"Naslov članka",...m("title",{required:!0,minLength:{value:1,message:"Naslov članka mora imati najmanje 1 karakter."}})}),t.jsx(U,{rows:"45",placeholder:"Sadržaj članka",...m("content",{required:!0,minLength:{value:10,message:"Sadržaj članka mora imati najmanje 10 karaktera."}})}),t.jsx(W,{type:"text",placeholder:"Kategorije",...m("categories")}),t.jsx(y,{$bg:"red",type:"button",onClick:M,children:"Poništi"}),t.jsx(y,{$bg:"green",type:"submit",children:"Sačuvaj"}),$&&t.jsx(K,{setShowModal:f,reset:h})]})}export{y as B,U as C,q as M,H as N,P as S,C as T,z as a,w as b,W as c};
