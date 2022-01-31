import React, { Suspense, Component } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3, MeshStandardMaterial } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const retryInterval = 23;
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
}//END R3F

export default class Ninja extends Component
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
  }//END render
  
}//END CLASS Ninja


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
      
    this.state = {
      mixer: null,
      animationPlaying: false
    }//END state
      
    this.isMaterialApplied = false;
      
    this.sendMaterial = this.sendMaterial.bind(this);
    this.applyMaterial = this.applyMaterial.bind(this);
    this.applyMaterialToModel = this.applyMaterialToModel.bind(this);
  }//END constructor
    
  sendMaterial(material)
  {
    this.applyMaterial(material);
  }//END sendMaterial

    
  applyMaterial(material)
  {
    if(this.isMaterialApplied) return;
    if (gltf === null || !gltf)
    {
      setTimeout(
        function () {
          console.log('gltf not loaded yet, retry is pending...');
          this.applyMaterial(material);
        }
          .bind(this),
        retryInterval
      );
      return;
    }//end gltf == null

    if (!this.applyMaterialToModel(material))
      return setTimeout(
        function () {
        
          this.applyMaterial(material);
        }
        .bind(this),
        retryInterval
      );
    this.isMaterialApplied = true;
  }//END applyMaterial
    
  applyMaterialToModel(material)
  {
    if (gltf === null || !gltf.scene) return false;

    gltf.scene.traverse((o) => {
      if (o.isMesh) {
        o.material = material;
      }
    });

    return true;
    console.log('finally.....');
  }//END applyMaterialToModel
    
  render()
  {
      return (
          <Suspense fallback={<>Loading...</>} r3f>
            <Texture parent={this} />
            <Asset url="/ninja/ninja.gltf" />
          </Suspense>
      )
  }//END render
    
}//END Model

function Texture(props)
{
  const parent = props.parent;
  let loaded = false;

  const [basecolor, height, metallic, normal, roughness] = useLoader(TextureLoader, [
    '/ninja/texture/basecolor.png',
    '/ninja/texture/height.png',
    '/ninja/texture/metallic.png',
    '/ninja/texture/normal.png',
    '/ninja/texture/roughness.png',
  ]);

  if (!loaded)
  {
    let minigunMaterial = new MeshStandardMaterial({
      map: basecolor,
      displacementMap: height,
      metalnessMap: metallic,
      normalMap: normal,
      roughness
    });

  
    parent.sendMaterial(minigunMaterial);
    loaded = true;
  }//END if (!loaded)
  

  return <></>
}//END Texture