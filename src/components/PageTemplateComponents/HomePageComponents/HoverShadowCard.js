import React, { useState } from 'react';
import { Card } from '@mui/material';

function ShadowCard({ element, ...rest }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                p: 0,
                transition: 'box-shadow 0.3s ease',
                boxShadow: isHovered ? '0 0 15px rgba(0, 0, 0, 0.3)' : 'none',
                cursor: isHovered ? 'pointer' : 'none'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            {element}
        </Card>
    );
}

export default ShadowCard;
