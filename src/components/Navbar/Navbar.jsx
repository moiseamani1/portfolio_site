import {MenuItem, Toolbar, Typography,CssBaseline, Slide, AppBar, useScrollTrigger, Button, IconButton, Drawer } from '@material-ui/core';
import { CloudDownload, Menu } from '@material-ui/icons';

import React, { useEffect, useState } from 'react'
import $ from 'jquery';

import useStyles from './styles';
const Navbar = (props) => {
    const classes=useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 0,
        target: props.window ? window() : undefined
      });
   
    



      const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
      })
    const { mobileView,drawerOpen  } = state;
    const headersData = [
      {
        label: "About Me",
        href: "#mobileAbout",
      },
      {
        label: "Experience",
        href: "#mobileExperience",
      },
      {
        label: "Portfolio",
        href: "#mobilePortfolio",
      },
      {
        label: "Contact",
        href: "#mobileContact",
      },
      
    ];

    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
    }, []);

   
    const handleDrawerClick=(href)=>{
      handleDrawerClose();
      $('li.h5').find('a').click(function(){
        // var $href = $(this).attr('href');
        var $anchor = $(href).offset();
        var number = $anchor.top;
        window.scrollTo(0,-300);
    
       
        return false;
    }
    
    
    );

    
   
      
      

    }

    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
  setState((prevState) => ({ ...prevState, drawerOpen: false }));


    const getDrawerChoices = () => (

      <>
       {headersData.map(({ label, href }) =>(
         

<div onClick={()=>handleDrawerClick(href)} key={label}  >
 <MenuItem className={classes.mobileMenuItem}><Typography variant='h5'>
   <a className={classes.mobileLinks} href={href}>{label}</a></Typography></MenuItem>
</div> 



        )
        )
        }
   <MenuItem className={classes.mobileMenuItem}><Button startIcon={<CloudDownload></CloudDownload>}><a
 href={process.env.PUBLIC_URL + "resume/CV__Spring2022.pdf"}
 download={"Moise Resume.pdf"}
 className={classes.resumeLink}
>
   Resume
</a></Button></MenuItem>     
        </>

      
      )
   


    const displayDesktop=()=>(
    <>
        <CssBaseline />
        <Slide appear={true} direction="down" in={!trigger}>
        <AppBar>
        <Toolbar className={classes.toolbar}>


  <Button className={classes.navButton} startIcon={<CloudDownload></CloudDownload>}variant='outlined'><a 
  className={classes.resumeLink}
  href={process.env.PUBLIC_URL + "resume/CV__Spring2022.pdf"}
  download={"Moise Resume.pdf"}
>
    Resume
</a></Button>
    

    <div className={classes.grow}></div> 
   
    <Typography variant="h6" className={classes.nav_links} color="inherit" >
   <a  className={classes.nav_links_text} href="#about"><span className={classes.nav_numbers}>&#8544;. </span>&nbsp; About Me</a> 
    </Typography>
    <Typography variant="h6" className={classes.nav_links} color="inherit" >
    <a  className={classes.nav_links_text} href="#experience"><span className={classes.nav_numbers}>&#8545;. </span> &nbsp; Experience</a>
    </Typography>
    <Typography variant="h6" className={classes.nav_links} color="inherit" >
    <a  className={classes.nav_links_text} href="#portfolio"><span className={classes.nav_numbers}>&#8546;. </span> &nbsp; Portfolio</a>
    </Typography>

    <Typography  variant="h6" className={classes.nav_links} color="inherit" >
    <a className={classes.nav_links_text} href="#contact"><span className={classes.nav_numbers}>&#8547;.</span> &nbsp; Contact</a>
    </Typography>

   
    

   

    
  


</Toolbar></AppBar></Slide></>)


    const displayMobile = () => {
      
    


    
      return (
        <AppBar position="fixed"  color="inherit">
        <Toolbar className={classes.toolbarMobile}>
          <IconButton
            {...{
              edge: "start",
              className:classes.menuButton,
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen
            }
          }
          >
            <Menu />
          </IconButton>
          <Drawer
        {...{
          anchor: "top",
          open: drawerOpen,
          onClose: handleDrawerClose,
        }}
      >
        <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
      </Drawer>


          
   <Typography variant='h4' style={{color:"white"}}>M.A.</Typography>
   


  <div className={classes.grow}></div>


  </Toolbar>
  </AppBar>
      );
    
}
     
    return (
      <>{mobileView ? displayMobile() : displayDesktop()}</>
   
    )
}

export default Navbar
