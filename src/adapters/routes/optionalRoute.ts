import express from 'express'
import OptionalController from '../controllers/optionalController'

const optionalRoute = express.Router()
const optionalController = new OptionalController()

optionalRoute.get('/all-optional', async (req, res) => {
    await optionalController.listAllOptional(req, res)
})

export default optionalRoute