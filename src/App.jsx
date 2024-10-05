import { Canvas } from "@react-three/fiber";
import "./App.css";
import MyElement03 from "./components/MyElement_03";

function App() {
  return (
    <Canvas
    // camera={{ near: 3.5, far: 6 }}
    >
      {/* <MyElement3D /> */}
      <MyElement03 />
    </Canvas>
  );
}

export default App;
