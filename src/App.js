import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CMMS from './pages/CMMS/CMMS';
import Equipment from './pages/Equipment';
import Area from './pages/Area';
import Setting from './pages/Setting';
import Login from './pages/Login/Login';
import Task from './pages/CMMS/MyTask/Task';
import Sheet1 from './pages/CMMS/MyTask/Sheet/Sheet1';
import User from './pages/CMMS/Profile/User/User';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<CMMS/>}/>
          <Route exact path='/Equipment' element={<Equipment/>}/>
          <Route exact path='/Area' element={<Area/>}/>
          <Route exact path='/Setting' element={<Setting/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Task' element={<Task/>}/>
          <Route exact path='/Sheet1' element={<Sheet1/>}/>
          <Route exact path='/User' element={<User/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
