import prisma from '../../../adapters/database';
import VehicleRepository from './vehicleRepository';

class PrismaVehicleRepository implements VehicleRepository {
  async createVehicle(vehicle: any): Promise<any> {
    try {
      return await prisma.vehicle.create({
        data: vehicle,
      })
    } catch (error) {
      return error 
    }
  }

  async getVehicleById(vehicleId: string): Promise<any> {
    return await prisma.vehicle.findFirst({
      where: { id: vehicleId },
    })
  }

  async listAllVehicle(): Promise<any> {
    return await prisma.vehicle.findMany()
  }
}

export default PrismaVehicleRepository;