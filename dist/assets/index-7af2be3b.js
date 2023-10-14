import{n as x,q as $,t as S,r as i,e as C,u as X,g as Y,a as p,v as z,w as D,x as R,y as I,z as N,j as n,A as B}from"./index-bdd633cb.js";import{LoginContainer as F}from"./index-8a6482d6.js";import{u as M,D as K}from"./index.esm-549e5546.js";const O=x.form`
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
`,P=(e,r)=>S`
  from {
    transform: translateX(${e+2}px) translateY(${r}px)
  }
  to {
    transform: translateX(${e-2}px) translateY(${r}px)
  }
`,U=(e,r)=>S`
  from {
    transform: rotate(0deg) translateX(${e}px) translateY(${r}px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(${e}px) translateY(${r}px) rotate(-360deg);
  }
`,E=x.button`
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
  animation: ${({$submitted:e,x:r,y:l,direction:c})=>e&&$`0.5s ease-in-out ${c} ${U(r,l)}`};

  &:hover {
    animation: ${({$submitted:e,x:r,y:l})=>!e&&$`0.01s infinite alternate ease-in-out ${P(r,l)}`};
  }
`,g=x.input`
  background-color: rgb(91, 206, 206);
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;

  &:focus {
    outline: 1px solid rgb(220, 20, 60);
    border-radius: 3px;
  }
`;function V(){var j,v,k,y;const[e,r]=i.useState(!1),[l,c]=i.useState(!1),t=C(),f=X(),m=Y(),w=p(z).length,u=p(D),b=p(R),h=p(I),{register:d,handleSubmit:A,formState:{errors:s},control:L}=M({mode:"onBlur"});function T(a){r(!0),setTimeout(()=>r(!1),600),f(B(a))}function q(){c(!0),setTimeout(()=>{c(!1),m(-1)},600)}return i.useEffect(()=>{h&&(t({content:"Već imate nalog",variety:"error"}),m(-1))},[h,t,m]),i.useEffect(()=>{e&&!b&&!u&&(t({content:"Uspešna registracija, možete se ulogovati",variety:"success"}),setTimeout(()=>m("/"),500))},[w,t,m,b,u,e]),i.useEffect(()=>{var a,o;(a=s.name)!=null&&a.message&&t({content:(o=s.name)==null?void 0:o.message,variety:"error"})},[t,(j=s.name)==null?void 0:j.message]),i.useEffect(()=>{var a,o;(a=s.username)!=null&&a.message&&t({content:(o=s.username)==null?void 0:o.message,variety:"error"})},[t,(v=s.username)==null?void 0:v.message]),i.useEffect(()=>{var a,o;(a=s.password)!=null&&a.message&&t({content:(o=s.password)==null?void 0:o.message,variety:"error"})},[t,(k=s.password)==null?void 0:k.message]),i.useEffect(()=>{var a,o;(a=s.email)!=null&&a.message&&t({content:(o=s.email)==null?void 0:o.message,variety:"error"})},[t,(y=s.email)==null?void 0:y.message]),i.useEffect(()=>{u&&(t({content:u,variety:"error"}),setTimeout(()=>f(N()),500))},[u,t,f]),n.jsxs(O,{onSubmit:A(T),children:[n.jsx(g,{type:"text",placeholder:"ime",...d("name",{required:!0,minLength:{value:2,message:"Ime mora imati najmanje 2 karaktera."}})}),n.jsx(g,{type:"text",placeholder:"korisničko ime",...d("username",{required:!0,minLength:{value:2,message:"Korisničko ime mora imati najmanje 2 karaktera."}})}),n.jsx(g,{type:"password",placeholder:"lozinka",...d("password",{required:!0,minLength:{value:6,message:"Lozinka mora imati najmanje 6 karaktera."}})}),n.jsx(g,{type:"email",placeholder:"email",...d("email",{required:!0,pattern:{value:/\S+@\S+\.\S+/,message:"Neodgovarajući format mejla"}})}),n.jsx(E,{type:"submit",x:115,y:115,$submitted:e,direction:"",children:"Pošalji"}),n.jsx(E,{type:"button",x:-115,y:115,$submitted:l,onClick:q,direction:"reverse",children:"Nazad"}),n.jsx(K,{control:L})]})}function Q(){return n.jsx(F,{children:n.jsx(V,{})})}export{Q as default};
