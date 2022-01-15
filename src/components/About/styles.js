import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content:{
marginBottom:"10rem"
  },
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
  
  nav_numbers:{
    color:"#DDB450"
   }
}));