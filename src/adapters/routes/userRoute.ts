import express from 'express'
import UserController from '../controllers/userController'
// import { authMiddleware } from '../express/middlewares/authMiddleware'

const userRouter = express.Router()
const userController = new UserController()
// const secretKey: any = process.env.JWT_SECRET

userRouter.post('/users', async (req, res) => {
    await userController.createUser(req, res)
})

userRouter.get('/users/:userId', async (req, res) => {
    await userController.getUserProfile(req, res)
})

export default userRouter;
