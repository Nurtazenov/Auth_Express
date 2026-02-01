import { UserService } from "./modules/user/user.service.js"
import { UserRepository } from "./modules/user/user.repository.js"
import { PrismaClient } from "@prisma/client"
    const prisma = new PrismaClient()

export const createContext = {
        services: {
            user: new UserService(
                new UserRepository(prisma)
            )
        }

}
