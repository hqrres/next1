'use client'
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import opensans from '/Users/mac/Local Sites/next1/app/public/wp-content/themes/next3/assets/fonts/Open Sans_Bold.json';

extend({ TextGeometry })


export const MediumText = () => {

  const font = new FontLoader().parse(opensans);

  const textGeometry = new TextGeometry('init');

  return (
    <mesh>
        <textGeometry args={ ['Greatest text in the world', { font, size: 1, height:0.1 }]}/>
        <meshPhysicalMaterial attach='material' color={'white'}/>
    </mesh>
  )
}