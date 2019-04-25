import React, { Component }from 'react'
import PropTypes from 'prop-types'

import ClientsPageTable from './ClientsPageTable'
import ClientsPageInfo from './ClientsPageInfo'
import ClientsPageControls from './ClientsPageControls'

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
           selection: [],
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

   setSelection = (selection) => {
       this.setState({selection: selection})
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
        const { currentClient, clientInfoOpen, controlsOpen, selection } = this.state
        const sidebarOpen = (clientInfoOpen || controlsOpen)

        return (
            <Grid container spacing={24} className={classes.gridContainer}>
                <Grid item xs={sidebarOpen ? 8 : 12}>
                    <Paper className={classes.paper} elevation={1}>
                        <ClientsPageTable 
                            setCurrentClient={this.setCurrentClient}
                            openClientControls={this.openClientControls}
                            closeClientControls={this.closeClientControls}
                            setSelection={this.setSelection}
                            testFunc={this.testFunc}
                        />
                    </Paper>
                </Grid>

                { sidebarOpen && (
                    <Grid item xs={4} className={classes.gridContainer}>
                        <Paper className={classes.paper} elevation={1}>
                            <Grid container direction="column" spacing={24}>
                                
                                { clientInfoOpen && (
                                    <ClientsPageInfo 
                                        currentClient={currentClient}
                                        clearCurrentClient={this.clearCurrentClient}
                                    />
                                )}

                                { controlsOpen && (
                                    <ClientsPageControls 
                                        selection={selection}
                                    />
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