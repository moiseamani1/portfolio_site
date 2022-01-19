import { Grid, Typography } from '@material-ui/core'
import { GitHub, LinkedIn, MailOutlined } from '@material-ui/icons';
import React from 'react'
import useStyles from './styles';

const Contact = () => {
    const classes=useStyles();
  

    return (
        <>
        <a class={classes.anchor} id="mobileContact"></a>
        <div className={classes.content} id={"contact"}>
         
<Grid container justify="center" >   
<Grid item xs={12} sm={12} md={6} lg={6}>
<Typography className={classes.title} variant="h2" gutterBottom><span className={classes.nav_numbers}>&#8547;.</span> Contact Me</Typography>

<Grid className={classes.contactsItems}>
<MailOutlined></MailOutlined>
    <Typography variant="body1" ><a className={classes.contacts} href='mailto:moise.amani@gmail.com' target="_blank" rel="noreferrer">moise.amani@gmail.com</a></Typography>
</Grid>
<Grid className={classes.contactsItems}>
<LinkedIn></LinkedIn>
    <Typography variant="body1"><a className={classes.contacts} href='https://www.linkedin.com/in/moise-amani/' target={"_blank"} rel="noreferrer">linkedin.com/in/moise-amani</a></Typography>
</Grid>
<Grid className={classes.contactsItems}>
<GitHub></GitHub>
    <Typography variant="body1"><a className={classes.contacts}href='https://github.com/moiseamani1' target={"_blank"} rel="noreferrer">github.com/moiseamani1</a></Typography>
</Grid>
</Grid>
</Grid>

<Grid className={classes.designedCreds} container justify="center" >  
<Typography variant="subtitle1"> <a  className={classes.designedBy} href='https://github.com/moiseamani1/portfolio_site' target={"_blank"} rel="noreferrer">Designed &amp; Built by Moise Amani</a></Typography>
</Grid>


            
        </div></>
    )
}

export default Contact
