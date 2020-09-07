import React, { memo } from 'react';

import { Flex, Input } from '../Lib';
import { CheckIcon, InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from '../../Icons';
import { Link } from 'react-router-dom';
import { FooterStyled, FooterIcons, Copyright, FooterColumnStyled, InputLabel, IconInputStyled } from './styles';

const footerLinks = {
  about: [{ text: 'About us', link: ''}, { text: 'Partners', link: ''}, { text: 'Work with us', link: ''}],
  support: [{ text: 'Contact us', link: ''}, { text: 'Delivery', link: ''}],
};

const Footer = memo(() => (
  <>
    <FooterStyled>
      <Flex>
        <FooterColumn title="ABOUT" list={footerLinks.about} />
        <FooterColumn title="SUPPORT" list={footerLinks.support} />
      </Flex>
      <div>
        <FooterInput label="Subscribe to our newsletter" />
        <FooterIcons>
          <InstagramIcon />
          <YoutubeIcon />
          <FacebookIcon />
          <TwitterIcon />
        </FooterIcons>
      </div>
    </FooterStyled>
    <Copyright>
      <Link to="">Privacy</Link>
      <Link to="">Cookies</Link>
      <Link to="">@{(new Date().getFullYear())} Chiliheads SRL</Link>
    </Copyright>
  </>
));

const FooterColumn = ({ title, list }) => (
  <FooterColumnStyled>
    <h1>{title}</h1>
    <Flex flexDirection="column" alignItems="flex-start">
      {list.map(({ text, link }) => <Link key={text} to={link}>{text}</Link>)}
    </Flex>
  </FooterColumnStyled>
);

const FooterInput = ({ label }) => (
  <Flex flexDirection="column" alignItems="flex-start">
    <InputLabel>{label}</InputLabel>
    <IconInputStyled>
      <Input placeholder="Your email address" width="400rem" />
      <Flex><CheckIcon /></Flex>
    </IconInputStyled>
  </Flex>
);

export default Footer;