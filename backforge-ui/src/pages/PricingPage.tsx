import { PricingSection } from '../components/pricing/PricingSection'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function PricingPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                        Choose Your <span className="text-gradient-cyber">Plan</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Flexible pricing for developers and teams of all sizes
                    </p>
                </motion.div>

                <PricingSection />

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Frequently Asked <span className="text-gradient-blue">Questions</span>
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: 'Can I upgrade or downgrade my plan?',
                                a: 'Yes! You can change your plan at any time. Upgrades are prorated and downgrades take effect at the next billing cycle.',
                            },
                            {
                                q: 'Do I get lifetime access to templates?',
                                a: 'Yes, all templates you download are yours to keep forever, including all future updates.',
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept all major credit cards, PayPal, and cryptocurrency payments.',
                            },
                            {
                                q: 'Is there a refund policy?',
                                a: 'Yes, we offer a 30-day money-back guarantee. No questions asked.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card-glass"
                            >
                                <h3 className="text-xl font-bold text-text-primary mb-2 flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-neon-cyan mt-1 flex-shrink-0" />
                                    <span>{faq.q}</span>
                                </h3>
                                <p className="text-text-secondary ml-7">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
