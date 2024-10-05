import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../src/css/index.css';
import ProgressBar from './components/ProgressBar.jsx';
import Navbar from './components/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProgressBar />
    <Navbar />
    <App />
  </StrictMode>,
)

