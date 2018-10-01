import config from '../config/';


const currenciesApi ={
  
        config: Object.assign({},config.apiGetCurrencyPrice),
  
        requestCurrencyPricesForEther(){     
         let apiHost=`${this.config.host}${this.config.fromCurrency}&tsyms=${this.config.toCurrency}`;
        
         let error;
      
        //Calling the API
        return new Promise((resolve, reject) => {
            fetch(apiHost)
            .then(res => {
                if(res.status===200){
                    resolve(res.json());
                }
                else{
                //TODO: If I have more time. This error should be logged in the server to have more information about what went wrong.
                //To the client in the fontend we need to apologize.
                //console.log(error)
                reject(error)
                }
            })
            .catch(error => {
                //TODO: If I have more time. This error should be logged in the server to have more information about what went wrong.
                //To the client in the fontend we need to apologize.
                //console.log(error)
                reject(error)
            })
        });
        },
  
        loadCurrencies(){
            return new Promise((resolve, reject) => {
                this.requestCurrencyPricesForEther()
                            .then(result=>{
                                 //Manipulating data according to my needs. 
                                if(Object.entries(result).length>0){
                                    let currencies = Object.entries(result).map(currency => {return  { value: currency[1],
                                                                                                        label: currency[0],
                                                                                                        name: currency[0],
                                                                                                        type: 'currency'}
                                                                                            })

                                    resolve(currencies);
                                }
                                else{
                                    reject(new Error(result));
                                }
                            })
                            .catch(error => {
                                        reject(error)});
                            });
        }
  }
  
  export default currenciesApi;