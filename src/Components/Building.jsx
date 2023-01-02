import React from 'react'
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function Building({setComplaint, setCleanliness}) {
    return (
        <>
           
            <Grid item xs={12}>
                <Typography variant='h6' component='h1' >Cleanliness</Typography>
                <Slider  onChange={e => { setCleanliness(e.target.value) }} valueLabelDisplay="auto" defaultValue={5} step={1} marks min={0} max={10} />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="outlined-textarea"
                    label="Complaints"
                    placeholder="Complaint"
                    multiline
                    fullWidth
                    onChange={e => { setComplaint(e.target.value) }}
                />
            </Grid>

        </>
    )
}

export default Building