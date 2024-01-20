'use client'

import { revalidatePath } from "next/cache"

import { useRouter } from "next/navigation"
import { useState } from "react"



const AddForm = () => {
    
    const router = useRouter()
    const [todo, setTodo] = useState("")
    const [author, setAuthor] = useState("")
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const newTodo = {
            todo: todo,
            author: author
        }
        const res = await fetch("http://localhost:3000/api/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        })

        if (res.ok) {
            router.push("/todos/list/")
        }

        const res2 = await fetch("http://localhost:3000/api/")

        const d = await res2.json()
        console.log(d)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e=>setTodo(e.target.value)} type="text" placeholder="Todo" className="input input-bordered input-accent w-full max-w-xs my-2" />
            <input onChange={e=>setAuthor(e.target.value)} type="text" placeholder="Author" className="input input-bordered input-accent w-full max-w-xs my-2" />
            <button className="btn btn-accent my-2">Add Todo</button>
        </form>
    )
}

export default AddForm