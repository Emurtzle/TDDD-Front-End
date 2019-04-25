import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FileIcon from '@material-ui/icons/FileCopy'
import OpenIcon from '@material-ui/icons/OpenInBrowser'

const styles = theme => ({
    
  })

class AgendaListItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        const {title, client, date, status} = this.props.item
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FileIcon color={status ? 'primary' : 'secondary'} />
                    </Avatar>
                </ListItemAvatar>

                <ListItemText
                    primary={`${title} - ${client} - ${date.toDateString()}`}
                />

                <ListItemSecondaryAction>
                    <IconButton aria-label="Open">
                        <OpenIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default withStyles(styles)(AgendaListItem)