import { DownloadRounded } from '@mui/icons-material'
import { Button, Grid } from '@mui/material'
import React from 'react'

function Download() {
    const data = [
        {
            "model": "Samsung S7",
            "chargers": "55",
            "cases": "56",
            "earphones": "57",
            "scratched": "2"
        },
        {
            "model": "Pixel XL",
            "chargers": "77",
            "cases": "78",
            "earphones": "79",
            "scratched": "4"
        },
        {
            "model": "iPhone 7",
            "chargers": "88",
            "cases": "89",
            "earphones": "90",
            "scratched": "6"
        }
    ];

    const keys = Object.keys(data[0]);
    
    const commaSeparatedString = [keys.join(",") , data.map(row => keys.map(key => row[key]).join(",")).join("\n")].join("\n")

    const csvBlob = new Blob([commaSeparatedString])


    
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            style={{ minHeight: '100vh' }}
        >
            <Button  variant="contained" endIcon={<DownloadRounded />}>
                <a style={{textDecoration:"none", color:'white'}} href={URL.createObjectURL(csvBlob)} download="responses.csv" >Download CSV</a>
            </Button>

        </Grid>
    )
}

export default Download