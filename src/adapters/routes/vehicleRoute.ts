import express from 'express'
import VehicleController from '../controllers/vehicleController'

const vehicleRouter = express.Router()
const vehicleController = new VehicleController()

vehicleRouter.post('/vehicle', async (req, res) => {
    await vehicleController.createVehicle(req, res)
})

vehicleRouter.get('/vehicle/:vehicleId', async (req, res) => {
    await vehicleController.getVehicleById(req, res)
})

vehicleRouter.get('/all-vehicle', async (req, res) => {
    await vehicleController.listAllVehicles(req, res)
})

export default vehicleRouter;
