'use client'
import { useRef } from 'react';
import Link from "next/link";
import Three from '@react-three/fiber';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { OrbitControls } from '@react-three/drei';

export const Hero = () => {
  return (
    <div className="w-full h-96">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false}/>
        <ambientLight intensity={2}/>
        <directionalLight position={[2, 1, 1]}/>
        <Cube/>
      </Canvas>
    </div>
  );
};

function Cube() {

  const mesh = useRef(null);
  useFrame( (state, delta) => {
    mesh.current.rotation.x += delta * 0.1;
    mesh.current.rotation.y += delta * 0.1;
    mesh.current.rotation.z += delta * 0.1;
  })

  const texture_1 = useLoader(TextureLoader, '/images/img_1.png');
  const texture_2 = useLoader(TextureLoader, '/images/img_2.png');
  const texture_3 = useLoader(TextureLoader, '/images/img_3.png');
  const texture_4 = useLoader(TextureLoader, '/images/img_4.png');
  const texture_5 = useLoader(TextureLoader, '/images/img_5.png');
  const texture_6 = useLoader(TextureLoader, '/images/img_6.png');

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]}/>
      <meshStandardMaterial map={texture_1} attach="material-0"/>
      <meshStandardMaterial map={texture_2} attach="material-1"/>
      <meshStandardMaterial map={texture_3} attach="material-2"/>
      <meshStandardMaterial map={texture_4} attach="material-3"/>
      <meshStandardMaterial map={texture_5} attach="material-4"/>
      <meshStandardMaterial map={texture_6} attach="material-5"/>
    </mesh>
  )
}