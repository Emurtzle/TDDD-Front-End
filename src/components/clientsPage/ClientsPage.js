import React, { Component, Fragment }from 'react'
import PropTypes from 'prop-types'

import ClientsPageTable from './ClientsPageTable'
import ClientsPageInfo from './ClientsPageInfo'
import ClientsPageControls from './ClientsPageControls'
import IndivClientPage from './IndivClientPage'
import addClientCsvModal from './AddClientCsvModal'

import AddClientModal from './addClientViaFormModal'
import SetDuedatesModal from './SetDuedatesModal'

import moment from 'moment'
import uuid from 'uuid'

import { Transition } from 'react-transition-group'


import { withStyles, FormControl, FormGroup } from '@material-ui/core'

import Modal from '@material-ui/core/Modal'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
import Grow from '@material-ui/core/Grow'
import InputLabel from '@material-ui/core/InputLabel'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Input from '@material-ui/core/Input'
import AddClientCsvModal from './AddClientCsvModal';

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
    },
    formControl: {
        margin: theme.spacing.unit
    },
    input: {
        display: 'none'
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
           addClientModalOpen: false,
           setDuedatesModalOpen: false,
           addClientCsvModalOpen: false,
           addClientOptionsOpen: false,
           importOptionsOpen: false,
           exportOptionsOpen: false
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

    openSetDuedatesModal = (ev) => {
        this.anchorEl = ev.currentTarget
        this.setState({setDuedatesModalOpen: true})
    }

    closeSetDuedatesModal = () => {
        this.anchorEl = null
        this.setState({setDuedatesModalOpen: false})
    }

    openAddClientCsvModal = () => {
        this.setState({addClientCsvModalOpen: true})
    }

    closeAddClientCsvModal = () => {
        this.setState({addClientCsvModalOpen: false})
    }




    openAddClientOptions = (ev) => {
        this.anchorEl = ev.currentTarget
        this.setState({addClientOptionsOpen: true})
     }

     closeAddClientOptions = () => {
        this.anchorEl = null
        this.setState({addClientOptionsOpen: false})
     }
 
    openImportOptions = (ev) => {
        this.anchorEl = ev.currentTarget
        this.setState({importOptionsOpen: true})
    }

    closeImportOptions = () => {
        this.anchorEl = null
        this.setState({importOptionsOpen: false})
     }
     
     openExportOptions = (ev) => {
         this.anchorEl = ev.currentTarget
         this.setState({exportOptionsOpen: true})
     }

     closeExportOptions = () => {
        this.anchorEl = null
        this.setState({exportOptionsOpen: false})
     }

     submitNewClient = (client) => {
        console.log('Client to post: ', client)

        fetch('https://tax-due-date-database-backend2.herokuapp.com/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify({
                firstName: client.firstName,
                lastName: client.lastName,
                email: client.email,
                phone: client.phone,
                fax: client.fax,
                dob: client.dob,
                address: client.address,
                occ: client.occ,
                ssn: client.ssn,
                status: 'incomplete'
            })
        })
        .then(resp => resp.json())
        .then(json => {
            console.log('Posted Client: ', json)
        })
     }

     submitDuedates = (forms) => {
         const { selection } = this.state
         const { clientList } = this.props
         var temp = []

        selection.map(item => {
            temp.push(clientList.find((client) => client.id === item + 1))
        })

        var toPost = []

        temp.map(client => {
            forms.map(form => {
                toPost.push({
                    client_id: client.id,
                    name: form.name,
                    description: form.description,
                    dateDue: form.dateDue,
                    progress: "0",
                    status: "incomplete"
                })
            })
        })

        fetch('https://tax-due-date-database-backend2.herokuapp.com/duedates/createMany', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'appllication/json',
                Authorization: `Bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify({data: toPost})
        })
        .then(resp => resp.json())
        .then(json => {
            console.log('Response: ', json)
            this.props.refreshData()
        })
     }

     submitCsv = (data, forms) => {
        console.log("Data from CSV: ", data)
        console.log("Forms to apply: ", forms)

        fetch('https://tax-due-date-database-backend2.herokuapp.com/clients/csv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify({data: data, forms: forms})
        })
        .then(resp => resp.json())
        .then(json => {
            console.log('Json: ', json)
            this.props.refreshData()
        })
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
            addClientModalOpen, setDuedatesModalOpen, addClientCsvModalOpen
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

                <Popper
                        open={addClientOptionsOpen}
                        anchorEl={this.anchorEl}
                        transition
                        disablePortal
                        style={{zIndex: 99}}
                    >

                        {({TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.closeAddClientOptions}>
                                        <MenuList>
                                            <MenuItem onClick={() => {
                                                this.closeAddClientOptions()
                                                this.openAddClientModal()
                                                }}
                                                >
                                                    Via Form
                                                </MenuItem>
                                            <MenuItem onClick={() => {
                                                this.closeAddClientOptions()
                                                this.openAddClientCsvModal()
                                            }}
                                            >
                                                Via CSV
                                            </MenuItem>
                                            <MenuItem>Via Excel</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}

                </Popper>

                <Popper
                    open={exportOptionsOpen}
                    anchorEl={this.anchorEl}
                    transition
                    disablePortal
                    style={{zIndex: 99}}
                >

                    {({TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.closeExportOptions}>
                                    <MenuList>
                                        <MenuItem>CSV</MenuItem>
                                        <MenuItem>Excel</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}

                </Popper>

                <Popper
                    open={setDuedatesModalOpen}
                    anchorEl={this.anchorEl}
                    transition
                    disablePortal
                    style={{zIndex: 99}}
                >

                    {({TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                            }}
                        >
                            <SetDuedatesModal
                                closeSetDuedatesModal={this.closeSetDuedatesModal}
                                submitDuedates={this.submitDuedates}
                            />
                        </Grow>
                    )}

                </Popper>

                

                

                <AddClientModal 
                    addClientModalOpen={addClientModalOpen}
                    closeAddClientModal={this.closeAddClientModal}
                    submitNewClient={this.submitNewClient}
                />

                <AddClientCsvModal
                    addClientCsvModalOpen={addClientCsvModalOpen}
                    closeAddClientCsvModal={this.closeAddClientCsvModal}
                    submitCsv={this.submitCsv}
                />



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
                                                openSetDuedatesModal={this.openSetDuedatesModal}
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