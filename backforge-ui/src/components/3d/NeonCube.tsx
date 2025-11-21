import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface NeonCubeProps {
    position?: [number, number, number]
    size?: number
    color?: string
    rotationSpeed?: number
}

export function NeonCube({
    position = [0, 0, 0],
    size = 1,
    color = '#3B82F6',
    rotationSpeed = 0.01
}: NeonCubeProps) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed
            meshRef.current.rotation.y += rotationSpeed
        }
    })

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                wireframe={false}
                transparent
                opacity={0.8}
            />
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(size, size, size)]} />
                <lineBasicMaterial color={color} />
            </lineSegments>
        </mesh>
    )
}
