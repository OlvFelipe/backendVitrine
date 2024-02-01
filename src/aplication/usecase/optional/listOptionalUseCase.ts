import Optional from "../../../domain/entities/optional"
import OptionalRepository from "../../../domain/repositories/optional/optionalRepository"

class ListAllOptionalUseCase {
    constructor(private optionalRepository: OptionalRepository) {}

    async execute(): Promise<Optional> {
        const optional = await this.optionalRepository.listAllOptional()
        return optional
    }
}

export default ListAllOptionalUseCase