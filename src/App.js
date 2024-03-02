import './App.css';
import 'animate.css';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import React from 'react' 
import AppRoute from './routes';
import Background from './components/Background';

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
    <Background />
      <AppRoute />
    </ThemeProvider>
     </>
  );
}

export default App;
