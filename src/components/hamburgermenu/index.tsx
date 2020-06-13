import React from 'react';
import {
  HamburgerSystem,
  NavMenuOpenWrapper,
  NavMenuLinkContent,
  NavMenuLink,
  NavMenuContentWrapper,
  HamburgerButton,
  NavMenuFiller,
  getTransparentButton,
  getNavMenuWrapper,
} from './style';
import SVG from 'react-inlinesvg';
//@ts-ignore
import HamburgerIcon from '../../../content/assets/icon/hamburger.svg';

const TransparentButton = getTransparentButton(0.75);

interface HamburgerMenuProps {
  menuOpen: boolean;
  setMenu: (state: boolean) => void;
  navLinks: { text: string; route: string; key: string }[];
}

export default function HamburgerMenu({ menuOpen, setMenu, navLinks }: HamburgerMenuProps) {
  const HamburgerInnerWrapper = getNavMenuWrapper(menuOpen);
  return (
    <HamburgerSystem>
      <HamburgerInnerWrapper>
        {menuOpen && (
          <>
            <NavMenuFiller />
            <NavMenuOpenWrapper />
            <NavMenuContentWrapper>
              {navLinks.map((item) => {
                return (
                  <NavMenuLink to={item.route}>
                    <NavMenuLinkContent>{item.text}</NavMenuLinkContent>
                  </NavMenuLink>
                );
              })}
            </NavMenuContentWrapper>
          </>
        )}
      </HamburgerInnerWrapper>
      {menuOpen && (
        <>
          <TransparentButton
            aria-label={'close menu button'}
            onClick={() => {
              setMenu(false);
            }}
          />
        </>
      )}
      <HamburgerButton
        aria-label={'menu button'}
        onClick={() => {
          setMenu(!menuOpen);
        }}
      >
        <SVG src={HamburgerIcon} />
      </HamburgerButton>
    </HamburgerSystem>
  );
}
