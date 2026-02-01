import express from "express"
import cors from "cors"
import { graphqlMiddleware} from './graphql'
export const app = express();
app.use(cors())
app.use(express.json())

app.use("./graphql", graphqlMiddleware)
