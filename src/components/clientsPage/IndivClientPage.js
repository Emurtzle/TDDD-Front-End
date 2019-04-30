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
    },
    modalPaper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none'
    }
})

class IndivClientPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            duedates: [
                {
                    name: "test",
                    description: "testy mctest description",
                    dateDue: "01-01-2019",
                    status: "incomplete"
                },
                {
                    name: "test2",
                    description: "testy2 mctest2 description2",
                    dateDue: "01-01-2019",
                    status: "incomplete"
                },
                {
                    name: "test3",
                    description: "testy3 mctest3 description3",
                    dateDue: "01-01-2019",
                    status: "incomplete"
                },
                {
                    name: "test4",
                    description: "testy4 mctest4 description4",
                    dateDue: "01-01-2019",
                    status: "incomplete"
                },
                {
                    name: "test5",
                    description: "testy5 mctest5 description5",
                    dateDue: "01-01-2019",
                    status: "incomplete"
                }
            ]
        }
    }

    loadDuedates = () => {
        return this.props.currentClientDuedates.map((duedate, index) => (
            <Grid item key={index}>
                <Paper style={{padding: 10, textAlign: 'center'}}>
                    <Grid container spacing={8} >
                        <Grid item xs={6}> 
                            <Typography variant="title" align="left">
                                {duedate.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Button>Open</Button>
                            <Button>Edit</Button>
                            <Button>Mark Complete</Button>
                        </Grid>

                        <Grid item xs={9}>
                            <Typography variant="subtitle1" align="left">
                                Due:
                            </Typography>

                            <Typography variant="body1" align="left">
                                {duedate.dateDue}
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant="subtitle1" >
                                Status:
                            </Typography>

                            <Typography variant="body1" >
                                {duedate.status}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        ))
    }

    render() {

        const { classes, currentClient, closeIndivClientPage } = this.props

        return (
            <Paper style={{top: '7%', left: '5%'}} className={classes.modalPaper}>
                <Grid container spacing={8}>
                    <Grid item xs={12} align="right">
                        <Button>Edit Client</Button>
                        <Button onClick={closeIndivClientPage}>Close Window</Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid container spacing={8} direction="column">

                            <Grid item>
                                <Paper className={classes.paper} >
                                    <Typography variant="h3" align="center" gutterBottom >
                                        {currentClient ? `${currentClient.firstName} ${currentClient.lastName}` : null}
                                    </Typography>
                                    
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
                
                    <Grid item xs={6}>
                        <Grid container spacing={16} direction="column">
                            <Grid item >
                                <Paper className={classes.paper} >
                                    <Typography variant="h3" align="center" gutterBottom> 
                                        Due Dates
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item >
                                <Paper className={classes.paper}> 
                                    <Grid container direction="column" spacing={8}>
                                        {this.loadDuedates()}
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

IndivClientPage.propTypes = {

}

export default withStyles(styles)(IndivClientPage)