import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';
import {StyledCard, Title, StyledResultAmount, OutputUnit} from './card.style';
import Input from '../input';
import Output from '../output';

const Card =(props)=>{

    let number=props.type==="input" ?  <Input type='output' 
                                             onInputChanged={props.onInputChanged}/> 
                                    :  <div><Output resultAmount={props.resultAmount}/>
                                             <OutputUnit>{props.resultUnit}</OutputUnit></div>;
   
    return (<StyledCard id="card">
            <Title>{props.title}</Title>
            <Dropdown options={props.options} 
                      onItemChanged={props.onItemChanged}
                      defaultValue={props.defaultValue}/>
            <StyledResultAmount>{number}</StyledResultAmount>
           
    </StyledCard>)
}

Card.propTypes={
    title: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.array.isRequired,
    resultUnit: PropTypes.string,
    resultAmount: PropTypes.string,
    onItemChanged: PropTypes.func.isRequired,
    onInputChanged: PropTypes.func,
    defaultValue: PropTypes.object
}

Card.defaultProps={
    type:'input',
    resultUnit:'1',
    defaultValue:{value:18, label:"wei"}
}

export default Card;