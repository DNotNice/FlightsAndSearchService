const {AirportService} = require('../services/index');
 const airportService = new AirportService;
const create = async (req ,res)=>{
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message:'successfully created the airport',
            err :{},
            data :response ,
            success : true
        })
    } catch (error) {
        console.log('something went wrong int the airport controller');
        return res.status(500).json({
            data:{} ,
            success:false ,
            message :"cannot create a new airport",
            err : error
        })
    }
}
 module.exports ={ create};