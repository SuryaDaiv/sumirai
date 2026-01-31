import { Text, Float, TorusKnot, Sphere } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Philosophy() {
    const { width } = useThree((state) => state.viewport)
    const xPos = width * 3;

    return (
        <group position={[xPos, 0, 0]}>
            {/* Ambient Elements */}
            <Float speed={2} rotationIntensity={0.5}>
                {/* Sumi (Good) Representation - Organic/Soft */}
                <Sphere args={[1, 32, 32]} position={[-2, 0, 0]}>
                    <meshStandardMaterial
                        color="#00e5ff"
                        roughness={0.1}
                        metalness={0.5}
                        transparent
                        opacity={0.8}
                    />
                </Sphere>

                {/* Mirai (Future) Representation - Complex/Tech */}
                <TorusKnot args={[0.8, 0.2, 100, 16]} position={[2, 0, 0]}>
                    <meshStandardMaterial
                        color="#7000ff"
                        roughness={0}
                        metalness={1}
                    />
                </TorusKnot>
            </Float>

            {/* Text */}
            <group position={[0, -2, 0]}>
                <Text fontSize={0.8} position={[-2, 0.5, 0]} color="#ffffff">
                    SUMI (Good)
                </Text>
                <Text fontSize={0.8} position={[2, 0.5, 0]} color="#ffffff">
                    MIRAI (Future)
                </Text>
                <Text fontSize={0.4} position={[0, -1, 0]} color="#cccccc" maxWidth={6} textAlign="center">
                    We believe technology should not just be advanced, it should be meaningful.
                </Text>
            </group>
        </group>
    )
}
