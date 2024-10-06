import {
  MeshDiscardMaterial,
  MeshDistortMaterial,
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  shaderMaterial,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

export default function MyElement05() {
  const textures = useTexture({
    map: "../../public/images/Stylized_Bricks_005_basecolor.png",
    roughnessMap: "../../public/images/Stylized_Bricks_005_roughness.png",
    normalMap: "../../public/images/Stylized_Bricks_005_normal.png",
    displacementMap: "../../public/images/Stylized_Bricks_005_height.png",
  });
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh>
        <sphereGeometry />
        <meshStandardMaterial
          map={textures.map}
          roughnessMap={textures.roughnessMap}
          normalMap={textures.normalMap}
          normalScale={1}
          displacementMap={textures.displacementMap}
          displacementScale={0.1}
          displacementBias={-0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
