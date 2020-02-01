import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './../SideDrawer'
export default class Header extends Component {
    state={
        drawerOpen:false,
        headerShow:false
    }
    toggleDrawer = (value)=>{
        this.setState({drawerOpen:value});
    }
    handleScroll=()=>{
        if(window.scrollY>0){
            this.setState({headerShow:true})
        }
        else{
            this.setState({headerShow:false})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll')
    }

    render() {
        return (
            <div>
                <AppBar 
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow?'#2f2f2f':'transparent',
                    boxShadow:'none',
                    padding: '10px 0px',
                    transition: 'all 300ms ease-in'
                }}
                
                >
                    <Toolbar>
                        <div className='header_logo'>
                            <div className='font_righteous header_logo_venue'> The Venue</div>
                            <div className='header_logo_title'> Musical Events</div>
                        </div>
                        <IconButton
                            aria-label="Menu"
                            color="inherit" 
                            onClick={this.toggleDrawer.bind(this,true)}>
                            <MenuIcon/>
                        </IconButton>
                        <SideDrawer 
                        open={this.state.drawerOpen}
                        onClose={this.toggleDrawer.bind(this)}
                        />
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}
