import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Grow from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        padding: 10,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
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
            duedateInfoOpen: false
        }
    }

    loadDuedates = () => {
        return this.props.currentClientDuedates.map((duedate, index) => (
            <GridListTile key={index} cols={1}>
                <Paper
                    style={{
                        padding: 10,
                        textAlign: 'center',
                        background: duedate.status === 'complete' ? '#a2e2a4' : '#ffcdd2'
                    }}
                    elevation={2}
                >
                    <Grid container direction='column' spacing={8} justify='space-around'>

                        <Grid item xs={12}>
                            <Typography variant="title" align="center" >
                                {duedate.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}> 
                            <Grid container direction='row' justify="space-around">
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Due:
                                    </Typography>

                                    <Typography variant="body2">
                                        {duedate.dateDue}
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant="subtitle1" align='center'>
                                        Status:
                                    </Typography>

                                    <Typography variant="body2" align='center'>
                                        {duedate.status}
                                    </Typography>
                                </Grid>
                            
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container direction='row' justify='space-around'>
                                <Grid item xs={6}>
                                    <Divider variant='middle' />
                                </Grid>

                                <Grid item xs={6}>
                                    <Divider variant='middle' />
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container direction='row' justify='space-around'>
                                <Grid item>
                                    <Button>Open</Button>
                                </Grid>
                                <Grid item>
                                    <Button>Complete</Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Paper>
            </GridListTile>
        ))
    }

    render() {

        const { classes, currentClient, currentClientDuedates, closeIndivClientPage } = this.props

        return (
            <Paper style={{top: '5%', left: '5%', right: '5%'}} className={classes.modalPaper}>
                <Grid container spacing={8}>
                    <Grid item xs={12} align="right">
                        <Button onClick={closeIndivClientPage}>Close Window</Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={1} >
                            <Grid container spacing={8} direction="column">

                                <Grid item>
                                    <Typography variant="h3" align="center" gutterBottom >
                                        {currentClient ? `${currentClient.firstName} ${currentClient.lastName}` : null}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider variant='middle' />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button>Edit Client</Button>
                                </Grid>

                                <Grid item xs={12}>
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

                                            <Typography variant="body2" >
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
                                                {currentClient ? currentClient.status : 'incomplete'}
                                            </Typography>

                                            <Typography variant="subtitle1" >
                                                Due Dates Complete:
                                            </Typography>

                                            <Typography variant="body2" gutterBottom >
                                                {currentClientDuedates.filter(item => item.status === "complete").length}
                                            </Typography>

                                            <Typography variant="subtitle1" >
                                                Remaining Due Dates: 
                                            </Typography>

                                            <Typography variant="body2">
                                                {currentClientDuedates.filter(item => item.status !== "complete").length}
                                            </Typography>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={1}>
                            <Grid container spacing={8} direction="column">

                                <Grid item xs={12}>
                                    <Typography variant="h3" align="center" gutterBottom> 
                                        Due Dates
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider variant='middle' />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button>Add/Remove/Edit Due Dates</Button>
                                </Grid>
                                        
                                <Grid item xs={12}>
                                    <Divider variant='middle' />
                                </Grid>

                                <Grid item xs={12}>
                                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                                        {this.loadDuedates()}
                                    </GridList>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

IndivClientPage.propTypes = {

}

export default withStyles(styles)(IndivClientPage)