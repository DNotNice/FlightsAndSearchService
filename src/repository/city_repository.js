//all the interaction from model should happen from the repository class 

const {City} = require('../models/index');
const {Op} = require('sequelize')

class CityRepository{
    async createCity({ name }) { 
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
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
            // the below approach also works but will not return updated obj 
            // if we are using Pg then returning : true can be used , else not
            // const city = City.update(data ,{
            //     where :{
            //         id:cityId
            //     }
            // });
            // return city;
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
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
    async getAllCities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                          [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
           const city = await City.findAll();
           return city;      
        } catch (error) {
            console.log('something went wrong in the repository layer ');
            throw {error};
                
        }
    }
}

module.exports = CityRepository;