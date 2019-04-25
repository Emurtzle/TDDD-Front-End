import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'
import HomePage from './components/homePage/HomePage';
import ClientsPage from './components/clientsPage/ClientsPage'
import DueDatesPage from './components/duedatesPage/DueDatesPage'
import CalendarsPage from './components/calendarsPage/CalendarsPage'

function App() {
  const user = {
    name: "Emily Wagner",
    userName: "Emurtzle"
  }
  return (
    <Router>
      <div>
        <Route path="/"render={ () => <Navbar user={user} /> } />
        <Route path="/calendars" exact render={ () => <CalendarsPage user={user} /> } />
        <Route path="/duedates" exact render={ () => <DueDatesPage user={user} /> } />
        <Route path="/clients" exact render={ () => <ClientsPage user={user} /> } />
        <Route path="/" exact render={ () => <HomePage user={user}/> } />
      </div>
    </Router>
  )
}

export default App;
