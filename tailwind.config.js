module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-33.333333333%,0,0)' },
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
      boxShadow: {
        search: '0px 10px 21px 7px rgba(12, 13, 21, 0.0954709)',
        card: '0px 1px 6px rgba(226, 226, 226, 0.855496)',
        custom: '0px 4px 150px rgba(92, 93, 121, 0.16)',
      },
      height: {
        'max-content': 'max-content',
      },
      width: {
        homeSearchWidth: '55%',
      },
      minHeight: {
        'max-content': 'max-content',
      },
      colors: {
        iblue: '#3A78F2',
        green: '#43B97F',
        yellow: '#FFCA3A',
        orange: '#FD7E40',
        ired: '#f75151',
        'input-border': '#292947',
        subheading: '#4C5567',
        primary: '#0C1830',
        background: '#F6F6FE',
        'lighter-grey': '#979797',
        grey2: '#f1f1f9',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        curvedIcon: "url('/src/icons/underlineIcon.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
