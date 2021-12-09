import React, { useState } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrthographicCamera,
  ScrollControls,
  CameraShake,
} from "@react-three/drei";
import FormulaComponent from "./components/Formula";
import LamborghiniModel from "./components/Lamborghini";

function Rig() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 10, 60), 0.05));
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
}

export default function Scene() {
  return (
    <div>
      <Canvas
        shadows
        dpr={window.devicePixelRatio}
        style={{ width: "100vw", height: "100vh" }}
      >
        <color attach="background" args={["#111"]} />
        <OrthographicCamera
          makeDefault
          position={new THREE.Vector3(0, 20, 40)}
          zoom={10}
        />
        <ambientLight intensity={0.8} />
        <spotLight
          intensity={5}
          position={[-10 * 10, 0, 2.5 * 10]}
          angle={Math.PI / 7}
        />
        <ScrollControls pages={5}>
          <FormulaComponent />
          {/*<LamborghiniModel />*/}
        </ScrollControls>
        <Rig />
      </Canvas>
    </div>
  );
}
