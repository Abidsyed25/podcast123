import React from "react";
import BigCard from "./components/BigCard";
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
function Second(){
    return (
        <>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        
           <BigCard/>

            
           <Box sx={{display:'flex',width:'80%'}}>

           <FavoriteBorderIcon sx={{margin:'5px'}}/>
           <MessageIcon sx={{margin:'5px'}}/>
           <ShareIcon sx={{margin:'5px'}}/>
           </Box>
           <Typography variant="h6" sx={{width:'80%',margin:'20px'}}>Comments </Typography>
        </Box>

        </>
    )
}
export default Second;