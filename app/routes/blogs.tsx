import { Outlet } from "remix"

export default function Blog() {
    return (
        <div>
            <h1>Blogs</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
