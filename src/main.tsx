import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import { store } from "./store/store";
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
         <App />
      </HelmetProvider>
     
    </Provider>
  </React.StrictMode>,
)
