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


const PrivateRoute = (loggedIn, path, render) => {
    return (
      <Route 
        path={ path }
        exact
        render={ render }
      />
    )
}

const styles = theme => ({

})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "tom",
      loggedIn: true,
      clientList: []
    }
  }

  componentDidMount() {
    this.fetchClientList()
  }

  fetchClientList = () => {
    
  }

  setLogIn = (user) => {
    this.setState({
      user: user,
      loggedIn: true
    })
  }

  setLogOut = () => {
    this.setState({
      user: null,
      loggedIn: false
    })
  }

  render() {

    const { user, loggedIn, clientList } = this.state

    return(
      <Router>
        <div>
          <Route path="/"render={ () => <Navbar user={user} setLogOut={this.setLogOut} /> } />

          <Route exact path="/login" render={ () => <LoginPage user={user} setLogIn={this.setLogIn} /> } />


          {PrivateRoute(false, "/", () => <HomePage user={{user}} />)}
          {PrivateRoute(false, "/clients", () => <ClientsPage user={{user}} clientList={clientList} />)}
          {PrivateRoute(false, "/duedates", () => <DueDatesPage user={{user}} />)}
          {PrivateRoute(false, "/calendars", () => <CalendarsPage user={{user}} />)}
          
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  user: PropTypes.string
}

export default withStyles(styles)(App)
