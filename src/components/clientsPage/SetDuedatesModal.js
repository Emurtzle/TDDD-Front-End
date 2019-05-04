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

class SetDuedatesModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultClient: false,
            advancedClient: false,
            defualtBusiness: false,
            advancedBusiness: false,
            '1040': false,
            '1041': false,
            '8879': false,
            '1120s': false,
            '990': false,
            '1065': false,
            'engagementLetter': false
        }
    }

    handleChange = (ev) => {
        this.setState({[ev.target.id]: ev.target.checked})
    }

    checkDuedatesToSubmit = () => {
        this.props.submitDuedates(null)
        this.props.closeSetDuedatesModal()
    }

    render() {

        const { classes, closeSetDuedatesModal } = this.props
        const {
            defaultClient, advancedClient,
            defualtBusiness, advancedBusiness
        } = this.state

        return (
            <Paper className={classes.paper}>
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
                                                    onChange={this.handleChange}
                                                    value="defaultClient" />
                                                }
                                                label="Default Client"
                                            />

                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    checked={advancedClient}
                                                    onChange={this.handleChange}
                                                    value="advancedClient" />
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
                                                    onChange={this.handleChange}
                                                    value="defualtBusiness" />
                                                }
                                                label="Default Business"
                                            />

                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    checked={advancedBusiness}
                                                    onChange={this.handleChange}
                                                    value="advancedBusiness" />
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
                                                        onChange={this.handleChange}
                                                        value='1040'
                                                    />
                                                }
                                                label="1040"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['1041']}
                                                        onChange={this.handleChange}
                                                        value='1041'
                                                    />
                                                }
                                                label="1041"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['8879']}
                                                        onChange={this.handleChange}
                                                        value='8879'
                                                    />
                                                }
                                                label="8879"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['engagementLetter']}
                                                        onChange={this.handleChange}
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
                                                        onChange={this.handleChange}
                                                        value='1120s'
                                                    />
                                                }
                                                label="1120s"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['990']}
                                                        onChange={this.handleChange}
                                                        value='990'
                                                    />
                                                }
                                                label="990"
                                            />

                                            <FormControlLabel 
                                                control={
                                                    <Checkbox 
                                                        checked={this.state['1065']}
                                                        onChange={this.handleChange}
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