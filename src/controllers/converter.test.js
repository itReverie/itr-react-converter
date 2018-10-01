import Converter from './converter';
import {noExponents} from './helpers';

describe('testing the Converter Class', ()=>{

    let converter= new Converter();

    it('convertFromUnitToEther 1000 wei = 0.000000000000001 ether ', () => {
        let result=converter.convertFromUnitToEther( 'wei' ,1000);
        expect(noExponents(result)).toEqual("0.000000000000001");
    });

    it('convertFromEtherToUnit no simplify 1 ether = 1000000000000000000 wei ', () => {
        expect.assertions(2);
        let result=converter.convertFromEtherToUnit( 'wei' ,1);
        expect(result.amount).toEqual("1000000000000000000");
        expect(result.unit).toEqual("wei");
    });

    it('convertFromEtherToUnit simplify 0.000001 ether = 1 szabo ', () => {
        expect.assertions(2);
        let result=converter.convertFromEtherToUnit( 'szabo' , 0.000001);
        expect(result.amount).toEqual("1");
        expect(result.unit).toEqual("szabo");
    });

    it('evaluateFrom 1.45 szabo to 0.0000014499999999999999 ether', () => {
        let result=converter.evaluateFrom('unit', 'szabo', 1.45);
        expect(result).toEqual(0.0000014499999999999999);
    });

    it('evaluateTo 0.00000145 ether to shannon', () => {
        let result=converter.evaluateTo('unit', 'shannon', 0.00000145);
        expect(result.amount).toEqual("1450");
        expect(result.unit).toEqual("wei");
    });

    it('convert from szabo to shannon', () => {
        expect.assertions(2);
        let from={type:'unit', name:'szabo', amount:'1.45'};
        let to={type:'unit', name:'shannon'}

        let result=converter.convert(from, to, 1.45, false);
        expect(result.amount).toEqual("1449.9999999999998");
        expect(result.unit).toEqual("shannon");
    });


    it('convert from 1 ether to wei', () => {
        expect.assertions(2);
        let from={type:'ether', name:'ether'};
        let to={type:'unit', name:'wei'}

        let result=converter.convert(from, to, 1, false);
        expect(result.amount).toEqual("1000000000000000000");
        expect(result.unit).toEqual("wei");
    });

});
