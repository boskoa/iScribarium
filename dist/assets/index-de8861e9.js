import{s as r,P as C,j as n,b,m as L,p as E,u as M,N as z,Q as O,L as T}from"./index-c6a04bd1.js";import{E as F,r as l}from"./echarts-41e97f80.js";import{L as B}from"./react-router-dom-6f0409ae.js";const I=r.div`
  height: 160px;
  width: 270px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 1px solid teal;
  z-index: 0;
`;function y({chartData:e,chartTitle:s}){const t=C(),c={animationDuration:2e3,height:"20%",grid:{show:!1},xAxis:{type:"category",show:!1,splitLine:{show:!1},showGrid:!1,axisLine:{show:!1},axisTick:{show:!1},data:[...Object.keys(e)]},yAxis:{type:"value",show:!1,splitLine:{show:!1},showGrid:!1,axisLine:{show:!1},axisTick:{show:!1}},tooltip:{trigger:"axis"},series:[{data:[...Object.values(e)],type:"line",showSymbol:!1}],title:{text:s,textStyle:{color:t.main.color,fontSize:"11px",fontWeight:"normal",fontFamily:"Fuzzy Bubbles"}}};return n.jsx(I,{children:n.jsx(F,{option:c})})}const G=r.div`
  min-height: 80px;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
`,w=r.h4``,R=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`,_=r.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
`,N=r.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  z-index: 1;
`,Y=r(B)`
  font-size: 14px;
  text-decoration: none;
  width: 100px;
  overflow: hidden;
  color: ${({theme:e})=>e.main.color};
`,P=r.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;function J(e){let s={},t=new Date;t.setDate(t.getDate()-30),s[`${t.getMonth()+1}-${t.getDate()}`]=0;for(let a=30;a>0;a--)t.setDate(t.getDate()+1),s[`${t.getMonth()+1}-${t.getDate().toString().padStart(2,"0")}`]=0;const c=Object.keys(s);return e.forEach(a=>{var i;const o=(i=a.f4)==null?void 0:i.slice(6,10);c.includes(o)&&(s[o]+=1)}),s}function Q(e){let s={};const t=new Date().getFullYear(),c=new Date().getMonth()+1;for(let a=t-1;a<=t;a++)for(let o=1;o<=12&&!(a===t&&o>c);o++)s[`${a}-${o}`]=0;return e.forEach(a=>{const o=`${new Date(a.f4).getFullYear()}-${new Date(a.f4).getMonth()+1}`;s[o]+=1}),s}function W({author:e}){var s;return n.jsxs(G,{children:[n.jsx(w,{children:e.name}),n.jsxs(P,{children:[e.count," ",e.count===1?"članak":[2,3,4].includes(e.count)?"članka":"članaka"]}),e.count!=="0"&&n.jsxs(R,{children:[n.jsxs(_,{children:[n.jsx(y,{chartData:J(e.articles),chartTitle:"Broj novih članaka u prošlih mesec dana"}),n.jsx(y,{chartData:Q(e.articles),chartTitle:"Broj novih članaka u prošlih godinu dana"})]}),n.jsx(w,{children:"Članci:"}),n.jsx(N,{children:(s=e.articles)==null?void 0:s.map(t=>n.jsx(Y,{to:`/articles/${t.f1}`,children:t.f2},t.f1))})]})]})}function q(e){const[s,t]=l.useState(!1);return l.useEffect(()=>{const c={root:null,rootMargin:"0px",threshold:1};new IntersectionObserver(o=>{const[i]=o;i.isIntersecting?t(!0):t(!1)},c).observe(e.current)},[e]),s}const v=r.div`
  margin: 40px 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,k=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`,h=r.div`
  padding: 5px;
  border: 3px solid ${({$selected:e})=>e?"lime":"black"};
  border-radius: 5px;
  background-color: yellow;
  color: black;
  width: 115px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: red;
  }

  &:active {
    transform: scale(0.95);
  }
`,$=r.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`,A=r.h2``,D=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  z-index: -3;
`,x=5;function H(){const e=b(L),[s,t]=l.useState(0),[c,a]=l.useState("&order=name,asc"),o=c.split(",")[0].split("=")[1],[i,f]=l.useState("desc"),u=l.useRef(null),g=q(u),[m,j]=l.useState(!1),S=b(E),d=M();return l.useEffect(()=>{g&&!m&&t(p=>p+x)},[g,m]),l.useEffect(()=>{s-x>e.length?j(!0):j(!1)},[s,e.length]),l.useEffect(()=>{s===e.length&&d(z(`?pagination=${s},${x}${c}`))},[s,d,e.length,c,i]),l.useEffect(()=>{d(O()),t(0),window.scrollTo({top:0,behavior:"smooth"})},[d,c,i]),n.jsxs(v,{children:[n.jsx(A,{children:"Autori članaka"}),n.jsxs(k,{children:[n.jsxs(h,{$selected:o==="name",onClick:()=>{a(`&order=name,${i}`),f(i==="asc"?"desc":"asc")},children:["Abecedno"," ",o==="name"?i==="desc"?"⇡":"⇣":""]}),n.jsxs(h,{$selected:o==="count",onClick:()=>{a(`&order=count,${i}`),f(i==="asc"?"desc":"asc")},children:["Broj članaka"," ",o==="count"?i==="desc"?"⇡":"⇣":""]}),n.jsxs(h,{$selected:o==="id",onClick:()=>{f(i==="asc"?"desc":"asc"),a(`&order=id,${i}`)},children:["Najnoviji"," ",o==="id"?i==="desc"?"⇡":"⇣":""]})]}),n.jsx($,{children:e.map(p=>n.jsx(W,{author:p},p.id))}),n.jsx(D,{ref:u,children:S&&n.jsx(T,{})})]})}const X=Object.freeze(Object.defineProperty({__proto__:null,AuthorsContainer:$,ButtonContainer:h,Filters:k,MainContainer:v,SpinnerContainer:D,Title:A,default:H},Symbol.toStringTag,{value:"Module"}));export{G as A,h as B,k as F,v as M,D as S,A as T,P as a,R as b,N as c,Y as d,$ as e,X as i,q as u};
