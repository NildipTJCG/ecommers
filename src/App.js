import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contect from './Contect';
import Blog from './Blog';
import {Header} from './Navbardeatils';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
    </div>
  );
}

export default App;
