import React, { Component }from 'react'
import PropTypes from 'prop-types'

import ClientsTable from './ClientsTable'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

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
           clientInfoOpen: false,
           controlsOpen: false
       }
   }

   setCurrentClient = (client) => {
       this.setState({
           currentClient: client,
           clientInfoOpen: true
    })
   }

   clearCurrentClient = () => {
       this.setState({
           currentClient: null,
           clientInfoOpen: false
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
        const { currentClient, clientInfoOpen, controlsOpen} = this.state
        const sidebarOpen = (clientInfoOpen || controlsOpen)

        return (
            <Grid container spacing={24} className={classes.gridContainer}>
                <Grid item xs={sidebarOpen ? 8 : 12}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="h3" gutterBottom>
                            Client Overview
                        </Typography>

                        <ClientsTable 
                            setCurrentClient={this.setCurrentClient}
                            openClientControls={this.openClientControls}
                            closeClientControls={this.closeClientControls}
                            testFunc={this.testFunc}
                        />
                    </Paper>
                </Grid>

                { sidebarOpen && (
                    <Grid item xs={4} className={classes.gridContainer}>
                        <Paper className={classes.paper} elevation={1}>
                            <Grid container direction="column" spacing={24}>
                                
                                { clientInfoOpen && (
                                    <Grid item >

                                        <Paper className={classes.paper} elevation={1}>
                                            <Grid container spacing={8} justify="center">
                            
                                                <Grid item xs={9}>
                                                    <Typography variant="h3" gutterBottom>
                                                        {currentClient ? currentClient.name : 'Sample Name'}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={3}>
                                                    <Button >Open</Button>
                                                    <Button onClick={this.clearCurrentClient} >Close</Button>
                                                </Grid>

                                                <Grid item xs={4}>

                                                    <Typography variant="subtitle1" >
                                                        Email: 
                                                    </Typography>

                                                    <Typography variant="body2" gutterBottom >
                                                        {currentClient ? currentClient.email : 'SampleEmail@email.com'}
                                                    </Typography>

                                                    <Typography variant="subtitle1" >
                                                        Home Phone: 
                                                    </Typography>

                                                    <Typography variant="body2" gutterBottom>
                                                        {currentClient ? currentClient.phone : '555-555-5555'}
                                                    </Typography>

                                                    <Typography variant="subtitle1" >
                                                        Cell Phone: 
                                                    </Typography>

                                                    <Typography variant="body2" gutterBottom >
                                                        {currentClient ? currentClient.phone : '234-432-1221'}
                                                    </Typography>

                                                    <Typography variant="subtitle1" >
                                                        Fax: 
                                                    </Typography>

                                                    <Typography variant="body2" gutterBottom>
                                                        {currentClient ? currentClient.phone : '555-555-5555'}
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4}>

                                                    <Typography variant="subtitle1" >
                                                        Date of Birth: 
                                                    </Typography>

                                                    <Typography variant="body2" gutterBottom >
                                                        {currentClient ? currentClient.dob : '00-00-1900'}
                                                    </Typography>

                                                    <Typography variant="subtitle1" >
                                                        Occupation: 
                                                    </Typography>

                                                    <Typography variant="subtitle1" >
                                                        Address:
                                                    </Typography>

                                                    <Typography variant="body2" >
                                                        adress info
                                                    </Typography>

                                                    <Typography variant="body2" gutterBottom >
                                                        {currentClient ? currentClient.occ : 'retired'}
                                                    </Typography>

                                                    <Typography variant="subtitle1" >
                                                        Social Security Numer: 
                                                    </Typography>

                                                    <Typography variant="body2" gutterBottom >
                                                        {currentClient ? currentClient.soc : '55-555-5555'}
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4}>
                                                    
                                                    <Typography variant="subtitle1" >
                                                        Status: 
                                                    </Typography>

                                                    <Typography variant="body2" gutterBottom >
                                                        {currentClient ? currentClient.status : 'incomplete'}
                                                    </Typography>

                                                    <Typography variant="subtitle1" >
                                                        Number of Due Dates: 
                                                    </Typography>

                                                    <Typography variant="body2">
                                                        **Number of due dates
                                                    </Typography>

                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                )}

                                { controlsOpen && (
                                    <Grid item >
                                    <Paper className={classes.paper} elevation={1} >
                                        <Typography variant="title" gutterBottom >
                                            Controls
                                        </Typography>
                                    
                                    </Paper>
                                </Grid>
                                )}
                                
                            </Grid>
                        </Paper>
                    </Grid>
                )}
                
                
                
            </Grid>
        )
    }
}

ClientsPage.propTypes = {
    user: PropTypes.object.isRequired
}

export default withStyles(styles)(ClientsPage)