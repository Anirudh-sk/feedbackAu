import { DownloadRounded } from '@mui/icons-material'
import { Button, Grid } from '@mui/material'
import React from 'react'

function Download() {
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
            <Button variant="contained" endIcon={<DownloadRounded />}>
                Download CSV
            </Button>

        </Grid>
    )
}

export default Download