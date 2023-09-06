import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {ScrollControls} from "@react-three/drei";
import {Overlay} from "./components/Overlay.jsx";

function App() {
  return (
    <>
      <Canvas >
        <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={10} damping={1}>
              <Experience />
          </ScrollControls>
      </Canvas>
        {/*<Overlay/>*/}
    </>
  );
}

export default App;
