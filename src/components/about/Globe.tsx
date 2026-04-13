"use client";

/**
 * Globe — DA-23
 * Lightweight WebGL globe — wireframe sphere + accent-colored dot ring.
 * Deliberately not using drei's <Globe> to stay under bundle budget.
 */

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PALETTE } from "@/lib/constants";

function Sphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.6, 48, 48]} />
      <meshBasicMaterial color={PALETTE.primary[500]} wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function Dots() {
  const groupRef = useRef<THREE.Group>(null);
  const dots = [];
  const count = 64;
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    const x = 1.63 * Math.sin(phi) * Math.cos(theta);
    const y = 1.63 * Math.sin(phi) * Math.sin(theta);
    const z = 1.63 * Math.cos(phi);
    dots.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color={PALETTE.accent[400]} />
      </mesh>
    );
  }
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.15;
  });
  return <group ref={groupRef}>{dots}</group>;
}

export default function Globe() {
  return (
    <div className="h-[50vh] w-full md:h-[60vh]" aria-label="Globe visualization: available worldwide">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.75]}>
        <Sphere />
        <Dots />
      </Canvas>
    </div>
  );
}
