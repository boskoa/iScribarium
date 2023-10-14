import{n as d,r as o,e as I,u as F,g as L,a as b,w as N,x as U,s as z,S as q,T as B,z as O,j as t,U as P,m as R}from"./index-bdd633cb.js";import{u as J,D as M}from"./index.esm-549e5546.js";const V=d.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 300px;
  height: 300px;
  padding: 10px;
  border-radius: 5px;
  padding: 20px;
  position: relative;
  background-color: ${({theme:e})=>e.header.bg};
  opacity: 0.8;
`,K=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,A=d.button`
  background-color: #517ddb5c;
  color: ${({theme:e})=>e.main.color};
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  min-width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(1.05);
  }
`,h=d.input`
  background-color: rgb(91, 206, 206);
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;

  &:focus {
    outline: 1px solid rgb(220, 20, 60);
    border-radius: 3px;
  }
`;function W({author:e}){var v,w,k,S;const[c,p]=o.useState(!1),[m,g]=o.useState(!1),r=I(),i=F(),l=L(),u=b(N),y=b(U),x=b(z),{register:f,handleSubmit:C,formState:{errors:n},getValues:j,control:T}=J({defaultValues:{name:e.name,username:e.username,password:"",email:e.email},mode:"onBlur"});function D(a){p(!0),setTimeout(()=>p(!1),600),i(P({id:x.id,token:x.token,newData:a}))}function $(){g(!0),setTimeout(()=>{g(!1),l(-1)},600)}return o.useEffect(()=>{x||l("/login")},[x,l]),o.useEffect(()=>{if(c&&!y&&!u){r({content:j().password?"Uspešna izmena. Lozinka je promenjena. Ponovo se prijavite.":"Uspešna izmena",variety:"success"});const a={...j()};if(a.password)i(q());else{let s=JSON.parse(window.localStorage.getItem("loggedIScribariumAuthor"));delete a.password,s={...s,...a},window.localStorage.setItem("loggedIScribariumAuthor",JSON.stringify(s)),i(B(s))}setTimeout(()=>l("/"),500)}},[r,l,y,u,c,j,i]),o.useEffect(()=>{var a,s;(a=n.name)!=null&&a.message&&r({content:(s=n.name)==null?void 0:s.message,variety:"error"})},[r,(v=n.name)==null?void 0:v.message]),o.useEffect(()=>{var a,s;(a=n.username)!=null&&a.message&&r({content:(s=n.username)==null?void 0:s.message,variety:"error"})},[r,(w=n.username)==null?void 0:w.message]),o.useEffect(()=>{var a,s;(a=n.password)!=null&&a.message&&r({content:(s=n.password)==null?void 0:s.message,variety:"error"})},[r,(k=n.password)==null?void 0:k.message]),o.useEffect(()=>{var a,s;(a=n.email)!=null&&a.message&&r({content:(s=n.email)==null?void 0:s.message,variety:"error"})},[r,(S=n.email)==null?void 0:S.message]),o.useEffect(()=>{u&&(r({content:u,variety:"error"}),setTimeout(()=>i(O()),500))},[u,r,i]),t.jsxs(V,{onSubmit:C(D),children:[t.jsx(h,{type:"text",...f("name",{required:!0,minLength:{value:2,message:"Ime mora imati najmanje 2 karaktera."}})}),t.jsx(h,{type:"text",placeholder:"korisničko ime",...f("username",{required:!1,minLength:{value:2,message:"Korisničko ime mora imati najmanje 2 karaktera."}})}),t.jsx(h,{type:"password",placeholder:"lozinka",...f("password",{required:!1,minLength:{value:6,message:"Lozinka mora imati najmanje 6 karaktera."}})}),t.jsx(h,{type:"email",placeholder:"email",...f("email",{required:!1,pattern:{value:/\S+@\S+\.\S+/,message:"Neodgovarajući format mejla"}})}),t.jsxs(K,{children:[t.jsx(A,{type:"submit",x:115,y:115,$submitted:c,direction:"",children:"Pošalji"}),t.jsx(A,{type:"button",x:-115,y:115,$submitted:m,onClick:$,direction:"reverse",children:"Nazad"})]}),t.jsx(M,{control:T})]})}const G=d.div`
  flex: 3;
`,H=d.form`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 5px;
  width: 100%;
`,E=d.div`
  background-color: ${({theme:e})=>e.header.bg};
  color: ${({theme:e})=>e.main.color};
  font-size: 13px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  min-width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(1.05);
  }
`,Q=d.img`
  border-radius: 5px;
  border: 2px solid black;
  height: 200px;
  width: 200px;
  display: block;
  margin: 20px auto;
  object-fit: cover;
`;function X({loggedAuthor:e}){const[c,p]=o.useState("Choose avatar"),[m,g]=o.useState(null);async function r(i){i.preventDefault();const l=new FormData;l.append("name",c),l.append("file",m),console.log(m),await R.post(`/api/avatars/${e.id}`,l,{headers:{"Content-Type":"multipart/form-data",Authorization:`bearer ${e.token}`}}),window.location.reload()}return t.jsxs(G,{children:[t.jsxs(H,{id:"avatar-form",encType:"multipart/form-data",children:[t.jsxs("label",{htmlFor:"avatar",style:{maxWidth:"70%"},children:[t.jsx("input",{style:{display:"none"},id:"avatar",type:"file",name:"avatar",onChange:i=>{p(e.id),g(i.target.files[0])}}),t.jsx(E,{children:"Odaberi sliku"})]}),t.jsx(E,{type:"submit",disabled:!m,onClick:i=>r(i),children:"Sačuvaj"})]}),m&&t.jsx(Q,{alt:"chosen avatar",src:m&&URL.createObjectURL(m)})]})}const Y=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  max-width: 1000px;
  min-width: 320px;
  padding: 20px;
  margin: auto;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`,Z=d.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  gap: 10px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`,_=d.h3``;function ae(){const e=b(z),c=L();return o.useEffect(()=>{e||c("/")},[e,c]),e?t.jsxs(Y,{children:[t.jsx(_,{children:"Podesi profil"}),t.jsxs(Z,{children:[t.jsx(W,{author:e}),t.jsx(X,{loggedAuthor:e,style:{width:"50%",border:"1px solid white"},children:"avatar"})]})]}):"Loading..."}export{ae as default};
