import { data } from "@/app/api/data";

export async function DELETE(request:any, {params}:any) {

    let matched_todo = data.find(item => item.author === params.author && item.id === parseInt(params.id))

    let matched_todo_index:any
    if (matched_todo !== undefined) {
        matched_todo_index = data.indexOf(matched_todo)
    } else {matched_todo_index = []}
    
    data.splice(matched_todo_index, 1)

    return Response.json(data)
}