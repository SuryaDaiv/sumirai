import { Scroll, useScroll, Stars } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import Hero from './sections/Hero'
import WhatWeDo from './sections/WhatWeDo'
import Services from './sections/Services'
import Philosophy from './sections/Philosophy'
import WhySumirai from './sections/WhySumirai'
import Contact from './sections/Contact'

export default function MainScene() {
    return (
        <>
            {/* Global Environment */}
            <color attach="background" args={['#050505']} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#00e5ff" />
            <pointLight position={[-10, -10, -10]} intensity={2} color="#7000ff" />
            <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />

            {/* Content */}
            <Scroll>
                <Hero />
                <WhatWeDo />
                <Services />
                <Philosophy />
                <WhySumirai />
                <Contact />
            </Scroll>

            {/* Post Processing */}
            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.6} />
                <Noise opacity={0.05} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </>
    )
}
