import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Roy from '../../Roy.jpg';
import Yonatan from '../../Yonatan.jpg';
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const theme = createTheme();

/**
 * ContactUsPage component displays contact information.
 */
const ContactUsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
          }}
        >
          <Container>
            {/* Page title */}
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Contact Us!
            </Typography>
            {/* Avatars */}
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
              <Avatar alt="Roy" src={Yonatan} sx={{ width: 130, height: 130 }} />
              <Avatar alt="Yonatan" src={Roy} sx={{ width: 130, height: 130 }} />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Contact information */}
          <Grid container spacing={4} justifyContent="center">
            {/* Phone contact */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: 250, width: 270, flexDirection: 'column' }}>
                <CardMedia sx={{ pt: '10%' }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <PhoneIcon fontSize="large" sx={{ fontSize: '5rem' }} />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    By Phone
                  </Typography>
                  <Typography align="center">
                    +972507278282
                  </Typography>
                  <Typography align="center">
                    +972526732353
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* LinkedIn contact */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: 250, width: 270, flexDirection: 'column' }}>
                <CardMedia sx={{ pt: '10%' }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <LinkedInIcon fontSize="large" sx={{ fontSize: '5rem' }} />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    By LinkedIn
                  </Typography>
                  <Typography align="center">
                    <a href='https://www.linkedin.com/in/roy-maman-68b924238/' onClick={() => window.open('https://www.linkedin.com/in/roy-maman-68b924238/')}>Roy's Profile</a>
                  </Typography>
                  <Typography align="center">
                    <a href='https://www.linkedin.com/in/yonatan-lahav/' onClick={() => window.open('https://www.linkedin.com/in/yonatan-lahav/')}>Yonatan's Profile</a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Email contact */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: 250, width: 270, flexDirection: 'column' }}>
                <CardMedia sx={{ pt: '10%' }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <EmailIcon fontSize="large" sx={{ fontSize: '5rem' }} />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    By Email
                  </Typography>
                  <Typography align="center">
                    <a href="mailto:roey.maman@gmail.com">Roey.Maman@gmail.com</a>
                  </Typography>
                  <Typography align="center">
                    <a href="mailto:yonatanLahav@gmail.com">Jonatan.Lahav@gmail.com</a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default ContactUsPage;
