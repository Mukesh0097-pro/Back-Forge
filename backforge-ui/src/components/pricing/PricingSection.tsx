import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PricingTier {
    name: string
    price: number
    description: string
    features: string[]
    icon: typeof Zap
    popular?: boolean
    cta: string
    ctaLink: string
}

const pricingTiers: PricingTier[] = [
    {
        name: 'Starter',
        price: 29,
        description: 'Perfect for individual developers',
        icon: Zap,
        features: [
            '5 Template Downloads',
            'Basic Support',
            'Community Access',
            'Monthly Updates',
            'Documentation',
        ],
        cta: 'Get Started',
        ctaLink: '/checkout/starter',
    },
    {
        name: 'Pro',
        price: 79,
        description: 'For professional developers',
        icon: Crown,
        popular: true,
        features: [
            'Unlimited Downloads',
            'Priority Support',
            'Private Discord',
            'Weekly Updates',
            'Advanced Documentation',
            'Custom Integrations',
            'Code Reviews',
        ],
        cta: 'Go Pro',
        ctaLink: '/checkout/pro',
    },
    {
        name: 'Enterprise',
        price: 199,
        description: 'For teams and organizations',
        icon: Rocket,
        features: [
            'Everything in Pro',
            'Dedicated Support',
            'Custom Templates',
            'Team Collaboration',
            'SLA Guarantee',
            'White-label Options',
            'Training Sessions',
            'API Access',
        ],
        cta: 'Contact Sales',
        ctaLink: '/contact',
    },
]

export function PricingSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-primary/5 to-bg-deep" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

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
                        Simple, <span className="text-gradient-primary">Transparent</span> Pricing
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Choose the perfect plan for your needs. All plans include lifetime access to purchased templates.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`relative ${tier.popular
                                ? 'card-premium border-primary/50 scale-105 md:scale-110 z-10'
                                : 'card-glass'
                                }`}
                        >
                            {/* Popular Badge */}
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="px-4 py-1 bg-gradient-primary rounded-full text-sm font-bold text-white shadow-lg shadow-primary/20">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${tier.popular
                                ? 'bg-gradient-primary shadow-lg shadow-primary/20'
                                : 'bg-white/5'
                                }`}>
                                <tier.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Name & Description */}
                            <h3 className="text-2xl font-bold text-text-primary mb-2">{tier.name}</h3>
                            <p className="text-text-secondary mb-6">{tier.description}</p>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-text-primary">${tier.price}</span>
                                    <span className="text-text-secondary ml-2">/month</span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start space-x-3">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-primary' : 'text-text-secondary'
                                            }`} />
                                        <span className="text-text-secondary">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                to={tier.ctaLink}
                                className={tier.popular ? 'btn-primary w-full block text-center' : 'btn-secondary w-full block text-center'}
                            >
                                {tier.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-text-secondary mt-12"
                >
                    All plans include 30-day money-back guarantee. No questions asked.
                </motion.p>
            </div>
        </section>
    )
}
