import { OrbitControls, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MyElement03() {
  const mesh1 = useRef();
  const mesh2 = useRef();
  //Matcap은 라이트의 영향을 최소화해야 하는 모바일 게임에서 최적화를 위해 자주 사용되는 '가짜' 라이팅 방식이다.
  const matcap = useTexture("../../public/images/texture_01.jpg");
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
        <torusKnotGeometry args={[0.5, 0.15, 256, 128]} />
        {/* <meshStandardMaterial
          color="#ffff00"
          wireframe={false}
          visible={true} // 보일지 안 보일지
          transparent={false} // 투명 효과를 사용할거냐
          opacity={1} // 투명도 값 지정 0 ~ 1
          side={THREE.FrontSide} // 어떤 면을 렌더링할 것인지
          emissive="red" // 재질 자체에서 발광하는 색
          roughness={0.5} // 거칠기 0 ~ 1
          metalness={1} // 금속성 0 ~ 1
          flatShading // 평면 쉐이딩 사용 여부
        /> */}

        {/* 실제 유리 같은 material */}
        {/* <meshPhysicalMaterial
          color="#ffffff"
          wireframe={false}
          visible={true} // 보일지 안 보일지
          transparent={true} // 투명 효과를 사용할거냐
          opacity={1} // 투명도 값 지정 0 ~ 1
          side={THREE.DoubleSide} // 어떤 면을 렌더링할 것인지
          // emissive="red" // 재질 자체에서 발광하는 색
          roughness={0} // 거칠기 0 ~ 1
          metalness={0.6} // 금속성 0 ~ 1
          flatShading // 평면 쉐이딩 사용 여부
          clearcoat={1} // 코팅 효과 0 ~ 1
          clearcoatRoughness={0.5} // 코팅 거칠기 0 ~ 1
          transmission={0.9} // 광선 투과율 0 ~ 1
          thickness={0.5} // 유리 두께 0 ~ 1
          ior={2} // 굴절률 1.0 ~ 2.333
        /> */}

        {/* matcap은 광원이 필요없다. */}
        {/* <meshMatcapMaterial matcap={matcap} flatShading /> */}

        {/* 메쉬의 법선 벡터를 기반으로 색상을 표시하는 재질입니다 */}
        {/* 주로 디버깅이나 시각적 효과를 위해 사용됩니다. */}
        {/* <meshNormalMaterial /> */}
      </mesh>

      <mesh ref={mesh2} position={[1, 0.5, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
}
