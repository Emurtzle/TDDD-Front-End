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
           
        }
    }

    render() {
        const { openExportOptions, openAddClientOptions } = this.props
        

        return (
            <Plugin 
                name="ToolbarControls"
                dependencies={pluginDependencies}
            >
                <Template name="toolbarContent">
                    <TemplatePlaceholder />

                    <Grid container direction='row' justify='space-around'>
                        
                        <Grid item>
                            <Button
                                onClick={openAddClientOptions}
                            >
                                Add Client(s)
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button   
                                onClick={openExportOptions}
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