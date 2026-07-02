import React from "react";
import ReactDOM from "react-dom/client";
import Production from "@components/Product";
import "./main.css"; // 引入全局样式文件 import global stylesheet
import { product } from "./assets/data.js"; // 引入数据文件 注意是小写 warning: import data file, note that it is lowercase

function App() {
  const handleProductClick = (title) => {
    alert(`Product clicked: ${title}`); // 点击产品时弹出提示框 alert box pops up when product is clicked
  };
  //单根节点原则 sigle root node principle: In React, a component must return a single root node. This means that all the elements returned by a component must be wrapped in a single parent element. This is important for maintaining a consistent and predictable structure in the virtual DOM, which helps React efficiently update the UI when the state changes. If you try to return multiple sibling elements without a single parent, React will throw an error. To adhere to this principle, you can use a <div>, <section>, or React.Fragment to wrap multiple elements.
  return (
    <div>
      <h1>Hello,React!</h1>
      <Production {...product} onProductClick={handleProductClick} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); // 创建一个 React 根节点，并将其挂载到具有指定 ID 的 DOM 元素上 create a React root node and mount it to the DOM element with the specified ID
// React 17 及以下版本使用 ReactDOM.createRoot() 方法来创建一个根节点，而不是使用 ReactDOM.render() 方法。 This is because React 18 and later versions use the ReactDOM.createRoot() method to create a root node instead of using the ReactDOM.render() method.
root.render(<App />);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); // React.StrictMode 是一个用于在开发模式下检查潜在问题的工具，它不会影响生产环境。 It is a tool for checking potential issues in development mode and does not affect the production environment.
