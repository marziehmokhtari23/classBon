import { colord ,extend} from "colord";
import type { Config } from "tailwindcss";
import mixPlugin from "colord/plugins/mix"
extend ([mixPlugin])
const generateDarkenColorFrom=(input:string,percentage=0.07):string=>
colord(input).darken(percentage).toHex();

const generateForegroundColorFrom=(input:string,percentage=0.8):string=>
  colord(input).mix(colord(input).isDark() ?'white':'black',percentage).toHex();
export  const tailwindColor:{[key:string]:string}={
white:"#F9F9F9",
primary:"#007EBC",
"primary-content":"#FFFFFF",
"primary-focus":generateDarkenColorFrom("#007EBC"),
neutral:"#2a323c",
"neutral-focus":generateDarkenColorFrom("#2a323c"),
secondry:"#6C5CE7",
"secendry-focus":generateDarkenColorFrom("#6C5CE7"),
"secondry-content":"#FFFFFF",
accent:"#1FB2A5",
"accent-focus":generateDarkenColorFrom("#1FB2A5"),
}
const config: Config = {
  content: [
    "./src/pages/**/*.{tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      colors:tailwindColor,
 
    },
  },
  plugins: [],
};
export default config;
