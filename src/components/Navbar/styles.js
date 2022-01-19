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
  toolbarMobile:{
  
    paddingRight: "79px",
    paddingLeft: "2rem",
    background : '#101010'

  },
  menuButton:{
    color:"white"
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
    margin:'auto 1rem auto 1rem',
    "@media (max-width: 900px)": {
      margin:'auto 0rem auto 0rem',
    },
    alignItems: 'center',
    display: 'flex',
    
  },
  nav_links_text:{
    color:"white",
    textDecoration: 'none',
    "&:hover": {
      color: "#DDB450",
      
  }
  },
   nav_numbers:{
    color:"#DDB450"
   }
   ,
    
 
  grow: {
    flexGrow: 1,
  },
  mobileLinks:{
    textDecoration: 'none',
    color:"black",
    width:"100%",
    
  },

  // anchor:{
  //   display: "block",
  //   position: "relative",
  //   top: "-5rem",
  //   visibility: "hidden",
  // },
  mobileMenuItem:{
    width:"100%"
  },

  resumeLink:{
    textDecoration:"none",
    color:"inherit"
  }

 
 
 
}));