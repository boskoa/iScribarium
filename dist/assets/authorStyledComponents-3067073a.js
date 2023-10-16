import{s as i}from"./index-2782feee.js";import{L as e}from"./react-router-dom-50fe5a57.js";const a=i.div`
  margin: 40px 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,r=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`,s=i.div`
  padding: 5px;
  border: 3px solid ${({$selected:t})=>t?"lime":"black"};
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
`,p=i.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`,l=i.h2``,c=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  z-index: -3;
`,d=i.div`
  min-height: 80px;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
`,x=i.h4``,f=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`,g=i.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
`,h=i.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  z-index: 1;
`,m=i(e)`
  font-size: 14px;
  text-decoration: none;
  width: 100px;
  overflow: hidden;
  color: ${({theme:t})=>t.main.color};
`,u=i.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;export{d as A,s as B,r as F,g as G,a as M,x as N,c as S,l as T,u as a,f as b,h as c,m as d,p as e};
