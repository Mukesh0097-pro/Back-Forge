import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CTASection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 via-neon-cyan/10 to-accent-purple/20" />
            <div className="absolute inset-0 cyber-grid opacity-30" />

            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-slow" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-neon-cyan/30">
                        <Sparkles className="w-4 h-4 text-neon-cyan" />
                        <span className="text-sm text-text-secondary">Join 10,000+ Developers</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl lg:text-6xl font-bold">
                        Ready to Build Your
                        <br />
                        <span className="text-gradient-cyber glow-text-cyan">Next Backend?</span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Start with a production-ready template and ship your product 10x faster
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/templates" className="btn-neon inline-flex items-center justify-center space-x-2 group">
                            <span>Browse Templates</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/pricing" className="btn-secondary inline-flex items-center justify-center">
                            View Pricing
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-text-secondary">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                            <span>30-day money back</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                            <span>Lifetime updates</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
