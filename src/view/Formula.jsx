/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SDC (https://sketchfab.com/3Duae)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/free-formula-one-lp-830-sdc-aeebdfa53e294e0390f3c2e8bbfe31b6
title: ( FREE ) Formula One LP-830 SDC
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ children, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./asset3/formula.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={10}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials["Material.012"]}
          />
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.88}>
            <mesh
              geometry={nodes.Object_12.geometry}
              material={nodes.Object_12.material}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              material={nodes.Object_13.material}
            />
            <mesh
              geometry={nodes.Object_14.geometry}
              material={nodes.Object_14.material}
            />
            <mesh
              geometry={nodes.Object_15.geometry}
              material={nodes.Object_15.material}
            />
            <mesh
              geometry={nodes.Object_16.geometry}
              material={nodes.Object_16.material}
            />
            <mesh
              geometry={nodes.Object_17.geometry}
              material={nodes.Object_17.material}
            />
          </group>
          <group
            position={[0, 0, -2.66]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.88}
          >
            <mesh
              geometry={nodes.Object_19.geometry}
              material={nodes.Object_19.material}
            />
            <mesh
              geometry={nodes.Object_20.geometry}
              material={nodes.Object_20.material}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={nodes.Object_21.material}
            />
            <mesh
              geometry={nodes.Object_22.geometry}
              material={nodes.Object_22.material}
            />
            <mesh
              geometry={nodes.Object_23.geometry}
              material={nodes.Object_23.material}
            />
            <mesh
              geometry={nodes.Object_24.geometry}
              material={nodes.Object_24.material}
            />
          </group>
        </group>
        {children}
      </group>
    </group>
  );
}

useGLTF.preload("./asset3/formula.gltf");
