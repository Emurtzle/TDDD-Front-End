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
    if (loggedIn) {
      return (
        <Route 
          path={ path }
          exact
          render={ render }
        />
      )
    } else {
      return (
        <Route
        path={path}
        exact
        render={ 
          () => <Redirect to="/login" />
        }
      />
      )
    }
}

const styles = theme => ({

})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: 'null',
      loggedIn: false,
      clientList: []
    }
  }

  componentDidMount() {
    // this.checkLogin()
    // this.fetchClientList()
  }

  checkLogin = () => {
    if (!localStorage.getItem('jwt')) {
      this.setState({loggedIn: false})
    } else {
      this.setState({loggedIn: true})
    }
  }

  fetchClientList = () => {
    console.log('Attempting to Fetch Clients List')
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
          <Route path="/"render={ () => <Navbar loggedIn={loggedIn} user={user} setLogOut={this.setLogOut} /> } />

          {!loggedIn && (
            <Route exact path="/login" render={ () => <LoginPage user={user} setLogIn={this.setLogIn} /> } />
          )}


          {PrivateRoute(loggedIn, "/", () => <HomePage user={{user}} />)}
          {PrivateRoute(loggedIn, "/clients", () => <ClientsPage user={{user}} clientList={clientList} />)}
          {PrivateRoute(loggedIn, "/duedates", () => <DueDatesPage user={{user}} />)}
          {PrivateRoute(loggedIn, "/calendars", () => <CalendarsPage user={{user}} />)}
          
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  user: PropTypes.string
}

export default withStyles(styles)(App)
