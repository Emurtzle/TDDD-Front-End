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
            critBox: false,
            sortedList: []
        }
    }

    componentDidMount() {
        this.loadAgendaItems()
    }
    
    loadAgendaItems = () => {
        console.log("Made it!")

        console.log("duedateList: ", this.props.duedateList)
        var temparr = this.props.duedateList
        temparr.sort((a,b) => (a.dateDue < b.dateDue))
        this.setState({sortedList: temparr})
        
    }

    renderAgendaItems = () => {
        var temparr = this.state.sortedList.slice(0, 10)
        console.log('temparr: ', temparr)

        return temparr.map((item, index) => {
            var client = this.findClient(item.client_id)
            return(
                <AgendaListItem item={item} client={client} key={index} />
            )
        })
    }

    findClient = (id) => {
        return this.props.clientList.find(item => item.id === id)
    }


    handleCheckChange = (ev) => {
        this.setState({ [ev.target.value]: !this.state[ev.target.value] })
    } 

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    render() {
        const { classes } = this.props

        return(
            <Fragment>
                {/* <FormGroup row>
                    <FormControl>
                        <InputLabel>Form Type</InputLabel>
                        <Select 
                            value={this.state.formType}
                            onChange={this.handleChange}
                            inputProps={{name: 'formType', id: 'formType'}}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="w2">W2</MenuItem>
                            <MenuItem value="1040">1040</MenuItem>
                        </Select> 
                        <FormHelperText>Pick the type of form</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Client</InputLabel>
                        <Select 
                            value={this.state.client}
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
                        <FormHelperText>Pick the type of form</FormHelperText>
                    </FormControl>

                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked={this.state.alphaBox}
                                onChange={this.handleCheckChange}
                                value="critBox"
                            />
                        }
                        label="Critical"
                    />

                </FormGroup> */}

                <List>
                    {this.renderAgendaItems()}
                </List>
            </Fragment>
        )
    }
}

AgendaList.propTypes = {
    
}

export default withStyles(styles)(AgendaList)