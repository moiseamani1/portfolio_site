import { Box, Fade, Grid, Tab, Tabs, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react'
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
    };
  }



const Experience = () => {
    const classes=useStyles();
    const [value, setValue] = useState(0);
    let [active, setActive] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className={classes.content}>
<VizSensor
            onChange={(isVisible) => {
                if(isVisible){
                 setActive(isVisible);   
                }
                
            }}
        >
<Fade in={active} timeout={2000}>
           <Grid container justify="center" >

<Grid item xs={12} sm={12} md={6} lg={6}>
    <Typography className={classes.title} variant="h2" gutterBottom><span className={classes.nav_numbers}> &#8545;. </span>Experience</Typography>

    <Box
      sx={{ flexGrow: 1, bgcolor: '#ffffff00', display: 'flex', height: 380,padding:0 }}
    >
        <CustomTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <CustomTab label="IRCC" {...a11yProps(0)} />
        <CustomTab label="CBSA" {...a11yProps(1)} />
        <CustomTab label="GAC" {...a11yProps(2)} />
        <CustomTab label="TBS" {...a11yProps(3)} />
        <CustomTab label="Airbnb" {...a11yProps(4)} />
      </CustomTabs>



      <TabPanel value={value} index={0}>

      <div className={classes.body}>
      <p className={classes.jobTitle}>Application Programmer/Analyst <span className={classes.location}>@IMMIGRATION, REFUGEES AND CITIZENSHIP CANADA</span></p>
            <p>September 2021 - Present | Ottawa, ON</p>
            <ul>
            <li>Planned, tracked progress and collaborated on projects using Azure DevOps</li>
            <li>Extracted and summarized requirements from change requests as part of our impact assessment and costing process</li>
            </ul>
        </div>
      </TabPanel>



      <TabPanel value={value} index={1}>
      <div className={classes.body}>
      <p className={classes.jobTitle}>Programmer <span className={classes.location}>@CANADA BORDER SERVICES AGENCY</span></p>
            <p>May 2020 - September 2021 | Ottawa, ON</p>
            <ul>
            <li>Supported and tested Java EE postal web application</li>
<li>Ran SQL queries to update our databases across different environments</li>
<li>Implemented new application features based on client’s requirements using SDLC</li>
            </ul>
            <p className={classes.jobTitle}>Junior Programmer &#40;Co-op&#41; <span className={classes.location}>@CANADA BORDER SERVICES AGENCY</span></p>
            <p>September 2019 – December 2019 | Ottawa, ON</p>
            <ul>
            <li> Developed, tested and implemented new UI application features for our team’s testing tools</li>
<li>Applied working knowledge of object-oriented programming to debug Java source code</li>
            </ul>
</div>
      </TabPanel>


      <TabPanel value={value} index={2}>
      <div className={classes.body}>
      <p className={classes.jobTitle}>Software Quality Assurance Analyst &#40;Co-op&#41; <span className={classes.location}>@GLOBAL AFFAIRS CANADA</span></p>
            <p>September 2019 – December 2019 | Ottawa, ON</p>
            <ul>
            <li> Reviewed, analyzed and created test cases for end-to-end testing</li>
<li>Identified automatable business processes and implemented their corresponding test scripts in Eclipse</li>
<li>Provided project feedback, progress and updates on Trello</li>
<li>Redesigned an automation framework to accommodate UAT test cases</li>  
            </ul>
            </div>
      </TabPanel>




      <TabPanel value={value} index={3}>
      <div className={classes.body}>
      <p className={classes.jobTitle}>Open Government Project Officer &#40;Co-op&#41; <span className={classes.location}>@TREASURY BOARD OF CANADA SECRETARIAT</span></p>
            <p>September 2019 – December 2019 | Ottawa, ON</p>
            <ul>
                <li>Researched on data visualization tools such as Plotly and RawGraphs</li>
<li>Reported and troubleshot our system’s bugs using JIRA</li>
<li>Logged data metrics to better visualize our portal’s efficacity and user engagement</li>

            </ul>
            </div>
      </TabPanel>


      <TabPanel value={value} index={4}>
      <div className={classes.body}>
      <p className={classes.jobTitle}>Airbnb Host <span className={classes.location}>@AIRBNB</span></p>
            <p>August 2016 – Present | Ottawa, ON</p>
            <ul>
                <li>Ensured that guests were satisfied with their stay by encouraging feedback and integrating comments</li>
<li>Created high-quality client-host relationships by writing welcome documents with local amenities and services</li>
<li>Used entrepreneurial skills to promote the offered services and polish website descriptions</li>
            </ul>
            
            </div>
      </TabPanel>
    </Box>




    
            

           

            


            


            

            
            
            </Grid>


</Grid>


</Fade>
</VizSensor>


 
         

        </div>
    )
}

export default Experience
