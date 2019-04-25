import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({

})

class ClientsPageControls extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const { classes, selection } = this.props

        return (
            <Grid item >
                <Paper className={classes.paper} elevation={1} >
                    <Typography variant="title" gutterBottom >
                        Controls
                    </Typography>

                    <Typography variant="subtitle1">
                        Selected: {selection.length} Clients
                    </Typography>
                
                </Paper>
            </Grid>
        )
    }
}

ClientsPageControls.propTypes = {

}

export default withStyles(styles)(ClientsPageControls)