import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, Typography, Avatar, Button} from '@material-ui/core'
import useStyles from './styles'
// import memories from '../../images/memories.png';
import {Link} from 'react-router-dom'


const NavBar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const classes = useStyles()

    return(
    <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.brandContainer} >
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Let Art Speak</Typography>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
    </div>
    <Toolbar className={classes.toolbar}>
        {
            user ? (
                <div className={classes.profile}>
                    <Avatar classes={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.chartAt[0]}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contianed" className={classes.logout} color="secondary">Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary" >Sign In</Button>
            )
        }
    </Toolbar>
  </AppBar>
    )
}

export default NavBar