import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HeroScene } from '../3d/HeroScene'

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-deep via-royal-blue/10 to-bg-deep" />

            {/* Glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-neon-cyan/30"
                        >
                            <Sparkles className="w-4 h-4 text-neon-cyan" />
                            <span className="text-sm text-text-secondary">Production-Ready Backend Templates</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl lg:text-7xl font-bold leading-tight"
                        >
                            Build Backends
                            <br />
                            <span className="text-gradient-cyber glow-text-cyan">10x Faster</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-text-secondary max-w-xl"
                        >
                            Skip the boilerplate. Start with battle-tested templates for Node.js, Python, Go, and more.
                            Deploy production-ready APIs in minutes, not weeks.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/templates" className="btn-neon inline-flex items-center justify-center space-x-2 group">
                                <span>Browse Templates</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/pricing" className="btn-secondary inline-flex items-center justify-center space-x-2">
                                <Zap className="w-5 h-5" />
                                <span>View Pricing</span>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-6 pt-8"
                        >
                            {[
                                { value: '50+', label: 'Templates' },
                                { value: '10k+', label: 'Developers' },
                                { value: '99.9%', label: 'Uptime' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-gradient-blue">{stat.value}</div>
                                    <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: 3D Scene */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative h-[600px] hidden lg:block"
                    >
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <HeroScene />
                        </div>

                        {/* Glow overlay */}
                        <div className="absolute inset-0 rounded-2xl border border-primary-blue/30 shadow-neon-blue pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
