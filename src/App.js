import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import CalendarPage from './components/CalendarPage';

function App() {
  const user = {
    name: "Emily Wagner",
    userName: "Emurtzle"
  }
  return (
    <div>
      <Navbar />
      <CalendarPage user={user}/>
    </div>
  )
}

export default App;
