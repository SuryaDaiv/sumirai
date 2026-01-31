import { Text, Float, RoundedBox } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Services() {
    const { width } = useThree((state) => state.viewport)
    const xPos = width * 2; // Third section

    const services = [
        { title: "WEB DEV", color: "#00e5ff", pos: [-3, 1, 0] },
        { title: "MOBILE APPS", color: "#7000ff", pos: [0, 1, 0] },
        { title: "PRODUCT DESIGN", color: "#00e5ff", pos: [3, 1, 0] },
        { title: "CUSTOM SOFT", color: "#7000ff", pos: [-1.5, -1.5, 0] },
        { title: "END-TO-END", color: "#ffffff", pos: [1.5, -1.5, 0] }
    ]

    return (
        <group position={[xPos, 0, 0]}>
            <Text fontSize={1.2} position={[0, 3.5, 0]} color="#ffffff">
                OUR SERVICES
            </Text>

            {services.map((s, i) => (
                <Float key={i} speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={s.pos}>
                    <group>
                        <RoundedBox args={[2.5, 1.5, 0.2]} radius={0.1} smoothness={4}>
                            <meshPhysicalMaterial
                                color="#050505"
                                emissive={s.color}
                                emissiveIntensity={0.5}
                                roughness={0.2}
                                metalness={0.8}
                                transmission={0.2}
                                thickness={1}
                            />
                        </RoundedBox>
                        <Text fontSize={0.3} position={[0, 0, 0.15]} color="#ffffff">
                            {s.title}
                        </Text>
                    </group>
                </Float>
            ))}
        </group>
    )
}
