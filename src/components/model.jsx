import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { damp } from 'three/src/math/MathUtils';

export default function Model({
  modelUrl="",
  rotation=[-0.01, 0.02, -0.1],
  animate=false,
  rotationSpeed=1
}) {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const modelRef = useRef();

  useFrame(
    (state, delta) => {
      if (animate) {
        const modelRotationY = modelRef.current.rotation.y;
        modelRef.current.rotation.y = damp(modelRotationY, modelRotationY + rotationSpeed, 1, delta);
      }
    }
  );

  return (
    <group>
      <primitive
        scale={1}
        position={[0, -3.5, -1.5]}
        rotation={rotation}
        object={gltf.scene}
        ref={modelRef}
      />
    </group>
  );
};