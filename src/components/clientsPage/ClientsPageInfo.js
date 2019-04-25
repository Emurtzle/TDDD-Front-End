import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    }
})

class ClientsPageInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const { classes, currentClient, clearCurrentClient } = this.props

        return (
            <Grid item >
                <Grid container spacing={8} justify="center" direction="column" alignItems="stretch">

                    <Grid item>
                        <Paper className={classes.paper} >
                            <Grid container spacing={8} >
                                <Grid item xs={9}>
                                    <Typography variant="h3" align="left" gutterBottom>
                                        {currentClient ? currentClient.name : 'Sample Name'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button size="large" >Open</Button>
                                    <Button size="large" onClick={clearCurrentClient} >Close</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    
                    <Grid item>
                        <Paper className={classes.paper} >
                            <Grid container spacing={8} >
                            
                                <Grid item xs={4}>
                                    <Typography variant="subtitle1" >
                                        Email: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.email : 'SampleEmail@email.com'}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Home: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>
                                        {currentClient ? currentClient.phone : '555-555-5555'}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Cell: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.phone : '234-432-1221'}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Fax: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>
                                        {currentClient ? currentClient.phone : '555-555-5555'}
                                    </Typography>

                                </Grid>

                                <Grid item xs={4}>

                                    <Typography variant="subtitle1" >
                                        Date of Birth: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.dob : '00-00-1900'}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Address:
                                    </Typography>

                                    <Typography variant="body2" >
                                        ***address info
                                        ***address info
                                        ***address info
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Occupation: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.occ : 'retired'}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Social Security Numer: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.soc : '55-555-5555'}
                                    </Typography>

                                </Grid>

                                <Grid item xs={4}>

                                    <Typography variant="subtitle1" >
                                        Status: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.status : 'incomplete'}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Number of Due Dates: 
                                    </Typography>

                                    <Typography variant="body2">
                                        **Number of due dates
                                    </Typography>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

ClientsPageInfo.propTypes = {

}

export default withStyles(styles)(ClientsPageInfo)