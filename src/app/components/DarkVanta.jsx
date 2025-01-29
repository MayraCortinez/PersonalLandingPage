import React, { useEffect, useRef } from 'react';
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three';

const DarkVanta = () => {
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
      highlightColor: 0x6b006b,
      midtoneColor: 0x280044,
      lowlightColor: 0xf00ed,
      baseColor: 0x000000,
      speed: 2.00,
      zoom: 1.60,
      blurFactor: 0.49
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0"></div>;
};

export default DarkVanta;
