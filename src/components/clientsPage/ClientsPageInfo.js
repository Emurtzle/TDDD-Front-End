import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles, Divider } from '@material-ui/core';

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

        const { 
            classes, 
            currentClient, currentClientDuedates,
            clearCurrentClient, openIndivClientPage 
        } = this.props

        return (
            <Grid item >
                <Paper className={classes.paper} >
                    <Grid container spacing={8} justify="center" direction="column" alignItems="stretch">

                        <Grid item>
                            <Button size="large" onClick={openIndivClientPage} >Open</Button>
                            <Button size="large" onClick={clearCurrentClient} >Close</Button>
                        </Grid>

                        <Grid item>
                            <Divider variant='middle' />
                        </Grid>

                        <Grid item>
                            <Typography variant="h3" align="center" gutterBottom>
                                {currentClient ? `${currentClient.firstName} ${currentClient.lastName}` : null}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Divider variant='middle' />
                        </Grid>
                        
                        <Grid item>
                            <Grid container spacing={8} >
                            
                                <Grid item xs={4}>
                                    <Typography variant="subtitle1" >
                                        Email: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.email : null}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Home: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>
                                        {currentClient ? currentClient.phone : null}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Cell: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.phone : null}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Fax: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>
                                        {currentClient ? currentClient.phone : null}
                                    </Typography>

                                </Grid>

                                <Grid item xs={4}>

                                    <Typography variant="subtitle1" >
                                        Date of Birth: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.dob : null}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Address:
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>
                                    {currentClient ? currentClient.address : null}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Occupation: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.occupation : null}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Social Security Numer: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.ssn : null}
                                    </Typography>

                                </Grid>

                                <Grid item xs={4}>

                                    <Typography variant="subtitle1" >
                                        Status: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        {currentClient ? currentClient.status : null}
                                    </Typography>

                                    <Typography variant="subtitle1">
                                        Due Dates Completed:
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>
                                        {currentClient ? currentClientDuedates.filter(item => item.status === "complete").length : null}
                                    </Typography>

                                    <Typography variant="subtitle1" >
                                        Remaining Due Dates: 
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>
                                        {currentClient ? currentClientDuedates.filter(item => item.status !== "complete").length : null}
                                    </Typography>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

ClientsPageInfo.propTypes = {

}

export default withStyles(styles)(ClientsPageInfo)