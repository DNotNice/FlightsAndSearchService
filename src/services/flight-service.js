const {FlightRepository , AirplaneRepository} = require('../repository/index');
class FlightService {
   constructor(){
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
   }
    async createFlight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data , totalSeats : airplane.capacity
            });
            return flight;      
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw(error);
        }
    }
    async getAllFlightData(data){
          try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
          } catch (error) {
            console.log('something went wrong in the service layer');
            throw {error }
          }
    }
}
module.exports = FlightService;