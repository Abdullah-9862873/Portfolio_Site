import React, { useState, useEffect, useRef } from "react";

const CrossfadeImage = ({ images, interval = 3000, className = "", alt = "" }) => {
  const [baseIdx, setBaseIdx] = useState(0);
  const [overlayIdx, setOverlayIdx] = useState(null);
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const timerRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const swapTimerRef = useRef(null);
  const imagesRef = useRef(images);
  const prevIdxRef = useRef(0);
  const mountedRef = useRef(true);

  imagesRef.current = images;

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearInterval(timerRef.current);
      clearTimeout(fadeTimerRef.current);
      clearTimeout(swapTimerRef.current);
    };
  }, []);

  // Auto-advance timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setBaseIdx((prev) => (prev + 1) % imagesRef.current.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [interval]);

  // Crossfade: old image fades OUT on top, new image already visible behind
  useEffect(() => {
    if (prevIdxRef.current === baseIdx) return; // skip initial render

    clearTimeout(fadeTimerRef.current);
    clearTimeout(swapTimerRef.current);

    // 1. Place OLD image on top at full opacity, NEW image is already behind at full opacity
    setOverlayIdx(prevIdxRef.current);
    setOverlayOpacity(1);

    // 2. After browser paints overlay, fade overlay OUT (old image dissolves)
    fadeTimerRef.current = setTimeout(() => {
      if (!mountedRef.current) return;
      setOverlayOpacity(0);

      // 3. After fade completes, remove overlay — new base image is now fully visible
      swapTimerRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        setOverlayIdx(null);
      }, 1100); // match transition duration
    }, 50);

    prevIdxRef.current = baseIdx;

    return () => {
      clearTimeout(fadeTimerRef.current);
      clearTimeout(swapTimerRef.current);
    };
  }, [baseIdx]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base layer: always fully visible — switches to new image instantly */}
      <img
        src={images[baseIdx]}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay layer: old image fading OUT on top, revealing new image beneath */}
      {overlayIdx !== null && (
        <img
          src={images[overlayIdx]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: overlayOpacity,
            transition: "opacity 1s ease-in-out",
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
};

export default CrossfadeImage;
