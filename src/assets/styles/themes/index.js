/**
 * Themes
 *
 * Here we can decide what theme we apply to our application.
 * Whatever we return inside this file's export will be converted
 * too SCSS variables used app-wide.
 *
 * NOTE: Only use literal values, i.e. avoid Sass functions,
 * mixins, includes, etc.
 */

const defaultTheme = {
  colors: {
    primary: '#162752',
    secondary: '#7F8FA4',
    warning: '#E6A23C',
    success: '#0F9D58',
    danger: '#DB4437',
    info: '#909399',
    wht: '#FFFFFF',
    blk: '#000000',
  },
  breakpoints: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1920px',
  },
  fonts: {
    futura: '\'Futura-PT\'',
  },
};

module.exports = defaultTheme;
