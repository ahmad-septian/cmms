import React from 'react'
import './Profile.css'
import { Person, Widgets,Add,Close } from '@mui/icons-material';
import { Fab, Menu,MenuItem,Paper,Divider } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Floating() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="FloatingMenu">
      <Fab className="bodyFloating" aria-label="add"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <Widgets className="IconFloating"/>
        </Fab>
      
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
        sx={{ marginTop:-4 }} 
        >
        <Paper sx={{ width: 500, maxWidth: '100%', marginBottom: -1, marginTop: -1, backgroundColor: '#C00000', color: '#FFF', textAlign: 'center', padding: 1 }}>
          <Link className='FloatingLink' to="/Task">
            <MenuItem onClick={handleClose}>My Task</MenuItem>
            <Divider className='RowMenu' />
          </Link>
          <MenuItem onClick={handleClose}>Task Plan Dan History </MenuItem>
          <Divider className='RowMenu' />
          <MenuItem onClick={handleClose}>Report Dan Achivment </MenuItem>
          <Divider className='RowMenu' />
          <MenuItem onClick={handleClose}>Equipment Data Dan Analysis</MenuItem>
          <Divider className='RowMenu' />
          <MenuItem onClick={handleClose}>Man Power Data Dan Analysis</MenuItem>
          <Divider className='RowMenu' />
          <MenuItem onClick={handleClose}>Input Data </MenuItem>
          <Divider className='RowMenu' />
          <MenuItem onClick={handleClose}>Summary Document </MenuItem>
        </Paper>
          </Menu>
    </div>
  )
}
