import React from 'react'
import { Plugin, Template, TemplatePlaceholder } from '@devexpress/dx-react-core'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'


const pluginDependencies = [
    { name: 'Toolbar' }
]

export class ToolbarControls extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            addClientOptionsOpen: false,
            importOptionsOpen: false,
            exportOptionsOpen: false
        }
    }

    openAddClientOptions = (ev) => {
        this.anchorEl = ev.currentTarget
        this.setState({addClientOptionsOpen: true})
     }
 
     closeAddClientOptions = () => {
        this.anchorEl = null
        this.setState({addClientOptionsOpen: false})
     }
 
    openImportOptions = (ev) => {
        this.anchorEl = ev.currentTarget
        this.setState({importOptionsOpen: true})
    }
 
    closeImportOptions = () => {
        this.anchorEl = null
        this.setState({importOptionsOpen: false})
     } 
     
     openExportOptions = (ev) => {
         this.anchorEl = ev.currentTarget
         this.setState({exportOptionsOpen: true})
     }
  
     closeExportOptions = () => {
         this.anchorEl = null
         this.setState({exportOptionsOpen: false})
     }



    render() {
        const { importOptionsOpen, exportOptionsOpen, addClientOptionsOpen } = this.state
        

        return (
            <Plugin 
                name="ToolbarControls"
                dependencies={pluginDependencies}
            >
                <Template name="toolbarContent">
                    <TemplatePlaceholder />

                    <Popper
                        open={addClientOptionsOpen}
                        anchorEl={this.anchorEl}
                        transition
                        disablePortal
                    >

                        {({TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.closeAddClientOptions}>
                                        <MenuList>
                                            <MenuItem>Via Form</MenuItem>
                                            <MenuItem>Via CSV</MenuItem>
                                            <MenuItem>Via Excel</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}

                    </Popper>

                    <Popper
                        open={importOptionsOpen}
                        anchorEl={this.anchorEl}
                        transition
                        disablePortal
                    >

                        {({TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.closeImportOptions}>
                                        <MenuList>
                                            <MenuItem>Via Form</MenuItem>
                                            <MenuItem>Via CSV</MenuItem>
                                            <MenuItem>Via Excel</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}

                    </Popper>

                    <Popper
                        open={exportOptionsOpen}
                        anchorEl={this.anchorEl}
                        transition
                        disablePortal
                    >

                        {({TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.closeExportOptions}>
                                        <MenuList>
                                            <MenuItem>CSV</MenuItem>
                                            <MenuItem>Excel</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}

                    </Popper>

                    

                    

                    <Grid container direction='row' justify='space-around'>
                        
                        <Grid item>
                            <Button
                                onClick={this.openAddClientOptions}
                            >
                                Add Client
                            </Button>
                        </Grid>
                        
                        <Grid item>
                            <Button
                                onClick={this.openImportOptions}
                            >
                                Import Clients
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button   
                                onClick={this.openExportOptions}
                            >
                                Export Clients
                            </Button>
                        </Grid>

                    </Grid>

                </Template>
            </Plugin>
        )
    }
}