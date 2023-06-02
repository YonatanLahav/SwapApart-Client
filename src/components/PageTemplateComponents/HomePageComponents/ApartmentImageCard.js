import React from 'react';
import Card from '@mui/material/Card';
import ApartmentImageStepper from './ApartmentImageStepper';

/**
 * Renders the Apartment Image Card component.
 * Displays a card with an image stepper for the apartment images.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.optionalMatch - The optional match object containing the apartment images.
 * @returns {JSX.Element} - The rendered Apartment Image Card component.
 */
function ApartmentImageCard({ optionalMatch }) {
    const { pictures } = optionalMatch.userId.apartment;

    return (
        <Card align="center">
            <ApartmentImageStepper images={pictures} />
        </Card>
    );
}

export default ApartmentImageCard;
