import { Text, Float, Line } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function WhatWeDo() {
    const { width } = useThree((state) => state.viewport)
    const xPos = width; // Second section

    // Path Points
    const leftPath = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-2, 1, -2),
        new THREE.Vector3(-3, -1, -4),
        new THREE.Vector3(-1, 2, -6)
    ]
    const rightPath = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(2, 0, -2),
        new THREE.Vector3(2, 0, -4),
        new THREE.Vector3(2, 0, -6)
    ]

    return (
        <group position={[xPos, 0, 0]}>
            {/* Title */}
            <Text fontSize={1} position={[0, 3, 0]} color="#ffffff" anchorX="center">
                WHAT WE DO
            </Text>

            {/* LEFT PATH - INNOVATION */}
            <group position={[-width / 4, 0, 0]}>
                <Float speed={3} rotationIntensity={0.5}>
                    <Text fontSize={0.5} position={[0, 2, 0]} color="#00e5ff">
                        SELF DRIVEN INNOVATION
                    </Text>
                    <Line points={leftPath} color="#00e5ff" lineWidth={5} dashed={false} />
                    {/* Abstract Nodes */}
                    <mesh position={[-2, 1, -2]}>
                        <icosahedronGeometry args={[0.5, 0]} />
                        <meshStandardMaterial color="#00e5ff" wireframe />
                    </mesh>
                </Float>
            </group>

            {/* RIGHT PATH - CLIENT */}
            <group position={[width / 4, 0, 0]}>
                <Text fontSize={0.5} position={[0, 2, 0]} color="#7000ff">
                    CLIENT SOLUTIONS
                </Text>
                <Line points={rightPath} color="#7000ff" lineWidth={5} />
                {/* Structured Panels */}
                <mesh position={[2, 0, -2]}>
                    <boxGeometry args={[1, 1.5, 0.1]} />
                    <meshStandardMaterial color="#7000ff" transparent opacity={0.5} />
                </mesh>
                <mesh position={[2, 0, -4]}>
                    <boxGeometry args={[1, 1.5, 0.1]} />
                    <meshStandardMaterial color="#7000ff" transparent opacity={0.5} />
                </mesh>
            </group>
        </group>
    )
}
