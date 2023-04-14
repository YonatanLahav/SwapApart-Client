import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Button, Typography, Divider, List, IconButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ApartmentImageStepper from './ApartmentImageStepper';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import FooterApartImgsCard from './FooterApartImgsCard';


function ApartmentImageCard({ optionalMatch, images }) {
    return (
        <Card align='center'  >
            <ApartmentImageStepper images={images} />
            <Divider />
            <CardContent>
                <ListItemText primary={'More about the property'} secondary={"Need to think how to insert more details. for example who are the other swapper"} align='center' />
            </CardContent>
            <Divider />
            <FooterApartImgsCard accAction={() => (alert())} decAction={() => (alert())} />
        </Card>
    )
}

export default ApartmentImageCard