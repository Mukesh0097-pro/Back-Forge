import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin, Mail, Code2 } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Product: [
            { name: 'Templates', href: '/templates' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Documentation', href: '/docs' },
            { name: 'Changelog', href: '/changelog' },
        ],
        Company: [
            { name: 'About', href: '/about' },
            { name: 'Blog', href: '/blog' },
            { name: 'Careers', href: '/careers' },
            { name: 'Contact', href: '/contact' },
        ],
        Legal: [
            { name: 'Privacy', href: '/privacy' },
            { name: 'Terms', href: '/terms' },
            { name: 'License', href: '/license' },
        ],
    }

    const socialLinks = [
        { icon: Github, href: 'https://github.com', label: 'GitHub' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:hello@backforge.dev', label: 'Email' },
    ]

    return (
        <footer className="relative bg-bg-deep border-t border-white/5">
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4 group">
                            <Code2 className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                            <span className="text-xl font-bold text-text-primary">BackForge</span>
                        </Link>
                        <p className="text-text-secondary text-sm mb-4 max-w-xs">
                            Build production-ready backends faster with our curated collection of premium templates.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-text-primary font-semibold mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-text-secondary text-sm">
                            © {currentYear} BackForge. All rights reserved.
                        </p>
                        <p className="text-text-secondary text-sm">
                            Built with <span className="text-red-500">❤</span> for developers
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
