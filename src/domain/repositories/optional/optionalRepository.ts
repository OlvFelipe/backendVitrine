import Optional from "../../entities/optional"

interface OptionalRepository {
    listAllOptional(): Promise<Optional>
}

export default OptionalRepository