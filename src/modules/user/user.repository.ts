import type { PrismaClient } from "../../generated/client.js";
import type { CreateUserInput } from "./user.types.js";

export class UserRepository {
    constructor(private prisma: PrismaClient){}
    findByEmail(email:string){
        return this.prisma.user.findUnique({where:{email}})
    }
    create(data:CreateUserInput & {password: string}){
        return this.prisma.user.create({data})
    }
}
