
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        neutral: {
             DEFAULT: "hsl(var(--neutral))",
             foreground: "hsl(var(--neutral-foreground))"
        }
      },
      backgroundColor: {
        page: "hsl(var(--bg-page))",
        card: "hsl(var(--bg-card))",
        sidebar: "hsl(var(--bg-sidebar))",
        surface: "hsl(var(--bg-surface))",
      },
      textColor: {
        heading: "hsl(var(--text-heading))",
        body: "hsl(var(--text-body))",
        muted: "hsl(var(--text-muted))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        '2xl': "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'dropdown': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'sidebar': '1px 0 0 0 rgba(0, 0, 0, 0.05), 4px 0 24px 0 rgba(0, 0, 0, 0.02)',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        "slide-out-right": {
          from: { transform: "translateX(0)", opacity: 1 },
          to: { transform: "translateX(100%)", opacity: 0 },
        },
        "success-pop": {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "success-icon": {
          "0%": { transform: "scale(0) rotate(-45deg)" },
          "50%": { transform: "scale(1.2) rotate(0deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        "confetti-1": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: 1 },
          "100%": { transform: "translate(-20px, -30px) scale(0)", opacity: 0 },
        },
        "confetti-2": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: 1 },
          "100%": { transform: "translate(20px, -30px) scale(0)", opacity: 0 },
        },
        "confetti-3": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: 1 },
          "100%": { transform: "translate(-25px, 20px) scale(0)", opacity: 0 },
        },
        "confetti-4": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: 1 },
          "100%": { transform: "translate(25px, 20px) scale(0)", opacity: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "success-pop": "success-pop 0.4s ease-out",
        "success-icon": "success-icon 0.5s ease-out",
        "confetti-1": "confetti-1 0.6s ease-out forwards",
        "confetti-2": "confetti-2 0.6s ease-out 0.1s forwards",
        "confetti-3": "confetti-3 0.6s ease-out 0.2s forwards",
        "confetti-4": "confetti-4 0.6s ease-out 0.15s forwards",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
