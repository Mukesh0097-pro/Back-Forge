import { motion } from 'framer-motion'
import { Target, Users, Zap, Heart } from 'lucide-react'

export function AboutPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        Building the Future of
                        <br />
                        <span className="text-gradient-primary">Backend Development</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        BackForge was created by developers, for developers. We believe in shipping fast without compromising on quality.
                    </p>
                </motion.div>

                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 mb-20"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">Our Mission</h2>
                        <p className="text-lg text-text-secondary">
                            We're on a mission to eliminate the repetitive work that slows down backend development.
                            Every template we create is battle-tested in production environments and follows industry best practices.
                        </p>
                        <p className="text-lg text-text-secondary">
                            Our goal is simple: help developers ship products 10x faster by providing them with
                            production-ready code they can trust.
                        </p>
                    </div>
                    <div className="card-premium p-8">
                        <div className="space-y-6">
                            {[
                                { icon: Target, title: 'Quality First', desc: 'Every template is code-reviewed and tested' },
                                { icon: Zap, title: 'Ship Faster', desc: 'Skip weeks of boilerplate setup' },
                                { icon: Users, title: 'Community Driven', desc: 'Built with feedback from 10k+ developers' },
                                { icon: Heart, title: 'Developer Love', desc: 'Made by developers who care' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-primary mb-1">{item.title}</h3>
                                        <p className="text-text-secondary">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-8 mb-20"
                >
                    {[
                        { value: '50+', label: 'Templates' },
                        { value: '10,000+', label: 'Developers' },
                        { value: '100k+', label: 'Downloads' },
                        { value: '99.9%', label: 'Satisfaction' },
                    ].map((stat, index) => (
                        <div key={index} className="card-glass text-center">
                            <div className="text-5xl font-bold text-gradient-accent mb-2">{stat.value}</div>
                            <div className="text-text-secondary">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Team */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        Built by a Team of <span className="text-gradient-primary">Passionate Developers</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        We're a distributed team of backend engineers, DevOps specialists, and product designers
                        who have worked at companies like Google, Amazon, and leading startups.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
