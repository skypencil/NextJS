import { data } from "@/app/api/data";

export async function PATCH(request:any, {params}:any) {

    let matched_todo = data.find(item => item.author === params.author && item.id === parseInt(params.id))
    
    if (matched_todo !== undefined)
        matched_todo.done = true

    return Response.json(data)
}