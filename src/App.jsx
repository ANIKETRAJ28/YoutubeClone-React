import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import { useState } from 'react';

function App() {

  const [sideBar, setSideBar] = useState(true);

  return (
    <div>
      <NavBar setSideBar={setSideBar}/>
      <Routes>
        <Route path='/' element={<Home sideBar={sideBar}/>}/>
        <Route path='/video:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
