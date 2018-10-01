import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {customDropdownStyles} from './dropdown.style';

export default class ListItems extends Component{

  constructor(props){
    super(props);
    this.onItemChanged= this.onItemChanged.bind(this);
  }

  onItemChanged =(selectedItem)=>{
    this.props.onItemChanged(selectedItem);
  }

  render(){
    return (<Select options={this.props.options} 
      styles={customDropdownStyles}
      defaultValue={this.props.defaultValue}
      onChange={this.onItemChanged}
      />)
  }
}


ListItems.propTypes= {
   options: PropTypes.array.isRequired,
   onItemChanged: PropTypes.func.isRequired,
   defaultValue:PropTypes.object
}

