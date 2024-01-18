import { data } from "@/app/data/data";

export async function PATCH(request, {params}) {

    const recv_todo = await request.json()

    let matched_todo = data.find(item => item.author === params.author && item.id === parseInt(params.id))
    
    matched_todo.todo = recv_todo.todo

    return Response.json(matched_todo)
}