
/**
 * This module is used to initialize analytics after the main content has loaded
 * to improve the initial page load performance.
 */

export const initAnalytics = () => {
  // Check if scripts are already loaded to avoid duplication
  if (window.fbq || (window as any).gtmInitialized) {
    return;
  }

  // Mark GTM as initialized
  (window as any).gtmInitialized = true;

  // Function to load external script
  const loadScript = (src: string, async = true, defer = true) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    document.body.appendChild(script);
  };

  // Load analytics on idle or after a slight delay
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      // Facebook Pixel
      if (!window.fbq) {
        loadScript('https://connect.facebook.net/en_US/fbevents.js');
      }
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      if (!window.fbq) {
        loadScript('https://connect.facebook.net/en_US/fbevents.js');
      }
    }, 2000);
  }
};

// Add to window type
declare global {
  interface Window {
    fbq: any;
  }
}
