import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

import {
  Grid,
  VirtualTable, Table, TableHeaderRow,
  TableColumnResizing
} from '@devexpress/dx-react-grid-material-ui'

const getRowId = row => row.id

const styles = theme => ({

})

class AddClientCsvTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: [
        {name: 'firstName', title: 'First Name'},
        {name: 'lastName', title: 'Last Name'},
        {name: 'phone', title: 'Phone #'},
        {name: 'email', title: 'Email'},
        {name: 'dob', title: 'DOB'},
        {name: 'occ', title: 'Occupation'},
        {name: 'ssn', title: 'SSN'}
      ],
      defaultColumnWidths: [
        { columnName: 'firstName', width: 100 },
        { columnName: 'lastName', width: 75 },
        { columnName: 'phone', width: 75 },
        { columnName: 'email', width: 50 },
        { columnName: 'dob', width: 50 },
        { columnName: 'occ', width: 80 },
        { columnName: 'ssn', width: 50 },
      ],
      data: []
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    const { parsedData } = this.props
    
    if (parsedData) {
      var temparr = []
  
      parsedData.data.map(client => {
        temparr.push(client)
      })
  
  
      this.setState({data: temparr})
    }
  }

  render() {

    const { classes, parsedData } = this.props
    const { columns, data, defaultColumnWidths } = this.state

    return (
      <Paper>
        <Grid rows={data} columns={parsedData.data}>
          
          <VirtualTable />
          {/* <TableColumnResizing defaultColumnWidths={defaultColumnWidths} /> */}
          <TableHeaderRow />

        </Grid>
      </Paper>
    )
  }
}

AddClientCsvTable.propTypes = {

}

export default withStyles(styles)(AddClientCsvTable)