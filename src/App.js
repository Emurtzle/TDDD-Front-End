import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

import moment from 'moment'

import { withStyles } from '@material-ui/core'

import Navbar from './components/Navbar'
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage'
import ClientsPage from './components/clientsPage/ClientsPage'
import DueDatesPage from './components/duedatesPage/DueDatesPage'
import CalendarsPage from './components/calendarsPage/CalendarsPage'

const styles = theme => ({

})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      loggedIn: null
    }
  }

  setLogIn = (user) => {
    this.setState({user: user})
  }

  setLogOut = () => {
    this.setState({user: null})
  }

  render() {

    const { user } = this.state

    return(
      <Router>
        <div>
          <Route path="/"render={ () => <Navbar user={user} /> } />

          <Route path="/login" render={ () => <LoginPage user={user} /> } />

          <Route path="/" exact render={ () => <HomePage user={user} /> } />
          <Route path="/clients" exact render={ () => <ClientsPage user={user} /> } />
          <Route path="/duedates" exact render={ () => <DueDatesPage user={user} /> } />
          <Route path="/calendars" exact render={ () => <CalendarsPage user={user} /> } />
          
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  
}

export default withStyles(styles)(App)
