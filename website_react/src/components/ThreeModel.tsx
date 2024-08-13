import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';


const Model = ({ url, scale, position, rotation,
  }: { 
  url: string, 
  scale: number, 
  position: number[];
  rotation: number[];
}) => {
  const groupRef = useRef(null);
  const { scene } = useGLTF(url);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.4;

      groupRef.current,rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={scale} 
        position={position} 
        rotation={rotation}
      />
    </group>
  )
}

const ThreeModal = () => {
  return (
    <motion.div 
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.8,
        delay: 0.9,
        stiffness: 200,
      }}
    className='w-full h-[500px]'>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={3} />
        <Model 
          url="/src/assets//models/scene.gltf" 
          scale={2} 
          position={[3, 0.2, 1.4]}
          rotation={[Math.PI / 10, 0, Math.PI / 6]}
        />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
}
export default ThreeModal;