import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    Download,
    Star,
    Github,
    Check,
    Code2,
    Database,
    Shield,
    Zap
} from 'lucide-react'
import { CodeSnippet } from '../components/code/CodeSnippet'

export function TemplateDetailPage() {
    const { id } = useParams()

    // Mock template data
    const template = {
        id: id || 'nodejs-express-api',
        title: 'Node.js Express API',
        description: 'Complete REST API with authentication, database integration, and deployment configs',
        longDescription: 'A production-ready Node.js REST API template built with Express.js. Includes JWT authentication, MongoDB integration, Docker configuration, comprehensive testing setup, and deployment scripts for major cloud providers.',
        language: 'JavaScript',
        framework: 'Express.js',
        version: '2.1.0',
        lastUpdated: '2024-01-15',
        tags: ['REST API', 'JWT Auth', 'MongoDB', 'Docker', 'Testing', 'CI/CD'],
        stars: 4.9,
        downloads: 12500,
        price: 49,
        features: [
            'JWT Authentication & Authorization',
            'MongoDB with Mongoose ODM',
            'Input Validation & Sanitization',
            'Error Handling Middleware',
            'Request Rate Limiting',
            'CORS Configuration',
            'Environment-based Config',
            'Comprehensive Test Suite',
            'Docker & Docker Compose',
            'CI/CD Pipeline Templates',
            'API Documentation (Swagger)',
            'Logging with Winston',
        ],
        techStack: [
            { name: 'Express.js', icon: Code2 },
            { name: 'MongoDB', icon: Database },
            { name: 'JWT', icon: Shield },
            { name: 'Docker', icon: Zap },
        ],
    }

    const exampleCode = `// Example: User Authentication Route
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }
    
    // Verify password
    const isValid = await bcrypt.compare(
      password, 
      user.password
    );
    if (!isValid) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ 
      error: 'Server error' 
    });
  }
});

export default router;`

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link
                        to="/templates"
                        className="inline-flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Templates</span>
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                    <Code2 className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold text-text-primary">{template.title}</h1>
                                    <p className="text-text-secondary">
                                        {template.language} • {template.framework} • v{template.version}
                                    </p>
                                </div>
                            </div>

                            <p className="text-xl text-text-secondary">{template.longDescription}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {template.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="card-premium"
                        >
                            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {template.features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-text-secondary">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Code Example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">Code Example</h2>
                            <CodeSnippet
                                code={exampleCode}
                                language="javascript"
                                title="routes/auth.js"
                            />
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="card-glass"
                        >
                            <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {template.techStack.map((tech, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-2">
                                            <tech.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <p className="text-sm text-text-secondary">{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card-premium sticky top-24 space-y-6"
                        >
                            {/* Price */}
                            <div>
                                <div className="text-5xl font-bold text-text-primary mb-2">
                                    ${template.price}
                                </div>
                                <p className="text-text-secondary">One-time payment</p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                                <div>
                                    <div className="flex items-center space-x-1 text-primary mb-1">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="font-bold">{template.stars}</span>
                                    </div>
                                    <p className="text-xs text-text-secondary">Rating</p>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-1 text-primary mb-1">
                                        <Download className="w-4 h-4" />
                                        <span className="font-bold">{template.downloads.toLocaleString()}</span>
                                    </div>
                                    <p className="text-xs text-text-secondary">Downloads</p>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="space-y-3">
                                <button className="btn-primary w-full inline-flex items-center justify-center space-x-2">
                                    <Download className="w-5 h-5" />
                                    <span>Purchase Template</span>
                                </button>
                                <button className="btn-secondary w-full inline-flex items-center justify-center space-x-2">
                                    <Github className="w-5 h-5" />
                                    <span>View Demo</span>
                                </button>
                            </div>

                            {/* Info */}
                            <div className="text-sm text-text-secondary space-y-2 pt-4 border-t border-white/10">
                                <p>✓ Lifetime access</p>
                                <p>✓ Free updates</p>
                                <p>✓ 30-day money back</p>
                                <p>✓ Priority support</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
