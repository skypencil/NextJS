import { data } from "@/app/api/data";

export async function DELETE(request, {params}) {

    let matched_todo_index = data.indexOf(data.find(item => item.author === params.author && item.id === parseInt(params.id)))
    
    data.splice(matched_todo_index, 1)

    return Response.json(data)
}