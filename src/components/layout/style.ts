import { Link } from 'gatsby';
import styled from '@emotion/styled';
import {
  verticalCenterStyle,
  contentStyle,
  maxContentWidth,
  maxNavLength,
  headerHeight,
  colors,
  fontMetaData,
  headerPositionStyle,
  zIndexMaster,
} from 'src/constants';

export const LinkStyle = `
  color: ${colors.link.normal};
  &:hover {
    color: ${colors.link.hover};
  }
`;
export const PageLink = styled(Link)`
  ${LinkStyle}
`;

export const PageContainerStyle = `
  min-height: 100vh;
  overflow: hidden;
`;

export function getMainLayoutWrapper(menuOpen: boolean) {
  return styled.div`
    ${PageContainerStyle}
    position: ${!menuOpen ? 'relative' : 'fixed'};`;
}

export const HeaderBackground = styled.div`
  background: ${colors.darkColor};
  position: ${headerPositionStyle};
  width: 100%;
  flex: 1;
  margin: 0;
  top: 0;
  display: block;
  z-index: ${zIndexMaster.headerContainer};
  height: ${headerHeight}rem;
`;

export const HeaderWrapper = styled.div`
  max-width: ${maxContentWidth}px;
  margin: auto;
`;

export const HomeLinkWrapper = styled.div`
  ${verticalCenterStyle}
  padding: 1rem;
  float: left;
  z-index: ${zIndexMaster.headerItems};
  font-size: 1em;
`;

export const HomeLink = styled(Link)`
  font-family: ${fontMetaData.headerFontFamily};
  box-shadow: none;
  text-decoration: none;
  color: white;
  letter-spacing: 1;
  font-size: 1.5em;
  font-style: normal;
  font-weight: bold;
  &:hover {
    box-shadow: 0px 1px ${colors.a.hover};
  }
`;

export const NavWrapper = styled.div`
  float: right;
  margin: 0;
  padding: 1.2rem 0.25rem 1.2rem 0;
  position: relative;
  height: ${headerHeight}rem;
  z-index: ${zIndexMaster.headerItems};
`;

export const NavContent = styled(Link)`
  font-family: ${fontMetaData.headerFontFamily};
  box-shadow: none;
  text-decoration: none;
  color: white;
  letter-spacing: 1;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  margin: 1rem;
  @media (max-width: ${maxNavLength}px) {
    display: none;
  }
  &:hover {
    box-shadow: 0px 1px ${colors.a.hover};
  }
`;

export const ContentWrapper = styled.div`
  ${contentStyle}
`;

export const FooterWrapper = styled.footer`
  background: black;
  width: 100%;
  flex: 1;
  margin: 0;
  display: block;
  height: 8rem;
`;

export const CopyrightWrapper = styled.div`
  max-width: ${maxContentWidth}px;
  margin: auto;
  padding: 3rem 1rem;
`;

export const CopyrightSpan = styled.span`
  color: #aaaaaa;
  font-family: 'Libre Franklin', sans-serif;
`;
