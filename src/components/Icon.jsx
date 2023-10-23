import React from "react";
import AppleIcon from '@mui/icons-material/Apple';
import { Typography,Box } from "@mui/material";

function Icon(){
   return (
   <>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center', margin:'20px'}}>
        <AppleIcon/>
        <Typography variant="h6"><b>Podcast</b></Typography>
      </Box>
   </>
   );
}
export default Icon;