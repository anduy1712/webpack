import React from 'react'; // nạp thư viện react
import ReactDOM from 'react-dom'; // nạp thư viện react-dom
import './index.css';
import Home from './pages/Home';
// Tạo component App
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Home />
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'));
