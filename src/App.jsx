import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";
import "./App.css";
import MyElement01 from "./MyElement_01";
import MyElement02 from "./MyElement_02";

function App() {
  return (
    <Canvas>
      {/* <MyElement3D /> */}
      <MyElement02 />
    </Canvas>
  );
}

export default App;
