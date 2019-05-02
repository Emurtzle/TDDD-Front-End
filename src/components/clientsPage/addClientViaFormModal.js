import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles, FormGroup } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    FormControl: {
        margin: theme.spacing.unit
    }
})

class AddClientModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            fax: "",
            dob: "",
            address: "",
            occ: "",
            ssn: ""
        }
    }

    handleChange = (ev) => {
        this.setState({[ev.target.id]: ev.target.value})
    }

    submitClient = () => {
        const {
            firstName, lastName,
            email, phone, fax,
            dob, address, occ, ssn
        } = this.state

        let client = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            fax: fax,
            dob: dob,
            address: address,
            occ: occ,
            ssn: ssn
        }

        let allEntered = true
        var x

        for (x in client) {
            if (client[x] === "") {
                console.log("found!", client[x])
                allEntered = false
            }
        }

        if (allEntered === true) {
            this.props.submitNewClient(client)
            this.props.closeAddClientModal()
        }
    }

    render() {

        const { classes, addClientModalOpen, closeAddClientModal } = this.props
        const {
            firstName, lastName,
            email, phone, fax,
            dob, address, occ, ssn
        } = this.state

        return (
            <Dialog
                    open={addClientModalOpen}
                    onClose={this.closeAddClientModal}
                    disableBackdropClick
                >
                    <DialogTitle>Add a Client</DialogTitle>
                    
                    <DialogContent>
                        <Paper>
                            <Grid container direction='column'>
                                <Grid item>
                                    <FormGroup row>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='firstName'>First Name</InputLabel>
                                            <Input 
                                                id='firstName'
                                                value={firstName}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='lastName'>Last Name</InputLabel>
                                            <Input 
                                                id='lastName'
                                                value={lastName}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </FormGroup>
                                </Grid>

                                <Grid item>
                                    <FormGroup row>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='email'>Email</InputLabel>
                                            <Input 
                                                id='email'
                                                value={email}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='phone'>Phone</InputLabel>
                                            <Input 
                                                id='phone'
                                                value={phone}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='fax'>Fax</InputLabel>
                                            <Input 
                                                id='fax'
                                                value={fax}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </FormGroup>
                                </Grid>

                                <Grid item>
                                    <FormGroup row>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='dob'>Date of Birth</InputLabel>
                                            <Input 
                                                id='dob'
                                                value={dob}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='address'>Address</InputLabel>
                                            <Input 
                                                id='address'
                                                value={address}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='occ'>Occupation</InputLabel>
                                            <Input 
                                                id='occ'
                                                value={occ}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.FormControl}>
                                            <InputLabel htmlFor='ssn'>SSN</InputLabel>
                                            <Input 
                                                id='ssn'
                                                value={ssn}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </FormGroup>
                                </Grid>

                            </Grid>

                        </Paper>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={closeAddClientModal} color='primary'>
                            Cancel
                        </Button>
                        <Button onClick={this.submitClient} color='primary'>
                            Submit
                        </Button>
                    </DialogActions>

                </Dialog>
        )
    }
}

AddClientModal.propTypes = {

}

export default withStyles(styles)(AddClientModal)