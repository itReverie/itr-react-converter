import React, {Component} from 'react';
import PropTypes from "prop-types";
import {MainContainer, ConvertButton, ErrorMessage} from './converter.style';
import Card from '../../components/card';
import equalButton from '../../assets/icons/equal.png';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as conversionUnitActions from "../../../actions/conversionUnitActions";
import * as converterActions from "../../../actions/converterActions";

class Converter extends Component{

  componentDidMount() {
      this.props.actions.loadConversionUnits();
  }

  componentWillMount(){
      this.onItemFromChanged= this.onItemFromChanged.bind(this);
      this.onItemToChanged= this.onItemToChanged.bind(this);
      this.onInputChanged= this.onInputChanged.bind(this);
  }

  onItemFromChanged = (selectedItem)=>{
      this.props.actions.updateConversionFrom(selectedItem, this.props.converter );
  }

  onItemToChanged = (selectedItem)=>{
    this.props.actions.updateConversionTo(selectedItem, this.props.converter);
  }
  
  onInputChanged =(amount) =>{
    this.props.actions.updateConversionAmount(amount, this.props.converter);
  }

  render(){
    return(
  <div>
    <MainContainer>
        <Card id="from" 
              title="From"
              type="input"
              options={this.props.conversionUnits}
              onItemChanged={this.onItemFromChanged}
              onInputChanged={this.onInputChanged}
              defaultValue={{value:18, label:"wei"}}
              />

        <ConvertButton src={equalButton} alt="Converter"/>

        <Card id="to" 
              title="To"
              type="output"
              options={this.props.conversionUnits}
              onItemChanged={this.onItemToChanged}
              defaultValue={{value:18, label:"wei"}}
              resultAmount={this.props.converter.result===undefined?"":this.props.converter.result.amount}
              resultUnit={this.props.converter.result===undefined?"":this.props.converter.result.unit}
              />

     </MainContainer>
      <ErrorMessage>{this.props.converter.result===undefined?"":this.props.converter.result.error}</ErrorMessage>
   </div>

)
  }
}

Converter.propTypes={
  actions : PropTypes.object,
};

//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {conversionUnits: state.conversionUnits,
          converter: state.converter};
}

function mapDispatchToProps (dispatch)
{
  return {
    dispatch: dispatch,
    actions: bindActionCreators({...conversionUnitActions,...converterActions},dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter);


