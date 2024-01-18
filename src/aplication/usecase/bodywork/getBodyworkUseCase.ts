import BodyWork from "../../../domain/entities/bodywork";
import BodyworkRepository from "../../../domain/repositories/bodywork/bodyworkRepository";

class GetBodyworkUseCase {
    constructor(private bodyworkRepository: BodyworkRepository) {}

    async execute(bodyworkId: string): Promise<BodyWork> {
        const bodywork = this.bodyworkRepository.getBodyworkById(bodyworkId)
        return bodywork
    }

    async executeAll(): Promise<BodyWork> {
        const allBodywork = this.bodyworkRepository.listAllBodywork()
        return allBodywork
    }
}

export default GetBodyworkUseCase