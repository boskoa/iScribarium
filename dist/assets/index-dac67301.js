import{s as c,x as j,y,r as o,c as D,u as X,d as v,D as Y,A as T,j as a,E as z}from"./index-8f26b1f9.js";import{u as A,D as q}from"./index.esm-0b7f7be1.js";import{u as B}from"./useTimedMessage-e68f89f4.js";const F=c.form`
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
`,I=(e,t)=>y`
  from {
    transform: translateX(${e+2}px) translateY(${t}px)
  }
  to {
    transform: translateX(${e-2}px) translateY(${t}px)
  }
`,M=(e,t)=>y`
  from {
    transform: rotate(0deg) translateX(${e}px) translateY(${t}px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(${e}px) translateY(${t}px) rotate(-360deg);
  }
`,$=c.button`
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
  animation: ${({$submitted:e,x:t,y:n,direction:i})=>e&&j`0.5s ease-in-out ${i} ${M(t,n)}`};

  &:hover {
    animation: ${({$submitted:e,x:t,y:n})=>!e&&j`0.01s infinite alternate ease-in-out ${I(t,n)}`};
  }
`,k=c.input`
  background-color: rgb(91, 206, 206);
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;

  &:focus {
    outline: 1px solid rgb(220, 20, 60);
    border-radius: 3px;
  }
`;function N(){var g,x;const[e,t]=o.useState(!1),[n,i]=o.useState(!1),r=B(),L=D(),l=X(),u=v(Y),p=v(T),{register:m,handleSubmit:w,formState:{errors:s},control:E}=A({mode:"onBlur"});function S(d){t(!0),setTimeout(()=>t(!1),600),L(z(d))}function C(){i(!0),setTimeout(()=>{i(!1),l(-1)},600)}return o.useEffect(()=>{p&&(r({content:"Uspešna prijava",variety:"success"}),l(-1))},[p,r,l]),o.useEffect(()=>{var d,f,b,h;(d=s.username)!=null&&d.message&&r({content:(f=s.username)==null?void 0:f.message,variety:"error"}),(b=s.password)!=null&&b.message&&r({content:(h=s.password)==null?void 0:h.message,variety:"error"})},[r,(g=s.username)==null?void 0:g.message,(x=s.password)==null?void 0:x.message]),o.useEffect(()=>{u&&r({content:u,variety:"error"})},[u,r]),a.jsxs(F,{onSubmit:w(S),children:[a.jsx(k,{type:"text",placeholder:"korisničko ime",...m("username",{required:!0,minLength:{value:2,message:"Korisničko ime mora imati najmanje 2 karaktera."}})}),a.jsx(k,{type:"password",placeholder:"lozinka",...m("password",{required:!0,minLength:{value:6,message:"Lozinka mora imati najmanje 6 karaktera."}})}),a.jsx($,{type:"submit",x:115,y:115,$submitted:e,direction:"",children:"Prijava"}),a.jsx($,{type:"button",x:-115,y:115,$submitted:n,onClick:C,direction:"reverse",children:"Nazad"}),a.jsx(q,{control:E})]})}const U=c.div`
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  min-width: 320px;
  min-height: 100vh;
`;function G(){return a.jsx(U,{children:a.jsx(N,{})})}export{U as LoginContainer,G as default};
