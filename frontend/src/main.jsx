import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './context/globalContext.jsx';
import { GlobalStyle } from './styles/GlobalStyle';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GlobalStyle />
        <GlobalProvider>
           <App />

        </GlobalProvider>
  </StrictMode>,
)
