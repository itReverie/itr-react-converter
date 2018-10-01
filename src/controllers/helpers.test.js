import {siplifyWeis, getWeisParts, noExponents} from './helpers';


describe('testing siplify weis', ()=>{

    it('passing 1000 weis to 1 ether', () => {
        expect.assertions(2);
        let result=siplifyWeis('1000');
        expect(result.amount).toEqual("1");
        expect(result.unit).toEqual('babbage');
    });

    it('passing 1e18 weis to 1 ether', () => {
        expect.assertions(2);
        let result=siplifyWeis('1000000000000000000');
        expect(result.amount).toEqual("1");
        expect(result.unit).toEqual('ether');
    });
});

describe('testing getWeisParts', ()=>{

    it('passing 1000.78 weis in should return integers 10000 fractional 78', () => {
        expect.assertions(2);
        let result=getWeisParts('1000.78');
        expect(result.integer).toEqual("1000");
        expect(result.fractional).toEqual('78');
    });

});

describe('testing noExponents', ()=>{

    it('passing 10e18 and returning 1000000000000000000', () => {
        let result=noExponents('1e18');
        expect(result).toEqual('1000000000000000000');
    });
    
});