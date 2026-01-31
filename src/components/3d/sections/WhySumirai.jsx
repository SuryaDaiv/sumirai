import { Text, Float, Ring } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function WhySumirai() {
    const { width } = useThree((state) => state.viewport)
    const xPos = width * 4;

    const rings = Array.from({ length: 5 }).map((_, i) => ({
        z: -i * 2,
        scale: 1 + i * 0.5
    }))

    return (
        <group position={[xPos, 0, 0]}>
            <Text fontSize={1.5} position={[0, 3, 0]} color="#ffffff">
                WHY SUMIRAI?
            </Text>

            {/* Tunnel Effect */}
            <group rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -5]}>
                {rings.map((r, i) => (
                    <Ring key={i} args={[2 * r.scale, 2.1 * r.scale, 32]} position={[0, 0, r.z]}>
                        <meshStandardMaterial color={i % 2 === 0 ? "#00e5ff" : "#7000ff"} emissive={i % 2 === 0 ? "#00e5ff" : "#7000ff"} emissiveIntensity={2} />
                    </Ring>
                ))}
            </group>

            {/* Floating Points */}
            <Float speed={4} rotationIntensity={0.2} floatIntensity={0.5}>
                <Text fontSize={0.5} position={[-3, 1, 0]} color="#ffffff">Future-Focused</Text>
                <Text fontSize={0.5} position={[3, 0, 0]} color="#ffffff">Clean Code</Text>
                <Text fontSize={0.5} position={[-2, -2, 0]} color="#ffffff">Scalable</Text>
                <Text fontSize={0.5} position={[2, 2, 0]} color="#ffffff">Partnership</Text>
            </Float>
        </group>
    )
}
