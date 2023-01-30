/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app': '#f6f7fa',
        'palette1-white' : '#EDF5E1',
        'palette1-green-light' : '#8EE4AF',
        'palette1-green-strong' : '#5CDB95',
        'palette1-green-dark' : '#379683',
        'palette1-blue' : '#05386B',
        'palette2-azure-accent' : '#66FCF1',
        'palette2-grey-light' : '#C5C6C7',
        'palette2-grey-dark' : '#1F2833',
        'palette2-black' : '#0B0C10'
      },
      spacing: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
        'sidebar' : '300'
      }
    },
  },
  plugins: [],
}
