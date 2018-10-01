//Maybe for the purpose of this excercise the configurations are the same but in production it could change.
module.exports =function(){
    switch (process.env.NODE_ENV) {
      case null:
      case undefined:
      case "local":
      case 'development':
        return { 
          apiGetCurrencyPrice: {
            host:'https://min-api.cryptocompare.com/data/price?fsym=',
            fromCurrency:'ETH',
            toCurrency:'USD,JPY,EUR'
          },
          etherToUnits:{
                    currencyName: 'ether',
                    baseUnit:'wei',
                    units:[
                      { name: 'wei',
                        exponential: 18,
                        type:'unit',
                        optionalNames:[]
                      },
                      { name: 'babbage',
                        exponential: 15,
                        type:'unit',
                        optionalNames:['kwei']
                      },
                      { name: 'lovelace',
                        exponential: 12,
                        type:'unit',
                        optionalNames:['mwei']
                      },
                      { name: 'shannon',
                        exponential: 9,
                        type:'unit',
                        optionalNames:['gwei']
                      },
                      { name: 'szabo',
                        exponential: 6,
                        type:'unit',
                        optionalNames:['microether']
                      },
                      { name: 'finney',
                        exponential: 3,
                        type:'unit',
                        optionalNames:['milliether']
                      },
                      { name: 'ether',
                        exponential: 1,
                        type:'ether',
                        optionalNames:[]
                      },
                      ]
                  },
          weiToUnits:{
                    currencyName: 'ether',
                    baseUnit:'wei',
                    units:[
                        { name: 'wei',
                          exponential: 1,
                          optionalNames:[]
                        },
                        { name: 'babbage',
                          exponential: 3,
                          optionalNames:['kwei']
                        },
                        { name: 'lovelace',
                          exponential: 6,
                          optionalNames:['mwei']
                        },
                        { name: 'shannon',
                          exponential: 9,
                          optionalNames:['gwei']
                        },
                        { name: 'szabo',
                          exponential: 12,
                          optionalNames:['microether']
                        },
                        { name: 'finney',
                          exponential: 15,
                          optionalNames:['milliether']
                        },
                        { name: 'ether',
                          exponential: 18,
                          optionalNames:[]
                        },
                    ]
                  }
               };
    case 'production':
    return { 
      apiGetCurrencyPrice: {
        host:'https://min-api.cryptocompare.com/data/price?fsym=',
        fromCurrency:'ETH',
        toCurrency:'USD,JPY,EUR'
      },
      etherToUnits:{
                currencyName: 'ether',
                baseUnit:'wei',
                units:[
                  { name: 'wei',
                    exponential: 18,
                    type:'unit',
                    optionalNames:[]
                  },
                  { name: 'babbage',
                    exponential: 15,
                    type:'unit',
                    optionalNames:['kwei']
                  },
                  { name: 'lovelace',
                    exponential: 12,
                    type:'unit',
                    optionalNames:['mwei']
                  },
                  { name: 'shannon',
                    exponential: 9,
                    type:'unit',
                    optionalNames:['gwei']
                  },
                  { name: 'szabo',
                    exponential: 6,
                    type:'unit',
                    optionalNames:['microether']
                  },
                  { name: 'finney',
                    exponential: 3,
                    type:'unit',
                    optionalNames:['milliether']
                  },
                  { name: 'ether',
                    exponential: 1,
                    type:'ether',
                    optionalNames:[]
                  },
                  ]
              },
      weiToUnits:{
                currencyName: 'ether',
                baseUnit:'wei',
                units:[
                    { name: 'wei',
                      exponential: 1,
                      optionalNames:[]
                    },
                    { name: 'babbage',
                      exponential: 3,
                      optionalNames:['kwei']
                    },
                    { name: 'lovelace',
                      exponential: 6,
                      optionalNames:['mwei']
                    },
                    { name: 'shannon',
                      exponential: 9,
                      optionalNames:['gwei']
                    },
                    { name: 'szabo',
                      exponential: 12,
                      optionalNames:['microether']
                    },
                    { name: 'finney',
                      exponential: 15,
                      optionalNames:['milliether']
                    },
                    { name: 'ether',
                      exponential: 18,
                      optionalNames:[]
                    },
                ]
              }
           };
    default:
    return { 
      apiGetCurrencyPrice: {
        host:'https://min-api.cryptocompare.com/data/price?fsym=',
        fromCurrency:'ETH',
        toCurrency:'USD,JPY,EUR'
      },
      etherToUnits:{
                currencyName: 'ether',
                baseUnit:'wei',
                units:[
                  { name: 'wei',
                    exponential: 18,
                    type:'unit',
                    optionalNames:[]
                  },
                  { name: 'babbage',
                    exponential: 15,
                    type:'unit',
                    optionalNames:['kwei']
                  },
                  { name: 'lovelace',
                    exponential: 12,
                    type:'unit',
                    optionalNames:['mwei']
                  },
                  { name: 'shannon',
                    exponential: 9,
                    type:'unit',
                    optionalNames:['gwei']
                  },
                  { name: 'szabo',
                    exponential: 6,
                    type:'unit',
                    optionalNames:['microether']
                  },
                  { name: 'finney',
                    exponential: 3,
                    type:'unit',
                    optionalNames:['milliether']
                  },
                  { name: 'ether',
                    exponential: 1,
                    type:'ether',
                    optionalNames:[]
                  },
                  ]
              },
      weiToUnits:{
                currencyName: 'ether',
                baseUnit:'wei',
                units:[
                    { name: 'wei',
                      exponential: 1,
                      optionalNames:[]
                    },
                    { name: 'babbage',
                      exponential: 3,
                      optionalNames:['kwei']
                    },
                    { name: 'lovelace',
                      exponential: 6,
                      optionalNames:['mwei']
                    },
                    { name: 'shannon',
                      exponential: 9,
                      optionalNames:['gwei']
                    },
                    { name: 'szabo',
                      exponential: 12,
                      optionalNames:['microether']
                    },
                    { name: 'finney',
                      exponential: 15,
                      optionalNames:['milliether']
                    },
                    { name: 'ether',
                      exponential: 18,
                      optionalNames:[]
                    },
                ]
              }
           };
    }
}();
