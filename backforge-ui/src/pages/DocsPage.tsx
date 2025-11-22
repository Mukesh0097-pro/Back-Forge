import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Book, Code2, Terminal, Cloud, Shield } from 'lucide-react'
import { CodeSnippet } from '../components/code/CodeSnippet'

const docsNav = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Introduction', id: 'intro', icon: Book },
            { title: 'Quick Start', id: 'quick-start', icon: Terminal },
            { title: 'Architecture', id: 'architecture', icon: Code2 },
        ]
    },
    {
        title: 'Core Concepts',
        items: [
            { title: 'Authentication', id: 'auth', icon: Shield },
            { title: 'Database', id: 'database', icon: Code2 },
            { title: 'Deployment', id: 'deployment', icon: Cloud },
        ]
    }
]

export function DocsPage() {
    const [activeSection, setActiveSection] = useState('intro')

    return (
        <div className="min-h-screen pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                                <input
                                    type="text"
                                    placeholder="Search docs..."
                                    className="w-full pl-10 pr-4 py-2 bg-bg-card border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>

                            {/* Navigation */}
                            <nav className="space-y-8">
                                {docsNav.map((section) => (
                                    <div key={section.title}>
                                        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {section.items.map((item) => (
                                                <li key={item.id}>
                                                    <button
                                                        onClick={() => setActiveSection(item.id)}
                                                        className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${activeSection === item.id
                                                                ? 'bg-primary/10 text-primary'
                                                                : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                                                            }`}
                                                    >
                                                        <item.icon className="w-4 h-4" />
                                                        <span>{item.title}</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="card-premium min-h-[600px]"
                        >
                            <div className="prose prose-invert max-w-none">
                                <h1 className="text-4xl font-bold mb-6 text-text-primary">
                                    Introduction to BackForge
                                </h1>
                                <p className="text-lg text-text-secondary mb-8">
                                    BackForge provides production-ready backend templates designed to save you weeks of development time.
                                    Our templates are built with industry best practices, security, and scalability in mind.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="p-6 rounded-xl bg-bg-deep border border-white/5">
                                        <h3 className="text-xl font-bold text-primary mb-2">Production Ready</h3>
                                        <p className="text-text-secondary text-sm">
                                            Pre-configured with authentication, logging, error handling, and testing.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-bg-deep border border-white/5">
                                        <h3 className="text-xl font-bold text-primary mb-2">Type Safe</h3>
                                        <p className="text-text-secondary text-sm">
                                            Built with TypeScript, Go, and Rust for maximum reliability and developer experience.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mb-4 text-text-primary">Quick Start</h2>
                                <p className="text-text-secondary mb-4">
                                    Clone a template and start your project in minutes:
                                </p>

                                <div className="mb-8">
                                    <CodeSnippet
                                        language="bash"
                                        code={`# Clone the template
git clone https://github.com/backforge/nodejs-express-api.git my-app

# Install dependencies
cd my-app
npm install

# Start development server
npm run dev`}
                                        title="Terminal"
                                    />
                                </div>

                                <h2 className="text-2xl font-bold mb-4 text-text-primary">Project Structure</h2>
                                <p className="text-text-secondary mb-4">
                                    Our templates follow a clean architecture pattern:
                                </p>

                                <div className="mb-8">
                                    <CodeSnippet
                                        language="bash"
                                        code={`src/
├── config/         # Environment variables & configuration
├── controllers/    # Request handlers
├── middlewares/    # Express middlewares
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── utils/          # Utility functions
└── app.ts          # App entry point`}
                                        title="Directory Structure"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
