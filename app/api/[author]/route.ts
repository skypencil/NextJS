import { Params } from "@/app/components/params"
import { data } from "../data"


export async function GET(request:any, {params}:{params: Params}) {
    const todo = data.filter(item => item.author === params.author)

    return Response.json(todo)
}
