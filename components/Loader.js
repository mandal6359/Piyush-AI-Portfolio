"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center text-cyan-400 text-center">
        
        <h1 className="text-4xl font-bold mb-4">
          Initializing AI System
        </h1>

        <p className="animate-pulse">
          Loading Piyush Mandal Portfolio...
        </p>

      </div>
    );
  }

  return children;
}