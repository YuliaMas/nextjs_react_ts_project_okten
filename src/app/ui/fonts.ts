import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: "--font-sans",
    display: "swap",
    preload: true
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});