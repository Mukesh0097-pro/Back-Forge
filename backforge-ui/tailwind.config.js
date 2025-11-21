/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // BackForge Brand Colors
                primary: {
                    blue: '#3B82F6',
                    DEFAULT: '#3B82F6',
                },
                royal: {
                    blue: '#1D4ED8',
                    DEFAULT: '#1D4ED8',
                },
                neon: {
                    cyan: '#22D3EE',
                    DEFAULT: '#22D3EE',
                },
                sky: {
                    glow: '#60A5FA',
                    DEFAULT: '#60A5FA',
                },
                accent: {
                    purple: '#A78BFA',
                    DEFAULT: '#A78BFA',
                },
                bg: {
                    deep: '#0B0B0D',
                    card: '#15151A',
                    DEFAULT: '#0B0B0D',
                },
                text: {
                    primary: '#F8FAFC',
                    secondary: '#94A3B8',
                    DEFAULT: '#F8FAFC',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
            },
            boxShadow: {
                'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)',
                'neon-purple': '0 0 20px rgba(167, 139, 250, 0.5), 0 0 40px rgba(167, 139, 250, 0.3)',
                'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
                'glow-md': '0 0 20px rgba(59, 130, 246, 0.4)',
                'glow-lg': '0 0 30px rgba(59, 130, 246, 0.5)',
                'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.2)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-cyber': 'linear-gradient(135deg, #0B0B0D 0%, #1D4ED8 50%, #22D3EE 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(21, 21, 26, 0.8) 0%, rgba(29, 78, 216, 0.1) 100%)',
            },
            animation: {
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'rotate-slow': 'rotate-slow 20s linear infinite',
                'scale-pulse': 'scale-pulse 2s ease-in-out infinite',
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-down': 'slide-down 0.5s ease-out',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)',
                    },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'rotate-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'scale-pulse': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
