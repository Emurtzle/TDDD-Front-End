import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    },
    modalPaper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none'
    }
})

class AddClientPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const { classes } = this.props

        return (
            <Paper 
                style={{top: '5%', left: '5%', right: '5%'}}
                className={classes.modalPaper}
            >
                <Grid container>
                
                
                
                </Grid>
            
            
            </Paper>
        )
    }
}

AddClientPage.propTypes = {

}

export default withStyles(styles)(AddClientPage)