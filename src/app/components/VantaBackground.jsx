import React, { useEffect, useRef } from 'react';
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three';

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = FOG({
      el: vantaRef.current,
      THREE: THREE, 
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xfcd0b0,
      midtoneColor: 0xffa3e5,
      lowlightColor: 0x50587,
      baseColor: 0xeeeeff,
      speed: 2.00,
      zoom: 1.60
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0"></div>;
};

export default VantaBackground;
