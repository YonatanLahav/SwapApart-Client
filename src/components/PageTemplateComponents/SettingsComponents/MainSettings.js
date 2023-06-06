import React from "react";
import { Box, Typography, Button } from "@mui/material";

/**
 * MainSettings component displays the main settings page with options to watch personal details
 * and change apartment details.
 *
 * @param {function} setActiveSettingsPage - Function to set the active settings page.
 * @returns {JSX.Element} - The rendered JSX element.
 */
function MainSettings({ setActiveSettingsPage }) {
  /**
   * Handles the click event when "Watch Your Personal Details" button is clicked.
   * Calls the setActiveSettingsPage function to set the active settings page to 2.
   */
  const handlePersonalDetailsClick = () => {
    setActiveSettingsPage(2);
  };

  /**
   * Handles the click event when "Change your Apartment details" button is clicked.
   * Calls the setActiveSettingsPage function to set the active settings page to 1.
   */
  const handleApartmentDetailsClick = () => {
    setActiveSettingsPage(1);
  };
  return (
    <Typography component="h1" variant="h4" align="center">
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button onClick={handlePersonalDetailsClick}>
          Watch Your Personal Details
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button onClick={handleApartmentDetailsClick}>
          Change your Apertment details
        </Button>
      </Box>
    </Typography>
  );
}

export default MainSettings;
