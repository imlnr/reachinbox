import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainRoutes from './Allroutes/MainRoutes';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },

    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });
  return (
    <ChakraProvider>
      {/* <ThemeProvider */}
      <ThemeProvider theme={theme}>

        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <MainRoutes />
            </div>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
