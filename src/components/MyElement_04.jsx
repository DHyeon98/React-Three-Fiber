import {
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

export default function MyElement04() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      {/* <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        반사 효과를 구현하는 데 사용
        <MeshReflectorMaterial
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
        />
      </mesh>

      <mesh position={[0, 0.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="cyan" />
      </mesh> */}

      <mesh>
        <sphereGeometry args={[1.4, 128, 128]} />
        {/* 주로 투명한 물체를 모델링하는 데 사용 */}
        <MeshTransmissionMaterial
          transmissionSampler={false} // 전송 샘플러 사용 여부 (false: 기본 전송 방식 사용)
          backside={false} // 반대면 렌더링 여부 (true: 물체의 뒷면도 렌더링)
          samples={10} // 샘플 수, 더 많은 샘플이 더 부드러운 전송 효과를 생성
          resolution={2048} // 텍스처 해상도
          transmission={1} // 전송 강도 (0: 불투명, 1: 완전 투명)
          thickness={3.5} // 두께, 두꺼운 물체일수록 빛의 굴절이 더 강하게 나타남
          roughness={0} // 거칠기, 0일 경우 표면이 매끄러움
          ior={1.4} // 굴절률 (Index of Refraction), 물질의 굴절 정도를 설정 (예: 유리의 굴절률)
          chromaticAberration={0.06} // 색수차 효과, 빛의 색상이 퍼지는 정도
          anisotropy={0.1} // 이방성 효과, 빛의 방향에 따라 물질의 특성이 달라짐
          distortion={0.4} // 왜곡 효과, 0일 경우 왜곡 없음
          distortionScale={0.3} // 왜곡 강도, 값이 클수록 더 강한 왜곡 효과
          temporalDistortion={0.5} // 시간적 왜곡, 애니메이션이나 움직임에서 발생하는 왜곡
          clearcoat={1} // 클리어코트 효과, 투명한 표면 위에 추가적인 광택을 제공
          attenuationDistance={0.5} // 감쇠 거리, 빛의 강도가 얼마나 멀리까지 영향을 미치는지
          attenuationColor="#fff" // 감쇠 색상, 빛이 감쇠될 때 색상
          color="#c9ffa1" // 기본 색상, 재질의 기본 색상
          bg="#839681" // 배경 색상
          background={new THREE.Color("#839681")} // 배경 색상을 THREE.Color 객체로 설정
        />
      </mesh>

      <mesh scale={0.3}>
        <torusGeometry args={[0.5, 0.2, 32]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
