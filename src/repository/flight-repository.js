const {Flights} = require('../models/index');
const{compareTime} = require('../utils/helper')
const {Op} = require('sequelize');
class FlightRepository{

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter =[];
        if(data.minPrice && data.maxPrice){
            Object.assign(filter ,{
                [Op.and]: [
                    { price : {[Op.gte] : data.minPrice }} , 
                    { price : {[Op.lte] : data.maxPrice }}
                ]
            });
        }
        if(data.minPrice) priceFilter.push({price : {[Op.gte] : data.minPrice}});

        if(data.maxPrice) priceFilter.push({price : {[Op.lte] : data.maxPrice}});
        
        Object.assign(filter ,{[Op.and]: priceFilter});
    
        return filter
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime , data.departureTime)){
               throw {error : 'arrival time cannot be less than departure time'};
            }
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log('something went wrong in the repo layer');
            throw(error);
        }

    }
    async getFlight(flighId){
        try {
            const flight = await Flights.findByPk(flighId);
            return flight;
        } catch (error) {
            console.log('something went wrong in the repo layer');
            throw(error);
        }
    }
    async getAllFlights(filter){
        try {
            const filterObj = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where : filterObj
            });
            return flight;
        } catch (error) {
            console.log('something went wrong in the repo layer');
            throw(error);
        }
    }
}
module.exports = FlightRepository;