import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content:{
    minHeight:'100vh',
    paddingTop:"10rem"
    
  
  },
  intro: {
    color: "white",
    fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
    fontSize:"50pt",
    fontWeight:"bold",
    letterSpacing:"-30"
  },
  greeting: {
    color: "white",
    fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
    fontSize:"20pt",
  },

  contactButton:{
      color:"white",
      background:"#DDB450",
      display:"block",
      margin:"auto",
      '&:hover': {
        backgroundColor: '#DDB450',
        borderColor: '#DDB450',
        boxShadow: 'none',
        opacity:"0.9"
        
      },
  }
  ,
  root: {
    flexGrow: 1,
  },
  center:{
    margin:"auto",
    width:"max-content"

  },
  introSection:{
margin:"2.5rem"
  }
  ,
  media:{
    
      width: 400,
      height: 400,
      borderRadius: 400 / 2,
      overflow: "hidden",
      borderWidth:3,
      borderColor: "red"
    

     
  },
 containerStyle:{
  width: "100%",
  display: "flex",
  flexWrap: "reverse-wrap",
  boxSizing: "border-box"

 },
  social: {
    cursor:"pointer",
    '& svg': {
        fontSize: 50
      },
    color:"#DDB450",
    marginTop:"1rem"
    
  }
}));