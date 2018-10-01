import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.onInputChanged=this.onInputChanged.bind(this);
        this.state={amount:1}
    }

    onInputChanged = (event) =>{
        this.setState({amount:event.target.value});
        this.props.onInputChanged(event.target.value);
    }

    render(){
        return(<NumberFormat value={this.state.amount} 
            thousandSeparator={true} 
            onChange={this.onInputChanged}/>)
    }
}

Input.propTypes={
    value: PropTypes.number,
    type: PropTypes.string,
    onInputChanged: PropTypes.func.isRequired
}

Input.defaultProps={
    value: 1,
    type: 'output'
}
