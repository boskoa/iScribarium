import{s as a,j as t,b as g,d as L,f as T,u as B,g as I,i as D,O as F}from"./index-c6a04bd1.js";import{u as R,a as q}from"./useTimedMessage-4f41be4e.js";import{r as i}from"./echarts-41e97f80.js";import{u as z}from"./react-router-dom-6f0409ae.js";const K=a.div`
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
`,O=a.div`
  background-color: teal;
  border: 3px solid black;
  border-radius: 8px;
  height: 100px;
  padding: 20px;
`,y=a.button`
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
`;function P({setShowModal:e,reset:l}){function s(){e(!1),l(),window.scrollTo({top:0,behavior:"smooth"})}return t.jsx(K,{id:"modal",children:t.jsxs(O,{children:[t.jsx("p",{style:{marginBottom:"10px"},children:"Sigurno želiš da poništiš unos?"}),t.jsx(y,{$bg:"green",$float:"left",onClick:()=>e(!1),children:"Ne"}),t.jsx(y,{$bg:"green",$float:"right",onClick:s,children:"Da"})]})})}const U=a.form`
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
`,Y=a.textarea`
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
`,G=a(C)`
  max-width: 600px;
`,S=a.button`
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
`;function W(){var v,w;const e=g(L),l=g(T),s=g(o=>o.articles.ids.length),r=R(),m=B(),u=i.useRef(null),[$,h]=i.useState(!1),b=g(I),j=z(),[A,k]=i.useState(!1),{register:x,handleSubmit:M,formState:{errors:n},reset:f}=q({mode:"onBlur"});function N(o){var c;if(e){const p={...o,authorId:e.id};m(F({newData:p,categories:(c=o.categories)!=null&&c.length?o.categories.split(", ").map(d=>d[0].toUpperCase()+d.slice(1)):[],token:e.token})),k(!0),setTimeout(()=>k(!1),6e3)}else r({content:"Samo prijavljeni autori mogu praviti članke",variety:"error"})}function E(){h(!0)}return i.useEffect(()=>{var o,c,p,d;(o=n.title)!=null&&o.message&&r({content:(c=n.title)==null?void 0:c.message,variety:"error"}),(p=n.content)!=null&&p.message&&r({content:(d=n.content)==null?void 0:d.message,variety:"error"})},[r,(v=n.title)==null?void 0:v.message,(w=n.content)==null?void 0:w.message]),i.useEffect(()=>{l&&r({content:l,variety:"error"})},[l,r]),i.useEffect(()=>{!u.current&&s&&(u.current=s),s>u.current&&(r({content:"Članak je uspešno napravljen",variety:"success"}),u.current=s,f(),setTimeout(()=>{j(`/articles/${b}`),m(D())},7e3))},[r,s,f,j,b,m]),t.jsxs(U,{onSubmit:M(N),children:[t.jsx(C,{type:"text",placeholder:"Naslov članka",...x("title",{required:!0,minLength:{value:1,message:"Naslov članka mora imati najmanje 1 karakter."}})}),t.jsx(Y,{rows:"45",placeholder:"Sadržaj članka",...x("content",{required:!0,minLength:{value:10,message:"Sadržaj članka mora imati najmanje 10 karaktera."}})}),t.jsx(G,{type:"text",placeholder:"Kategorije",...x("categories")}),t.jsx(S,{$bg:"red",type:"button",onClick:E,children:"Poništi"}),t.jsx(S,{disabled:A,$bg:"green",type:"submit",children:"Sačuvaj"}),$&&t.jsx(P,{setShowModal:h,reset:f})]})}export{S as B,Y as C,K as M,W as N,U as S,C as T,O as a,y as b,G as c};
