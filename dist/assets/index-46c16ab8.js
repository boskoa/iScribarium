import{n as c,p as $,q as w,r as o,e as C,u as X,g as Y,a as k,A as T,x as q,C as z,j as r,D as A}from"./index-2ddb8e57.js";import{u as D}from"./index.esm-c6d4536d.js";const B=c.form`
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
`,F=(e,t)=>w`
  from {
    transform: translateX(${e+2}px) translateY(${t}px)
  }
  to {
    transform: translateX(${e-2}px) translateY(${t}px)
  }
`,I=(e,t)=>w`
  from {
    transform: rotate(0deg) translateX(${e}px) translateY(${t}px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(${e}px) translateY(${t}px) rotate(-360deg);
  }
`,v=c.button`
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
  animation: ${({$submitted:e,x:t,y:n,direction:i})=>e&&$`0.5s ease-in-out ${i} ${I(t,n)}`};

  &:hover {
    animation: ${({$submitted:e,x:t,y:n})=>!e&&$`0.01s infinite alternate ease-in-out ${F(t,n)}`};
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
`;function M(){var x,f;const[e,t]=o.useState(!1),[n,i]=o.useState(!1),a=C(),l=X(),u=Y(),p=k(T),m=k(q),{register:g,handleSubmit:L,formState:{errors:s}}=D({mode:"onBlur"});function E(d){t(!0),setTimeout(()=>t(!1),600),l(A(d))}function S(){i(!0),setTimeout(()=>{i(!1),u(-1)},600)}return o.useEffect(()=>{m&&(a({content:"Uspešna prijava",variety:"success"}),u(-1))},[m,a,u]),o.useEffect(()=>{var d,b,h,j;(d=s.username)!=null&&d.message&&a({content:(b=s.username)==null?void 0:b.message,variety:"error"}),(h=s.password)!=null&&h.message&&a({content:(j=s.password)==null?void 0:j.message,variety:"error"})},[a,(x=s.username)==null?void 0:x.message,(f=s.password)==null?void 0:f.message]),o.useEffect(()=>{p&&(a({content:p,variety:"error"}),setTimeout(()=>l(z()),500))},[p,a,l]),r.jsxs(B,{onSubmit:L(E),children:[r.jsx(y,{name:"username",type:"text",placeholder:"korisničko ime",...g("username",{required:!0,minLength:{value:2,message:"Korisničko ime mora imati najmanje 2 karaktera."}})}),r.jsx(y,{name:"password",type:"password",placeholder:"lozinka",...g("password",{required:!0,minLength:{value:6,message:"Lozinka mora imati najmanje 6 karaktera."}})}),r.jsx(v,{type:"submit",x:115,y:115,$submitted:e,direction:"",children:"Prijava"}),r.jsx(v,{type:"button",x:-115,y:115,$submitted:n,onClick:S,direction:"reverse",children:"Nazad"})]})}const N=c.div`
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  min-width: 320px;
  min-height: 100vh;
`;function P(){return r.jsx(N,{children:r.jsx(M,{})})}export{N as LoginContainer,P as default};
