import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import { HelmetProvider } from 'react-helmet-async'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId={import.meta.env['VITE_GOOGLE_CLIENT_ID']}>
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
