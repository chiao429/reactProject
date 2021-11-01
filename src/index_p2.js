/**引入用npm下載下來的 React和ReacrDOM css檔 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
 /**
  * React Componet
  * 把程式碼以函式(或是class，後面會提到)包成模組，變成一個自己訂作的元素，然後用跟使用button、div這些元素一樣的語法在JSX中使用，也就是: 
  * */
 function AppTest(){
  return (<button>大家好</button>);
}

/**
 * 自製元素
 * 在其他地方可以使用，不用再重複寫一次
 * @returns 
 */
function Progress(){
  const barWidth="50%";
  return(
<div>
  <div className="progress-back" style={{backgroudColor:"rgba(0,0,0,0,2)",width:"200px",height:"7px",borderRadius:"10px"}}> 
  <div className="progress-bar" style={{backgroudColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}> </div>
  </div>
</div>


  )
}

//呼叫一個物件=ReactDOM的render函式
ReactDOM.render( //程式進入點
  <div><progress></progress></div>,  //第一個參數:渲染到畫面上的內容 
  document.getElementById('root') //第二個參數:React綁定的原始div元素
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
