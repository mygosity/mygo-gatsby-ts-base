import Typography from 'typography';
//@ts-ignore
import Wordpress2016 from 'typography-theme-wordpress-2016';
import { fontMetaData } from 'src/constants';

const { baseFontSize, headerFontFamily, baseFontFamily, headerWeight } = fontMetaData;

Wordpress2016.headerFontFamily = headerFontFamily.split(', ');
Wordpress2016.headerWeight = headerWeight;
Wordpress2016.bodyFontFamily = baseFontFamily.split(', ');

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: 'none',
    },
    ul: {
      paddingLeft: '1.15rem',
    },
    h1: {
      fontFamily: headerFontFamily,
    },
    h2: {
      fontFamily: headerFontFamily,
    },
    h3: {
      fontFamily: headerFontFamily,
    },
    h4: {
      fontFamily: headerFontFamily,
    },
    h5: {
      fontFamily: headerFontFamily,
    },
    h6: {
      fontFamily: headerFontFamily,
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: 0,
    },
    p: {
      // 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'
      fontFamily: baseFontFamily,
      fontSize: `${baseFontSize}em`,
    },
    span: {
      fontFamily: baseFontFamily,
    },
    td: {
      borderBottom: 0,
      margin: 0,
      padding: 0,
    },
    th: {
      borderBottom: 0,
      margin: 0,
      padding: 0,
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
