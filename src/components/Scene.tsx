'use client';

import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Earth from './Earth';
import { Environment, OrbitControls } from '@react-three/drei';
import { useWindowWidth } from '@/utils/hooks';

export default function Scene() {
  const windowWidth = useWindowWidth();
  const canvasHeight = windowWidth < 650 ? '200px' : '300px';
  return (
    <Canvas style={{ height: canvasHeight }}>
      <ambientLight />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}
