import React from 'react'
import useStyles from './styles';
import { Button, CardMedia, Grid, Typography} from '@material-ui/core'
import { Email, GitHub, LinkedIn } from '@material-ui/icons';

const Home = () => {
    const classes=useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Grid container justify={"center"}>
            <Grid item xs={12} sm={12} md={8} lg={8}>   
               <Grid  container justify="center" >
        <Grid item xs={12} sm={12} md={8} lg={8}>

        <div className={classes.introSection}>    
        <p>
        <span className={classes.greeting}>HI, I'M MOISE.<br/></span>
        <span className={classes.intro}>I'm a bilingual UOttawa computer engineer currently working as an Application Programmer at IRCC. I focus on producing clean code taking into account time and space complexities. </span>
        </p>
        </div>
    <div>
       
    </div>
    
  
        </Grid>
<Grid item   xs={12} sm={12} md={4} lg={4}  >
       
        <div className={classes.center}>
             <img  alt= "profile pic" className={classes.media} src={'/images/profile_pic.png'}  />
             <Grid container justify="center" >
        <div className={classes.social}>
        <LinkedIn></LinkedIn>
        <GitHub></GitHub>
        <Email></Email>
        
        </div>
        
       
        </Grid>
        </div>
       


        </Grid>
        
          

        </Grid>
            </Grid>
        </Grid>
     

        





        
    </main>)
}

export default Home
