import React from 'react'
import SidebarOption from './SidebarOption'
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <Feed/>
      <Widgets/>

    </div>
  )
}

export default App;