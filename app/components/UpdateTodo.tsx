"use client"

import { useRouter } from "next/navigation"

export default function UpdateTodo(props) {

    const router = useRouter()

    const handleClick = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/api/${props.author}/done/${props.id}`, {
            method: "PATCH"
        })

        router.push("/todos/list/")
    } 

    return (
        <a href="#" onClick={handleClick}>Done</a>
    )
}