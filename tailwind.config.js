module.exports = {
    purge: [
        './*.html',
        './*.{js,jsx,ts,tsx,vue}',
    ],
    content: ["./*.{html,js}"],
    corePlugins: {preflight: false},
    plugins: [],
    mode: 'jit',
    theme: {
      screens: {
        'b1440':'1440px',
        'b1280':'1280px',
        'b1152':'1152px',
        'b1024':'1024px',
        'b960':'960px',
        'b896':'896px',
        'b768':'768px',
        'b672':'672px',
        'b576':'576px',
        'b501':'501px',
        'b426':'426px',
        'b376':'376px',
        'b320':'320px',
        'b280':'280px'
      }
    }
  }
