"use client"

import { useRouter } from "next/navigation"

export default function UpdateTodo({author, id}: {author: string, id: string}) {

    const router = useRouter()

    const handleClick = async (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/api/${author}/done/${id}`, {
            method: "PATCH",
            next: {tags: ['reload']}
        })
        const res2 = await fetch("http://localhost:3000/api/revalidate?tag=reload")
        router.refresh()
        router.push("/todos/list/")
    } 

    return (
        <a href="#" onClick={handleClick}>Done</a>
    )
}
