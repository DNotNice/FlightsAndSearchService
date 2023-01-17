//all the interaction from model should happen from the repository class 

const {City} = require('../models/index');

class CityRepository{
    async createCity( {name}){
        try{
         const city = await City.create({name});   
         return city; 
        }catch(error){
            console.log('something went wrong in the repository layer ');
            throw {error};
        }
    }
    async deleteCity( CityId ){
        try{
           await City.destroy({
            where :{
                id:CityId
            }
           });
           return true;
        }catch(error){
            console.log('something went wrong in the repository layer ');
            throw {error}
        }
    }
    async updateCity(cityId , data){
        try{
            const city = City.update(data ,{
                where :{
                    id:cityId
                }
            });
            return city;
        }catch(error){
            console.log('something went wrong in the repository layer ');
            throw {error};
        }
    }
    async getCity(cityid){
      try{
        const city = await City.findByPk(cityid);
        return city;
      }catch(error){
        console.log('something went wrong in the repository layer ');
        throw {error};
      }
    }
}

module.exports = CityRepository;