const {CityService} = require('../services/index');
const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city ,
            success : true ,
            message : 'successfully created a city',
            err:{}
        })
    } catch (error) {
        console.log("error at controller level");
        return res.status(500),json({
            data :{},
            success : false ,
            message : 'Not able to create a city',
            error :error    
        })
    }
}
//DELETE ->/city/id

const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data : city ,
            success : true ,
            message : 'successfully deleted a city',
            err:{}
        })
    } catch (error) {
        console.log("error at controller level");
        return res.status(500),json({
            data :{},
            success : false ,
            message : 'Not able to delete the city',
            error :error    
        })
    }
}

//GET ->/city/id
const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data : city ,
            success : true ,
            message : 'successfully fetched a city',
            err:{}
        })
        
    } catch (error) {
        console.log("error at controller level");
        return res.status(500),json({
            data :{},
            success : false ,
            message : 'Not able to get the city',
            error :error    
        })
    }
}

// Patch ->/city/:id->req.body
const update = async (req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id , req.body)
        return res.status(201).json({
            data : city ,
            success : true ,
            message : 'successfully fetched a city',
            err:{}
        })
    } catch (error) {
        console.log("error at controller level");
        return res.status(500),json({
            data :{},
            success : false ,
            message : 'Not able to update the city',
            error :error    
        })
    }
}
module.exports = {
    create , destroy , update , get
}