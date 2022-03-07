import React from 'react'
import './User.css'
import { Button,Input,styled } from '@mui/material';
import { Edit, ArrowBack } from '@mui/icons-material';
import account from "../../../../components/Assets/account.png"


export default function User() {
  return (
      <div className='UserContainer'>
        <Button className='Bt-Back' variant="contained" href="/" startIcon={<ArrowBack />}>
            Back
        </Button>
          
          <div className="UserTitle">
            <h3>USER PROFILE</h3>
          </div>

          <div className="ImgUser">
              <img src={account} alt="account" />
              <label htmlFor="contained-button-file">
                <Input accept="image/*" style={{ display: 'none' }} id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span" className='Bt-Change'>
                    Change
                  </Button>
            </label>
          </div>
           
            

          <div className="ProfileUser">
              <h4>Name :</h4>
              <p>Ahmad Septian</p>
          </div>

          <div className="ProfileUser">
              <h4>Username :</h4>
              <p>Ahmad</p>
          </div>

          <div className="ProfileUser">
              <h4>Email :</h4>
              <p>Ahmad@linkra.id</p>
          </div>

          <div className="ProfileUser">
              <h4>Phone :</h4>
              <p>085155123714</p>
          </div>

          <div className="ProfileUser">
              <h4>Status :</h4>
              <div class="StatusUser">Active</div>
          </div>

          <div className="Bt-Profile">
            <Button className='Bt-Edit' variant="contained" href="/Edit" startIcon={<Edit />}>
                Edit Profile
            </Button>
          </div>
            
    </div>
  )
}
