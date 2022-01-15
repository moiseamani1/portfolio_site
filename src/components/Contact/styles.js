import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title:{
      color:"white"
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
   
      },
  
}));