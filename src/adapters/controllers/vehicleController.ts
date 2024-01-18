import { Request, Response } from 'express'
import GetVehicleUseCase from '../../aplication/usecase/vehicle/getVehicleUseCase'
import CreateVehicleUseCase from '../../aplication/usecase/vehicle/createVehicleUseCase'
import PrismaVehicleRepository from '../../domain/repositories/vehicle/PrismaVehicleRepository'

class VehicleController {
  private createVehicleUseCase: CreateVehicleUseCase
  private getVehicleUseCase: GetVehicleUseCase
  private listAllVehicle: GetVehicleUseCase

  constructor() {
    const prismaVehicleRepository = new PrismaVehicleRepository()
    this.createVehicleUseCase = new CreateVehicleUseCase(prismaVehicleRepository)
    this.getVehicleUseCase = new GetVehicleUseCase(prismaVehicleRepository)
    this.listAllVehicle = new GetVehicleUseCase(prismaVehicleRepository)
  }

  async createVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicle = req.body
      const createdVehicle = await this.createVehicleUseCase.execute(vehicle)
      res.status(201).json({ vehicle: createdVehicle})
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  async getVehicleById(req: Request, res: Response): Promise<void> {
    try {
      const vehicleId = req.params.vehicleId
      const vehicle: any = await this.getVehicleUseCase.execute(vehicleId)

      if (vehicle.length > 0) {
        res.json(vehicle)
      } else {
        res.status(404).json({ message: 'Veículo não encontrado' })
      }
    } catch (error) {
      console.log('error', error)
      res.status(500).json({ error: error })
    }
  }

  async listAllVehicles(req: Request, res: Response): Promise<void> {
    try {
      const vehicle: any = await this.listAllVehicle.executeAll()
  
      if (vehicle.length > 0) {
        res.json(vehicle)
      } else {
        res.status(404).json({ message: 'Nenhum veículo encontrado' })
      }
    } catch (error) {
      console.log('error', error)
      res.status(500).json({ error: error })
    }
  }
}

export default VehicleController
