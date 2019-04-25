import React, { Component }from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({

})

class DueDatePage extends Component {
    render() {
        return (
            <div>
                <h1>Woooooooo!!! The Due Dates PAge!@!@#@#@#@RTERDGVCFvc</h1>
            </div>
        )
    }
}

DueDatePage.propTypes = {
    user: PropTypes.object.isRequired
}

export default withStyles(styles)(DueDatePage)