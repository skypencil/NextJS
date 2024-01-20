import Link from "next/link"
import UpdateTodo from "@/app/components/UpdateTodo"
import DeleteTodo from "@/app/components/DeleteTodo"
import { revalidatePath } from "next/cache";
import CrossMarkSvg from "@/app/components/CrossMarkSvg"
import TickMarkSvg from "@/app/components/TickMarkSvg"


const fetchData = async () => {

    
    const res = await fetch("http://localhost:3000/api/", {
        next: {tags: ['reload']}
      })


    const data = await res.json()
    return data
}

const ViewTodo = async () => {

    const data = await fetchData()

    return (
        <div>
            {data.map(item => (
                <div key={data.indexOf(item)} role="alert" className="alert alert-success my-2">
                    {item.done ?<TickMarkSvg />:<CrossMarkSvg />}    
                    <Link href={`/todos/list/${item.author}/${item.id}`}>{item.todo}</Link>
                    <UpdateTodo author={item.author} id={item.id} />
                    <DeleteTodo author={item.author} id={item.id} />
                </div>
            ))}
        </div>
    )
}

export default ViewTodo
