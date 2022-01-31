import React, { Suspense, Component } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3 } from 'three';

let gltf  = null;

const R3F = ({ children }) => {
    const cameraPosition   = new Vector3(0, -4.5, 3);
    
    return (
      <Canvas
              mode='concurrent'
              style={{ background: 'blue', width: '300px', height: '300px', clipPath: 'circle(50% at 50% 50%)' }}
      >
              <Preload all />
              <ambientLight intensity={0.3} />
              <pointLight position={[35, 43, 30]} intensity={0.5} />
              <PerspectiveCamera makeDefault far={100} near={0.1} fov={40} position={[0, -4.5, 3]} />
              {children}
      </Canvas>
    )
}

class Ninja extends Component
{
  constructor(props)
  {
    super(props);


    
  }//END constructor
  
    
  render()
  {
    
    return (
        <>
          <R3F r3f>
            <Model />
          </R3F>
        </>
    )
  }
  
}
export default Ninja

function Asset({ url })
{
  gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} position={[0, -5, 0]} scale={[0.03, 0.03, 0.03]} />;
}//END Asset

class Model extends Component
{
  constructor(props)
  {
    super(props);
  }//END constructor
    
  render()
  {
      return (
          <Suspense fallback={<>Loading...</>} r3f>
            <Asset url="/ninja/ninja.gltf" />
          </Suspense>
      )
  }//END render
    
}