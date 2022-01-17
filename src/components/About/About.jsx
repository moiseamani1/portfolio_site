import { createTheme, Fade, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import useStyles from './styles';
import VizSensor from 'react-visibility-sensor';


const About = () => {
    const classes=useStyles();
    let [active, setActive] = useState(false);
    let theme = createTheme();
    theme = responsiveFontSizes(theme);



    return (
        <>
        <a class={classes.anchor} id="mobileAbout"></a>
        <div className={classes.content} id={'about'} >
<VizSensor
            onChange={(isVisible) => {
                if(isVisible){
                 setActive(isVisible);   
                }
                
            }}
        >
<Fade in={active} timeout={2000}>
<Grid container justify="center">

<Grid item xs={12} sm={12} md={8} lg={6}>
<ThemeProvider theme={theme}>
<Typography className={classes.title} variant="h2"gutterBottom><span className={classes.nav_numbers}> &#8544;.</span> About Me</Typography>
            <div className={classes.body}>

            <Typography variant='body1'>Hello, I am Moise &#40;He/him&#41;. I am creative computer engineer that likes to build applications. I was first introduced to programming in 2015 and ever since I became eager to learn more. 
            I see programming as a way to solve problems and make life more enjoyable.
            </Typography>
            <br/>
            <Typography variant='body1'>
            I definitely consider myself to be a self-starter and an innovative individual. Besides working on different tech teams in the goverment of Canada, 
            I have also worked on a few fun personal projects. Recently, I dove into the world of Machine Learning and Artificial Intelligence. I am intrigued by how these can be used 
            to facilitate some of our daily activities.            
            </Typography>
            <br/>
            <Typography variant="body1">When I do not initiate  tech-talk, you can find me talking about stocks. I love investing and financial education. I feel like a lot of individuals 
                neglect their financial education  as, unfortunately, it is not taught thouroughly in our traditional education system.
            </Typography>
            <br/>
            <Typography variant="body1">Today, I am an Application Programmer at IRCC on their Enterprise data warehouse team. I help them with maintaining and distributing their data.</Typography>
            <br/>
            <Typography variant="body1">
            Here are some of my strengths:
        
            </Typography>
            <ul className={classes.list}>
             <li><span className={classes.listtext}>Java</span></li>
             <li><span className={classes.listtext}>Python</span></li>
             <li><span className={classes.listtext}>Android</span></li>
             <li><span className={classes.listtext}>React</span></li>
             <li><span className={classes.listtext}>Firebase</span></li>   
            <li><span className={classes.listtext}>JavaScript &#40;ES6+&#41;</span></li>
            </ul>
            </div>
</ThemeProvider>

</Grid>


</Grid>


</Fade>

        </VizSensor>


            

            
        </div></>
    )
}

export default About
