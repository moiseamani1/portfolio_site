import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content:{
    marginBottom:"10rem"
      },
  title:{
      color:"white"
  },
  jobTitle:{
    color:"white"
},
  body: {
    color:"#BEBEBE",
    width:"35rem"
  },
  location:{
      color:"#DDB450"
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
   }
  
}));