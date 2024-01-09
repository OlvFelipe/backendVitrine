import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from 'jsonwebtoken';
import User from "../../../domain/entities/user";

export const authMiddleware = (secretKey: Secret) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user: User = req.body
        const token = jwt.sign(user, secretKey, { expiresIn: '1h' })

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return console.log('Token inválido')
            }
            (req as any).user = decoded
            console.log('AUTENTICADO', token)
            next()
        })
    }
}