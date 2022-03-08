import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { orange } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, {persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@mui/material';



const theme = createTheme({
  status: {
    danger: orange[500]
  },
  palette: {
    mode: 'dark'
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      </ThemeProvider>
      </PersistGate>
     
    </Provider>

 </React.StrictMode>,
  document.getElementById('root')
);




