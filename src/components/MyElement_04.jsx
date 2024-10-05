import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";

export default function MyElement04() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        {/* 반사 효과를 구현하는 데 사용 */}
        {/* <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={30}
          roughness={1}
          depthScale={0.5}
          minDepthThreshold={0.5}
          maxDepthThreshold={1.4}
          color="#ffffff"
          metalness={0.1}
        /> */}
      </mesh>

      <mesh position={[0, 0.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="cyan" />
      </mesh>
    </>
  );
}
