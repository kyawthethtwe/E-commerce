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
			primary: {
				DEFAULT: "#113B70",
				light1: "#01427C",
				light2: "#2C599D",
			  },
			  highlight: {
				DEFAULT: "#F98124",
				light: "#F29B32",
			  },
  		},
  	}
  },
  plugins: [animate],
} satisfies Config;
