import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({

})

class ClientOverview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {

        const { classes } = this.props

        return (
            <div>

            </div>
        )
    }
}

ClientOverview.propTypes = {
    user: PropTypes.object.isRequired
}

export default withStyles(styles)(ClientOverview)