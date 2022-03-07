import React from 'react'
import Floating from '../Profile/Floating'
import './Task.css'
import { PlaylistAddCheck,Timelapse,Build,FormatListNumbered } from '@mui/icons-material';
import { BottomNavigation,BottomNavigationAction,Paper,Box} from '@mui/material'
import TaskList from './TaskList';

export default function Task() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
  };
  return (
      <div className="Task">
      <h2 className="TaskTitle">My Task</h2>
       <Box sx={{ pb: 7 }}>
          <div className="TaskList">
            <TaskList />
          </div>  
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation className='BottomNav' value={value} onChange={handleChange}>
                  <BottomNavigationAction
                      label="Job"
                      value="job"
                      icon={<FormatListNumbered />}
                  />
                  <BottomNavigationAction
                      label="Delay"
                      value="delay"
                      icon={<Timelapse />}
                  />
                  <BottomNavigationAction
                      label="Repair"
                      value="reapir"
                      icon={<Build />}
                  />
              </BottomNavigation>
           </Paper>
        </Box>
          <div className="floatingBottom">
            <Floating />
          </div>
    </div>
  )
}
