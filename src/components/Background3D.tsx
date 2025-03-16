import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, Vector3 } from 'three';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';

function FloatingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    position: [
      Math.random() * 40 - 20,
      Math.random() * 40 - 20,
      Math.random() * 40 - 20
    ],
    scale: Math.random() * 0.5 + 0.2
  }));

  return (
    <>
      {particles.map((particle, i) => (
        <Float
          key={i}
          speed={Math.random() * 2 + 1}
          rotationIntensity={Math.random()}
          floatIntensity={Math.random() * 2}
        >
          <mesh position={particle.position as Vector3}>
            <octahedronGeometry args={[particle.scale]} />
            <MeshDistortMaterial
              color="#4299e1"
              speed={2}
              distort={0.3}
              radius={1}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function InteractiveSphere() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Pulse effect when hovered
      const scale = hovered 
        ? 1 + Math.sin(state.clock.getElapsedTime() * 4) * 0.1 
        : 1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[2, 64, 64]} />
      <MeshDistortMaterial
        color={hovered ? "#60a5fa" : "#3b82f6"}
        speed={3}
        distort={0.4}
        radius={1}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Add a floating motion
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        speed={2}
        distort={0.3}
        radius={1}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-gray-900 to-black">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <InteractiveSphere />
        <AnimatedTorus />
        <FloatingParticles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={2}
          />
          <ChromaticAberration
            offset={[0.002, 0.002]}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}