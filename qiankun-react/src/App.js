import React from 'react';
import styles from "./App.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/react">
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Routes>
        <Route path="/" exact element={<div className={styles.App}>
            <header>
              <div className="app-header">
                reactApp
              </div>
            </header>
            <div className="app-content">
              app content
            </div>
          </div>
        }></Route>
        <Route path="/about" element={<h1>关于页面</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
