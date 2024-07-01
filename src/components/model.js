
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export default function Model() {
  const gltf = useLoader(GLTFLoader, "./black_table/scene.gltf");

  return (
    <group>
      <primitive
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        object={gltf.scene}
      />
    </group>
  );
};