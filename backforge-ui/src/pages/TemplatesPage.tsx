import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { TemplateCard } from '../components/cards/TemplateCard'

const allTemplates = [
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

export function TemplatesPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState<string>('all')

    const languages = ['all', 'JavaScript', 'TypeScript', 'Python', 'Go', 'Rust']

    const filteredTemplates = allTemplates.filter((template) => {
        const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesLanguage = selectedLanguage === 'all' || template.language === selectedLanguage
        return matchesSearch && matchesLanguage
    })

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
                        Backend <span className="text-gradient-primary">Templates</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Production-ready templates for your next project
                    </p>
                </motion.div>

                {/* Search and Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 space-y-4"
                >
                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                            type="text"
                            placeholder="Search templates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input-premium pl-12 w-full"
                        />
                    </div>

                    {/* Language Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {languages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLanguage(lang)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedLanguage === lang
                                    ? 'bg-primary text-black shadow-lg shadow-primary/20'
                                    : 'bg-white/5 text-text-secondary hover:text-primary hover:bg-white/10'
                                    }`}
                            >
                                {lang === 'all' ? 'All Languages' : lang}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Templates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <TemplateCard {...template} />
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredTemplates.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-xl text-text-secondary">No templates found matching your criteria</p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
