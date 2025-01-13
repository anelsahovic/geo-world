'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from './Earth';
import {
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from '@react-three/drei';
import { useWindowWidth } from '@/utils/hooks';

export function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html
      center
      style={{
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        zIndex: 9999,
        display: 'flex',
      }}
    >
      {progress.toFixed(1)}% loaded
    </Html>
  );
}

export default function Scene() {
  const windowWidth = useWindowWidth();
  const canvasHeight = windowWidth < 650 ? '200px' : '300px';

  return (
    <Canvas style={{ height: canvasHeight }}>
      <ambientLight />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={<Loader />}>
        <Earth />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}
