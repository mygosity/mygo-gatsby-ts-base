import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, maxContentWidth, maxNavLength } from 'src/constants';

const navMenuZIndex = 0;

export function getTransparentButton(opacity: number = 0) {
  return styled.button`
    position: absolute;
    background: rgba(0, 0, 0, ${opacity});
    border: 0;
    float: left;
    min-width: 100vw;
    z-index: ${navMenuZIndex - 1};
    height: 100vh;
  `;
}

export function getNavMenuWrapper(menuOpen: boolean) {
  return styled.div`
    position: absolute;
    top: 4rem;
    right: 0;
    width: 100vw;
    transition: background 0.25s;
    padding: 1rem 0 1rem;
    z-index: ${navMenuZIndex};
    @media (min-width: ${maxContentWidth}px) {
      right: calc((100vw - ${maxContentWidth}px) / 2);
    }
    background: rgba(25, 25, 26, ${menuOpen ? 1 : 0});
    padding-top: 0;
    position: relative;
  `;
}

export const HamburgerSystem = styled.div`
  @media (min-width: ${maxNavLength}px) {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  background: ${colors.darkColor};
  fill: white;
  padding: 0;
  border: 0;
  position: absolute;
  top: 15px;
  left: 84vw;
`;

//mobile menu is on a black background so the hover and normal color should be switched
export const NavMenuLink = styled(Link)`
  color: white;
  &:hover {
    color: ${colors.link.hover};
  }
`;

export const NavMenuLinkContent = styled.p`
  margin-bottom: 1rem;
`;

export const NavMenuFiller = styled.div`
  color: white;
  background: white;
  height: 0.1rem;
  padding: 0;
  margin: 0 0 1.2rem;
`;

export const NavMenuOpenWrapper = styled.div`
  display: block;
`;

export const NavMenuContentWrapper = styled.div`
  padding: 0rem 2rem;
`;
