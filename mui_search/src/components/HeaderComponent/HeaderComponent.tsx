import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import {TextField} from "@mui/material";



const DesktopComponent: React.FC = () => {

    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component={NavLink}
                            to="/"
                            sx={{ flexGrow: 1 }}
                        >
                            MUI Search
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default DesktopComponent;
