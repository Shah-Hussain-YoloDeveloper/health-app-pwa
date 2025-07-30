import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProfileProvider } from './context/ProfileContext';
import './index.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </StrictMode>,
)
