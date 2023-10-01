import{s as o,r as i,c as L,u as A,d as g,q as T,z as F,A as q,j as e,C as B,b as I,e as N}from"./index-8f26b1f9.js";import{u as R,D as O}from"./index.esm-0b7f7be1.js";import{u as U}from"./useTimedMessage-e68f89f4.js";const M=o.form`
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
  background-color: ${({theme:t})=>t.header.bg};
  opacity: 0.8;
`,P=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,k=o.button`
  background-color: #517ddb5c;
  color: ${({theme:t})=>t.main.color};
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
`,f=o.input`
  background-color: rgb(91, 206, 206);
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;

  &:focus {
    outline: 1px solid rgb(220, 20, 60);
    border-radius: 3px;
  }
`;function K({author:t}){var j,y,v,w;const[d,u]=i.useState(!1),[c,p]=i.useState(!1),a=U(),m=L(),l=A(),E=g(T).length,h=g(F),b=g(q),{register:x,handleSubmit:C,formState:{errors:r},control:$}=R({defaultValues:{name:t.name,username:t.username,password:"",email:t.email},mode:"onBlur"});function D(s){u(!0),setTimeout(()=>u(!1),600),m(B(s))}function z(){p(!0),setTimeout(()=>{p(!1),l(-1)},600)}return i.useEffect(()=>{b||l("/login")},[b,l]),i.useEffect(()=>{d&&(a({content:"Uspešna registracija, možete se ulogovati",variety:"success"}),l("/"))},[E,a,l,d]),i.useEffect(()=>{var s,n;(s=r.name)!=null&&s.message&&a({content:(n=r.name)==null?void 0:n.message,variety:"error"})},[a,(j=r.name)==null?void 0:j.message]),i.useEffect(()=>{var s,n;(s=r.username)!=null&&s.message&&a({content:(n=r.username)==null?void 0:n.message,variety:"error"})},[a,(y=r.username)==null?void 0:y.message]),i.useEffect(()=>{var s,n;(s=r.password)!=null&&s.message&&a({content:(n=r.password)==null?void 0:n.message,variety:"error"})},[a,(v=r.password)==null?void 0:v.message]),i.useEffect(()=>{var s,n;(s=r.email)!=null&&s.message&&a({content:(n=r.email)==null?void 0:n.message,variety:"error"})},[a,(w=r.email)==null?void 0:w.message]),i.useEffect(()=>{h&&a({content:h,variety:"error"})},[h,a]),e.jsxs(M,{onSubmit:C(D),children:[e.jsx(f,{type:"text",...x("name",{required:!0,minLength:{value:2,message:"Ime mora imati najmanje 2 karaktera."}})}),e.jsx(f,{type:"text",placeholder:"korisničko ime",...x("username",{required:!0,minLength:{value:2,message:"Korisničko ime mora imati najmanje 2 karaktera."}})}),e.jsx(f,{type:"password",placeholder:"lozinka",...x("password",{required:!0,minLength:{value:6,message:"Lozinka mora imati najmanje 6 karaktera."}})}),e.jsx(f,{type:"email",placeholder:"email",...x("email",{required:!0,pattern:{value:/\S+@\S+\.\S+/,message:"Neodgovarajući format mejla"}})}),e.jsxs(P,{children:[e.jsx(k,{type:"submit",x:115,y:115,$submitted:d,direction:"",children:"Pošalji"}),e.jsx(k,{type:"button",x:-115,y:115,$submitted:c,onClick:z,direction:"reverse",children:"Nazad"})]}),e.jsx(O,{control:$})]})}const V=o.div`
  flex: 3;
`,W=o.form`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 5px;
  width: 100%;
`,S=o.div`
  background-color: ${({theme:t})=>t.header.bg};
  color: ${({theme:t})=>t.main.color};
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
`,G=o.img`
  border-radius: 5px;
  border: 2px solid black;
  height: 200px;
  width: 200px;
  display: block;
  margin: 20px auto;
  object-fit: cover;
`;function H({loggedAuthor:t}){const[d,u]=i.useState("Choose avatar"),[c,p]=i.useState(null);async function a(m){m.preventDefault();const l=new FormData;l.append("name",d),l.append("file",c),console.log(c),await I.post(`/api/avatars/${t.id}`,l,{headers:{"Content-Type":"multipart/form-data",Authorization:`bearer ${t.token}`}}),window.location.reload()}return e.jsxs(V,{children:[e.jsxs(W,{id:"avatar-form",encType:"multipart/form-data",children:[e.jsxs("label",{htmlFor:"avatar",style:{maxWidth:"70%"},children:[e.jsx("input",{style:{display:"none"},id:"avatar",type:"file",name:"avatar",onChange:m=>{u(t.id),p(m.target.files[0])}}),e.jsx(S,{children:"Odaberi sliku"})]}),e.jsx(S,{type:"submit",disabled:!c,onClick:m=>a(m),children:"Sačuvaj"})]}),c&&e.jsx(G,{alt:"chosen avatar",src:c&&URL.createObjectURL(c)})]})}const J=o.div`
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
`,Q=o.div`
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
`,X=o.h3``;function ee(){const t=g(N),d=A();return i.useEffect(()=>{t||d("/login")},[t,d]),e.jsxs(J,{children:[e.jsx(X,{children:"Podesi profil"}),e.jsxs(Q,{children:[e.jsx(K,{author:t}),e.jsx(H,{loggedAuthor:t,style:{width:"50%",border:"1px solid white"},children:"avatar"})]})]})}export{ee as default};
