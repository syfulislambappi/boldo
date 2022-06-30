import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled.div``;

export const LinkHeader = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #000;
`;

export const FooterLink = styled(Link)`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-top: 3.2rem;
  color: #777;
  text-decoration: none;
  display: block;
  transition: 0.4s;

  &:hover {
    text-decoration: underline;
  }
`;
