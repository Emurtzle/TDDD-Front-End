import React, { Component, Fragment }from 'react'
import PropTypes from 'prop-types'

import ClientsPageTable from './ClientsPageTable'
import ClientsPageInfo from './ClientsPageInfo'
import ClientsPageControls from './ClientsPageControls'
import indivClientPage from './IndivClientPage'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Modal from '@material-ui/core/Modal'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import IndivClientPage from './IndivClientPage';

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    },
    modalPaper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none'
    }
})

class ClientsPage extends Component {
   constructor(props) {
       super(props)

       this.state = {
           currentClient: null,
           selection: [],
           clientInfoOpen: false,
           controlsOpen: false,
           indivClientPageOpen: false
       }
   }

   openIndivClientPage = () => {
    this.setState({indivClientPageOpen: true})
   }

   closeIndivClientPage = () => {
    this.setState({indivClientPageOpen: false})
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
        const { classes, clientList } = this.props
        const { currentClient, clientInfoOpen, controlsOpen, selection, indivClientPageOpen } = this.state
        const sidebarOpen = (clientInfoOpen || controlsOpen)

        return (
            <Fragment >
                
                <Modal
                    aria-labelledby="indivClientPage"
                    aria-describedby="Page for an individual client"
                    disableBackdropClick
                    open={indivClientPageOpen}
                    onClose={this.closeIndivClientPage}
                >
                    <IndivClientPage 
                        currentClient={currentClient}
                        closeIndivClientPage={this.closeIndivClientPage}
                    />
                </Modal>

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
                                            
                                            clearCurrentClient={this.clearCurrentClient}
                                            openIndivClientPage={this.openIndivClientPage}
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
            </Fragment>
        )
    }
}

ClientsPage.propTypes = {
    user: PropTypes.object.isRequired
}

export default withStyles(styles)(ClientsPage)