import UpdateTodo from "@/app/components/UpdateTodo"
import DeleteTodo from "@/app/components/DeleteTodo" 
import { Params } from "@/app/components/Params"
 

const fetchData = async () => {
    const res = fetch(`http://localhost:3000/api/`)
    const data = (await res).json()

    return data
}
 
const ViewOneTodo = async ({params}:{params: Params}) => {

    const data = await fetchData()

    let matched_todo = data.find((item: { author: any; id: number }) => 
    item.author === params.author && item.id === parseInt(params.id))
 


    return (
        <div>
            {
                <div role="alert" className="alert alert-success my-2">
                    {matched_todo.done ? <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>:<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    <span>{matched_todo.todo}</span>
                    <UpdateTodo author={matched_todo.author} id={matched_todo.id} />
                    <DeleteTodo author={matched_todo.author} id={matched_todo.id} />
                </div>
            }
        </div>
    )
}

 
export default ViewOneTodo
 
