import { Button, createTheme, Grid, responsiveFontSizes, Typography,ThemeProvider } from '@material-ui/core'
import { GitHub, LinkedIn, MailOutlined } from '@material-ui/icons';
import React from 'react'
import useStyles from './styles';

const Contact = () => {
    const classes=useStyles();
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <>
        <a class={classes.anchor} id="mobileContact"></a>
        <div className={classes.content} id={"contact"}>
            <ThemeProvider theme={theme}>
<Grid container justify="center" >   
<Grid item xs={12} sm={12} md={6} lg={6}>
<Typography className={classes.title} variant="h2" gutterBottom><span className={classes.nav_numbers}>&#8547;.</span> Contact Me</Typography>

<Grid className={classes.contactsItems}>
<MailOutlined></MailOutlined>
    <Typography className={classes.contacts}>moise.amani@gmail.com</Typography>
</Grid>
<Grid className={classes.contactsItems}>
<LinkedIn></LinkedIn>
    <Typography className={classes.contacts} >linkedin.com/in/moise-amani</Typography>
</Grid>
<Grid className={classes.contactsItems}>
<GitHub></GitHub>
    <Typography className={classes.contacts}>github.com/moiseamani1</Typography>
</Grid>
</Grid>
</Grid>
</ThemeProvider>
            
        </div></>
    )
}

export default Contact