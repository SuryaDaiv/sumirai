import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { Suspense } from 'react'
import Scene from './components/Scene'

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={['#050505']} />
        <Suspense fallback={null}>
          <ScrollControls pages={5} horizontal damping={0.1}>
             <Scene />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
