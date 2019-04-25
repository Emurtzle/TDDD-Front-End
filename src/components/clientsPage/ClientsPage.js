import React, { Component }from 'react'
import PropTypes from 'prop-types'

import ClientsTable from './ClientsTable'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    }
})

class ClientsPage extends Component {
   constructor(props) {
       super(props)

       this.state = {
           currentClient: null,
           agendaOpen: false,
           controlsOpen: false
       }
   }

   setCurrentClient = (client) => {
       debugger
       this.setState({
           currentClient: client,
           agendaOpen: true
    })
   }

   clearCurrentClient = () => {
       this.setState({
           currentClient: null,
           agendaOpen: false
       })
   }

   openClientControls = () => {
       this.setState({controlsOpen: true})
   }

   closeClientControls = () => {
       this.setState({controlsOpen: false})
   }

   testFunc = () => {
       console.log("Test Successful!")
   }


    render() {
        const { classes } = this.props
        const { currentClient} = this.state

        return (
            <Grid container spacing={24} >
                <Grid item xs={8}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="h3" gutterBottom>
                            Client Overview
                        </Typography>

                        <ClientsTable 
                            setCurrentClient={this.setCurrentClient}
                            openClientControls={this.openClientControls}
                            closeClientControls={this.closeClientControls}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="title" gutterBottom>
                            {currentClient ? currentClient.name : 'Sample Name'}
                        </Typography>
                        <Typography variant="subtitle1">
                            {currentClient ? currentClient.phone : '555-555-5555'}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {currentClient ? currentClient.email : 'SampleEmail@email.com'}
                        </Typography>

                        <Paper className={classes.paper} elevation={2}>
                            <Typography variant="title" gutterBottom>
                                Client Due Dates
                            </Typography>
                        </Paper>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

ClientsPage.propTypes = {
    user: PropTypes.object.isRequired
}

export default withStyles(styles)(ClientsPage)