import * as React from 'react';
import Grid from '@mui/material/Grid';
import VacationCard from './HomePageComponents/VacationCard';
import HoverShadowCard from './HomePageComponents/HoverShadowCard';
import { useState } from 'react';
import DefaultHomePage from './HomePageComponents/DefaultHomePage';
import VacationMatchsPage from './HomePageComponents/VacationMatchsPage';

function HomePage({ data, setData, user }) {

    const [vacationIndex, setVacationIndex] = useState(null);

    const vacationCards = [];
    // for (let i = 0; i < user.vacationsArr.length; i++) {
    //     vacationCards.push(
    //         <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //             <HoverShadowCard element={<VacationCard vacation={user.vacationsArr[i]} onClick={() => setVacationIndex(i)} />} />
    //         </Grid>
    //     );
    // }

    return (vacationIndex == null) ? (
        // Show all the vacations of the user.
        <DefaultHomePage vacationCards={vacationCards} />
    ) : (
        // Show specific vacation.
        <VacationMatchsPage optionalMatch={user.vacationsArr[vacationIndex]} images={user.apartmentImgs} setVacationIndex={setVacationIndex} />
    );
}

export default HomePage