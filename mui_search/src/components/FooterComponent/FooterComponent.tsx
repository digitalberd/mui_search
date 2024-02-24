import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {yellow, blue} from "@mui/material/colors";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://www.digitalberd.com">
                DigitalBerd
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function FooterComponent() {
    return (
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? blue[200]
                            : blue[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        Footer
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
    );
}
