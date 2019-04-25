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

const sampleData = [
    {name: "Granny Smith", phone: "111-111-1111", email: "GrannySmith@email.com", dob: '06-07-1945', occ: 'retired', soc: 4554, status: 'complete'},
    {name: "John Smith", phone: "222-222-2222", email: "JohnSmith@email.com", dob: '11-12-1985', occ: 'carpenter', soc: 9898, status: 'complete'},
    {name: "Matt Dom", phone: "333-333-3333", email: "MattDom@email.com", dob: '06-22-1970', occ: 'electrician', soc: 5133, status: 'incomplete'},
    {name: "Emily Wagner", phone: "444-444-4444", email: "EmilyWagner@email.com", dob: '06-07-1945', occ: 'cpa', soc: 1244, status: 'incomplete'},
    {name: "Ezra Toms", phone: "555-555-5555", email: "EzraToms@email.com", dob: '03-12-1999', occ: 'ceo', soc: 9887, status: 'incomplete'},
    {name: "Tom Jones", phone: "666-666-6666", email: "TomJones@email.com", dob: '02-07-1995', occ: 'teacher', soc: 3455, status: 'complete'},
    {name: "Alex Barker", phone: "777-777-7777", email: "AlexBarker@email.com", dob: '01-29-1993', occ: 'professor', soc: 3456, status: 'incomplete'},
    {name: "Hoda Gotbe", phone: "888-888-8888", email: "HodaGotbe@email.com", dob: '02-07-2000', occ: 'waitress', soc: 1111, status: 'complete'},
    {name: "Tim Slanderiths", phone: "999-999-9999", email: "Tim Slanderiths@email.com", dob: '06-07-2001', occ: 'waiter', soc: 1234, status: 'complete'},
    {name: "My Face", phone: "123-456-7890", email: "MyFace@email.com", dob: '09-24-1995', occ: 'shop owner', soc: 5555, status: 'incomplete'},
    {name: "Your Face", phone: "121-454-7878", email: "YourFace@email.com", dob: '09-15-1992', occ: 'clerk', soc: 6666, status: 'incomplete'},
    {name: "Our Face", phone: "657-345-8887", email: "OurFace@email.com", dob: '06-07-1989', occ: 'valet', soc: 4928, status: 'complete'},
    {name: "Sidney Songs", phone: "123-321-1221", email: "SidneySongs@email.com", dob: '06-07-1999', occ: 'waitress', soc: 8734, status: 'incomplete'},
    {name: "Racheal Gotbe", phone: "455-465-6457", email: "RachealGotbe@email.com", dob: '06-07-1950', occ: 'teacher', soc: 1932, status: 'complete'},
    {name: "Sandra Gotbe", phone: "233-342-5435", email: "SandraGotbe@email.com", dob: '06-07-1965', occ: 'waitress', soc: 9889, status: 'incomplete'}
]


const styles = () => ({

})

class ClientsTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            columns: [
                {name: 'name', title: 'Name'},
                {name: 'phone', title: 'Phone #'},
                {name: 'email', title: 'Email'},
                {name: 'dob', title: 'DOB'},
                {name: 'occ', title: 'Occupation'},
                {name: 'soc', title: 'SSN'}
            ],
            rows: sampleData,
            selection: [],
            selectedClient: sampleData[1],
            clientControlsOpen: false
        }

        this.changeSelection = selection => this.setState({ selection })
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
        const { rows, columns, selection } = this.state
        return (
            <Paper>
                <Grid rows={rows} columns={columns}>
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