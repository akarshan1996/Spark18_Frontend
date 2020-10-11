import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { appBarStyles } from './appBar.style';

const NavBar = () => {
    const classes = appBarStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='white' >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        LOGO
                    </Typography>
                    <Button color="inherit" size="medium">Home</Button>
                    <Button color="inherit" size="medium">My Portfolio</Button>
                    <Button color="inherit" size="medium">Clients</Button>
                    <Button color="inherit" size="large" className={classes.getInTouch}>
                        Get In Touch
                        </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;