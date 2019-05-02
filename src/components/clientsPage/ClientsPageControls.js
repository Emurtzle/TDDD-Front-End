import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

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
            <Paper className={classes.paper} elevation={1} >
                <Grid container direction='column'>
                    <Grid item>
                        <Typography variant="title" gutterBottom >
                            Group Controls
                        </Typography>

                        <Typography variant="subtitle1">
                            Selected: {selection.length} Clients
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Divider variant='middle' />
                    </Grid>

                    <Grid item>
                        <Grid container direction='row' justify='space-around'>
                            <Grid item xs={4}>
                                <Button>Set Due Dates</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button>Clear Due Dates</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button>Mark Due Dates Complete</Button>
                            </Grid>
                        </Grid>
                            
                    </Grid>

                
                </Grid>
            </Paper>
        )
    }
}

ClientsPageControls.propTypes = {

}

export default withStyles(styles)(ClientsPageControls)