import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Content from './3d/Content'

export default function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" castShadow />
            <pointLight position={[-5, -5, -5]} intensity={5} color="#ff0055" />

            <Scroll>
                <Content />
            </Scroll>

            <Scroll html>
                <div style={{ display: 'flex', width: '500vw', height: '100vh' }}>

                    {/* Section 1: Hero - text hidden visually but available for screen readers */}
                    <section style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 style={{ opacity: 0, position: 'absolute' }}>SUMIRAI SOLUTIONS</h1>
                    </section>

                    {/* Section 2: Meaning */}
                    <section style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                        <div style={{ opacity: 0 }}>Good Future</div>
                    </section>

                    {/* Section 3: Projects */}
                    <section style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    </section>

                    {/* Section 4: Address - HTML Overlay */}
                    <section style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', pointerEvents: 'none' }}>
                        <div style={{ background: 'rgba(5, 5, 5, 0.8)', padding: '3rem', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.1)', pointerEvents: 'auto', backdropFilter: 'blur(10px)', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#ff0055' }}>Visit Us</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Flat No 107, Siri Balaji Towers</p>
                            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Nizampet Village, 1st Floor</p>
                            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Bachupally</p>
                            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Hyderabad 500090, Telangana</p>
                        </div>
                    </section>

                    {/* Section 5: Contact */}
                    <section style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <a href="mailto:info@sumirai.ai" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', textDecoration: 'none', borderBottom: '3px solid #00e5ff', pointerEvents: 'auto' }}>
                            info@sumirai.ai
                        </a>
                    </section>

                </div>
            </Scroll>
        </>
    )
}
