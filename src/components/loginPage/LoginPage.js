import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const url = "http://localhost:3000/api/v1/login"

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
})

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (ev) => {
        const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
        this.setState({[ev.target.name]: value})
    }

    loginRequest = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: this.state.username,
                    password: this.state.password
                }
            })
        })
        .then(response => response.json())
        .then(json => {
            console.log("Success!", json)
            // localStorage.setItem('UserID', json.user.id)
        })
    }

    render() {

        const { classes } = this.props
        const { username, password } = this.state

        return (
            <main className={classes.main}>
                <CssBaseline />

                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Usernames</InputLabel>
                            <Input 
                                id="username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={username}
                                onChange={this.handleChange}
                            />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={this.handleChange}
                            />
                        </FormControl>

                        <FormControlLabel 
                            control={ <Checkbox value="remember" color="primary" /> }
                            label="Remember me"
                        />

                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.loginRequest}
                        >
                            Log In
                        </Button>

                    </form>
                </Paper>
            </main>
        )
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginPage)