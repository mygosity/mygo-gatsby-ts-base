//Global local storage values
export const VIEW_SELECT_MODE = 'ME_VSM';

//Style constants
export const maxNavLength = 640; //75 each nav box
export const maxContentWidth = 960;
export const headerHeight = 4;
export const viewSelectPosition = headerHeight - 1;
export const headerPositionStyle = 'relative';

export const colors = {
  a: {
    normal: `black`,
    hover: `rgb(102, 153, 204)`,
  },
  link: {
    normal: `#197ea9`,
    hover: `#2fbcf8`,
  },
  darkColor: '#19191a', //25,25,26
  viewButtonHoverColor: 'rgba(215, 218, 220, 1)',
};

export const fontMetaData = {
  headerFontFamily: 'roboto, sans-serif',
  headerWeight: 600,
  baseFontFamily: 'roboto, sans-serif',
  baseFontSize: 1,
};

export const verticalCenterStyle = `
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const getPaddingForContentStyle = (headerPositionStyle: string) => {
  if (headerPositionStyle === 'fixed') {
    return headerHeight + 3;
  }
  return viewSelectPosition;
};
export const contentStyle = `
  max-width: ${maxContentWidth}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${getPaddingForContentStyle(headerPositionStyle)}rem 1rem 3rem;
  font-size: ${fontMetaData.baseFontSize}em;
`;

//organized constants to make it easy to tell what z-index everything should be
export const zIndexMaster = {
  headerItems: 200,
  headerContainer: 1000,
  viewSelectMode: 1001,
};
