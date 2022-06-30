import React from "react";
import { LinkContainer, LinkHeader, FooterLink } from "./styles";

const FooterLinks = ({ heading, links }) => {
  return (
    <LinkContainer>
      <LinkHeader>{heading}</LinkHeader>
      {links.map((element, index) => (
        <FooterLink to="/" key={index}>
          {element}
        </FooterLink>
      ))}
    </LinkContainer>
  );
};

export default FooterLinks;
