"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Scene3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        {/* Star particle background */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}