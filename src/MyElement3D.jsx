import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { radianConversion } from "./radianConversion";
import * as THREE from "three";

/**
 * rotation
 * 각도 단위를 라디안으로 변경하기 위해서는
 * 각도 * Math.PI / 180을 해야한다.
 * rotation={[0, (45 * Math.PI) / 180, 0]}
 */

// 두 개의 값은 같다
//   THREE.MathUtils.degToRad(45);
//   (45 * Math.PI) / 180;

export default function MyElement3D() {
  const refMesh = useRef();

  useFrame((state, delta) => {
    refMesh.current.rotation.z += 0.005;
  });
  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <axesHelper scale={10} />
      <OrbitControls />

      <mesh
        ref={refMesh}
        // position-x={2}
        position={[0, 2, 0]}
        rotation={[0, 0, radianConversion(45)]}
        scale={[2, 1, 1]}
      >
        <boxGeometry />
        <meshStandardMaterial color="#e67e22" opacity={0.5} transparent />
        <axesHelper />

        {/* 부모 mesh 위치의 영향을 받는다 */}
        <mesh scale={[0.1, 0.1, 0.1]} position-y={2}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
          <axesHelper scale={5} />
        </mesh>
      </mesh>
    </>
  );
}
