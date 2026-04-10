"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function RotatingStars() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });
  return (
    <Stars
      ref={ref}
      radius={120}
      depth={60}
      count={6000}
      factor={4}
      saturation={0}
      fade
      speed={0.5}
    />
  );
}

export default function Scene3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  );
}
