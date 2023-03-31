import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

/**
 * A React functional component for rendering a form to pick relevant dates for a new vacation.
 * 
 * @param {Object} newVacation - An object containing the new vacation data including start and end dates.
 * @param {Function} setNewVacation - A function to update the new vacation data in parent component state.
 * @returns {JSX.Element} - The rendered JSX element.
*/
function PickDatesForm({ newVacation, setNewVacation }) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center">
                Please pick your relevant dates.
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker']}>
                        <DateRangePicker
                            localeText={{ start: 'From', end: 'To' }}
                            value={[newVacation.startDate, newVacation.endDate]}
                            onChange={(newDate) => (setNewVacation({
                                ...newVacation,
                                startDate: newDate[0],
                                endDate: newDate[1],
                            }))} />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid item xs={3} display="flex" justifyContent="center" >
                <FormControlLabel control={<Switch defaultChecked />} label="Flexible Dates" labelPlacement="top" />
            </Grid>
        </Grid>
    )
}

export default PickDatesForm