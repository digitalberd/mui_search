import React, {useState, useRef} from "react";
import {IconButton, TextField} from "@mui/material";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';


const SearchComponent: React.FC = () => {
    const fieldRef = useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    const [conversionName, setConversionName] = useState<string>("");
    const [conversionValue, setConversionValue] = useState<string>("");
    const [currency, setCurrency] = useState<string>("");
    const [clientId, setClientId] = useState<string>("");
    const [beginDate, setBeginDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(fieldRef.current)
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    const handleConversionName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== undefined){setConversionName(e.target.value)}
    }

    const handleConversionValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== undefined){setConversionValue(e.target.value)}
    }

    const handleCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== undefined){setCurrency(e.target.value)}
    }

    const handleClientId = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== undefined){setClientId(e.target.value)}
    }


    const handleOk = (e: React.ChangeEvent<any>) => {
        console.log("Conversion name")
        console.log(conversionName)
        console.log("Conversion value")
        console.log(conversionValue)
        console.log("Currency")
        console.log(currency)
        console.log("ClientId")
        console.log(clientId)
        console.log("Begin Date")
        if(beginDate != null){
            console.log(beginDate.format('YYYY-MM-DD'))
        }else{console.log(beginDate)}
        console.log("End Date")
        if(endDate != null){
            console.log(endDate.format('YYYY-MM-DD'))
        }else{console.log(endDate)}
    }

    const SearchButton = () => (
        <IconButton>
            <SearchIcon />
        </IconButton>
    )

    const EndButtons = () => (
        <>
            <IconButton>
                <ClearIcon />
            </IconButton>
            <IconButton onClick={handleClick}>
                <TuneIcon />
            </IconButton>
        </>
    )

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TextField
                    id="searchField"
                    ref={fieldRef}
                    label="Search"
                    value="hello"
                    InputProps={{
                        startAdornment: <SearchButton />,
                        endAdornment: <EndButtons />,
                        sx: { borderRadius: 10 }
                    }}
                />

                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'searchField',
                    }}
                    elevation={5}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <Box component="span"
                         sx={{
                             width: 250,
                             height: 120,
                         }}
                    >
                        <div style={{margin: "16px"}}>
                            <Grid container spacing={{ xs: 2, md: 3 }}>
                                <Grid item xs={12} sm={6} md={6}  key="giConversionName">
                                    <div style={{marginTop: "16px"}}>
                                        <TextField
                                            fullWidth
                                            value={conversionName}
                                            label="Conversion name"
                                            onChange={handleConversionName}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}  key="giConversionValue">
                                    <div style={{marginTop: "16px"}}>
                                        <TextField
                                            fullWidth
                                            value={conversionValue}
                                            label="Conversion value"
                                            onChange={handleConversionValue}
                                        />
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6}  key="giCurrency">
                                    <div style={{marginTop: "16px"}}>
                                        <TextField
                                            fullWidth
                                            value={currency}
                                            label="Currency"
                                            onChange={handleCurrency}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}  key="giClientId">
                                    <div style={{marginTop: "16px"}}>
                                        <TextField
                                            fullWidth
                                            value={clientId}
                                            label="Client Id"
                                            onChange={handleClientId}
                                        />
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6}  key="giBeginDate">
                                    <div style={{marginTop: "16px"}}>
                                        <DatePicker
                                            slotProps={{ textField: { fullWidth: true } }}
                                            label="Begin Date"
                                            value={beginDate}
                                            onChange={(newValue) => setBeginDate(newValue)}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}  key="giEndDate">
                                    <div style={{marginTop: "16px"}}>
                                        <DatePicker
                                            slotProps={{ textField: { fullWidth: true } }}
                                            label="End Date"
                                            value={endDate}
                                            onChange={(newValue) => setEndDate(newValue)}
                                        />
                                    </div>
                                </Grid>

                            </Grid>

                            <div style={{marginTop: "16px", display: "flex", justifyContent: "right"}}>
                                <Button variant="contained" onClick={handleOk}>Search</Button>
                            </div>
                        </div>
                    </Box>
                </Menu>
            </LocalizationProvider>
        </>
    )
}

export default SearchComponent;