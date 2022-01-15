import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    width:"100%",
    padding:0,
    margin:0,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  toolbar:{
  
    paddingRight: "79px",
    paddingLeft: "118px",
    background : '#101010'

  },
  navButton:{
    background:"#DDB450",
    color:"white",
    "&:hover": {
      color: "#DDB450",
      background:"white"
      
  }
  }
  ,
  nav_links:{
    color:'white',
    "&:hover": {
        color: "#DDB450",
        
    },
    margin:'auto 1rem auto 1rem',
    "@media (max-width: 900px)": {
      margin:'auto 0rem auto 0rem',
    },
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
   nav_numbers:{
    color:"#DDB450"
   }
   ,
    
 
  grow: {
    flexGrow: 1,
  },

 
 
 
}));