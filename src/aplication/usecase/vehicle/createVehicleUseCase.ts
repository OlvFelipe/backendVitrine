import Vehicle from '../../../domain/entities/vehicle';
import VehicleRepository from '../../../domain/repositories/vehicle/vehicleRepository';

class CreateVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async execute(vehicle: Vehicle): Promise<Vehicle> {
        const createdVehicle = await this.vehicleRepository.createVehicle(vehicle)
        return createdVehicle
    }
}

export default CreateVehicleUseCase;