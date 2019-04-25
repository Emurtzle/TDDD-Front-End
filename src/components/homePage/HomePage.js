import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Calendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import AgendaList from './AgendaList'

const localizer = Calendar.momentLocalizer(moment)
const allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k])

const eventList = [
    {
        title: "Client 1",
        start: new Date(),
        end: new Date()
    },
    {
        title: "Client 2",
        start: new Date(moment().add(1, "days")),
        end: new Date(moment().add(1, "days"))
    },
    {
        title: "Client 3",
        start: new Date(moment().add(2, "days")),
        end: new Date(moment().add(2, "days"))
    }
]

const agendaList = [
    {
        title: "W2",
        client: "John Smith",
        date: new Date(moment("2019-04-28")),
        status: true
    },
    {
        title: "W2",
        client: "Granny Smith",
        date: new Date(moment("2019-04-29")),
        status: false
    },
    {
        title: "1044",
        client: "Jane Doe",
        date: new Date(moment("2019-04-30")),
        status: false
    }
]

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    paper: {
        padding: 10,
        textAlign: 'center'
    }
})

class CalendarPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render () {
         const { classes } = this.props

        return (
            <Grid container spacing={24}>

                <Grid item xs={9}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="h3" gutterBottom>
                            Calendar Overview
                        </Typography>

                        <Calendar
                            localizer={localizer}
                            events={eventList}
                            views={allViews}
                            showMultiDayTimes
                            defaultDate={new Date()}
                            defaultView="month"
                            style={{ height: "75vh" }}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="h3" gutterBottom>
                            Agenda
                        </Typography>

                        <AgendaList agenda={agendaList}/>

                    </Paper>
                    
                </Grid>

            </Grid>
        )
    }
}

CalendarPage.propTypes = {
    user: PropTypes.object.isRequired
}

export default withStyles(styles)(CalendarPage)