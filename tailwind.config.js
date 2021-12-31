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
        profileContainer: '0px 10px 21px -4px rgba(12, 13, 21, 0.04);',
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
        categoryBackground: '#E5E5E5',
        subcategory: '#0062FF',
        iblue: '#3A78F2',
        green: '#43B97F',
        yellow: '#FFCA3A',
        orange: '#FD7E40',
        ired: '#f75151',
        iGrey: '#FAFAFB',
        'input-border': '#292947',
        subheading: '#4C5567',
        primary: '#0C1830',
        background: '#F6F6FE',
        'lighter-grey': '#979797',
        linkGrey: '#46464F',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        arabic: ['Frutiger LT Arabic', 'sans-serif'],
        tooltip: ['Circular Std', 'sans-serif'],
      },
      fontSize: {
        tiny: '0.563rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
