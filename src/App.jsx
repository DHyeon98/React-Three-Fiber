import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";
import "./App.css";
import MyElement01 from "./MyElement_01";

function App() {
  return (
    <Canvas>
      {/* <MyElement3D /> */}
      <MyElement01 />
    </Canvas>
  );
}

export default App;
