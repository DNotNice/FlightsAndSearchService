const{CityRepository} = require('../repository/index')

class CityService{
    constructor() {
        this.CityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const result =  await this.CityRepository.createCity(data); 
            return result;
        } catch (error) {
            console.log('some error occured at service layer ');
            throw(error);
        }
    }
    async deleteCity(cityId){
        try {
               const res = await this.CityRepository.deleteCity(cityId);
               return res;        
        } catch (error) {
            console.log('some error occured at service layer ');
            throw(error);            
        }
    }
    async updateCity(cityId , data){
        try {
            const result = await this.CityRepository.updateCity(cityId , data);
            return result;        
        } catch (error) {
            console.log('some error occured at service layer ');
            throw(error);
        }
    }
    async getCity(cityId){
            try{
                const city = await this.CityRepository.getCity(cityId);
                return city;
            }catch(error){
                console.log('some error occured at service layer ');
                throw(error);    
            }
    }
    async getAllCities(filter){
         try {
             const res = await this.CityRepository.getAllCities({ name : filter.name});
             return res;
         } catch (error) {
            console.log('some error occured at service layer ');
            throw(error); 
         }
    }
}
module.exports = CityService;