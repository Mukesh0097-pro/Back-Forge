import { motion } from 'framer-motion'
import { ExternalLink, Star, Download, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface TemplateCardProps {
    id: string
    title: string
    description: string
    language: string
    framework: string
    tags: string[]
    stars: number
    downloads: number
    price: number
    image?: string
}

export function TemplateCard({
    id,
    title,
    description,
    language,
    framework,
    tags,
    stars,
    downloads,
    price,
}: TemplateCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="card-premium group cursor-pointer h-full flex flex-col"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                        <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm text-text-secondary">
                            {language} • {framework}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-1 text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold text-text-primary">{stars}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-text-secondary mb-4 flex-grow line-clamp-2">
                {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                        {tag}
                    </span>
                ))}
                {tags.length > 3 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-text-secondary border border-white/10">
                        +{tags.length - 3}
                    </span>
                )}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{downloads.toLocaleString()}</span>
                    </div>
                </div>
                <div className="text-2xl font-bold text-text-primary">
                    ${price}
                </div>
            </div>

            {/* CTA */}
            <Link
                to={`/template/${id}`}
                className="btn-secondary w-full inline-flex items-center justify-center space-x-2 group/btn hover:bg-primary hover:border-primary hover:text-black"
            >
                <span>View Details</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
        </motion.div>
    )
}
