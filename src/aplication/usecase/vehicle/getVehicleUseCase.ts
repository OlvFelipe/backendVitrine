import Vehicle from "../../../domain/entities/vehicle";
import VehicleRepository from "../../../domain/repositories/vehicle/vehicleRepository";

class GetVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async execute(vehicleID: string): Promise<Vehicle> {
        const vehicle = await this.vehicleRepository.getVehicleById(vehicleID)
        return vehicle
    }
}

export default GetVehicleUseCase;