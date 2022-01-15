import { Button, Grid, Typography } from '@material-ui/core'
import { GitHub, LinkedIn, MailOutlined } from '@material-ui/icons';
import React from 'react'
import useStyles from './styles';

const Contact = () => {
    const classes=useStyles();
    return (
        <div className={classes.content}>
<Grid container justify="center" >
<Grid item xs={12} sm={12} md={6} lg={6}>
<Typography className={classes.title} variant="h2" gutterBottom><span className={classes.nav_numbers}>&#8547;.</span> Contact Me</Typography>

<Grid style={{ display: "flex" }}>
<MailOutlined></MailOutlined>
    <Typography className={classes.contacts}>moise.amani@gmail.com</Typography>
</Grid>
<Grid style={{ display: "flex" }}>
<LinkedIn></LinkedIn>
    <Typography className={classes.contacts} >linkedin.com/in/moise-amani</Typography>
</Grid>
<Grid style={{ display: "flex" }}>
<GitHub></GitHub>
    <Typography className={classes.contacts}>github.com/moiseamani1</Typography>
</Grid>
</Grid>
</Grid>

            
        </div>
    )
}

export default Contact
