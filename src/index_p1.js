/**引入用npm下載下來的 React和ReacrDOM css檔 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
/**
 * 【基礎練習01】html語法可以當作參數傳遞
 * @returns 單個htmltag
 */
const basicTest01=()=>{
  return (<button>大家好</button>);

}

/**
 * 【基礎練習02】一次傳遞多個參數
 * @returns 
 */
const basicTest02=()=>{
  return (
<div>
  <button>大家好</button>
<h1>Hello</h1>
</div>
  );
}

/**
 * 只能傳遞一個元素 ReactV16.2.0寫法
 *
 */
 const OneArgs=()=>{

  return(<React.Fragment>
    <button>第一個元素</button>
    <h1>第二個元素</h1>
  </React.Fragment>);
 }


const showOne=true; //基礎練習03用
/**
 * 【基礎練習03】用{}寫JS表示式
 */
const basicTest03=()=>{
return (
 <h1> {(showOne==true)?1:0}</h1>
);
}

/**
 * 【基礎練習04】style變為一物件、屬性名稱規則改用駝峰法(用大寫區隔)、屬性的值變成字串
 */
const styleArgument={fontSize:'100px',color:"red"}; //基礎練習04用
const basicTest04=()=>{
  return (<h1 style={styleArgument}>Hello,World!</h1>);
}

/**
 * 【基礎練習05】className
 */
const basicTest05=()=>{
  return (<h1 className="title">Hello,World!</h1>);
}


/**
 * 畫面上印出多個按鈕
 * @returns 
 */
const multiButton=()=>{
  var output=[];
  for (let i=0;i<4;i++) //注意for迴圈寫法
    output.push(<button>我是第{i}個按鈕</button>);
    return output;
  
}

/**
 * 【基礎練習06】在元素上傳遞屬性時若省略要指定的值，該資料會獲得true布林值
 * @returns
 */
 const basicTest06=()=>{
  return (
  <React.Fragment>
    <button value={true}>是</button>
    <button value>是</button>
  </React.Fragment>
    );
}

const getValue=(event)=>{
  console.log(event.target.value);
}

/** 
 * 【基礎練習07】點擊(button)和輸入(input/textarea ...)事件
 * @returns 
 */
const basicTest07=()=>{
  return (<button value={true} onClick={getValue}>是</button>);  
}

/** 
 * 【基礎練習08-1】函式綁定01 直接寫函式名稱，但去除括弧
 * @returns 
 */
 const basicTest08_1=()=>{
  return (<button value={true} onClick={getValue}>是</button>);
}


const getValue2=(value)=>{
  console.log(value);
}
/** 
 * 【基礎練習08-2】函式綁定02 箭頭函式
 * @returns 
 */
 
 const basicTest08_2=()=>{ //每次渲染時都會創造一次，會影響效能，所以一般能用1的話就會用1的方法
  return (<button value={true} onClick={(event)=>getValue2(event.target.value)}>按下已取得數值</button>); //funtion間分號注意!
}



//呼叫一個物件=ReactDOM的render函式
ReactDOM.render( //程式進入點
  // <h1>Hello world</h1>,  //第一個參數:渲染到畫面上的內容
  basicTest08_2(),
  document.getElementById('root') //第二個參數:React綁定的原始div元素
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
