import { useThree } from '@react-three/fiber'
import { Text, Float, Stars, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

export default function Content() {
    const { width } = useThree((state) => state.viewport)

    return (
        <>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* SECTION 1: HERO (x = 0) */}
            <group position={[0, 0, 0]}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text
                        fontSize={width / 10} /* Responsive font size */
                        font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff"
                        position={[0, 1, 0]}
                        color="#ff0055"
                        anchorX="center"
                        anchorY="middle"
                    >
                        SUMIRAI
                        <meshStandardMaterial emissive="#ff0055" emissiveIntensity={2} color="#ff0055" toneMapped={false} />
                    </Text>
                    <Text
                        fontSize={width / 30}
                        position={[0, -1, 0]}
                        color="#ffffff"
                        font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff"
                    >
                        SOLUTIONS
                    </Text>
                </Float>
                <Sparkles count={50} scale={10} size={5} speed={0.4} opacity={0.5} color="#ff0055" />
            </group>

            {/* SECTION 2: MEANING (x = width) */}
            <group position={[width, 0, 0]}>
                <Float floatIntensity={1} speed={3}>
                    {/* Abstract visual for Good + Future */}
                    <mesh position={[-2, 0, 0]}>
                        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                        <meshPhysicalMaterial
                            color="#00e5ff"
                            roughness={0}
                            metalness={1}
                            transmission={0.5}
                            thickness={2}
                        />
                    </mesh>
                    <Text
                        fontSize={1}
                        position={[2, 0.5, 0]}
                        color="#ffffff"
                        anchorX="left"
                        maxWidth={4}
                        font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff"
                    >
                        GOOD (SUMI)
                    </Text>
                    <Text
                        fontSize={1}
                        position={[2, -0.5, 0]}
                        color="#ffffff"
                        anchorX="left"
                        maxWidth={4}
                        font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff"
                    >
                        FUTURE (RAI)
                    </Text>
                </Float>
            </group>

            {/* SECTION 3: PROJECTS (x = 2 * width) */}
            <group position={[width * 2, 0, 0]}>
                <Text fontSize={2} position={[0, 2, 0]} color="#ffffff" font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff">
                    WHAT WE DO
                </Text>

                {/* Project 1 */}
                <mesh position={[-3, -1, 0]}>
                    <boxGeometry args={[2, 3, 0.2]} />
                    <meshStandardMaterial color="#ff0055" />
                </mesh>
                <Text position={[-3, -3, 0]} fontSize={0.3} color="white" font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff">WEBSITES</Text>

                {/* Project 2 */}
                <mesh position={[0, -1, 0]}>
                    <boxGeometry args={[2, 3, 0.2]} />
                    <meshStandardMaterial color="#00e5ff" />
                </mesh>
                <Text position={[0, -3, 0]} fontSize={0.3} color="white" font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff">APPLICATIONS</Text>

                {/* Project 3 */}
                <mesh position={[3, -1, 0]}>
                    <boxGeometry args={[2, 3, 0.2]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
                <Text position={[3, -3, 0]} fontSize={0.3} color="white" font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff">SELF PROJECTS</Text>
            </group>

            {/* SECTION 4: ADDRESS (x = 3 * width) */}
            <group position={[width * 3, 0, 0]}>
                {/* 3D Building Representation */}
                <mesh position={[0, -2, -2]} rotation={[-Math.PI / 4, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="#1a1a1a" wireframe />
                </mesh>

                <mesh position={[0, 0, 0]}>
                    <coneGeometry args={[1, 2, 4]} />
                    <meshStandardMaterial color="#ff0055" />
                </mesh>
            </group>

            {/* SECTION 5: CONTACT (x = 4 * width) */}
            <group position={[width * 4, 0, 0]}>
                <Float speed={5}>
                    <Text fontSize={1.5} color="#00e5ff" font="https://fonts.gstatic.com/s/outfit/v6/QGYyz_MVcBeNP4NjuGObqx1XmO1I.woff">
                        GET IN TOUCH
                    </Text>
                </Float>
            </group>

        </>
    )
}
