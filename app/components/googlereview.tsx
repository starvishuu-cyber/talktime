'use client';
import { useEffect } from 'react';

export default function ElfsightWidget() {
  useEffect(() => {
    // Dynamically load the Elfsight script only once
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if the component unmounts (optional)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-8">
      {/* Replace the app ID below with your Elfsight widget ID */}
      <div
        className="elfsight-app-1cbe99ee-2c04-42d0-9457-eea89b315294"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
