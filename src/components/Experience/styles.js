import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content:{
    marginBottom:"10rem"
      },
  title:{
      color:"white",
      padding:"2rem"
  },
  jobTitle:{
    color:"white",
    
    
},
  body: {
    color:"#BEBEBE",
    width:"45rem",
    "@media (max-width: 900px)": {
      width:'auto',
    },
    
  },
  location:{
      color:"#DDB450",
      textDecoration:"none"
  }
  ,
  list:{
    listStyleType:"square",
    color:"#DDB450"
  },
  listtext:{
    color:"white"
  },
  nav_numbers:{
    color:"#DDB450"
   },
   anchor:{
    display: "block",
    position: "relative",
    top: "-5rem",
    visibility: "hidden"
   }
  
}));