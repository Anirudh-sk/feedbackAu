import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';


import { VerifiedUserRounded } from '@mui/icons-material';
import React, { useState } from 'react'
import Building from './Building';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.annauniv.edu/">
                Anna University
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Form() {


    const queryParameters = new URLSearchParams(window.location.search);
    const building = queryParameters.get("building");
    const floor = queryParameters.get("floor");
    const toilet = queryParameters.get("toilet");


    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState(0)
    const [Type, setType] = useState("")
    const [Complaint, setComplaint] = useState("")
    const [Cleanliness, setCleanliness] = useState(0)
    


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            Name,
            Phone,
            Type,
            Complaint,
            Cleanliness
        }
        console.log(data);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <VerifiedUserRounded />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Feedback Form
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="Name"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    onChange={e => { setName(e.target.value) }}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    type="number"
                                    id="Phone"
                                    label="Phone"
                                    name="Phone"
                                    autoComplete="phone"
                                    onChange={e => { setPhone(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    onChange={e => { setType(e.target.value) }}

                                >
                                    <FormControlLabel id='student' value="student" control={<Radio />} label="Student" />
                                    <FormControlLabel id='teacher' value="teacher" control={<Radio />} label="Teacher" />
                                    <FormControlLabel id='guest' value="guest" control={<Radio />} label="Guest" />

                                </RadioGroup>
                            </Grid><br />

                            {
                                floor && toilet ? <></> : <Building setComplaint={setComplaint} setCleanliness={setCleanliness} />
                            }


                        </Grid>


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}