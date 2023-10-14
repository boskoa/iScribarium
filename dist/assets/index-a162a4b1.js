import{n as s,j as i}from"./index-75c58116.js";import{N as e}from"./NewArticleForm-d7d2f0bb.js";import"./index.esm-22e08e3a.js";const n=s.div`
  margin: 20px;
  flex: 1;
`,r=s.h3`
  margin-bottom: 20px;
`,l=s.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`,x=s.div`
  max-width: 600px;
  background-color: rgba(200, 200, 0, 0.3);
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;
  flex: 1;
  font-size: 14px;
  height: 320px;
  padding: 10px;
  position: sticky;
  top: 10px;
`;function c(){return i.jsxs(n,{children:[i.jsx(r,{children:"Novi članak"}),i.jsxs(l,{children:[i.jsx(e,{}),i.jsxs(x,{children:[i.jsx("h4",{children:"Uputstvo za formatiranje"}),i.jsx("br",{}),i.jsx("p",{children:"## Podnaslov"}),i.jsx("br",{}),i.jsx("p",{children:"### Podpodnaslov"}),i.jsx("br",{}),i.jsx("p",{children:"Tekst"}),i.jsx("br",{}),i.jsxs("p",{children:["(",i.jsx("i",{children:"postavljanje slike"}),")"]}),i.jsx("p",{children:"|     |"}),i.jsx("p",{children:"|:---:|"}),i.jsxs("p",{children:["|![",i.jsx("i",{children:"opis slike"}),"](",i.jsx("i",{children:"link ka slici"}),")|"]}),i.jsxs("p",{children:["|",i.jsx("i",{children:"naslov slike"}),"|"]}),i.jsx("br",{}),i.jsxs("p",{children:["(",i.jsx("i",{children:"linkovanje"}),")"]}),i.jsxs("p",{children:["[",i.jsx("i",{children:"tekst linka"}),"](",i.jsx("i",{children:"/articles/:id"}),")"]})]})]})]})}export{l as ArticleContainer,x as Helper,n as NewArticleContainer,r as PageTitle,c as default};
