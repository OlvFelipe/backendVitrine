import express from 'express'
import BodyworkController from '../controllers/bodyworkController'

const bodyworkRoute = express.Router()
const bodyworkController = new BodyworkController()

bodyworkRoute.get('/bodywork/:bodyworkId', async (req, res) => {
    await bodyworkController.getBodyWorkById(req, res)
})

bodyworkRoute.get('/all-bodywork', async (req, res) => {
    await bodyworkController.listAllBodyworks(req, res)
})

export default bodyworkRoute