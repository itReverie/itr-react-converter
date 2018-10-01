import config from '../config';

export default class Units
{
    loadEtherUnits(){
        return config.etherToUnits.units.map(unit=>{return {value: unit.exponential,
                                                            label: unit.name, 
                                                            name: unit.name,
                                                            type: unit.type }});
    }

   
}
