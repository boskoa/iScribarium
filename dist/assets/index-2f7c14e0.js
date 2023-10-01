import{s as f,x as k,y as $,r as i,c as q,u as X,d as g,q as Y,z,A as D,j as n,C as R}from"./index-8f26b1f9.js";import{LoginContainer as T}from"./index-dac67301.js";import{u as I,D as N}from"./index.esm-0b7f7be1.js";import{u as B}from"./useTimedMessage-e68f89f4.js";const F=f.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 300px;
  padding: 10px;
  background: radial-gradient(
    circle at 70% 20%,
    rgb(72, 208, 208) 15px,
    rgb(0, 128, 128) 17px
  );
  border-radius: 50%;
  border: 1px solid black;
  padding: 20px;
  position: relative;
`,M=(e,r)=>$`
  from {
    transform: translateX(${e+2}px) translateY(${r}px)
  }
  to {
    transform: translateX(${e-2}px) translateY(${r}px)
  }
`,K=(e,r)=>$`
  from {
    transform: rotate(0deg) translateX(${e}px) translateY(${r}px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(${e}px) translateY(${r}px) rotate(-360deg);
  }
`,y=f.button`
  height: 70px;
  width: 70px;
  background: radial-gradient(
    circle at 70% 20%,
    rgb(240, 160, 160) 4px,
    rgb(220, 20, 60) 6px
  );
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 115px;
  left: 115px;
  cursor: pointer;
  transform: translateX(${({x:e})=>e}px) translateY(${({y:e})=>e}px);
  transition: 1s all 0.2s;
  animation: ${({$submitted:e,x:r,y:l,direction:u})=>e&&k`0.5s ease-in-out ${u} ${K(r,l)}`};

  &:hover {
    animation: ${({$submitted:e,x:r,y:l})=>!e&&k`0.01s infinite alternate ease-in-out ${M(r,l)}`};
  }
`,d=f.input`
  background-color: rgb(91, 206, 206);
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;

  &:focus {
    outline: 1px solid rgb(220, 20, 60);
    border-radius: 3px;
  }
`;function O(){var b,h,j,v;const[e,r]=i.useState(!1),[l,u]=i.useState(!1),t=B(),E=q(),m=X(),S=g(Y).length,p=g(z),x=g(D),{register:c,handleSubmit:w,formState:{errors:s},control:A}=I({mode:"onBlur"});function L(a){r(!0),setTimeout(()=>r(!1),600),E(R(a))}function C(){u(!0),setTimeout(()=>{u(!1),m(-1)},600)}return i.useEffect(()=>{x&&(t({content:"Već imate nalog",variety:"error"}),m(-1))},[x,t,m]),i.useEffect(()=>{e&&(t({content:"Uspešna registracija, možete se ulogovati",variety:"success"}),m("/"))},[S,t,m,e]),i.useEffect(()=>{var a,o;(a=s.name)!=null&&a.message&&t({content:(o=s.name)==null?void 0:o.message,variety:"error"})},[t,(b=s.name)==null?void 0:b.message]),i.useEffect(()=>{var a,o;(a=s.username)!=null&&a.message&&t({content:(o=s.username)==null?void 0:o.message,variety:"error"})},[t,(h=s.username)==null?void 0:h.message]),i.useEffect(()=>{var a,o;(a=s.password)!=null&&a.message&&t({content:(o=s.password)==null?void 0:o.message,variety:"error"})},[t,(j=s.password)==null?void 0:j.message]),i.useEffect(()=>{var a,o;(a=s.email)!=null&&a.message&&t({content:(o=s.email)==null?void 0:o.message,variety:"error"})},[t,(v=s.email)==null?void 0:v.message]),i.useEffect(()=>{p&&t({content:p,variety:"error"})},[p,t]),n.jsxs(F,{onSubmit:w(L),children:[n.jsx(d,{type:"text",placeholder:"ime",...c("name",{required:!0,minLength:{value:2,message:"Ime mora imati najmanje 2 karaktera."}})}),n.jsx(d,{type:"text",placeholder:"korisničko ime",...c("username",{required:!0,minLength:{value:2,message:"Korisničko ime mora imati najmanje 2 karaktera."}})}),n.jsx(d,{type:"password",placeholder:"lozinka",...c("password",{required:!0,minLength:{value:6,message:"Lozinka mora imati najmanje 6 karaktera."}})}),n.jsx(d,{type:"email",placeholder:"email",...c("email",{required:!0,pattern:{value:/\S+@\S+\.\S+/,message:"Neodgovarajući format mejla"}})}),n.jsx(y,{type:"submit",x:115,y:115,$submitted:e,direction:"",children:"Pošalji"}),n.jsx(y,{type:"button",x:-115,y:115,$submitted:l,onClick:C,direction:"reverse",children:"Nazad"}),n.jsx(N,{control:A})]})}function H(){return n.jsx(T,{children:n.jsx(O,{})})}export{H as default};
