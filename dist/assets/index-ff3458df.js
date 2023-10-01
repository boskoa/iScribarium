import{s as r,j as e,d as u,e as P,h as z,c as B,r as p,i as I,u as _,l as F,o as R}from"./index-8f26b1f9.js";import{u as q,D as H}from"./index.esm-0b7f7be1.js";import{u as O}from"./useTimedMessage-e68f89f4.js";const U=r.div`
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
`;function W({setShowModal:t,reset:i}){function a(){t(!1),i(),window.scrollTo({top:0,behavior:"smooth"})}return e.jsx(U,{id:"modal",children:e.jsxs(K,{children:[e.jsx("p",{style:{marginBottom:"10px"},children:"Sigurno želiš da poništiš unos?"}),e.jsx(w,{$bg:"green",$float:"left",onClick:()=>t(!1),children:"Ne"}),e.jsx(w,{$bg:"green",$float:"right",onClick:a,children:"Da"})]})})}const Y=r.form`
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
`,G=r.textarea`
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
`,J=r(C)`
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
`;function Q(){var k,v;const t=u(P),i=u(z),a=u(s=>s.articles.ids.length),o=O(),h=B(),x=p.useRef(null),[T,f]=p.useState(!1),j=u(I),b=_(),{register:g,handleSubmit:M,formState:{errors:n},reset:m,control:E}=q({mode:"onBlur"});function D(s){var l;if(t){const c={...s,authorId:t.id};console.log("NEWDATA",c),h(R({newData:c,categories:(l=s.categories)!=null&&l.length?s.categories.split(", ").map(d=>d[0].toUpperCase()+d.slice(1)):[],token:t.token}))}else o({content:"Samo prijavljeni autori mogu praviti članke",variety:"error"})}function L(){f(!0)}return p.useEffect(()=>{var s,l,c,d;(s=n.title)!=null&&s.message&&o({content:(l=n.title)==null?void 0:l.message,variety:"error"}),(c=n.content)!=null&&c.message&&o({content:(d=n.content)==null?void 0:d.message,variety:"error"})},[o,(k=n.title)==null?void 0:k.message,(v=n.content)==null?void 0:v.message]),p.useEffect(()=>{i&&o({content:i,variety:"error"})},[i,o]),p.useEffect(()=>{!x.current&&a&&(x.current=a),a>x.current&&(o({content:"Članak je uspešno napravljen",variety:"success"}),x.current=a,m(),setTimeout(()=>{b(`/articles/${j}`),h(F())},7e3))},[o,a,m,b,j,h]),e.jsxs(Y,{onSubmit:M(D),children:[e.jsx(C,{type:"text",placeholder:"Naslov članka",...g("title",{required:!0,minLength:{value:1,message:"Naslov članka mora imati najmanje 1 karakter."}})}),e.jsx(G,{rows:"45",placeholder:"Sadržaj članka",...g("content",{required:!0,minLength:{value:10,message:"Sadržaj članka mora imati najmanje 10 karaktera."}})}),e.jsx(J,{type:"text",placeholder:"Kategorije",...g("categories")}),e.jsx(y,{$bg:"red",type:"button",onClick:L,children:"Poništi"}),e.jsx(y,{$bg:"green",type:"submit",children:"Sačuvaj"}),e.jsx(H,{control:E}),T&&e.jsx(W,{setShowModal:f,reset:m})]})}const A=r.div`
  margin: 20px;
  flex: 1;
`,S=r.h3`
  margin-bottom: 20px;
`,$=r.div`
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
  height: 300px;
  padding: 10px;
  position: sticky;
  top: 10px;
`;function V(){return e.jsxs(A,{children:[e.jsx(S,{children:"Novi članak"}),e.jsxs($,{children:[e.jsx(Q,{}),e.jsxs(N,{children:[e.jsx("h4",{children:"Uputstvo za formatiranje"}),e.jsx("br",{}),e.jsx("p",{children:"## Podnaslov"}),e.jsx("br",{}),e.jsx("p",{children:"### Podpodnaslov"}),e.jsx("br",{}),e.jsx("p",{children:"Tekst"}),e.jsx("br",{}),e.jsxs("p",{children:["(",e.jsx("i",{children:"postavljanje slike"}),")"]}),e.jsx("p",{children:"|     |"}),e.jsx("p",{children:"|:---:|"}),e.jsxs("p",{children:["|![",e.jsx("i",{children:"opis slike"}),"](",e.jsx("i",{children:"link ka slici"}),")|"]}),e.jsxs("p",{children:["|",e.jsx("i",{children:"naslov slike"}),"|"]})]})]})]})}const te=Object.freeze(Object.defineProperty({__proto__:null,ArticleContainer:$,Helper:N,NewArticleContainer:A,PageTitle:S,default:V},Symbol.toStringTag,{value:"Module"}));export{$ as A,y as B,G as C,N as H,U as M,A as N,S as P,Y as S,C as T,K as a,w as b,J as c,te as i};
