const {Flights} = require('../models/index');
const{compareTime} = require('../utils/helper')

class FlightRepository{
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
}
module.exports = FlightRepository;