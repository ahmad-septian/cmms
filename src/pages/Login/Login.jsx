import { Grid,Paper, TextField, Button } from '@mui/material';
import React from 'react'
import './Login.css';
import logo from "./Logo2.png"

export default function Login() {
  return (
    <div className="Login">
        <Grid>
            <Paper elevation={10} className="PapperStyle">
                  <Grid align="center">
                    <h2 className="TitleLogin">CMMS</h2>  
                      
                    <div className="IconLogo">
                        <img src={logo} alt="Logo"/>
                    </div>
                   
                  </Grid>

                  <div className="InputStyle">
                    <TextField className="FormStyle" label="Username" placeholder='Username' fullWidth required/>  
                    <TextField label="Password" placeholder='Password' type='password' fullWidth required/>
                    <Button className="btn-Style" type='submit' variant='contained' fullWidth>Login</Button>
                  </div>

                  
            </Paper>      
        </Grid>
    </div>
  )
}
