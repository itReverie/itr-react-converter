import config from '../config/';
import {siplifyWeis, getWeisParts, noExponents} from './helpers';

const etherToUnits= config.etherToUnits;
const etherToCurrency= {};

export default class Converter{

    convertFromEtherToCurrency(currencyCode, amount){
        let currency = etherToCurrency.currencies.filter(item=>{return item.code.toLowerCase()=== currencyCode });
        let resultAmount = amount * currency[0].value;
        return resultAmount;
    }

    convertFromCurrencyToEther(currencyCode, amount){
        let currency = etherToCurrency.currencies.filter(item=>{return item.code.toLowerCase()=== currencyCode });
        let resultAmount = amount / currency[0].value;
        return resultAmount;
    }

    convertFromUnitToEther(fromUnitName, amount){
      let unit = etherToUnits.units.filter(item=>{return item.name.toLowerCase()=== fromUnitName });
      let resultAmount = amount/Math.pow(10, unit[0].exponential );
      return resultAmount;
    }

    //This is the 1/2 function that returns an object of type {amount, unit}
    convertFromEtherToUnit(toUnitName, amount, simplify)
    {
          let resultUnit = etherToUnits.units.filter(item=>{return item.name.toLowerCase()=== toUnitName });
          let resultUnitName=resultUnit[0].name;
          let resultExponential= resultUnit[0].exponential;
          
          //Get rid of zeros 
          let resultAmount;
          if(amount<1){
             resultAmount=  amount * Math.pow(10, resultExponential);
          }
          else{
             resultAmount= Math.floor( amount * Math.pow(10, resultExponential));
          }

          resultAmount=noExponents(resultAmount);

          let result={ amount: resultAmount,
                        unit: resultUnitName }
          
          if(simplify)
          {
              let weisParts=getWeisParts(resultAmount)
              result=siplifyWeis(weisParts.integer);   
              //TODO: Is missing the decimals
          }

          return result; 
    }

    //This is the 2/2 function that returns an object of type {amount, unit}
    getEthermount(amount){
      let result=noExponents(amount*1);
      return { amount: result,
                unit: "ether" }
    }

    evaluateFrom (condition, from, amount) {
        var self=this;
        let fromResult = {
          'currency': function () {
            return self.convertFromCurrencyToEther(from, amount);
          },
          //Ether is the base
          'ether': function () {
            return amount*1;
          },
          'unit': function () {
            return  self.convertFromUnitToEther(from, amount);
          }
        };
      
        if (typeof fromResult[condition] !== 'function') {
          return 1;
        }
       
        let test=fromResult[condition]();
        return test;
    }

    evaluateTo (condition, to, amount, isSimplify=true) {
        var self=this;
        let toResult = {
          'currency': function () {
            return self.convertFromEtherToCurrency(to, amount);
          },
           //Ether is the base
          'ether': function () {
            return self.getEthermount(amount);
          },
      
          'unit': function () {
            return self.convertFromEtherToUnit(to, amount, isSimplify);
          }
        };
      
        if (typeof toResult[condition] !== 'function') {
          return 1;
        }
      
        return toResult[condition]();
    }
  
    convert(from , to , amount){
        let simplify=true;
        //TODO: This can be done better if I have time
        if(from.type===to.type || 
            to.name==="wei" ||
            (from.name==="wei" && to.name==="ether") ||
            (from.name==="ether" && to.type==="unit")){
            simplify=false;
        }
        let base=this.evaluateFrom(from.type, from.name, amount);
        let result=this.evaluateTo(to.type, to.name, base, simplify);
        return result;
    }
}




