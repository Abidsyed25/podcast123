import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box,Typography } from "@mui/material";
function Dashboard(){
    return (
        <>
        <Box sx={{display:"flex",margin:"10px"}}>
           <DashboardIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>Admin Panel</Typography>
        </Box>
        </>
    )
}
export default Dashboard;