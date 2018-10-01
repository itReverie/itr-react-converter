import config from '../config/';


const currenciesApi ={
  
        config: Object.assign({},config.apiGetCurrencyPrice),
  
        requestCurrencyPricesForEther(){     

        let apiHost=`${this.config.host}${this.config.fromCurrency}&tsyms=${this.config.toCurrency}`;

        let error;
      
        //Calling the API
        return new Promise((resolve, reject) => {
            let res;
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
  
        // getCurrencies(){
        // return new Promise((resolve, reject) => {
        //   this.requestSearch(searchTerm,numberOfResults,offset)
        //   .then(result=> {
        //     let giphys={};
        //     //Normalizing and having our own object Giphy with just the data we need. 
        //     if(result.data && result.data.length>0){
        //       giphys = result.data.reduce((acc, item) => ({
        //         ...acc,
        //         [item.id]: Object.assign({}, item, new Giphy(item.id, item.images.fixed_width))
        //       }), {});
        //       resolve(giphys);
        //     }
        //     else{
        //       reject({message: errors.Validation.SearchWithoutResults});
        //     }
        //   })
        //   .catch(error => {
        //     reject(error)});
       // });
    //}
  
  }
  
  export default currenciesApi;