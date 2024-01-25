import { data } from "@/app/api/data"
import { Params } from "@/app/components/params"

export async function PATCH(request:any, {params}: { params: Params }) {

    let matched_todo = data.find(item => item.author === params.author && item.id === parseInt(params.id))
    
    if (matched_todo !== undefined)
        matched_todo.done = true

    return Response.json(data)
}
