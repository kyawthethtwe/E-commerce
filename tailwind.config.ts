import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container : {
		center : true,
		padding : "2rem",
		screens: {
			"2xl": "1400px",
		  },
	},
  	extend: {
  		colors: {
  			background: "#f8f9fa" ,
  			foreground: "black",
			card: "#e9ecef",
			primary: {
				DEFAULT: "#F6BD60",
				foreground: "#1E1E1E",
			},
			secondary: {
				DEFAULT: "#84A59D",
				foreground: "#FFFFFF",
			},
			destructive: {
				DEFAULT: "#F28482",
				foreground: "#FFFFFF",
			},
			muted: {
				DEFAULT: "#F7EDE2",
				foreground: "#1E1E1E",
			},
			accent: {
				DEFAULT: "#F5CAC3",
				foreground: "#1E1E1E",
			},
			highlight: "#ff0054",
        	action: "#f94144",
  		},

		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
  	}
  },
  plugins: [animate],
} satisfies Config;
