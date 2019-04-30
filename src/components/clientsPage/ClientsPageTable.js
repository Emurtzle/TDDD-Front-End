import React, { Component }from 'react'
import PropTypes, { string } from 'prop-types'

import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles'

import moment from 'moment'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'

import {
    Grid,
    Table, TableHeaderRow, TableSelection,
    Toolbar,
    SearchPanel
 } from '@devexpress/dx-react-grid-material-ui'

import { 
    SelectionState,
    SearchState,
    IntegratedFiltering
} from '@devexpress/dx-react-grid'



const styles = () => ({

})

class ClientsTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            columns: [
                {name: 'firstName', title: 'First Name'},
                {name: 'lastName', title: 'Last Name'},
                {name: 'phone', title: 'Phone #'},
                {name: 'email', title: 'Email'},
                {name: 'dob', title: 'DOB'},
                {name: 'occupation', title: 'Occupation'},
                {name: 'ssn', title: 'SSN'}
            ],
            selection: [],
            selectedClient: null
        }
    }

    changeSelection = selection => {
        this.setState({ selection })
        this.props.setSelection(selection)

        if (selection.length === 0) {
            this.props.closeClientControls()
        } else {
            this.props.openClientControls()
        }
    }

    tableRow = ({ row, ...restProps }) => {
        let color = ""
    
        switch(row.status) {
            case 'complete':
                color = '#a2a2a4'
                break
            case 'incomplete':
                color = '#ffcdd2'
                break
            default:
                color = ""
                break
        }
    
        if (row.status === "complete") {
            color = '#a2e2a4'
        } else if (row.status === 'incomplete') {
            color = '#ffcdd2'
        }
    
        // debugger
    
        return (
            <Table.Row 
                {...restProps}
                onClick={() => this.props.setCurrentClient(row)}
                style={{
                    cursor: 'pointer',
                    background: color
                }}
            />
        )
    }

    render() {
        const { clientList } = this.props
        const { columns, selection } = this.state

        return (
            <Paper>
                <Grid rows={clientList} columns={columns}>
                    <SearchState defaultValue="" />
                    <IntegratedFiltering />
                    <SelectionState selection={selection} onSelectionChange={this.changeSelection} />
                    <Table rowComponent={this.tableRow}/>
                    <TableHeaderRow />
                    <Toolbar />
                    <SearchPanel />
                    <TableSelection />
                </Grid>
            </Paper>
        )
    }
}

ClientsTable.propTypes = {
    
}

export default withStyles(styles)(ClientsTable)