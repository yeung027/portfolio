import React, { Component } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { Vector3 } from 'three';

const R3F = () => {
    const cameraPosition   = new Vector3(0, -4.5, 3);
    
    return (
      <Canvas
              mode='concurrent'
              style={{ background: 'blue', width: '300px', height: '300px', clipPath: 'circle(50% at 50% 50%)' }}
      >
              <Preload all />
              <ambientLight intensity={0.3} />
              <pointLight position={[35, 43, 30]} intensity={0.5} />
              

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
          <R3F r3f />
        </>
    )
  }
  
}
export default Ninja