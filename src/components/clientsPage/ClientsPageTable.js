import React, { Component }from 'react'
import PropTypes, { string } from 'prop-types'

import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles'

import moment from 'moment'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import {
    Grid,
    Table, TableHeaderRow, TableSelection,
    Toolbar,
    SearchPanel, PagingPanel
 } from '@devexpress/dx-react-grid-material-ui'

import { 
    SelectionState,
    SearchState, IntegratedFiltering,
    SortingState, IntegratedSorting,
    PagingState, IntegratedPaging
} from '@devexpress/dx-react-grid'

import { ToolbarControls } from './Toolbar-Controls'



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
                {name: 'ssn', title: 'SSN'},
                {name: 'duedates', title: 'Due Dates'}
            ],
            selection: [],
            selectedClient: null,
            pageSizes: [10, 15, 25, 50, 75, 100, 250]
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
        let temparr = this.props.duedateList.filter(item => item.client_id === row.id)
        let temparr2 = temparr.filter(item => item.status !== 'complete')
        let ddcount = temparr.length
        let ddc = temparr2.length

        Object.assign(row, {duedates: `${ddcount-ddc} / ${ddcount}`})

        switch(ddc) {
            case 0:
                color = '#a2a2a4'
                break
            default:
                color = '#ffcdd2'
                break
        }
    
        return (
            <Table.Row 
                {...restProps}
                onClick={() => this.props.setCurrentClient(row)}
                onDoubleClick={() => {
                    this.props.setCurrentClient(row)
                    this.props.openIndivClientPage()
                }}
                style={{
                    cursor: 'pointer',
                    background: color
                }}
            />
        )
    }

    render() {
        const { 
            clientList, 
            openImportOptions, openExportOptions, openAddClientOptions
        } = this.props

        const { columns, selection, pageSizes } = this.state

        return (
            <Paper>
                <Grid rows={clientList} columns={columns}>
                    <SearchState defaultValue="" />
                    <IntegratedFiltering />

                    <SortingState />
                    <IntegratedSorting />

                    <SelectionState selection={selection} onSelectionChange={this.changeSelection} />

                    <PagingState 
                        defaultCurrentPage={0}
                        defaultPageSize={10}
                    />
                    <IntegratedPaging />

                    <Table rowComponent={this.tableRow}/>
                    <TableHeaderRow showSortingControls />

                    <PagingPanel
                        pageSizes={pageSizes}
                    />

                    <Toolbar />
                    <ToolbarControls 
                        openImportOptions={openImportOptions}
                        openExportOptions={openExportOptions}
                        openAddClientOptions={openAddClientOptions}
                    />

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