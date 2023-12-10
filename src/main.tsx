import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/index.ts';
import { theme } from './theme';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
