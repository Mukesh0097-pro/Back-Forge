/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // BackForge Premium Black + Neon Blue Theme
                primary: {
                    DEFAULT: '#00F3FF', // Neon Cyan
                    dark: '#00C2CC',    // Darker Cyan
                    light: '#5FF9FF',   // Lighter Cyan
                },
                secondary: {
                    DEFAULT: '#2D55FF', // Electric Blue
                    dark: '#1A3BCC',    // Darker Electric Blue
                },
                accent: {
                    DEFAULT: '#D946EF', // Neon Fuchsia (for high contrast)
                    glow: '#E879F9',    // Lighter Fuchsia
                },
                bg: {
                    deep: '#000000',    // Pure Black
                    card: '#0A0A0A',    // Almost Black
                    surface: '#121212', // Dark Gray
                },
                text: {
                    primary: '#FFFFFF',   // Pure White
                    secondary: '#94A3B8', // Slate 400
                    muted: '#64748B',     // Slate 500
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
            },
            boxShadow: {
                'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
                'card-hover': '0 10px 15px -3px rgba(0, 243, 255, 0.1), 0 4px 6px -2px rgba(0, 243, 255, 0.05)',
                'glow-sm': '0 0 15px rgba(0, 243, 255, 0.3)', // Neon Cyan Glow
                'glow-md': '0 0 30px rgba(0, 243, 255, 0.4)',
                'glow-lg': '0 0 50px rgba(0, 243, 255, 0.5)',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #00F3FF 0%, #2D55FF 100%)',
                'gradient-dark': 'linear-gradient(to bottom, #000000, #0A0A0A)',
                'gradient-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                'gradient-glow': 'radial-gradient(circle at center, rgba(0, 243, 255, 0.15) 0%, transparent 70%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
