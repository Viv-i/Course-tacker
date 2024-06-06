import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'custom-green': '#86efac',
                'custom-red': '#be123c',
                'custom-blue': '#06b6d4',
                'custom-white': '#ecf3f9',
                'custom-gray': '#1f2937',
                'custom-orange': '#ff8a5b',
            },
        },
    },

    plugins: [forms],
};
