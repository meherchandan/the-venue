import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
class Header extends Component{

    render(){
        return(
            <div>
 <AppBar position="static">
        <Toolbar c>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            The Venue
          </Typography>
         
        </Toolbar>
      </AppBar>
            </div>
        );
    }

}

export default Header;