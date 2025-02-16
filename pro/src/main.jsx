import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthProvider from "./context/AuthProvider.jsx";

localStorage.clear(); // ✅ Clears storage on reload (optional, remove if needed)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Now properly providing context value */}
      <App />
    </AuthProvider>
  </StrictMode>
);
