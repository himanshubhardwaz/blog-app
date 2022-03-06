import { Blog } from "@prisma/client";
import { LoaderFunction, Outlet, useLoaderData } from "remix"
import { Link } from "remix"
import { db } from "~/utils/db.server"
import AppLayout from "~/components/AppLayout"

type LoaderData = { blogs: Array<Blog> }
export let loader: LoaderFunction = async () => {
    let blogs = await db.blog.findMany();
    let data: LoaderData = { blogs };
    return data
}

export default function BlogsRoute() {
    let { blogs } = useLoaderData<LoaderData>();
    return (
        <AppLayout>
            <p className="text-3xl font-semibold">Blogs</p>
            {blogs.map((blog: any) => {
                return (
                    <Link to={blog.id} key={blog.id}>
                        {blog.title}
                    </Link>
                )
            })}
            <main>
                <Outlet />
            </main>
        </AppLayout>
    )
}
