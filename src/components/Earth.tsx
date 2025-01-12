import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFResult } from '@/types/types';
import * as THREE from 'three';

useGLTF.preload('/earth3d/earth.glb');

export default function Earth() {
  const { nodes, materials } = useGLTF(
    '/earth3d/earth.glb'
  ) as unknown as GLTFResult;

  // Reference to the Earth mesh group
  const earthRef = useRef<THREE.Group>(null);

  // Rotate the Earth on each frame
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.006; // Adjust rotation speed here
    }
  });

  return (
    <group ref={earthRef} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Scene_-_Root']}
        scale={3}
      />
    </group>
  );
}
