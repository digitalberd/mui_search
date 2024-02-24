import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {IconButton, InputAdornment, Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";

import SearchIcon from '@mui/icons-material/Search';
import SearchComponent from "../../components/SearchComponent/SearchComponent";


const IndexPage: React.FC = () => {


    return(
        <>
            <CssBaseline />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '82vh',
                }}
            >
                <Paper />
                <Typography variant="h1" gutterBottom>
                    Main page
                </Typography>
                <SearchComponent />
            </Box>

        </>
    )
}

export default IndexPage;
