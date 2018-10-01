import React from 'react';
import { StyledHeaderContainer, StyledIconHome, StyledTitle } from './header.style';
import home from '../../assets/icons/home.svg';

const Header = () =>{
        return (<StyledHeaderContainer>
                    <StyledIconHome src={home}/>
                    <StyledTitle><h2>Ether currency converter</h2></StyledTitle>
                </StyledHeaderContainer>);
}

export default Header;