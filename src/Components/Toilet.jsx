import React from 'react'
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { Typography } from '@mui/material';

function Toilet({setWashedRegularly}) {
    return (
        <>
            <Grid item xs={12}>
            <Typography variant='h6' component='h1' >Washed Regularly</Typography>
            
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={e => { setWashedRegularly(e.target.value) }}

                >
                    <FormControlLabel id='Yes' value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel id='No' value="No" control={<Radio />} label="No" />

                </RadioGroup>
            </Grid><br />
        </>
    )
}

export default Toilet