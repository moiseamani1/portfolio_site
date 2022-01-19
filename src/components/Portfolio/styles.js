import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  titleDiv: {
    width: "100%"
  }
  ,
  title:{
    color:"white",
    padding:"2rem"
},
otherTitle:{
  color:"white",
  width:"max-content",
  margin:"auto",
  marginTop:"5rem",
  marginBottom:"2rem"
},
  body: {
    color: "#BEBEBE"
  },
  // buttonsField: {
  //   height: "calc(100% - 8rem)",
  //   // flexGrow:"1",
  //   position: "relative"
  // },
  // buttons: {
  //   position: "absolute",
  //   bottom: 0
  // }
  // ,
  otherProjectsIcon: {
    width: "4rem"
  }
  ,

  projectCard: {
    borderTop: "1px solid  #EBEBEB",
    borderBottom: "1px solid  #EBEBEB",
    
    
  },
  projectCardContent: {
    padding: '2rem',
    minHeight: "30rem"
  },
  projectName: {
    color: "#BEBEBE"
  },
  project_img: {
    height: "100%"
  },

  gitSpace: {
    marginEnd: "0.5rem"
  },
  nav_numbers: {
    color: "#DDB450"
  },
  content: {
    marginBottom:"10rem"
  },

  
  
  otherProjectsItems: {
   
    padding:"0.6rem",
    transition: "transform ease 300ms",
    // transition:"0.3s",
    '&:hover': {
      transform: "translate(0, -10px)",
      // marginTop:"-5px"
      
    },
  },
  centered:{
    margin:"auto"
  },

  techStack:{
    display: 'flex', 
    flexDirection: 'row',
    flexWrap:"wrap",
    color:"white"
  },

  techStackItem:{
    width:"max-content"
  },
  anchor:{
    display: "block",
    position: "relative",
    top: "-5rem",
    visibility: "hidden"
   }
  
}));