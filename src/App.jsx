import { Canvas } from "@react-three/fiber";
import "./App.css";
import MyElement03 from "./components/MyElement_03";
import MyElement04 from "./components/MyElement_04";

function App() {
  return (
    <Canvas
    // camera={{ near: 3.5, far: 6 }}
    >
      {/* <MyElement3D /> */}
      <MyElement04 />
    </Canvas>
  );
}

export default App;
