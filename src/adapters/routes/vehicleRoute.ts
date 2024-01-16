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

export default vehicleRouter;
