import { Box, createTheme, Fade, Grid, responsiveFontSizes, Tab, Tabs, Typography,ThemeProvider, ListItemText } from '@material-ui/core'
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
// import * as React from 'react';
import useStyles from './styles';
import VizSensor from 'react-visibility-sensor';


const CustomTabs = styled(Tabs)({
  
    '& .MuiTabs-indicator': {
      backgroundColor: '#DDB450',
    },
  });

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    width: 0,
    // color: 'rgba(0, 0, 0, 0.85)',
    color:"#BEBEBE",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#DDB450',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#DDB450',
      fontWeight: 'bold',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));






const TabPanel=(props)=> {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        // id={`simple-tabpanel--${index}`}
        // aria-labelledby={`simple-tab-${index}`}

        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3,padding:0,paddingLeft:20 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }



TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

 const a11yProps=(index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
      // id: `simple-tabpanel-${index}`,
      // 'aria-controls': `simple-tab-${index}`,
    };
  }



const Experience = () => {
    const classes=useStyles();
    const [value, setValue] = useState(0);
    let [active, setActive] = useState(false);

    const [state, setState] = useState({
      mobileView: false
    })
    const { mobileView } = state;

    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
    }, []);




    const handleChange = (event, newValue) => {
        setValue(newValue);
      };



    return (
      <>
      <a class={classes.anchor} id="mobileExperience"></a>
        <div className={classes.content} id={"experience"}>
<VizSensor
partialVisibility

            onChange={(isVisible) => {
                if(isVisible){
                 setActive(isVisible);   
                }
                
                
            }}
        >
<Fade in={active} timeout={2000}>
           <Grid container justify="center" >

<Grid item xs={12} sm={12} md={8} lg={6}>

    <Typography className={classes.title} variant="h2" gutterBottom><span className={classes.nav_numbers}> &#8545;. </span>Experience</Typography>

</Grid>
<Grid item xs={12} sm={12} md={12} lg={8}>

    <Box
    sx={{height: 380,display:mobileView ? "block":"flex"}}
      // sx={{ flexGrow: 1, bgcolor: '#ffffff00', display: 'flex', height: 380,padding:0 }}
    >
        <CustomTabs
        orientation={mobileView?"horizontal":"vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', }}
        
      >
        <CustomTab label="IRCC" {...a11yProps(0)} />
        <CustomTab label="CBSA" {...a11yProps(1)} />
        <CustomTab label="GAC" {...a11yProps(2)} />
        <CustomTab label="TBS" {...a11yProps(3)} />
        <CustomTab label="Airbnb" {...a11yProps(4)} />
      </CustomTabs>


 
      <TabPanel value={value} index={0}>

      <div className={classes.body}>
      <Typography variant='subtitle1' className={classes.jobTitle}>Application Programmer/Analyst <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" className={classes.location}>@IMMIGRATION, REFUGEES AND CITIZENSHIP CANADA</a></Typography>
            <Typography variant='subtitle2'>September 2021 - Present | Ottawa, ON</Typography>
            <ul>
            <li><Typography variant='body1'>Planned, tracked progress and collaborated on projects using Azure DevOps</Typography></li>
            <li><Typography variant='body1'>Extracted and summarized requirements from change requests as part of our impact assessment and costing process</Typography></li>
            </ul>
        </div>
      </TabPanel>



      <TabPanel value={value} index={1}>
      <div className={classes.body}>
      <Typography variant='subtitle1' className={classes.jobTitle}>Programmer <a  href='https://www.cbsa-asfc.gc.ca/menu-eng.html' target={"_blank"} className={classes.location}>@CANADA BORDER SERVICES AGENCY</a></Typography>
            <Typography variant='subtitle2'>May 2020 - September 2021 | Ottawa, ON</Typography>
            <ul>
            <li><Typography variant='body1'>Supported and tested Java EE postal web application</Typography></li>
<li><Typography variant='body1'>Ran SQL queries to update our databases across different environments</Typography></li>
<li><Typography variant='body1'>Implemented new application features based on client’s requirements using SDLC</Typography></li>
            </ul>
            <Typography variant='subtitle1' className={classes.jobTitle}>Junior Programmer &#40;Co-op&#41; <a href='https://www.cbsa-asfc.gc.ca/menu-eng.html' target={"_blank"} className={classes.location}>@CANADA BORDER SERVICES AGENCY</a></Typography>
            <Typography variant='subtitle2'>September 2019 – December 2019 | Ottawa, ON</Typography>
            <ul>
            <li><Typography variant='body1'> Developed, tested and implemented new UI application features for our team’s testing tools</Typography></li>
<li><Typography variant='body1'>Applied working knowledge of object-oriented programming to debug Java source code</Typography></li>
            </ul>
</div>
      </TabPanel>


      <TabPanel value={value} index={2}>
      <div className={classes.body}>
      <Typography variant='subtitle1' className={classes.jobTitle}>Software Quality Assurance Analyst &#40;Co-op&#41; <a href='https://www.international.gc.ca/global-affairs-affaires-mondiales/home-accueil.aspx?lang=eng' target="_blank" className={classes.location}>@GLOBAL AFFAIRS CANADA</a></Typography>
            <Typography variant='subtitle2'>January 2019 – August 2019 | Gatineau, QC</Typography>
            <ul>
            <li><Typography variant='body1'>Reviewed, analyzed and created test cases for end-to-end testing</Typography></li>
<li><Typography variant='body1'>Identified automatable business processes and implemented their corresponding test scripts in Eclipse</Typography></li>
<li><Typography variant='body1'>Provided project feedback, progress and updates on Trello</Typography></li>
<li><Typography variant='body1'>Redesigned an automation framework to accommodate UAT test cases</Typography></li>  
            </ul>
            </div>
      </TabPanel>




      <TabPanel value={value} index={3}>
      <div className={classes.body}>
      <Typography variant='subtitle1' className={classes.jobTitle}>Open Government Project Officer &#40;Co-op&#41; <a href='https://www.canada.ca/en/treasury-board-secretariat.html' target={"_blank"} className={classes.location}>@TREASURY BOARD OF CANADA SECRETARIAT</a></Typography>
            <Typography variant='subtitle2'>May 2018 – August 2018 | Ottawa, ON</Typography>
            <ul>
                <li><Typography variant='body1'>Researched on data visualization tools such as Plotly and RawGraphs</Typography></li>
<li><Typography variant='body1'>Reported and troubleshot our system’s bugs using JIRA</Typography></li>
<li><Typography variant='body1'>Logged data metrics to better visualize our portal’s efficacity and user engagement</Typography></li>

            </ul>
            </div>
      </TabPanel>


      <TabPanel value={value} index={4}>
      <div className={classes.body}>
      <Typography variant='subtitle1' className={classes.jobTitle}>Airbnb Host <a href='https://www.airbnb.ca/' target={"_blank"} className={classes.location}>@AIRBNB</a></Typography>
            <Typography variant='subtitle2'>August 2016 – Present | Ottawa, ON</Typography>
            <ul>
                <li><Typography variant='body1'>Ensured that guests were satisfied with their stay by encouraging feedback and integrating comments</Typography></li>
<li><Typography variant='body1'>Created high-quality client-host relationships by writing welcome documents with local amenities and services</Typography></li>
<li><Typography variant='body1'>Used entrepreneurial skills to promote the offered services and polish website descriptions</Typography></li>
            </ul>
            
            </div>
      </TabPanel>
      
    </Box>




    
            

           

            


            


            

            
            
            </Grid>


</Grid>


</Fade>
</VizSensor>


 
         

        </div></>
    )
}

export default Experience
