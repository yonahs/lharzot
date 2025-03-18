
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use requestIdleCallback for non-critical rendering
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    createRoot(document.getElementById("root")!).render(<App />);
  });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(() => {
    createRoot(document.getElementById("root")!).render(<App />);
  }, 1);
}
