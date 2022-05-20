import React from 'react'
import useStyles from './styles';
import { Grid, Typography} from '@material-ui/core'
import { Email, GitHub, LinkedIn } from '@material-ui/icons';

const Home = () => {
    const classes=useStyles();


     

    return (
        <main className={classes.content}>
        <div className={classes.toolbar}></div>
  
               <Grid  container justify="center" >
        <Grid item xs={12} sm={12} md={8} lg={6}>

        <div className={classes.introSection}>  
        
          <p>
          <Typography variant="h5"><span className={classes.greeting}>HI, I'M MOISE.<br/></span></Typography>
        <Typography variant="h4"><span className={classes.intro}>I'm a bilingual (en/fr) Computer Engineer that graduated from UOttawa.
        I have {new Date().getFullYear()-2015}+ years of software development experience. I'm currently working for <a href='https://www.canada.ca/en/immigration-refugees-citizenship.html' target="_blank" className={classes.location} rel="noreferrer">IRCC.</a>
        </span>
       </Typography>
         </p>  
        
        
        </div>
    <div>
       
    </div>
    
  
        </Grid>
<Grid item   xs={12} sm={12} md={4} lg={4}  >
       
        <div className={classes.center}>
            <div className={classes.profileImage}>
<img  alt= "profile pic" className={classes.media} src={'/images/profile_pic.png'}  />
            </div>
             
    
        <Grid container justify="center" >
        <div className={classes.social}>
        <a href='https://www.linkedin.com/in/moise-amani/' target="_blank" rel="noreferrer"><LinkedIn></LinkedIn></a>
        <a href='https://github.com/moiseamani1' target="_blank" rel="noreferrer"><GitHub></GitHub></a>
        <a href='mailto:moise.amani@gmail.com' target="_blank" rel="noreferrer"><Email></Email></a> 
        </div>
        
       
        </Grid>
        </div>
       


        </Grid>
        
          

        </Grid>
            
        
     

        





        
    </main>)
}

export default Home
