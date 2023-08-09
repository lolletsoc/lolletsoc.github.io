/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
    theme: {
        fontFamily: {
            'merriweather': ['Merriweather', 'serif'],
            'poppins': ['Poppins', 'serif']
        },
        extend: {
            colors: {
                'background': '#EAE6E5'
            }
        },
    },
    plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}

