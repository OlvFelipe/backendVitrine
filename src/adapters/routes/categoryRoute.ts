import express from 'express'
import CategoryController from '../controllers/categoryController'

const categoryRoute = express.Router()
const categoryController = new CategoryController()

categoryRoute.get('/all-categories', async (req, res) => {
    return await categoryController.listAllCategory(req, res)
})

export default categoryRoute