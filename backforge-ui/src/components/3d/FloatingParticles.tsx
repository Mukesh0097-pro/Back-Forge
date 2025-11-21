import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingParticlesProps {
    count?: number
    radius?: number
    color?: string
}

export function FloatingParticles({
    count = 500,
    radius = 5,
    color = '#22D3EE'
}: FloatingParticlesProps) {
    const pointsRef = useRef<THREE.Points>(null)

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.random() * Math.PI
            const r = radius * Math.random()

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = r * Math.cos(phi)
        }

        return positions
    }, [count, radius])

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
        }
    })

    return (
        <Points ref={pointsRef} positions={particles} stride={3}>
            <PointMaterial
                transparent
                color={color}
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    )
}
