"use client"

import { useRouter } from "next/navigation"

export default function DeleteTodo(props) {

    const router = useRouter()

    const handleClick = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/api/${props.author}/delete/${props.id}`, {
            method: "DELETE"
        })

        router.push("/todos/list/")
    } 

    return (
        <a href="#" onClick={handleClick}>Delete</a>
    )
}