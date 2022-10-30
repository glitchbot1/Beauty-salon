import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container >
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Контент
          </Typography>
      </Container>
    </React.Fragment>
  );
}