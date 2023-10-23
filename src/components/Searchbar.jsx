import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
function Searchbar() {
  return (
    <>
      <TextField id="outlined-basic" size="small" placeholder="search" InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }} sx={{width:"70%",borderRadius:1}}/>
    </>
  );
}
export default Searchbar;