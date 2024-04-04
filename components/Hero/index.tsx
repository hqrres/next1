'use client'
import { useEffect, useRef } from 'react';
import Link from "next/link";
import THREE from '@react-three/fiber';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { OrbitControls } from '@react-three/drei';
import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { TorusGeometry } from 'three/src/geometries/TorusGeometry.js';

extend({TorusGeometry})

export const Hero = () => {
  return (
    <div className="w-full h-96">
      <Canvas>
        <OrbitControls enableZoom={true} enablePan={false}/>
        <ambientLight intensity={2}/>
        <directionalLight position={[2, 1, 1]}/>
        <Cube/>
      </Canvas>
    </div>
  );
};

function Cube() {

  const mesh = useRef(null);
  const options = {
    damping: 10
  }
  const mouse = {
    x: useSpring(useMotionValue(0)),
    y: useSpring(useMotionValue(0))
  }

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = -0.5 + clientX / innerWidth;
    const y = -0.5 + clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove)

    return () => window.removeEventListener("mouse", manageMouseMove);
  })

  // adds automatic rotation
  // useFrame( (state, delta) => {
  //   mesh.current.rotation.x += delta * 0.1;
  //   mesh.current.rotation.y += delta * 0.1;
  //   mesh.current.rotation.z += delta * 0.1;
  // })

  // const texture_1 = useLoader(TextureLoader, '/images/img_1.png');
  // const texture_2 = useLoader(TextureLoader, '/images/img_2.png');
  // const texture_3 = useLoader(TextureLoader, '/images/img_3.png');
  // const texture_4 = useLoader(TextureLoader, '/images/img_4.png');
  // const texture_5 = useLoader(TextureLoader, '/images/img_5.png');
  // const texture_6 = useLoader(TextureLoader, '/images/img_6.png');

  //const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
  //const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
  //const torus = new THREE.Mesh( geometry, material ); 

  const torusGeometry = new TorusGeometry;

  return (
    <motion.mesh 
      ref={mesh} 
      rotation-z={mouse.x}
      >
      <torusGeometry args={[10, 9.999, 100, 100]}/>
      <meshStandardMaterial color="gray" wireframe/>
      {
      //map={texture_2}
  
      /* <boxGeometry args={[3, 3, 3]}/>
      <meshStandardMaterial map={texture_1} attach="material-0"/>
      <meshStandardMaterial map={texture_2} attach="material-1"/>
      <meshStandardMaterial map={texture_3} attach="material-2"/>
      <meshStandardMaterial map={texture_4} attach="material-3"/>
      <meshStandardMaterial map={texture_5} attach="material-4"/>
      <meshStandardMaterial map={texture_6} attach="material-5"/> */}
    </motion.mesh>
  )
}