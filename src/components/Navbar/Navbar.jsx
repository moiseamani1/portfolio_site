import { createTheme, Icon, Toolbar, Typography,ThemeProvider, CssBaseline, Slide, AppBar, useScrollTrigger, Button, MuiThemeProvider } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';

import React from 'react'
import { Link } from 'react-router-dom';
import useStyles from './styles';
const Navbar = (props) => {
    const classes=useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 0,
        target: props.window ? window() : undefined
      });
   
    const theme = createTheme({
        typography: {
          // In Chinese and Japanese the characters are usually larger,
          // so a smaller fontsize may be appropriate.
          
          fontFamily: ["Open Sans", "sans-serif"].join(",")
        },
      });
     
    return (
        <>
        <CssBaseline />
        <Slide appear={true} direction="down" in={!trigger}>
        <AppBar>
        <Toolbar className={classes.toolbar}>


  <Button className={classes.navButton} startIcon={<CloudDownload></CloudDownload>}variant='outlined'>Resume</Button>
    

    <div className={classes.grow}></div> 
    <ThemeProvider theme={theme}> 
    <Typography variant="h6" className={classes.nav_links} color="inherit" component={Link} to="/about">
    <span className={classes.nav_numbers}>&#8544;. </span>&nbsp; About Me
    </Typography>
    <Typography variant="h6" className={classes.nav_links} color="inherit" component={Link} to="/portfolio">
    <span className={classes.nav_numbers}>&#8545;. </span> &nbsp; Experience
    </Typography>
    <Typography variant="h6" className={classes.nav_links} color="inherit" component={Link} to="/portfolio">
    <span className={classes.nav_numbers}>&#8546;. </span> &nbsp; Portfolio
    </Typography>

    <Typography  variant="h6" className={classes.nav_links} color="inherit" component={Link} to="/contact">
   <span className={classes.nav_numbers}>&#8547;.</span> &nbsp; Contact
    </Typography>
    </ThemeProvider>
   
    

   

    
  


</Toolbar></AppBar></Slide></>
    )
}

export default Navbar
