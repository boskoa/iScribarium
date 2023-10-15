import{s,j as i}from"./index-c6a04bd1.js";import{N as e}from"./NewArticleForm-a466e66d.js";import"./echarts-41e97f80.js";import"./zrender-e9104294.js";import"./react-router-dom-6f0409ae.js";import"./useTimedMessage-4f41be4e.js";const r=s.div`
  margin: 20px;
  flex: 1;
`,n=s.h3`
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
`;function j(){return i.jsxs(r,{children:[i.jsx(n,{children:"Novi članak"}),i.jsxs(l,{children:[i.jsx(e,{}),i.jsxs(x,{children:[i.jsx("h4",{children:"Uputstvo za formatiranje"}),i.jsx("br",{}),i.jsx("p",{children:"## Podnaslov"}),i.jsx("br",{}),i.jsx("p",{children:"### Podpodnaslov"}),i.jsx("br",{}),i.jsx("p",{children:"Tekst"}),i.jsx("br",{}),i.jsxs("p",{children:["(",i.jsx("i",{children:"postavljanje slike"}),")"]}),i.jsx("p",{children:"|     |"}),i.jsx("p",{children:"|:---:|"}),i.jsxs("p",{children:["|![",i.jsx("i",{children:"opis slike"}),"](",i.jsx("i",{children:"link ka slici"}),")|"]}),i.jsxs("p",{children:["|",i.jsx("i",{children:"naslov slike"}),"|"]}),i.jsx("br",{}),i.jsxs("p",{children:["(",i.jsx("i",{children:"linkovanje"}),")"]}),i.jsxs("p",{children:["[",i.jsx("i",{children:"tekst linka"}),"](",i.jsx("i",{children:"/articles/:id"}),")"]})]})]})]})}export{l as ArticleContainer,x as Helper,r as NewArticleContainer,n as PageTitle,j as default};
