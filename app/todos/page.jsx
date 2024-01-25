const fetchData = async () => {
    const res = await fetch("http://localhost:3000/data", {
        next: {
            revalidate: 15
        }
    })
    const data = await res.json()

    return data
}

const ViewTodo = async () => {

    const data = await fetchData()

    return (
        <div>
            {data.map(item => (
                <div role="alert" className="alert alert-success my-2">
                    {item.done ? <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>:<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    <span>{item.todo}</span>
                </div>
            ))}
        </div>
    )
}

export default ViewTodo
