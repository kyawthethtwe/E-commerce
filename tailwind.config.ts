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
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			// background: '#f8f9fa', // same as gray-50
  			// foreground: 'black', // same as gray-900
  			background: '#e9ecef', // same as gray-100
			muted:{
				foreground: '#1E1E1E',// same as gray-900
			},
  			// primary: {
  			// 	DEFAULT: '#F6BD60', // same as amber-300
  			// 	foreground: '#1E1E1E' // same as gray-900
  			// },
  			// secondary: {
  			// 	DEFAULT: '#84A59D', // same as teal-300
  			// 	foreground: '#FFFFFF' // same as white
  			// },
  			// destructive: {
  			// 	DEFAULT: '#F28482', // same as red-300
  			// 	foreground: '#FFFFFF' // same as white
  			// },
  			// muted: {
  			// 	DEFAULT: '#F7EDE2', // same as orange-100
  			// 	foreground: '#1E1E1E' // same as gray-900
  			// },
  			// accent: {
  			// 	DEFAULT: '#F5CAC3', // same as pink-100
  			// 	foreground: '#1E1E1E' // same as gray-900
  			// },
  			primary: '#F6BD60', // same as amber-300
  			highlight: '#f94144',// same as red-500
			highlight1: '#ff0054', // same as pink-500
			highlight3: '#F7EDE2', // same as orange-100
			highlight4: '#F5CAC3', // same as pink-100
			highlight5 : '#F28482', // same as red-300
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
  		}
  	}
  },
  plugins: [animate],
} satisfies Config;
