import OptionalRepository from "./optionalRepository"
import prisma from "../../../adapters/database"

class PrismaOptionalRepository implements OptionalRepository {
    async listAllOptional(): Promise<any> {
        try {
            return await prisma.optional.findMany()
        } catch (error) {
            return error
        }
    }
}

export default PrismaOptionalRepository