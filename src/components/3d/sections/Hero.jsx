import { Text, Float, Sparkles } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Hero() {
    const { width } = useThree((state) => state.viewport)

    return (
        <group position={[0, 0, 0]}>
            {/* Background Particles specific to Hero */}
            <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#00e5ff" />

            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Main Title */}
                <Text
                    fontSize={width > 10 ? 1.5 : 0.8}
                    position={[0, 1, 0]}
                    font={undefined} // Use default/system font
                    anchorX="center"
                    anchorY="middle"
                >
                    SUMIRAI SOLUTIONS
                    <meshStandardMaterial color="#ffffff" emissive="#7000ff" emissiveIntensity={0.5} toneMapped={false} />
                </Text>

                {/* Subtitle */}
                <Text
                    fontSize={width > 10 ? 0.5 : 0.3}
                    position={[0, -0.5, 0]}
                    font={undefined}
                    anchorX="center"
                    anchorY="middle"
                    color="#00e5ff"
                >
                    Building Good Futures Through Technology
                </Text>
            </Float>

            {/* Abstract Shape - Glowing Sphere/Orb */}
            <Float speed={5} rotationIntensity={1}>
                <mesh position={[0, 0, -2]} scale={[2, 2, 2]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color="#050505"
                        emissive="#7000ff"
                        emissiveIntensity={0.2}
                        roughness={0.1}
                        metalness={1}
                        wireframe
                    />
                </mesh>
            </Float>
        </group>
    )
}
