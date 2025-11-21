import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

interface APILinesProps {
    count?: number
    color?: string
}

export function APILines({ count = 10, color = '#60A5FA' }: APILinesProps) {
    const groupRef = useRef<THREE.Group>(null)

    const lines = Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2
        const radius = 2
        const start: [number, number, number] = [
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            0
        ]
        const end: [number, number, number] = [0, 0, 0]

        return { start, end }
    })

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.z = state.clock.elapsedTime * 0.1
        }
    })

    return (
        <group ref={groupRef}>
            {lines.map((line, i) => (
                <Line
                    key={i}
                    points={[line.start, line.end]}
                    color={color}
                    lineWidth={1}
                    transparent
                    opacity={0.6}
                />
            ))}
        </group>
    )
}
