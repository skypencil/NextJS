import { data } from "./data";

export async function GET() {
    return Response.json(data)
}

export async function POST(request: Request) {
    const toDo = await request.json()
    
    const newTodo = {
        id: data.length + 1,
        todo: toDo.todo,
        author: toDo.author,
        done: false     
    }
    data.push(newTodo)

    return new Response(JSON.stringify(newTodo), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201
    })
}
