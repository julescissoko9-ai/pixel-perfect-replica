import { Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function GlassMaterial() {
  return (
    <meshPhysicalMaterial
      transmission={1}
      roughness={0.1}
      thickness={2}
      ior={1.5}
      metalness={0.04}
      clearcoat={1}
      clearcoatRoughness={0.08}
      attenuationDistance={4}
      transparent
      opacity={0.84}
    />
  );
}

function GlassKey() {
  const keyRef = useRef<THREE.Group>(null);

  useFrame(({ clock }, rawDelta) => {
    const key = keyRef.current;
    if (!key) return;
    const delta = Math.min(rawDelta, 0.05);
    key.rotation.y += delta * 0.11;
    key.rotation.z = Math.sin(clock.elapsedTime * 0.22) * 0.08 - 0.12;
    key.position.y = Math.sin(clock.elapsedTime * 0.32) * 0.12;
  });

  return (
    <group ref={keyRef} rotation={[0.18, -0.42, -0.12]} scale={1.18}>
      <mesh position={[-1.85, 0, 0]} castShadow>
        <torusGeometry args={[1.05, 0.28, 48, 128]} />
        <GlassMaterial />
      </mesh>
      <mesh position={[0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 3.5, 48]} />
        <GlassMaterial />
      </mesh>
      <mesh position={[2.18, -0.3, 0]} castShadow>
        <boxGeometry args={[0.58, 0.86, 0.5]} />
        <GlassMaterial />
      </mesh>
      <mesh position={[1.58, -0.43, 0]} castShadow>
        <boxGeometry args={[0.42, 0.6, 0.5]} />
        <GlassMaterial />
      </mesh>
    </group>
  );
}

export function GlassKeyCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div aria-hidden className="absolute inset-0" />;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-65">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8.5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 7, 6]} intensity={3.4} />
        <pointLight position={[-4, -2, 4]} intensity={2.6} />
        <GlassKey />
        <Environment resolution={64}>
          <Lightformer intensity={4} position={[0, 5, 2]} scale={[8, 2, 1]} />
          <Lightformer intensity={2} position={[-5, 0, 2]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} />
          <Lightformer intensity={3} position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[6, 2, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}