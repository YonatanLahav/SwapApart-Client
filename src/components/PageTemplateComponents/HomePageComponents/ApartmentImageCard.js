import * as React from 'react';
import Card from '@mui/material/Card';
import ApartmentImageStepper from './ApartmentImageStepper';



function ApartmentImageCard({ optionalMatch }) {
    return (
        <Card align='center'  >
            <ApartmentImageStepper images={optionalMatch.userId.apartment.pictures} />
        </Card>
    )
}

export default ApartmentImageCard