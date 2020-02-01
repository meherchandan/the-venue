import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

export default function SideDrawer(props) {
    return (
        <Drawer 
        anchor='right'
        open={props.open} 
        onClose={()=>props.onClose(false)}>
            <List component = 'nav'>
                <ListItem button
                onclick={()=>{}}>
                    Event starts in
                </ListItem>
                <ListItem button
                onclick={()=>{}}>
                    Venue NFO
                </ListItem>
                <ListItem button
                onclick={()=>{}}>
                    Highlights
                </ListItem>
                <ListItem button
                onclick={()=>{}}>
                    Pricing
                </ListItem>
            </List>
        
        </Drawer>
    )
}
