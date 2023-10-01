import{c as E,d as h,e as C,j as e,f as D,a as M,r as o,h as I,i as B,u as L,k as P,l as z,m as F,n as O,b as U,B as q}from"./index-8f26b1f9.js";import{M as H,a as J,b as S,S as R,T as K,C as V,c as _,B as k,N as G,P as Q,A as W,H as X}from"./index-ff3458df.js";import{u as Y,D as Z}from"./index.esm-0b7f7be1.js";import{u as ee}from"./useTimedMessage-e68f89f4.js";function te({setShowModal:a,id:t}){const g=E(),i=h(C);function j(){g(D({id:t,token:i.token})),a(!1),window.scrollTo({top:0,behavior:"smooth"})}return e.jsx(H,{id:"modal",children:e.jsxs(J,{children:[e.jsx("p",{style:{marginBottom:"10px"},children:"Sigurno želiš da obrišeš članak?"}),e.jsx(S,{$bg:"green",$float:"left",onClick:()=>a(!1),children:"Ne"}),e.jsx(S,{$bg:"green",$float:"right",onClick:j,children:"Da"})]})})}function se(){var y,A;const{id:a}=M(),[t,g]=o.useState(""),i=h(C),j=h(I),r=ee(),l=E(),p=h(B),c=L(),[w,v]=o.useState(!1),b=h(P),{register:f,handleSubmit:N,formState:{errors:d},reset:x,control:T}=Y({mode:"onBlur",defaultValues:o.useMemo(()=>{var n;return{title:t==null?void 0:t.title,content:t==null?void 0:t.content,categories:(n=t==null?void 0:t.categories)==null?void 0:n.map(u=>u.name).join(", ")}},[t])});function $(s){var n;if(s.title===t.title&&s.content===t.content&&JSON.stringify(s.categories)===JSON.stringify(t.categories)){r({content:"Ništa nije izmenjeno",variety:"error"});return}if(i&&i.id===t.authorId){const u={id:t.id,title:s.title,content:s.content,authorId:i.id,categories:(n=s.categories)!=null&&n.length?s.categories.split(", ").map(m=>m[0].toUpperCase()+m.slice(1)):[]};l(O({newData:u,token:i.token}))}else r({content:"Samo autori članaka ih mogu menjati",variety:"error"})}return o.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[l]),o.useEffect(()=>{var s;x({title:t==null?void 0:t.title,content:t==null?void 0:t.content,categories:(s=t==null?void 0:t.categories)==null?void 0:s.map(n=>n.name).join(", ")})},[t,x]),o.useEffect(()=>{async function s(){try{const n=await U.get(`${q}/${a}`);g(n.data)}catch(n){r({content:n.response.data.error,variety:"error"})}}a&&s()},[a,r,c]),o.useEffect(()=>{var s,n,u,m;(s=d.title)!=null&&s.message&&r({content:(n=d.title)==null?void 0:n.message,variety:"error"}),(u=d.content)!=null&&u.message&&r({content:(m=d.content)==null?void 0:m.message,variety:"error"})},[r,(y=d.title)==null?void 0:y.message,(A=d.content)==null?void 0:A.message]),o.useEffect(()=>{j&&r({content:j,variety:"error"})},[j,r]),o.useEffect(()=>{p&&(r({content:"Članak je uspešno izmenjen",variety:"success"}),setTimeout(()=>{c(`/articles/${p}`),l(z())},7e3))},[r,x,c,p,l]),o.useEffect(()=>{b&&(c("/"),r({content:"Članak je obrisan",variety:"success"}),setTimeout(()=>l(F()),7e3))},[b,c,l,r]),e.jsxs(R,{onSubmit:N($),children:[e.jsx(K,{type:"text",placeholder:"Naslov članka",...f("title",{required:!0,minLength:{value:1,message:"Naslov članka mora imati najmanje 1 karakter."}})}),e.jsx(V,{className:"scroll scrollInput",rows:"45",placeholder:"Sadržaj članka",...f("content",{required:!0,minLength:{value:10,message:"Sadržaj članka mora imati najmanje 10 karaktera."}})}),e.jsx(_,{type:"text",placeholder:"Kategorije",...f("categories")}),e.jsx(k,{$bg:"blue",type:"button",onClick:()=>c(-1),children:"Poništi"}),e.jsx(k,{$bg:"green",type:"submit",children:"Sačuvaj"}),e.jsx(k,{$bg:"red",type:"button",onClick:()=>v(!0),children:"Obriši"}),w&&e.jsx(te,{setShowModal:v,id:a}),e.jsx(Z,{control:T})]})}function ie(){return e.jsxs(G,{children:[e.jsx(Q,{children:"Izmena članka"}),e.jsxs(W,{children:[e.jsx(se,{}),e.jsxs(X,{children:[e.jsx("h4",{children:"Uputstvo za formatiranje"}),e.jsx("br",{}),e.jsx("p",{children:"## Podnaslov"}),e.jsx("br",{}),e.jsx("p",{children:"### Podpodnaslov"}),e.jsx("br",{}),e.jsx("p",{children:"Tekst"}),e.jsx("br",{}),e.jsxs("p",{children:["(",e.jsx("i",{children:"postavljanje slike"}),")"]}),e.jsx("p",{children:"|     |"}),e.jsx("p",{children:"|:---:|"}),e.jsxs("p",{children:["|![",e.jsx("i",{children:"opis slike"}),"](",e.jsx("i",{children:"link ka slici"}),")|"]}),e.jsxs("p",{children:["|",e.jsx("i",{children:"naslov slike"}),"|"]})]})]})]})}export{ie as default};