import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from 'jsonwebtoken';

export const authMiddleware = (secretKey: Secret) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization

        if (!token) {
            return console.log('Necessário token para autenticação')
        }

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return console.log('Token inválido')
            }
            (req as any).user = decoded

            next()
        })
    }
}