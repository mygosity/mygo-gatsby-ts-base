import React, { useState } from 'react';
import { css } from '@emotion/core';
import {
  PageContainerStyle,
  HeaderBackground,
  HeaderWrapper,
  HomeLinkWrapper,
  HomeLink,
  NavWrapper,
  NavContent,
  ContentWrapper,
  FooterWrapper,
  CopyrightWrapper,
  CopyrightSpan,
  getMainLayoutWrapper,
} from './style';
import HamburgerMenu from 'src/components/hamburgermenu';

const navLinks = [{ text: 'Contact Us', key: 'nav_contact', route: '/contact' }];

interface LayoutProps {
  title: string;
  copyrightName: string;
  children: any;
}

export default function Layout({ copyrightName, title, children }: LayoutProps) {
  const [menuOpen, setMenu] = useState(false);
  const MainLayoutWrapper = getMainLayoutWrapper(menuOpen);
  return (
    <MainLayoutWrapper>
      <HeaderBackground>
        <HeaderWrapper>
          <HomeLinkWrapper>
            <HomeLink to={`/`}>{title.toUpperCase()}</HomeLink>
          </HomeLinkWrapper>
          <NavWrapper>
            {navLinks.map((item) => (
              <NavContent key={item.key} to={item.route}>
                {item.text}
              </NavContent>
            ))}
          </NavWrapper>
          <HamburgerMenu menuOpen={menuOpen} setMenu={setMenu} navLinks={navLinks} />
        </HeaderWrapper>
      </HeaderBackground>
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <FooterWrapper>
        <CopyrightWrapper>
          <CopyrightSpan>
            Copyright © {new Date().getFullYear()} {copyrightName}
          </CopyrightSpan>
        </CopyrightWrapper>
      </FooterWrapper>
    </MainLayoutWrapper>
  );
}
