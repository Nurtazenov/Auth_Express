import type { UserRepository } from "./user.repository.js"
import type { CreateUserInput } from "./user.types.js"
import bcrypt from "bcrypt"
export class UserService {
    constructor(private repo: UserRepository) {}
    async createUser(input: CreateUserInput){
        if(!input.email.includes('@')){
            throw new ValidationError('Невалидный email')
        }
        const existing = await this.repo.findByEmail(input.email)
        if(existing){
            throw new ConflictError("Пользователь уже в существует")
        }
        return this.repo.create(input)
    }
}
