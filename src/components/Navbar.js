import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountIcon from '@material-ui/icons/AccountCircle'
import Avatar from '@material-ui/core/Avatar'

const calendarsLink = props => <Link to="/calendars" {...props} />
const clientsLink = props => <Link to="/clients" {...props} />
const duedateLink = props => <Link to="/duedates" {...props} />
const loginLink = props => <Link to="/login" {...props} />
const homeLink = props => <Link to="/" {...props} />

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null
        }
    }

    openMenu = (ev) => {
        this.setState({ anchorEl: ev.currentTarget })
    }

    closeMenu = () => {
        this.setState({ anchorEl: null })
    }

    accountButton = () => {
        this.closeMenu()
        console.log("Open Account Page")
    }

    settingsButton = () => {
        this.closeMenu()
        console.log("Open Settings Page")
    }

    logoutButton = () => {
        this.closeMenu()
        this.props.setLogOut()
    }

    render() {
        const { anchorEl } = this.state
        const { classes, setLogOut, user, loggedIn } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Tax Due Date Database
                        </Typography>
                        
                        {loggedIn && (
                            <Fragment>
                                <Button size="large" color="inherit" component={homeLink}>Home</Button>
                                <Button size="large" color="inherit" component={clientsLink}>Clients</Button>
                                <Button size="large" color="inherit" component={duedateLink}>Due Dates</Button>
                                <Button size="large" color="inherit" component={calendarsLink}>Calendars</Button>
                                <Button size="large" color="inherit">Teams</Button>
                                <Button size="large" color="inherit">Jobs</Button>
                                <Button size="large" color="inherit">Tasks</Button>
                            
                                <IconButton
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="Menu"
                                    onClick={this.openMenu}
                                >
                                    <AccountIcon fontSize="large"/>
                                </IconButton>
                                <Menu
                                    id="account-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={this.closeMenu}
                                >
                                    <MenuItem onClick={this.accountButton}>My Account</MenuItem>
                                    <MenuItem onClick={this.settingsButton}>Settings</MenuItem>
                                    <MenuItem onClick={this.logoutButton}>Logout</MenuItem>
                                </Menu>
                            
                            </Fragment>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)