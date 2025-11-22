import { motion } from 'framer-motion'
import {
    Zap,
    Shield,
    Code2,
    Rocket,
    Database,
    Lock,
    Cloud,
    GitBranch,
    Terminal,
    Package,
    Settings,
    Users
} from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Optimized templates with best practices for maximum performance',
        color: 'text-primary',
    },
    {
        icon: Shield,
        title: 'Production Ready',
        description: 'Battle-tested code used by thousands of developers worldwide',
        color: 'text-secondary',
    },
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Well-documented, maintainable code following industry standards',
        color: 'text-accent',
    },
    {
        icon: Database,
        title: 'Database Support',
        description: 'PostgreSQL, MongoDB, Redis, and more out of the box',
        color: 'text-primary',
    },
    {
        icon: Lock,
        title: 'Secure by Default',
        description: 'Built-in authentication, authorization, and security best practices',
        color: 'text-secondary',
    },
    {
        icon: Cloud,
        title: 'Cloud Ready',
        description: 'Deploy to AWS, GCP, Azure, or any cloud provider instantly',
        color: 'text-accent',
    },
    {
        icon: GitBranch,
        title: 'Version Control',
        description: 'Git-friendly structure with comprehensive commit history',
        color: 'text-primary',
    },
    {
        icon: Terminal,
        title: 'CLI Tools',
        description: 'Powerful command-line tools for scaffolding and deployment',
        color: 'text-secondary',
    },
    {
        icon: Package,
        title: 'Modular Design',
        description: 'Pick and choose components you need, leave what you don\'t',
        color: 'text-accent',
    },
    {
        icon: Settings,
        title: 'Configurable',
        description: 'Environment-based configuration for all deployment scenarios',
        color: 'text-primary',
    },
    {
        icon: Users,
        title: 'Team Friendly',
        description: 'Designed for collaboration with clear code organization',
        color: 'text-secondary',
    },
    {
        icon: Rocket,
        title: 'Rapid Development',
        description: 'Ship features 10x faster with pre-built components',
        color: 'text-accent',
    },
]

export function FeaturesSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-card/30 to-bg-deep" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Everything You Need to
                        <br />
                        <span className="text-gradient-primary">Build Amazing Backends</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Our templates come packed with features that developers love
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="card-glass group cursor-pointer"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-all">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
