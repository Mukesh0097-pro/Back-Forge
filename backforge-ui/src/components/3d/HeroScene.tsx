import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { DataWave } from './DataWave'

export function HeroScene() {
    return (
        <div className="w-full h-full absolute top-0 left-0 -z-10">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 8, 25]} fov={55} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 3}
                />

                {/* Lighting */}
                <ambientLight intensity={0.2} />

                {/* Background Stars */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                {/* Main Data Wave */}
                <DataWave />
            </Canvas>
        </div>
    )
}
