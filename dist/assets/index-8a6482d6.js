import{n as c,q as v,t as w,r as o,e as D,u as T,g as X,a as $,C as Y,y as q,D as z,j as a,E as A}from"./index-bdd633cb.js";import{u as B,D as F}from"./index.esm-549e5546.js";const I=c.form`
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
`,M=(e,t)=>w`
  from {
    transform: translateX(${e+2}px) translateY(${t}px)
  }
  to {
    transform: translateX(${e-2}px) translateY(${t}px)
  }
`,N=(e,t)=>w`
  from {
    transform: rotate(0deg) translateX(${e}px) translateY(${t}px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(${e}px) translateY(${t}px) rotate(-360deg);
  }
`,k=c.button`
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
  animation: ${({$submitted:e,x:t,y:n,direction:i})=>e&&v`0.5s ease-in-out ${i} ${N(t,n)}`};

  &:hover {
    animation: ${({$submitted:e,x:t,y:n})=>!e&&v`0.01s infinite alternate ease-in-out ${M(t,n)}`};
  }
`,y=c.input`
  background-color: rgb(91, 206, 206);
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;

  &:focus {
    outline: 1px solid rgb(220, 20, 60);
    border-radius: 3px;
  }
`;function U(){var x,f;const[e,t]=o.useState(!1),[n,i]=o.useState(!1),r=D(),l=T(),u=X(),p=$(Y),m=$(q),{register:g,handleSubmit:E,formState:{errors:s},control:L}=B({mode:"onBlur"});function S(d){t(!0),setTimeout(()=>t(!1),600),l(A(d))}function C(){i(!0),setTimeout(()=>{i(!1),u(-1)},600)}return o.useEffect(()=>{m&&(r({content:"Uspešna prijava",variety:"success"}),u(-1))},[m,r,u]),o.useEffect(()=>{var d,b,h,j;(d=s.username)!=null&&d.message&&r({content:(b=s.username)==null?void 0:b.message,variety:"error"}),(h=s.password)!=null&&h.message&&r({content:(j=s.password)==null?void 0:j.message,variety:"error"})},[r,(x=s.username)==null?void 0:x.message,(f=s.password)==null?void 0:f.message]),o.useEffect(()=>{p&&(r({content:p,variety:"error"}),setTimeout(()=>l(z()),500))},[p,r,l]),a.jsxs(I,{onSubmit:E(S),children:[a.jsx(y,{name:"username",type:"text",placeholder:"korisničko ime",...g("username",{required:!0,minLength:{value:2,message:"Korisničko ime mora imati najmanje 2 karaktera."}})}),a.jsx(y,{name:"password",type:"password",placeholder:"lozinka",...g("password",{required:!0,minLength:{value:6,message:"Lozinka mora imati najmanje 6 karaktera."}})}),a.jsx(k,{type:"submit",x:115,y:115,$submitted:e,direction:"",children:"Prijava"}),a.jsx(k,{type:"button",x:-115,y:115,$submitted:n,onClick:C,direction:"reverse",children:"Nazad"}),a.jsx(F,{control:L})]})}const K=c.div`
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  min-width: 320px;
  min-height: 100vh;
`;function G(){return a.jsx(K,{children:a.jsx(U,{})})}export{K as LoginContainer,G as default};
