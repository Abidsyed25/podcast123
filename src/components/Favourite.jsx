import React from "react";
import { Box,Typography } from "@mui/material";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
function Favourite(){
    return (
        <>
        <Box sx={{display:"flex",margin:"10px"}}>
           <CollectionsBookmarkIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>Favourite List</Typography>
        </Box>
        </>
    )
}
export default Favourite;