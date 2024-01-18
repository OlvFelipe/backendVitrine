import BodyworkRepository from "./bodyworkRepository";
import prisma from '../../../adapters/database';

class PrismaBodyworkRepository implements BodyworkRepository {

    async getBodyworkById(bodyworkId: string): Promise<any> {
        return await prisma.bodyWork.findFirst({
            where: { id: bodyworkId },
          })
    }

    async listAllBodywork(): Promise<any> {
        return await prisma.bodyWork.findMany()
    }
}

export default PrismaBodyworkRepository

