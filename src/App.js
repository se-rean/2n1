import './App.css';
import 'animate.css';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import React from 'react' 
import AppRoute from './routes';

const theme = createTheme ({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
     
     </>
  );
}

export default App;
