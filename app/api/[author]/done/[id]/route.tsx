import { data } from "@/app/api/data";

export async function PATCH(request, {params}) {

    let matched_todo = data.find(item => item.author === params.author && item.id === parseInt(params.id))
    
    matched_todo.done = true

    return Response.json(data)
}