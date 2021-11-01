/**引入用npm下載下來的 React和ReacrDOM css檔 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 

//呼叫一個物件=ReactDOM的render函式
ReactDOM.render( //程式進入點
  <h1>Hello World!</h1>,  //第一個參數:渲染到畫面上的內容 
  document.getElementById('root') //第二個參數:React綁定的原始div元素
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
