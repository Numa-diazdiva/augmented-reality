import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export default function Model({
  modelUrl="",
  rotation=[-0.01, 0.02, -0.1]
}) {
  const gltf = useLoader(GLTFLoader, modelUrl);

  return (
    <group>
      <primitive
        scale={1}
        position={[0, -3.5, -1.5]}
        rotation={rotation}
        object={gltf.scene}
      />
    </group>
  );
};