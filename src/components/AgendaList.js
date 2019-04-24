import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { withStyles, FormHelperText } from '@material-ui/core';

import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import AgendaListItem from './AgendaListItem'



const styles = theme => ({
    
  })

class AgendaList extends Component{ 
    constructor(props) {
        super(props)

        this.state = {
            formType: "",
            client: "",
            dateBox: false,
            alphaBox: false
        }
    }

    handleCheckChange = (ev) => {

        this.setState({ [ev.target.value]: !this.state[ev.target.value] })
    }

    handleChange = (ev) => {

        this.setState({ [ev.target.name]: ev.target.value })
    }

    loadAgendaItems = () => {
        return this.props.agenda.map((item, index) => (
            <AgendaListItem key={index} item={item} />
        ))
    }
    

    render() {
        const { classes } = this.props

        return(
            <Fragment>
                <FormGroup row>
                    <FormControl>
                        <InputLabel>Form Type</InputLabel>
                        <Select 
                            value={this.state.type}
                            onChange={this.handleChange}
                            inputProps={{name: 'formType', id: 'formType'}}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="w2">W2</MenuItem>
                            <MenuItem value="1040">1040</MenuItem>
                        </Select> 
                        <FormHelperText>Type of Form</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Client</InputLabel>
                        <Select 
                            value={this.state.type}
                            onChange={this.handleChange}
                            inputProps={{name: 'client', id: 'client'}}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="john-smith">John Smith</MenuItem>
                            <MenuItem value="granny-smith">Granny Smith</MenuItem>
                            <MenuItem value="jane-doe">Jane Doe</MenuItem>
                        </Select> 
                        <FormHelperText>Client</FormHelperText>
                    </FormControl>

                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked={this.state.dateBox}
                                onChange={this.handleCheckChange}
                                value="dateBox"
                            />
                        }
                        label="Date"
                    />

                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked={this.state.alphaBox}
                                onChange={this.handleCheckChange}
                                value="alphaBox"
                            />
                        }
                        label="Alpabetical"
                    />

                </FormGroup>

                <List>
                    {this.loadAgendaItems()}
                </List>
            </Fragment>
        )
    }
}

export default withStyles(styles)(AgendaList)