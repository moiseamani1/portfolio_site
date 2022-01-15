import { Fade, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { GitHub, Link } from '@material-ui/icons';
import { styled } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import VizSensor from 'react-visibility-sensor';



const Portfolio = () => {


  const classes = useStyles();

  const linkHandler = (link) => {
    window.open(link, "_blank");
  }
  const other = [{
    "title": "RISC Processor",
    "description": "I have built a structural VHDL implementation of a single-cycle reduced instruction set computer (RISC) processor.",
    "github": "https://github.com/moiseamani1/RISC-Processor",

  },
  {
    "title": "Flowerz",
    "description": "Built a simple flutter demo mobile application(Android/IOS) for listing flowers. This is just a hypothetical client-side to a complete system.",
    "github": "https://github.com/moiseamani1/shop_app",

  },
  {
    "title": "ML sandbox",
    "description": "A sandbox where I used Youtube's API, Mongo and Node scheduler.",
    "github": "https://github.com/moiseamani1/ml-sandbox",

  },

  ]


  const projects = [{
    "id": 0,
    "title": "Sentence Grouper",
    "description": "NLP tool used for this this and that. with all of these great features",
    "img": "/images/projects/sentence_grouper.jpg",
    "github": "https://github.com/moiseamani1/sentence-grouper",
    "link": "http://www.sentencegrouper.ca",
    "stack": ["Semantic UI", "ExpressJs", "NodeJs", "EJS", "TensorFlowJs","Heroku"]
  },
  {
    "id": 1,
    "title": "Inovision",
    "description": "NLP tool used for this this and that. with all of these great features",
    "img": "/images/projects/Inovision.jpg",
    "github": "https://github.com/moiseamani1/Inovision_Android_App",
    "stack": ["Java", "Python","Firebase"]

  },
  {
    "id": 2, "title": "Essence",
    "description": "NLP tool used for this this and that. with all of these great features",
    "img": "/images/projects/Essence.jpg",
    "github": "https://github.com/moiseamani1/react_store_pg",
    "stack": ["ReactJs", "Material UI", "CommerceJs", "Mailchimp API", "Square API"]

  },
  {
    "id": 3, "title": "Pupson's Bay",
    "description": "NLP tool used for this this and that. with all of these great features",
    "img": "/images/projects/pupson.jpg",
    "github": "https://github.com/moiseamani1/react_e-commerce_website",
    "stack": ["MongoDB", "Express", "ReactJs", "NodeJs",
      "Paypal API", "Google Maps API",]

  }

  ]
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#BEBEBE",
    borderColor: "#BEBEBE",
    '&:hover': {
      color: "orange",
      borderColor: "orange",
    },
  }));




  let [active, setActive] = useState(false);

  let [activeProject, setActiveProject] = useState([])

  return (
    <div className={classes.content}>
      {/* <div className={classes.titleDiv}></div> */}

      <VizSensor
        onChange={(isVisible) => {
          if (isVisible) {
            setActive(isVisible);
          }

        }}
      >
        <Fade in={active} timeout={2000}>

          <Grid container justify="center">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography className={classes.title} variant="h2" gutterBottom><span className={classes.nav_numbers}>&#8546;. </span> Portfolio</Typography>
            </Grid>
          </Grid>
        </Fade>

      </VizSensor>




      <Grid container justifyContent='center'>
        <Grid item xs={12} sm={12} md={8} lg={8}>

          {projects.map((item, val) => (

            <VizSensor
              onChange={(isVisible) => {
                if (isVisible) {
                  setActiveProject(prevArray => {
                    if (!prevArray.includes(val)) {
                      return [...prevArray, val];
                    } else {
                      return [...prevArray]
                    }
                  });
                }

              }}
            >
              <Fade in={activeProject.includes(item.id)} timeout={1000}>
                <Grid container className={classes.projectCard}>
                  <Grid item className={classes.projectCardContent} xs={12} sm={12} md={12} lg={7}>
                    <Typography className={classes.projectName} variant="h3" gutterBottom>{item.title}</Typography>
                    <Typography className={classes.body} variant="body" gutterBottom>{item.description}</Typography>

                    

                    <List className={classes.techStack}>
                      {item.stack.map(tech =>
                        <ListItem className={classes.techStackItem}><ListItemText>{tech}</ListItemText></ListItem>
                      )}

                    </List>

<div className={classes.buttons}>
                      <span className={classes.gitSpace}>
                        <ColorButton onClick={() => linkHandler(item.github)} variant="outlined" startIcon={<GitHub></GitHub>}>Learn more</ColorButton></span>
                      {item.link ?
                        <ColorButton onClick={() => linkHandler(item.link)} variant="outlined" startIcon={<Link ></Link>}>View link</ColorButton> :
                        <></>}

                    </div>




                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={5}>
                    <CardMedia
                      component="img"
                      className={classes.project_img}
                      image={item.img}
                      alt="project screenshot"
                    />
                  </Grid>

                </Grid>
              </Fade>
            </VizSensor>
          ))}

        </Grid>
      </Grid>

      <Grid container justifyContent={"center"}>
        <div className={classes.titleDiv}>
          <Typography className={classes.otherTitle} variant="h3" gutterBottom>Other Projects</Typography>

        </div>



        {other.map((item) => (<Grid className={classes.otherProjectsItems} item md={3}>

          <Card>
            <CardContent>
              <CardMedia
                component="img"
                className={classes.otherProjectsIcon}
                image="/images/folder.png"
                alt="project screenshot"
              />
              <Typography color="text.secondary" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5" component="div">
                {item.description}
              </Typography>


            </CardContent>

            <CardActions>
              <Button onClick={() => linkHandler(item.github)} startIcon={<GitHub></GitHub>} size="small">Learn More</Button>
            </CardActions>
          </Card>




        </Grid>))}

      </Grid>

















      {/* <Grid container  spacing={4}>
<Grid item xs={12} sm={12} md={6} lg={6}>



</Grid>
</Grid> */}

    </div>
  )
}

export default Portfolio
