import { data } from "@/app/data/data";

export async function GET(request, {params}) {
    const todo = data.filter(item => item.author === params.author)

    return Response.json(todo)
}