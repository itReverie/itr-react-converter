import currenciesApi from './currenciesApi';
import config from '../config/';

describe('✗ sending a wrong API request ', () => {

  //'Initialize a valid configuration for the API'
  beforeEach(()=>{
      currenciesApi.config=Object.assign({},config.apiGetCurrencyPrice);
  });

  it('should return an invalid request message when the api url is incorrect', async () => {
        expect.assertions(1);
        
        //Setting url configuration to fail
        currenciesApi.config = Object.assign({}, {apiGetCurrencyPrice:{host:''}});

        await expect(currenciesApi.requestCurrencyPricesForEther())
                    .rejects
                    .toBeInstanceOf(Error);
  });

})

describe('✓ sending a valid API request to the giphy API', () => {

    //'Initialize a valid configuration for the API'
    beforeEach(()=>{
        currenciesApi.config=Object.assign({},config.apiGetCurrencyPrice);
    });

  it('should return prices for three currencies', async () => {
    expect.assertions(3);

    const result = await currenciesApi.requestCurrencyPricesForEther();
    expect(result).toHaveProperty('EUR');
    expect(result).toHaveProperty('JPY');
    expect(result).toHaveProperty('USD');
  });
})