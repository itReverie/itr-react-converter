import React from 'react';
import {StyledFooter} from './footer.style';
const Footer = () =>{
    return (<StyledFooter>
      © {new Date().getFullYear()}
    </StyledFooter>);
  }

export default Footer;