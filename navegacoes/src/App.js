import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Menu from './components/layout/Menu';
import Content from './components/layout/Content';

function App() {
  return (
    <div className="App">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
