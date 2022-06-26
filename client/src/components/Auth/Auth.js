import React, {useState} from 'react'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import Icon from "./icon"   

import {Avatar, Button, Paper, Grid, Typography, Container, } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import Input from './Input'

import useStyles from './styles'

function Auth() {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()

    const [isSignup, setIsSignup] = useState(false)

    const handleSubmit = () => {}

    const handleChange = () => {}

    const switchMode = () => {
        setIsSignup((pervisSignup) => !pervisSignup)
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({type : "AUTH", data : {result, token}})
        } catch(err) {
            console.log(err)
        }
    }

    const googleFailure = (err) => {
        console.log("Google Sign In was Unsuccessful. Try Again Later")
        console.log(err)
    }

  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3} >
            <Avatar className={classes.Avatar} >
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />                                
                            </>
                        )
                    }
                    <Input name="Email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin 
                    clientId="127339313005-t522m8l0dg0m7deks8gkm9padm3d3l25.apps.googleusercontent.com"
                    render={(renderProps) => 
                        (
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon/>} 
                                variant="contained"
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single-host-origin"
                                >
                                    Google Sign In
                                </Button>
                        )
                    }
                />
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {
                                isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"
                            }
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>

    </Container>
  )
}

export default Auth
