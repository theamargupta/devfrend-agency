"use client";

/**
 * HeroScene — DA-13
 * R3F canvas. Dynamically imported with ssr:false so three.js is not in
 * the main bundle (DA-25 lazy-load).
 */

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import ParticleField from "./ParticleField";
import GeometricAccent from "./GeometricAccent";
import ShaderBlob from "./ShaderBlob";

export default function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(61,75,255,0.35) 0%, rgba(5,5,7,0) 60%)",
        }}
      />
    );
  }

  return (
    <div aria-hidden className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance", preserveDrawingBuffer: true }}
      >
        <color attach="background" args={["#050507"]} />
        <fog attach="fog" args={["#050507", 7, 18]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} />
        <ShaderBlob />
        <ParticleField count={2400} radius={7} />
      </Canvas>
    </div>
  );
}
