import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({

})

class ClientsPageControls extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clearDuedatesOpen: false,
            completeDuedatesOpen: false
        }
    }

    openClearDuedatesAlert = () => {
        this.setState({clearDuedatesOpen: true})
    }

    closeClearDuedatesAlert = () => {
        this.setState({clearDuedatesOpen: false})
    }

    openCompleteDuedatesAlert = () => {
        this.setState({completeDuedatesOpen: true})
    }

    closeCompleteDuedatesAlert = () => {
        this.setState({completeDuedatesOpen: false})
    }

    render() {

        const { classes, selection, openSetDuedatesModal } = this.props
        const { clearDuedatesOpen, completeDuedatesOpen } = this.state

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
                                <Button 
                                    onClick={openSetDuedatesModal}
                                >
                                    Set Due Dates
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={this.openClearDuedatesAlert}>Clear Due Dates</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={this.openCompleteDuedatesAlert}>Mark Due Dates Complete</Button>
                            </Grid>
                        </Grid> 
                    </Grid>

                    <Dialog
                        open={clearDuedatesOpen}
                        onClose={this.closeClearDuedatesAlert}
                        disableBackdropClick
                    >
                        <DialogTitle>Are You Sure You Want To Clear ALL Due Datese From These Clients?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Clicking Yes will clear all due dates from the selected clients, are you sure you want to do that?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.closeClearDuedatesAlert}>No</Button>
                            <Button>Yes</Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog
                        open={completeDuedatesOpen}
                        onClose={this.closeCompleteDuedatesAlert}
                        disableBackdropClick
                    >
                        <DialogTitle>Are You Sure You Want To Mark ALL Due Dates Complete For These Clients?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Clicking Yes will complete ALL the Due Dates for the selected clients, are you sure you want to do that?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.closeCompleteDuedatesAlert}>No</Button>
                            <Button>Yes</Button>
                        </DialogActions>
                    </Dialog>

                
                </Grid>
            </Paper>
        )
    }
}

ClientsPageControls.propTypes = {

}

export default withStyles(styles)(ClientsPageControls)