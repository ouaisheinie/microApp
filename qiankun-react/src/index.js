import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let root

function render() { // 函数这样写 为了解决root 多次渲染的问题
  root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}


if (!window.__POWERED_BY_QIANKUN__) { // 如果是一个独立运行的应用(不依赖基座 直接访问)
  render() // 直接渲染
}

export async function bootstrap(props) {
  console.log(props)
}
export async function mount(props) {
  // root = ReactDOM.createRoot(props.container)
  render()
}
export async function unmount(props) {
  root.unmount()
}