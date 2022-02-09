import React, { Suspense, Component } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3, MeshStandardMaterial, AnimationMixer } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import styles from '../../styles/canvas/ninja/desktop.module.css'
import mobileStyles from '../../styles/canvas/ninja/mobile.module.css'

const retryInterval = 23;
let gltf  = null;

const R3F = (props) => {
    //const cameraPosition   = new Vector3(0, -4.5, 3);
    let parent = props.parent;
    //console.log('ninja parent3 : '+parent)

    return (
      <Canvas
              mode='concurrent'
              className={parent.isMobile ? mobileStyles.canvas : styles.canvas}
      >
              <Preload all />
              <ambientLight intensity={0.3} />
              <pointLight position={[35, 43, 30]} intensity={0.5} />
              <PerspectiveCamera makeDefault far={100} near={0.1} fov={40} position={[0, -4.5, 3]} />
              {props.children}
      </Canvas>
    )
}//END R3F

export default class Ninja extends Component
{
  constructor(props)
  {
    super(props);
    this.parent = props.parent;
    //console.log('ninja parent : '+this.parent)
    this.playNinjaAnim = this.playNinjaAnim.bind(this);

    this.modelRef = React.createRef();
  }//END constructor
  

  playNinjaAnim()
  {
    //console.log('playNinjaAnim....ninja!');
    if(this.modelRef && this.modelRef.current)
    {
      this.modelRef.current.playAnim();
    }
  }

  componentDidMount()
  {
    const that = this;

    window.addEventListener("scroll", function(e) { that.playNinjaAnim() }); 
  }//END componentDidMount

  render()
  {
    
    return (
        <>
          <R3F r3f parent={this}>
            <Model parent={this} ref={this.modelRef} />
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

    this.parent = props.parent;
    //console.log('ninja parent22 : '+this.parent)
    this.state = {
      mixer: null,
      animationPlaying: false
    }//END state
      
    this.isMaterialApplied = false;
      
    this.sendMaterial         = this.sendMaterial.bind(this);
    this.applyMaterial        = this.applyMaterial.bind(this);
    this.applyMaterialToModel = this.applyMaterialToModel.bind(this);
    this.setMixer             = this.setMixer.bind(this);
    this.retrySetMixer        = this.retrySetMixer.bind(this);
    this.playAnim             = this.playAnim.bind(this);
    
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
  
  setMixer()
  {
    if (gltf === null || !gltf.scene)
    {
      this.retrySetMixer();
      return false;
    }

    let mixer = new AnimationMixer(gltf.scene);
    this.setState({ mixer: mixer });
    //console.log('mixer setted: '+mixer);
    return true;
  }//END setMixer

  retrySetMixer()
  {
    console.log('gltf not loaded yet, retry set mixer is pending...');
    setTimeout(
      function () {
      
        this.setMixer();
      }
      .bind(this),
      retryInterval
    );
  }//END retrySetMixer

  componentDidMount()
  {
    this.setMixer();
    //this.playAnim();
  }//END componentDidMount


  playAnim()
  {
    //console.log('playAnim');
    if (this.state.mixer != null)
    {

      this.state.mixer.clipAction(gltf.animations[1]).play();
    }
    else
    {
      this.setMixer();
      setTimeout(
        function () {

          this.playAnim();
        }
          .bind(this),
        retryInterval
      );
    }


  }//END playAnim


  render()
  {
      let useFrameLogicDOM = null
      if (this.state.mixer != null) 
      {
        useFrameLogicDOM = <><UseFrameLogic parent={this} mixer={this.state.mixer} /></>
      }//END if

      return (
          <Suspense fallback={<>Loading...</>} r3f>
            <Texture parent={this} />
            <Asset url="/ninja/ninja.gltf" />
            {useFrameLogicDOM}
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
  

  return null
}//END Texture

function UseFrameLogic(props)
{
  useFrame((state, delta) => {
    props.mixer?.update(delta)
  })
  return null;
}//END UseFrameLogic
