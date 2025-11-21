import { useState, useEffect, useRef } from 'react'
import { Copy, Check } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-go'


interface CodeSnippetProps {
    code: string
    language: string
    title?: string
    showLineNumbers?: boolean
}

export function CodeSnippet({
    code,
    language,
    title,
    showLineNumbers = true
}: CodeSnippetProps) {
    const [copied, setCopied] = useState(false)
    const codeRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current)
        }
    }, [code, language])

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="code-block group">
            {/* Header */}
            {title && (
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neon-cyan/20">
                    <span className="text-sm font-mono text-neon-cyan">{title}</span>
                    <button
                        onClick={handleCopy}
                        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-primary-blue/10 hover:bg-primary-blue/20 text-text-secondary hover:text-neon-cyan transition-all duration-300"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4" />
                                <span className="text-xs">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4" />
                                <span className="text-xs">Copy</span>
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Code */}
            <div className="relative overflow-x-auto custom-scrollbar">
                <pre className={`${showLineNumbers ? 'line-numbers' : ''} !bg-transparent !p-0 !m-0`}>
                    <code
                        ref={codeRef}
                        className={`language-${language} !bg-transparent text-sm`}
                        style={{
                            textShadow: '0 0 10px rgba(34, 211, 238, 0.3)',
                        }}
                    >
                        {code}
                    </code>
                </pre>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg border border-neon-cyan/0 group-hover:border-neon-cyan/50 transition-all duration-300 pointer-events-none" />
        </div>
    )
}
