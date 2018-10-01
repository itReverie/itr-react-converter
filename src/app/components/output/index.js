import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export default class Input extends Component{
    
    render(){
        return(<NumberFormat value={this.props.resultAmount} 
                displayType='text' 
                thousandSeparator={true} />)
    }
}

Input.propTypes={
    resultAmount: PropTypes.string,
}

Input.defaultProps={
    resultAmount: "1"
}
