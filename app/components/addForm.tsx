'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const AddForm = () => {
    const router = useRouter()
    const [todo, setTodo] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newTodo = {
            todo: todo,
            author: author
        }
        console.log(newTodo)
        const res = await fetch("http://localhost:3000/data/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        })
        
        if (res.ok) {
            router.refresh()
            router.push("/todos")
        }

        const d = await res.json()
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