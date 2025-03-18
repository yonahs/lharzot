
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use a more efficient approach for non-critical rendering
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // DOM already loaded, use requestIdleCallback or setTimeout
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(initApp, { timeout: 2000 });
  } else {
    setTimeout(initApp, 1);
  }
}

function initApp() {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  }
}
