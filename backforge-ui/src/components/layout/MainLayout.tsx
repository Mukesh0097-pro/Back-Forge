import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface MainLayoutProps {
    children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-bg-deep cyber-grid">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
            <Footer />
        </div>
    )
}
