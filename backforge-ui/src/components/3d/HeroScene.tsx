import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { NeonCube } from './NeonCube'
import { FloatingParticles } from './FloatingParticles'
import { APILines } from './APILines'

export function HeroScene() {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22D3EE" />

                {/* 3D Elements */}
                <NeonCube position={[0, 0, 0]} size={2} color="#3B82F6" rotationSpeed={0.005} />
                <NeonCube position={[3, 1, -2]} size={1} color="#22D3EE" rotationSpeed={0.008} />
                <NeonCube position={[-3, -1, -2]} size={0.8} color="#A78BFA" rotationSpeed={0.006} />

                <FloatingParticles count={300} radius={6} color="#22D3EE" />
                <APILines count={12} color="#60A5FA" />
            </Canvas>
        </div>
    )
}
