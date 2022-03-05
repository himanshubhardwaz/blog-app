import { Outlet } from "remix"

export default function BlogsRoute() {
    return (
        <div>
            <h1>Blogs</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
