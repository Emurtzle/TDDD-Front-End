import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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

        }
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Tax Due Date Database
                        </Typography>
                        
                        <Button size="large" color="inherit">Home</Button>
                        <Button size="large" color="inherit">Clients</Button>
                        <Button size="large" color="inherit">Calendars</Button>
                        <Button size="large" color="inherit">Teams</Button>
                        <Button size="large" color="inherit">Jobs</Button>
                        <Button size="large" color="inherit">Tasks</Button>
                        <Button size="large" color="inherit">Due Dates</Button>

                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
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