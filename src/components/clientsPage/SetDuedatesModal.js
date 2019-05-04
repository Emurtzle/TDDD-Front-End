import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit * 3,
      },
      paper: {
          padding: 10
      }
})

 const forms = {
    '1040': {
        name: "1040",
        description: "A 1040 Form",
        dateDue: "1-2-2019"
    },
    '1041': {
        name: "1041",
        description: "A 1041 Form",
        dateDue: "1-3-20191-2-2019"
    },
    '8879': {
        name: "8879",
        description: "A 8879 Form",
        dateDue: "1-4-2019"
    },
    '1120s': {
        name: "1120s",
        description: "A 1120S Form",
        dateDue: "1-5-2019"
    },
    '990': {
        name: "990",
        description: "A 990 Form",
        dateDue: "1-6-2019"
    },
    '1065': {
        name: "1065",
        description: "A 1065 Form",
        dateDue: "1-7-2019"
    },
    'engagementLetter': {
        name: "Engagement Letter",
        description: "An Engagement Letter",
        dateDue: "1-8-2019"
    }
 }

class SetDuedatesModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultClient: false,
            advancedClient: false,
            defualtBusiness: false,
            advancedBusiness: false,
            engagementLetter: false,
            '1040': false,
            '1041': false,
            '8879': false,
            '1120s': false,
            '990': false,
            '1065': false
        }
    }

    handleChange = name => event => {
        switch(name) {
            case 'defaultClient':
                this.setState({
                    defaultClient: true,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    engagementLetter: false,
                    '1040': false,
                    '1041': false,
                    '8879': false,
                    '1120s': false,
                    '990': false,
                    '1065': false
                })
            break

            case 'advancedClient':
                this.setState({
                    defaultClient: false,
                    advancedClient: true,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    engagementLetter: false,
                    '1040': false,
                    '1041': false,
                    '8879': false,
                    '1120s': false,
                    '990': false,
                    '1065': false
                })
            break

            case 'defualtBusiness':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: true,
                    advancedBusiness: false,
                    engagementLetter: false,
                    '1040': false,
                    '1041': false,
                    '8879': false,
                    '1120s': false,
                    '990': false,
                    '1065': false
                })
            break

            case 'advancedBusiness':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: true,
                    engagementLetter: false,
                    '1040': false,
                    '1041': false,
                    '8879': false,
                    '1120s': false,
                    '990': false,
                    '1065': false
                })
            break

            case 'engagementLetter':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    'engagementLetter': true,
                })
            break

            case '1040':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    '1040': true
                })
            break

            case '1041':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    '1041': true
                })
            break

            case '8879':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    '8879': true
                })
            break

            case '1120s':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    '1120s': true,
                })
            break

            case '990':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    '990': true,
                })
            break

            case '1065':
                this.setState({
                    defaultClient: false,
                    advancedClient: false,
                    defualtBusiness: false,
                    advancedBusiness: false,
                    '1065': true,
                })
            break

            default:
                this.setState({ [name]: event.target.checked })
        }



        this.setState({ [name]: event.target.checked })
    }

    checkDuedatesToSubmit = () => {
        let toSubmit = []

        if (this.state.defaultClient === true) {
            toSubmit.push(forms['engagementLetter'])
            toSubmit.push(forms['1040'])
        }

        if (this.state.advancedClient === true) {
            toSubmit.push(forms['engagementLetter'])
            toSubmit.push(forms['1040'])
            toSubmit.push(forms['8879'])
            toSubmit.push(forms['1120s'])
            toSubmit.push(forms['990'])
            toSubmit.push(forms['1065'])
        }

        if (this.state.defualtBusiness === true) {
            toSubmit.push(forms['8879'])
            toSubmit.push(forms['1120s'])
        }
        
        if (this.state.advancedBusiness === true) {
            toSubmit.push(forms['engagementLetter'])
            toSubmit.push(forms['1040'])
            toSubmit.push(forms['8879'])
            toSubmit.push(forms['1120s'])
            toSubmit.push(forms['990'])
            toSubmit.push(forms['1065'])
        }

        if (this.state.engagementLetter === true) {
            toSubmit.push(forms['engagementLetter'])
        }

        if (this.state['1040'] === true) {
            toSubmit.push(forms['1040'])
        }

        if (this.state['1041'] === true) {
            toSubmit.push(forms['1041'])
        }

        if (this.state['8879'] === true) {
            toSubmit.push(forms['8879'])
        }

        if (this.state['1120s'] === true) {
            toSubmit.push(forms['1120s'])
        }

        if (this.state['990'] === true) {
            toSubmit.push(forms['990'])
        }

        if (this.state['1065'] === true) {
            toSubmit.push(forms['1065'])
        }

        this.props.submitDuedates(toSubmit)
        this.props.closeSetDuedatesModal()
    }

    render() {

        const { classes, closeSetDuedatesModal } = this.props
        const {
            defaultClient, advancedClient,
            defualtBusiness, advancedBusiness
        } = this.state

        return (
            <Paper className={classes.paper} elevation={2}>
                <ClickAwayListener onClickAway={closeSetDuedatesModal}>
                    <Grid container direction='column' justify='space-around'>

                        <Grid item xs={12}>
                            <Typography variant='title' align='center' gutterBottom>
                                Set Due Dates
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Divider variant='middle' />
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container direct='row' justify='space-around'>
                                <Grid item xs={6}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Client</FormLabel>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={defaultClient}
                                                        onChange={this.handleChange('defaultClient')}
                                                        value="defaultClient"
                                                    />
                                                }
                                                label="Default Client"
                                            />

                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={advancedClient}
                                                        onChange={this.handleChange('advancedClient')}
                                                        value="advancedClient"
                                                    />
                                                }
                                                label="Advanced Client"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Business</FormLabel>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={defualtBusiness}
                                                        onChange={this.handleChange('defualtBusiness')}
                                                        value="defualtBusiness"
                                                    />
                                                }
                                                label="Default Business"
                                            />

                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={advancedBusiness}
                                                        onChange={this.handleChange('advancedBusiness')}
                                                        value="advancedBusiness"
                                                    />
                                                }
                                                label="Advanced Business"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Divider variant='middle' />
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container direct='row' justify='space-around'>
                            
                                <Grid item xs={6}>
                                    <FormControl className={classes.formControl}>
                                        <FormGroup>
                                            <FormLabel>Individual Due Dates</FormLabel>
                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['1040']}
                                                        onChange={this.handleChange('1040')}
                                                        value='1040'
                                                    />
                                                }
                                                label="1040"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['1041']}
                                                        onChange={this.handleChange('1041')}
                                                        value='1041'
                                                    />
                                                }
                                                label="1041"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['8879']}
                                                        onChange={this.handleChange('8879')}
                                                        value='8879'
                                                    />
                                                }
                                                label="8879"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['engagementLetter']}
                                                        onChange={this.handleChange('engagementLetter')}
                                                        value='engagementLetter'
                                                    />
                                                }
                                                label="Engagement Letter"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl className={classes.formControl}>
                                        <FormGroup>
                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['1120s']}
                                                        onChange={this.handleChange('1120s')}
                                                        value='1120s'
                                                    />
                                                }
                                                label="1120s"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['990']}
                                                        onChange={this.handleChange('990')}
                                                        value='990'
                                                    />
                                                }
                                                label="990"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['1065']}
                                                        onChange={this.handleChange('1065')}
                                                        value='1065'
                                                    />
                                                }
                                                label="1065"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Divider variant='middle' />
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container direction='row' justify='space-around'>
                                <Grid item>
                                    <Button onClick={closeSetDuedatesModal}>Cancel</Button>
                                </Grid>

                                <Grid item>
                                    <Button onClick={this.checkDuedatesToSubmit}>Submit</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ClickAwayListener>
            </Paper>
        )
    }
}

SetDuedatesModal.propTypes = {

}

export default withStyles(styles)(SetDuedatesModal)