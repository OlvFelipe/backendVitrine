import Bodywork from '../../entities/bodywork'

interface BodyworkRepository {
    getBodyworkById(bodyworkId: string): Promise<Bodywork>
    listAllBodywork(): Promise<Bodywork>
}

export default BodyworkRepository