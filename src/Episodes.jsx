import React from "react";
import { Box,Typography } from "@mui/material";
import AreaCard from "./components/AreaCard";
function Episodes(){
    return (
        <>
        <Typography variant="h6" sx={{margin:'20px'}}>Latest Episodes</Typography>
             <Box sx={{display:'flex',flexWrap: 'wrap'}}>

             <AreaCard/>
             <AreaCard/>
             <AreaCard/>
             <AreaCard/>
             <AreaCard/>
             <AreaCard/>
            
             </Box>
        </>
    )
}
export default Episodes;