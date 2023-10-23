import React from "react";
import { Grid, Box,Avatar, Typography} from "@mui/material";
import Icon from "./components/Icon";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Searchbar from "./components/Searchbar";
import Favourite from "./components/Favourite";
import Episodes from "./Episodes";
import { Routes,Route } from "react-router-dom";
import Second from "./Second";
function App() {

  return (
    <>
    
      <Grid container>
        <Grid item sm={2.5} sx={{ border:'2px solid black',height:'100vh',display:{xs:'none',sm:'block'}}}>
           <Icon/>
           <Box sx={{display:'flex',flexDirection:'column',margin:'3vw'}}>
           <Home/>
           <Dashboard/>
           <Favourite/>
           </Box>
           
        </Grid>
        <Grid container item xs={12} sm={9.5}>
          <Grid item xs={12} sx={{ border:'2px solid black', height:'10vh',display:"flex", alignItems:"center", justifyContent:"center"}}>
            
              <Searchbar/>            
              <Box sx={{display:"flex",alignItems:"center", justifyContent:"center",position:"relative",left:"6%"}}>
               <Avatar sx={{ height: 24, width: 24 }}>A</Avatar>
               <Typography variant="p">Abid</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ border:'2px solid black',height:'90vh',overflow:'auto'}}>

          <Routes>
          <Route exact path='/' element={<Episodes/>} />
          <Route exact path='/post' element={<Second/>} />
      </Routes>
          
             
            
          </Grid>
          
        </Grid>

      </Grid>
    </>
  );
}

export default App;
