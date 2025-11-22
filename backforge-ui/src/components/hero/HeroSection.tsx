import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HeroScene } from '../3d/HeroScene'

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep">
            {/* 3D Background Scene */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <HeroScene />
            </div>

            {/* Overlay gradient for readability */}
            <div className="absolute inset-0 bg-bg-deep/60 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 backdrop-blur-md"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-text-secondary">Production-Ready Backend Templates</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl lg:text-8xl font-bold font-display leading-tight tracking-tight"
                    >
                        Build Backends
                        <br />
                        <span className="text-gradient-primary">10x Faster</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-text-secondary max-w-2xl mx-auto"
                    >
                        Skip the boilerplate. Start with battle-tested templates for Node.js, Python, Go, and more.
                        Deploy production-ready APIs in minutes, not weeks.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link to="/templates" className="btn-primary inline-flex items-center justify-center space-x-2 group px-8 py-4 text-lg">
                            <span>Browse Templates</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/pricing" className="btn-secondary inline-flex items-center justify-center space-x-2 px-8 py-4 text-lg">
                            <Zap className="w-5 h-5" />
                            <span>View Pricing</span>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
                    >
                        {[
                            { value: '50+', label: 'Templates' },
                            { value: '10k+', label: 'Developers' },
                            { value: '99.9%', label: 'Uptime' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4 rounded-2xl glass border border-white/5">
                                <div className="text-3xl font-bold text-gradient-accent">{stat.value}</div>
                                <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
