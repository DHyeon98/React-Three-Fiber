import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MyElement03() {
  const mesh1 = useRef();
  const mesh2 = useRef();
  useEffect(() => {
    mesh2.current.material = mesh1.current.material;
  }, []);
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh ref={mesh1} position={[-0.7, 0.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial
          color="#ffff00"
          wireframe={false}
          visible={true} // 보일지 안 보일지
          transparent={false} // 투명 효과를 사용할거냐
          opacity={1} // 투명도 값 지종
          depthTest
          depthWrite
          side={THREE.FrontSide} // 어떤 면을 렌더링할 것인지
        />
      </mesh>

      <mesh ref={mesh2} position={[0.7, 0.5, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
}
