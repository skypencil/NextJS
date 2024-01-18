import Link from "next/link"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">TodoList</a>
        </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/todos">Todo</Link></li>
                    <li><Link href="/add">Add</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar