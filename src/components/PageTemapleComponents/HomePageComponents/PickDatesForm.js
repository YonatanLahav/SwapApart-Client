import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Grid from '@mui/material/Grid';
import { useState } from 'react';


function PickDatesForm() {
    const [date, setDate] = useState([null, null]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center">
                Please pick your relevant dates.
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker']}>
                        <DateRangePicker
                            localeText={{ start: 'From', end: 'To' }}
                            value={date}
                            onChange={(newDate) => (setDate(newDate))} />
                    </DemoContainer>
                </LocalizationProvider>
                <Grid item xs={2} />
            </Grid>
        </Grid>
    )
}

export default PickDatesForm