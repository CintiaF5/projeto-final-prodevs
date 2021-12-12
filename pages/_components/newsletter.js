import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Button } from '@mui/material';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#e9e9e9', height: '30vh', padding: 2 }}
        >
          <h2 className='title-news'>SE INSCREVA NA NOSSA NEWSLETTER</h2>
          <h3>E fique por dentro de todas as novidades e promoções diariamente!</h3>
          <Button variant="contained">ASSINE</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}