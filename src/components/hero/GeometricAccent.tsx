"use client";

/**
 * GeometricAccent — DA-13
 * A single wireframe icosahedron slow-rotating inside the particle field.
 * Anchors the hero composition with a "geometric object" beat.
 */

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PALETTE } from "@/lib/constants";

export default function GeometricAccent() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.12;
    meshRef.current.rotation.y += delta * 0.18;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshBasicMaterial
        color={PALETTE.accent[400]}
        wireframe
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}
