import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function DataWave() {
    const pointsRef = useRef<THREE.Points>(null)
    const count = 4000 // Increased density

    // Generate grid of points
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const color1 = new THREE.Color('#00F3FF') // Cyan
        const color2 = new THREE.Color('#D946EF') // Fuchsia for better contrast

        let i = 0
        // denser grid
        for (let x = 0; x < 80; x++) {
            for (let z = 0; z < 50; z++) {
                // Grid position centered
                positions[i * 3] = (x - 40) * 1.2
                positions[i * 3 + 1] = 0
                positions[i * 3 + 2] = (z - 25) * 1.2

                // Mix colors based on position
                const mixedColor = color1.clone().lerp(color2, x / 80)
                colors[i * 3] = mixedColor.r
                colors[i * 3 + 1] = mixedColor.g
                colors[i * 3 + 2] = mixedColor.b

                i++
            }
        }
        return { positions, colors }
    }, [])

    useFrame((state) => {
        if (pointsRef.current) {
            const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
            const t = state.clock.elapsedTime

            let i = 0
            for (let x = 0; x < 80; x++) {
                for (let z = 0; z < 50; z++) {
                    // More dramatic wave movement
                    const y = Math.sin(x * 0.15 + t) * 3 + Math.sin(z * 0.2 + t * 0.8) * 2

                    positions[i * 3 + 1] = y
                    i++
                }
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true
        }
    })

    return (
        <Points ref={pointsRef} positions={particles.positions} colors={particles.colors} stride={3}>
            <PointMaterial
                transparent
                vertexColors
                size={0.25} // Larger particles
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.9} // Higher opacity
                blending={THREE.AdditiveBlending}
            />
        </Points>
    )
}
