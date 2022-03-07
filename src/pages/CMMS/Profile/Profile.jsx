import React from 'react'
import './Profile.css'
import { Person, Widgets,Add,Close } from '@mui/icons-material';
import Floating from './Floating';



export default function Profile() {
  return (
        <div>
          <h2 className="TitleHome">CMMS</h2>
            <div className="homeItems">
              <div className="imgprofile">
                  <Person className="IconProfile"/>
              </div>
              <div className="profileuser">
                    <h3 className="nameprofile">Ahmad Septian</h3>
                    <p>23424234</p>
                    <p>Team Member GA</p>
              </div>  
        </div>
          
          <Floating/>
        </div>
  )
}
