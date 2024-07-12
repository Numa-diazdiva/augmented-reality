import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { damp } from 'three/src/math/MathUtils';

export default function Model({
  modelUrl=""
}) {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const modelRef = useRef();

  useFrame(
    (state, delta) => {
      const modelRotationY = modelRef.current.rotation.y;
      modelRef.current.rotation.y = damp(modelRotationY, modelRotationY + 1, 1, delta);
    }
  );

  return (
    <group>
      <primitive
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        object={gltf.scene}
        ref={modelRef}
      />
    </group>
  );
};