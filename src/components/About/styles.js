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
  body: {
    color:"#BEBEBE",
    paddingRight:"2rem",
    paddingLeft:"2rem"
  },
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
    top: "-1rem",
    visibility: "hidden"
   }
}));