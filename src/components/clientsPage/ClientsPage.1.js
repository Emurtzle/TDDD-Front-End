import React, { Component, Fragment }from 'react'
import PropTypes from 'prop-types'

import ClientsPageTable from './ClientsPageTable'
import ClientsPageInfo from './ClientsPageInfo'
import ClientsPageControls from './ClientsPageControls'
import IndivClientPage from './IndivClientPage'
import AddClientPage from './AddClientPage'

import moment from 'moment'
import uuid from 'uuid'

import { Transition } from 'react-transition-group'


import { withStyles } from '@material-ui/core'

import Modal from '@material-ui/core/Modal'
import Avatar from '@material-ui/core/Avatar'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
import Grow from '@material-ui/core/Grow'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FormIcon from '@material-ui/icons/FormatAlignLeft'
import AttachmentIcon from '@material-ui/icons/AttachFile'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

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
    },
    growShrink: {
        transition: "0.25s"
    }
})

class ClientsPage extends Component {
   constructor(props) {
       super(props)

       this.state = {
           currentClient: null,
           currentClientDuedates: [],
           selection: [],
           clientInfoOpen: false,
           controlsOpen: false,
           indivClientPageOpen: false,
           addClientModalOpen: false
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
        }, () => {
            this.getCurrentClientDuedates()
        })
   }

   getCurrentClientDuedates = () => {
        const { currentClient } = this.state
        const { duedateList } = this.props

        let temparr = duedateList.filter(item => item.client_id === currentClient.id)
        this.setState({currentClientDuedates: temparr})
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

    openAddClientModal = () => {
        this.setState({addClientModalOpen: true})
    }

    closeAddClientModal = () => {
        this.setState({addClientModalOpen: false})
    }

    render() {
        const {
            classes, 
            clientList, duedateList
        } = this.props

        const { 
            currentClient, currentClientDuedates, selection,
            clientInfoOpen, controlsOpen, indivClientPageOpen,
            importOptionsOpen, exportOptionsOpen, addClientOptionsOpen,
            addClientModalOpen
        } = this.state

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
                        currentClientDuedates={currentClientDuedates}
                        closeIndivClientPage={this.closeIndivClientPage}
                    />
                </Modal>

                <Modal
                    aria-labelledby='addClientPage'
                    aria-describedby='Page for adding a client'
                    disableBackdropClick
                    open={addClientModalOpen}
                    onClose={this.closeAddClientModal}
                >
                    <AddClientPage />
                </Modal>

                <Grid container spacing={24}>
                    
                    <Grid item xs={sidebarOpen ? 8 : 12} className={classes.growShrink}>
                        <Paper className={classes.paper} elevation={1}>
                            <ClientsPageTable
                                clientList={clientList}
                                duedateList={duedateList}
                                setCurrentClient={this.setCurrentClient}
                                openIndivClientPage={this.openIndivClientPage}
                                openClientControls={this.openClientControls}
                                closeClientControls={this.closeClientControls}
                                openImportOptions={this.openImportOptions}
                                openExportOptions={this.openExportOptions}
                                openAddClientOptions={this.openAddClientOptions}
                                setSelection={this.setSelection}
                            />
                        </Paper>
                    </Grid>

                    <Slide 
                        direction="left"
                        mountOnEnter
                        unmountOnExit
                        in={sidebarOpen}
                        {...(sidebarOpen ? { timeout: 500 } : {})}
                    >

                        <Grid item xs={4} >
                            <Paper className={classes.paper} elevation={1}>
                                <Grid container direction="column" spacing={16}>
                
                                    <Grid item>
                                        <Slide
                                            direction="left"
                                            mountOnEnter
                                            unmountOnExit
                                            in={controlsOpen}
                                            {...(controlsOpen ? { timeout: 500 } : {})} 
                                        >
                                            <ClientsPageControls
                                                selection={selection}
                                            />
                                        </Slide>
                                    </Grid>

                                    <Grid item>
                                        <Slide
                                            direction="left"
                                            mountOnEnter
                                            unmountOnExit
                                            in={clientInfoOpen}
                                            {...(clientInfoOpen ? { timeout: 500 } : {})} 
                                        >
                                            <ClientsPageInfo 
                                                currentClient={currentClient}
                                                currentClientDuedates={currentClientDuedates}
                                                clearCurrentClient={this.clearCurrentClient}
                                                openIndivClientPage={this.openIndivClientPage}
                                            />
                                        </Slide>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>
                    </Slide>
                </Grid>
            </Fragment>
        )
    }
}

ClientsPage.propTypes = {
    user: PropTypes.object.isRequired
}

export default withStyles(styles)(ClientsPage)