import type { Context } from "node:vm"
import type { CreateUserInput } from "../modules/user/user.types.js"

export const userResolver = {
    Mutation:{
        createUser: async (_: string, args: CreateUserInput, ctx: Context) => {
            return ctx.service.user.createUser(args)
        }
    }
}
