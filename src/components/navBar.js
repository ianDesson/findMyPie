import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/Button';
import AppBar from '@material-ui/AppBar';
import ToolBar from '@material-ui/ToolBar';
import Typography from '@material-ui/Typography'

const NavBar = () => {
  return (
  <div>
    <AppBar position={'static'} style={{backGroundColor: '#ffc86a'}}>
      <ToolBar>
        <Typography variant={'h6'} color={'#ac1300'}>
        
        </Typography>
      </ToolBar>
    </AppBar>
  </div>
  );
}
export default NavBar