import config from '../config';

export function siplifyWeis(amountStr){
        //First we will get rid of too many zeros
        const regex = /[0]/g;
        
        let simplifyExponential =0;
        if(amountStr.match(regex) !== null){
            simplifyExponential = amountStr.match(regex).length;
        }
        
        //18 is the max we can simplify
        if(simplifyExponential>18){
            simplifyExponential=18;
        }

        //less than 3 is the min we can simplify atm
        if(simplifyExponential<3){
            simplifyExponential=1;
        }

        //TODO: Validate that simplifyExponential is a multiple of 3
        //let isValidExponential=simplifyExponential%3;
        //if(!isValidExponential){
            //TODO: move positions accordingly?
        //}

        let simplifyUnit = config.weiToUnits.units.filter(unit=>{return unit.exponential=== simplifyExponential});
            simplifyExponential= simplifyUnit[0].exponential;
        let resultSimplifyUnitName = simplifyUnit[0].name;

        //In order to get the amount stringTotal - zeros
        //take the positions result
        let totalAmountLength = amountStr.length;
        let valuesToTake= totalAmountLength - simplifyExponential;
        if(simplifyExponential===1){
            valuesToTake= totalAmountLength;
        }
        let resultAmount= amountStr.slice(0, valuesToTake);

        return { amount: resultAmount,
                 unit: resultSimplifyUnitName }

}

export function getWeisParts(amount){
        const dot='.';
        let result= amount.toString();
        let dotPosition=result.indexOf(dot);
        let integerPart= result;
        let fractionalPart='';

        if(dotPosition>=0)
        {
        integerPart= result.slice(0, dotPosition); 
        fractionalPart= result.slice(dotPosition+1); 
        }

        return {integer: integerPart,
                fractional: fractionalPart};
}

export function noExponents(amount){
        var data= String(amount).split(/[eE]/);
        if(data.length=== 1) return data[0]; 

        var  z= '', sign= this<0? '-':'',
        str= data[0].replace('.', ''),
        mag= Number(data[1])+ 1;

        if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^-/,'');// ^\
        }
        mag -= str.length;  
        while(mag--) z += '0';
        return str + z;
}



