import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  useScroll,
  OrthographicCamera,
  ScrollControls,
} from "@react-three/drei";
import useRefs from "react-use-refs";
import FormulaModel from "./components/Formula";

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

function FormulaComponent({ ...props }) {
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const [group, keyLight, stripLight, fillLight] = useRefs();
  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 1 / 4);
    const r2 = scroll.range(1 / 4, 1 / 4);
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      (-Math.PI / 1.45) * r2,
      4,
      delta
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      (-width / 7) * r2,
      4,
      delta
    );
    group.current.scale.x =
      group.current.scale.y =
      group.current.scale.z =
        THREE.MathUtils.damp(
          group.current.scale.z,
          1 + 0.24 * (1 - rsqw(r1)),
          4,
          delta
        );
    keyLight.current.position.set(
      0.25 + -15 * (1 - r1),
      4 + 11 * (1 - r1),
      3 + 2 * (1 - r1)
    );
  });

  return (
    <>
      <spotLight position={[0, -width * 0.7, 0]} intensity={0.5} />
      <directionalLight ref={keyLight} castShadow intensity={6}>
        <orthographicCamera
          attachObject={["shadow", "camera"]}
          args={[-10, 10, 10, -10, 0.5, 30]}
        />
      </directionalLight>
      <group ref={group} position={[0, -height / 4, 0]} {...props}>
        <spotLight
          ref={stripLight}
          position={[width * 2.5, 0, width]}
          angle={0.19}
          penumbra={1}
          intensity={0.25}
        />
        <spotLight
          ref={fillLight}
          position={[0, -width / 2.4, -width * 2.2]}
          angle={0.2}
          penumbra={1}
          intensity={2}
          distance={width * 3}
        />
        <Suspense fallback={null}>
          <FormulaModel />
        </Suspense>
      </group>
    </>
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
        </ScrollControls>
      </Canvas>
    </div>
  );
}
