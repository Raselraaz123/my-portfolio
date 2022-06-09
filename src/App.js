import logo from './logo.svg';
import './App.css';
import Home from './component/page/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/shared/Navbar';
import ContactMe from './component/page/ContactMe';
import About from './component/page/About';
import Project from './component/page/Project';

function App() {
  return (
    <div>
   <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='project' element={<Project></Project>}></Route>
        <Route path='contact' element={<ContactMe></ContactMe>}></Route>
    </Routes>
    </div>
  );
}

export default App;
