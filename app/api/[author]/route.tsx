import { data } from "@/app/api/data";

export async function GET(request:any, {params}:any) {
    const todo = data.filter(item => item.author === params.author)

    return Response.json(todo)
}
