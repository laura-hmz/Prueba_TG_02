import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './contexts/userContext.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain="tg-laurahm.us.auth0.com"
      clientId="LV3tQl54AvdWoupi5XvL5aIyGHryY4ag"
      authorizationParams={{
      redirect_uri: window.location.origin
      }}
    >
      <UserProvider>
      <App />
      </UserProvider>
      
    </Auth0Provider>
  </React.StrictMode>,
)
