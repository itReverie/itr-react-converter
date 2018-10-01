import React from 'react';
import { StyledHeaderContainer, StyledIconHome, StyledTitle } from './header.style';
import home from '../../assets/icons/home.svg';

const Header = () =>{
        return (<StyledHeaderContainer>
                    <StyledIconHome src={home}/>
                    <StyledTitle>Ether currency converter</StyledTitle>
                </StyledHeaderContainer>);
}

export default Header;