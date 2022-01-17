import React from 'react'
import useStyles from './styles';
import { Button, CardMedia, createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography} from '@material-ui/core'
import { Email, GitHub, LinkedIn } from '@material-ui/icons';

const Home = () => {
    const classes=useStyles();
    let theme = createTheme();
    theme = responsiveFontSizes(theme);



    return (
        <main className={classes.content}>
        <div className={classes.toolbar}></div>
  
               <Grid  container justify="center" >
        <Grid item xs={12} sm={12} md={8} lg={6}>

        <div className={classes.introSection}>  
        <ThemeProvider theme={theme}>
          <p>
          <Typography variant="h5"><span className={classes.greeting}>HI, I'M MOISE.<br/></span></Typography>
        <Typography variant="h4"><span className={classes.intro}>I'm a bilingual UOttawa computer engineer currently working as an Application Programmer at IRCC. I focus on producing clean code taking into account time and space complexities. </span>
       </Typography>
         </p>  
        </ThemeProvider>  
        
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
        <LinkedIn></LinkedIn>
        <GitHub></GitHub>
        <Email></Email> 
        </div>
        
       
        </Grid>
        </div>
       


        </Grid>
        
          

        </Grid>
            
        
     

        





        
    </main>)
}

export default Home
