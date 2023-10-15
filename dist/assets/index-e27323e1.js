import{s as x,n as $,c as S,u as C,b as p,m as T,o as X,p as Y,q as R,t as z,j as i,v as I}from"./index-c6a04bd1.js";import{LoginContainer as N}from"./index-cca8b1e9.js";import{r as n}from"./echarts-41e97f80.js";import{u as B,a as D}from"./useTimedMessage-4f41be4e.js";import{u as F}from"./react-router-dom-6f0409ae.js";import"./zrender-e9104294.js";const M=x.form`
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
`,K=(e,r)=>S`
  from {
    transform: translateX(${e+2}px) translateY(${r}px)
  }
  to {
    transform: translateX(${e-2}px) translateY(${r}px)
  }
`,O=(e,r)=>S`
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
  animation: ${({$submitted:e,x:r,y:m,direction:c})=>e&&$`0.5s ease-in-out ${c} ${O(r,m)}`};

  &:hover {
    animation: ${({$submitted:e,x:r,y:m})=>!e&&$`0.01s infinite alternate ease-in-out ${K(r,m)}`};
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
`;function P(){var j,v,k,y;const[e,r]=n.useState(!1),[m,c]=n.useState(!1),t=B(),f=C(),l=F(),L=p(T).length,u=p(X),b=p(Y),h=p(R),{register:d,handleSubmit:w,formState:{errors:s}}=D({mode:"onBlur"});function A(a){r(!0),setTimeout(()=>r(!1),600),f(I(a))}function q(){c(!0),setTimeout(()=>{c(!1),l(-1)},600)}return n.useEffect(()=>{h&&(t({content:"Već imate nalog",variety:"error"}),l(-1))},[h,t,l]),n.useEffect(()=>{e&&!b&&!u&&(t({content:"Uspešna registracija, možete se ulogovati",variety:"success"}),setTimeout(()=>l("/"),500))},[L,t,l,b,u,e]),n.useEffect(()=>{var a,o;(a=s.name)!=null&&a.message&&t({content:(o=s.name)==null?void 0:o.message,variety:"error"})},[t,(j=s.name)==null?void 0:j.message]),n.useEffect(()=>{var a,o;(a=s.username)!=null&&a.message&&t({content:(o=s.username)==null?void 0:o.message,variety:"error"})},[t,(v=s.username)==null?void 0:v.message]),n.useEffect(()=>{var a,o;(a=s.password)!=null&&a.message&&t({content:(o=s.password)==null?void 0:o.message,variety:"error"})},[t,(k=s.password)==null?void 0:k.message]),n.useEffect(()=>{var a,o;(a=s.email)!=null&&a.message&&t({content:(o=s.email)==null?void 0:o.message,variety:"error"})},[t,(y=s.email)==null?void 0:y.message]),n.useEffect(()=>{u&&(t({content:u,variety:"error"}),setTimeout(()=>f(z()),500))},[u,t,f]),i.jsxs(M,{onSubmit:w(A),children:[i.jsx(g,{type:"text",placeholder:"ime",...d("name",{required:!0,minLength:{value:2,message:"Ime mora imati najmanje 2 karaktera."}})}),i.jsx(g,{type:"text",placeholder:"korisničko ime",...d("username",{required:!0,minLength:{value:2,message:"Korisničko ime mora imati najmanje 2 karaktera."}})}),i.jsx(g,{type:"password",placeholder:"lozinka",...d("password",{required:!0,minLength:{value:6,message:"Lozinka mora imati najmanje 6 karaktera."}})}),i.jsx(g,{type:"email",placeholder:"email",...d("email",{required:!0,pattern:{value:/\S+@\S+\.\S+/,message:"Neodgovarajući format mejla"}})}),i.jsx(E,{type:"submit",x:115,y:115,$submitted:e,direction:"",disabled:e,children:"Pošalji"}),i.jsx(E,{type:"button",x:-115,y:115,$submitted:m,onClick:q,direction:"reverse",children:"Nazad"})]})}function W(){return i.jsx(N,{children:i.jsx(P,{})})}export{W as default};
