import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title:{
      color:"white",
      padding:"2rem"
  },
  body: {
    color:"#BEBEBE"
  },
  list:{
    listStyleType:"square",
    color:"#DDB450"
  },
  listtext:{
    color:"white"
  },
  contacts:{
      marginLeft:"0.2rem",
      color:"white"
  },
  nav_numbers:{
    color:"#DDB450"
   },
   content:{
    minHeight:"40vh",
    paddingBottom:"10rem"
   
      },
    contactsItems:{
      display: "flex",
      paddingLeft:"2rem"
    } ,
    anchor:{
      display: "block",
      position: "relative",
      top: "-5rem",
      visibility: "hidden"
     } 
  
}));