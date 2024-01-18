import Vehicle from "../../entities/vehicle"

interface VehicleRepository {
    createVehicle(vehicle: Omit<Vehicle, 'id'>): Promise<Vehicle>
    getVehicleById(vehicleId: string): Promise<Vehicle>
    listAllVehicle(): Promise<Vehicle>
}
  
export default VehicleRepository;