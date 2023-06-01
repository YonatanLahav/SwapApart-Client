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
import Roy from '../../Roy.jpg'
import Yonatan from '../../Yonatan.jpg'
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const theme = createTheme();

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
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Contact Us !
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
              <Avatar alt="Roy" src={Yonatan}  sx={{ width: 130, height: 130 }}/>
              <Avatar alt="Yonatan" src={Roy}  sx={{ width: 130, height: 130 }}/>
            </Stack>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md" >
          {/* End hero unit */}
          <Grid container spacing={4} sx={{ flexDirection: 'row'  }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
                <Card sx={{ height: 250, width: 270, flexDirection: 'column' }}>                  
                  <CardMedia sx={{pt: '10%'}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>   
                    <PhoneIcon fontSize="large" sx={{ fontSize: '5rem' }}/>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      By Phone
                    </Typography>
                    <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      +972507278282                   
                    </Typography>
                    <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      +972576548802                   
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ height: 250, width: 270, flexDirection: 'column' }}>                 
                  <CardMedia sx={{pt: '10%'}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>   
                    <LinkedInIcon fontSize="large" sx={{ fontSize: '5rem' }}/>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }} >
                    <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      By LinkedIn
                    </Typography>
                    <Typography  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a href='https://www.linkedin.com/in/roy-maman-68b924238/' onClick={()=>window.open('https://www.linkedin.com/in/roy-maman-68b924238/')}>Roy's Profile </a>                  
                    </Typography >                    
                    <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href='https://www.linkedin.com/in/yonatan-lahav/' onClick={()=>window.open('https://www.linkedin.com/in/yonatan-lahav/')}>Yonatan's Profile </a>
                  </CardContent>
                </Card>

                <Card sx={{ height: 250, width: 270, flexDirection: 'column' }}>                 
                  <CardMedia sx={{pt: '10%'}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>   
                    <EmailIcon fontSize="large" sx={{ fontSize: '5rem' }}/>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      By Email
                    </Typography>
                    <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>                       
                      <a href="mailto:roey.maman@gmail.com">roey.maman@gmail.com</a>                  
                    </Typography>
                    <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <a href="mailto:yonatanLahav@gmail.com">yonatanLahav@gmail.com</a>                   
                    </Typography>
                  </CardContent>
                </Card> 
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default ContactUsPage



