import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';

export default function SideDrawer(props) {
    const scrollToElement = (element)=>{
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true
        }
        );
        props.onClose(false);
        
    }
    return (
        <Drawer 
        anchor='right'
        open={props.open} 
        onClose={()=>props.onClose(false)}>
            <List component = 'nav'>
                <ListItem button
                onClick={()=>(scrollToElement('feature'))}>
                    Event starts in
                </ListItem>
                <ListItem button
                onClick={()=>(scrollToElement('venue'))}>
                    Venue NFO
                </ListItem>
                <ListItem button
                onClick={()=>(scrollToElement('highlights'))}>
                    Highlights
                </ListItem>
                <ListItem button
                onClick={()=>(scrollToElement('pricing'))}>
                    Pricing
                </ListItem>
                <ListItem button
                onClick={()=>(scrollToElement('location'))}>
                    Location
                </ListItem>
            </List>
        
        </Drawer>
    )
}
