import { motion } from 'framer-motion'
import { TemplateCard } from '../components/cards/TemplateCard'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const featuredTemplates = [
    {
        id: 'nodejs-express-api',
        title: 'Node.js Express API',
        description: 'Complete REST API with authentication, database integration, and deployment configs',
        language: 'JavaScript',
        framework: 'Express.js',
        tags: ['REST API', 'JWT Auth', 'MongoDB', 'Docker'],
        stars: 4.9,
        downloads: 12500,
        price: 49,
    },
    {
        id: 'python-fastapi',
        title: 'Python FastAPI',
        description: 'High-performance async API with automatic documentation and type safety',
        language: 'Python',
        framework: 'FastAPI',
        tags: ['Async', 'PostgreSQL', 'OAuth2', 'OpenAPI'],
        stars: 4.8,
        downloads: 8900,
        price: 59,
    },
    {
        id: 'go-fiber-microservice',
        title: 'Go Fiber Microservice',
        description: 'Blazing fast microservice architecture with gRPC and message queues',
        language: 'Go',
        framework: 'Fiber',
        tags: ['Microservices', 'gRPC', 'Redis', 'Kafka'],
        stars: 4.9,
        downloads: 6700,
        price: 69,
    },
    {
        id: 'nestjs-graphql',
        title: 'NestJS GraphQL API',
        description: 'Enterprise-grade GraphQL API with TypeScript and advanced features',
        language: 'TypeScript',
        framework: 'NestJS',
        tags: ['GraphQL', 'TypeORM', 'WebSockets', 'Testing'],
        stars: 4.7,
        downloads: 5400,
        price: 79,
    },
    {
        id: 'django-rest',
        title: 'Django REST Framework',
        description: 'Full-featured Django backend with admin panel and API documentation',
        language: 'Python',
        framework: 'Django',
        tags: ['REST', 'Admin Panel', 'PostgreSQL', 'Celery'],
        stars: 4.8,
        downloads: 9200,
        price: 54,
    },
    {
        id: 'rust-actix',
        title: 'Rust Actix Web',
        description: 'Ultra-fast and memory-safe web service with async support',
        language: 'Rust',
        framework: 'Actix',
        tags: ['Performance', 'Safety', 'Async', 'WebAssembly'],
        stars: 4.9,
        downloads: 3800,
        price: 89,
    },
]

export function TemplatesShowcase() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

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
                        Featured <span className="text-gradient-primary">Templates</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Hand-picked templates trusted by developers worldwide
                    </p>
                </motion.div>

                {/* Templates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TemplateCard {...template} />
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <Link
                        to="/templates"
                        className="inline-flex items-center space-x-2 btn-secondary group hover:bg-white/10"
                    >
                        <span>View All Templates</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
