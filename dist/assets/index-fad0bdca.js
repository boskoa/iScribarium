import{u as E,a as m,s as C,j as e,d as M,b as T,r as i,c as I,e as B,f as D,g as L,h as P,i as z,k as F,l as O,m as U,B as q}from"./index-2ddb8e57.js";import{NewArticleContainer as J,PageTitle as R,ArticleContainer as H,Helper as K}from"./index-d7c54fc5.js";import{u as V}from"./index.esm-c6d4536d.js";import{M as _,a as G,b as S,S as Q,T as W,C as X,c as Y,B as k}from"./NewArticleForm-c13a6a2f.js";function Z({setShowModal:o,id:t}){const g=E(),a=m(C);function j(){g(M({id:t,token:a.token})),o(!1),window.scrollTo({top:0,behavior:"smooth"})}return e.jsx(_,{id:"modal",children:e.jsxs(G,{children:[e.jsx("p",{style:{marginBottom:"10px"},children:"Sigurno želiš da obrišeš članak?"}),e.jsx(S,{$bg:"green",$float:"left",onClick:()=>o(!1),children:"Ne"}),e.jsx(S,{$bg:"green",$float:"right",onClick:j,children:"Da"})]})})}function ee(){var y,A;const{id:o}=T(),[t,g]=i.useState(""),a=m(C),j=m(I),r=B(),l=E(),p=m(D),c=L(),[w,v]=i.useState(!1),b=m(P),{register:x,handleSubmit:N,formState:{errors:d},reset:f}=V({mode:"onBlur",defaultValues:i.useMemo(()=>{var n;return{title:t==null?void 0:t.title,content:t==null?void 0:t.content,categories:(n=t==null?void 0:t.categories)==null?void 0:n.map(u=>u.name).join(", ")}},[t])});function $(s){var n;if(s.title===t.title&&s.content===t.content&&JSON.stringify(s.categories)===JSON.stringify(t.categories)){r({content:"Ništa nije izmenjeno",variety:"error"});return}if(a&&a.id===t.authorId){const u={id:t.id,title:s.title,content:s.content,authorId:a.id,categories:(n=s.categories)!=null&&n.length?s.categories.split(", ").map(h=>h[0].toUpperCase()+h.slice(1)):[]};l(O({newData:u,token:a.token}))}else r({content:"Samo autori članaka ih mogu menjati",variety:"error"})}return i.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[l]),i.useEffect(()=>{var s;f({title:t==null?void 0:t.title,content:t==null?void 0:t.content,categories:(s=t==null?void 0:t.categories)==null?void 0:s.map(n=>n.name).join(", ")})},[t,f]),i.useEffect(()=>{async function s(){try{const n=await U.get(`${q}/${o}`);g(n.data)}catch(n){r({content:n.response.data.error,variety:"error"})}}o&&s()},[o,r,c]),i.useEffect(()=>{var s,n,u,h;(s=d.title)!=null&&s.message&&r({content:(n=d.title)==null?void 0:n.message,variety:"error"}),(u=d.content)!=null&&u.message&&r({content:(h=d.content)==null?void 0:h.message,variety:"error"})},[r,(y=d.title)==null?void 0:y.message,(A=d.content)==null?void 0:A.message]),i.useEffect(()=>{j&&r({content:j,variety:"error"})},[j,r]),i.useEffect(()=>{p&&(r({content:"Članak je uspešno izmenjen",variety:"success"}),setTimeout(()=>{c(`/articles/${p}`),l(z())},7e3))},[r,f,c,p,l]),i.useEffect(()=>{b&&(c("/"),r({content:"Članak je obrisan",variety:"success"}),setTimeout(()=>l(F()),7e3))},[b,c,l,r]),e.jsxs(Q,{onSubmit:N($),children:[e.jsx(W,{type:"text",placeholder:"Naslov članka",...x("title",{required:!0,minLength:{value:1,message:"Naslov članka mora imati najmanje 1 karakter."}})}),e.jsx(X,{className:"scroll scrollInput",rows:"45",placeholder:"Sadržaj članka",...x("content",{required:!0,minLength:{value:10,message:"Sadržaj članka mora imati najmanje 10 karaktera."}})}),e.jsx(Y,{type:"text",placeholder:"Kategorije",...x("categories")}),e.jsx(k,{$bg:"blue",type:"button",onClick:()=>c(-1),children:"Poništi"}),e.jsx(k,{$bg:"green",type:"submit",children:"Sačuvaj"}),e.jsx(k,{$bg:"red",type:"button",onClick:()=>v(!0),children:"Obriši"}),w&&e.jsx(Z,{setShowModal:v,id:o})]})}function ie(){return e.jsxs(J,{children:[e.jsx(R,{children:"Izmena članka"}),e.jsxs(H,{children:[e.jsx(ee,{}),e.jsxs(K,{children:[e.jsx("h4",{children:"Uputstvo za formatiranje"}),e.jsx("br",{}),e.jsx("p",{children:"## Podnaslov"}),e.jsx("br",{}),e.jsx("p",{children:"### Podpodnaslov"}),e.jsx("br",{}),e.jsx("p",{children:"Tekst"}),e.jsx("br",{}),e.jsxs("p",{children:["(",e.jsx("i",{children:"postavljanje slike"}),")"]}),e.jsx("p",{children:"|     |"}),e.jsx("p",{children:"|:---:|"}),e.jsxs("p",{children:["|![",e.jsx("i",{children:"opis slike"}),"](",e.jsx("i",{children:"link ka slici"}),")|"]}),e.jsxs("p",{children:["|",e.jsx("i",{children:"naslov slike"}),"|"]}),e.jsx("br",{}),e.jsxs("p",{children:["(",e.jsx("i",{children:"linkovanje"}),")"]}),e.jsxs("p",{children:["[",e.jsx("i",{children:"tekst linka"}),"](",e.jsx("i",{children:"/articles/:id"}),")"]})]})]})]})}export{ie as default};
