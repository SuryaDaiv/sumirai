import { Text, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Contact() {
    const { width } = useThree((state) => state.viewport)
    const xPos = width * 5;

    return (
        <group position={[xPos, 0, 0]}>
            {/* Ground */}
            <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.8} />
            </mesh>

            <Float speed={1} rotationIntensity={0.1}>
                <Text fontSize={1.5} position={[0, 3, 0]} color="#00e5ff">
                    START A PROJECT
                </Text>

                <Text fontSize={1} position={[0, 1.5, 0]} color="#ffffff" onClick={() => window.location.href = 'mailto:info@sumirai.ai'}>
                    info@sumirai.ai
                    <meshStandardMaterial emissive="#ffffff" emissiveIntensity={0.5} />
                </Text>

                {/* Address Block */}
                <group position={[0, -1, 0]}>
                    <mesh position={[0, 0, -0.1]}>
                        <planeGeometry args={[8, 4]} />
                        <meshStandardMaterial color="#111" transparent opacity={0.8} />
                    </mesh>
                    <Text fontSize={0.3} color="#cccccc" textAlign="center" lineHeight={1.5}>
                        {`Flat No. 107, Siri Balaji Towers\nNizampet Village, 1st Floor\nBachupally, Hyderabad – 500090\nTelangana, India`}
                    </Text>
                </group>
            </Float>
        </group>
    )
}
