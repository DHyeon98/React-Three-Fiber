import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MyElement3D() {
  const refMesh = useRef();
  useFrame((state, delta) => {
    refMesh.current.rotation.y += 0.005;
  });
  return (
    <>
      <directionalLight position={[1, 1, 1]} />

      <mesh ref={refMesh} rotation={[0, (45 * Math.PI) / 180, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#e67e22" />
      </mesh>
    </>
  );
}
