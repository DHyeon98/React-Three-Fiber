import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

export default function MyElement01() {
  const refMesh = useRef();
  const refWireMesh = useRef();

  const { xSize, ySize, zSize } = useControls({
    xSize: { value: 1, min: 0.1, max: 5, strp: 0.01 },
    ySize: { value: 1, min: 0.1, max: 5, strp: 0.01 },
    zSize: { value: 1, min: 0.1, max: 5, strp: 0.01 },
  });

  // useFrame((state, delta) => {
  //   refMesh.current.rotation.z += 0.005;
  // });

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry;
  }, [xSize, ySize, zSize]);
  return (
    <>
      <directionalLight position={[1, 1, 5]} />
      <OrbitControls />

      <mesh ref={refMesh}>
        <boxGeometry args={[xSize, ySize, zSize, 1, 1, 1]} />
        <meshStandardMaterial color="#e67e22" />
      </mesh>

      <mesh ref={refWireMesh}>
        <meshStandardMaterial color="blue" wireframe />
      </mesh>
    </>
  );
}
