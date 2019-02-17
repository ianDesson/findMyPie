import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
  return (
  <div>
    <AppBar position={'static'} style={{backGroundColor: '#ffc86a'}}>
      <ToolBar>
        <Typography variant={'h6'} color={'#ac1300'}>
          Find Your Pie
        </Typography>
      </ToolBar>
    </AppBar>
  </div>
  );
}
export default NavBar