import React from 'react';
import { StyledLink } from './CommonLink.styles';

interface ICommonLinkProps {
  linkText: string;
  to: string;
}
const CommonLink = ({ linkText, to }: ICommonLinkProps) => {
  return <StyledLink to={to}>{linkText}</StyledLink>;
};

export default CommonLink;
