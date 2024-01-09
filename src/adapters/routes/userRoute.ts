import express from 'express'
import UserController from '../controllers/userController'

const userRouter = express.Router()
const userController = new UserController()


userRouter.post('/users', async (req, res) => {
    await userController.createUser(req, res)
})

userRouter.get('/users/:userId', async (req, res) => {
    await userController.getUserProfile(req, res)
})

export default userRouter;
