import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

export default function MyElement02() {
  const { radius, widthSegments, heightSegments, phiStart, phiLength } =
    useControls({
      radius: { value: 1, min: 0.1, max: 5, step: 0.01 },
      widthSegments: { value: 32, min: 3, max: 256, step: 1 },
      heightSegments: { value: 32, min: 2, max: 256, step: 1 },
      phiStart: { value: 0, min: 0, max: 360, step: 0.1 },
      phiLength: { value: 360, min: 0, max: 360, step: 0.1 },
    });
  return (
    <>
      <directionalLight position={[1, 1, 5]} />
      <OrbitControls />
      <axesHelper />

      <mesh position={[1, 0, 0]}>
        <sphereGeometry
          args={[
            radius,
            widthSegments,
            heightSegments,
            (phiStart * Math.PI) / 180,
            (phiLength * Math.PI) / 180,
          ]}
        />
        <meshStandardMaterial color="#e67e22" />
      </mesh>
    </>
  );
}
