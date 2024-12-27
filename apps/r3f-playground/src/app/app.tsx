import { Canvas } from '@react-three/fiber';

export function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
