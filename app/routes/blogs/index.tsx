import { Blog } from "@prisma/client";
import { LoaderFunction, useLoaderData } from "remix"
import BlogWrapper from "~/components/BlogWrapper"
import { db } from "~/utils/db.server"
import { marked } from 'marked';

type LoaderData = { blogs: Array<Blog> }
export let loader: LoaderFunction = async () => {
    let blogs = await db.blog.findMany();
    let data: LoaderData = { blogs };
    blogs.forEach((blog: Blog) => {
        blog.content = marked(blog.content);
    })
    return data
}

export default function BlogsIndexRoute() {
    let { blogs } = useLoaderData<LoaderData>();

    return (
        <>
            <h1 className="text-3xl border-b-4 p-5 font-bold">Blogs</h1>
            <main className="lg:px-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blogs.map((blog, index) =>
                        <BlogWrapper blog={blog} key={index} />
                    )}
                </div>
            </main>

        </>
    )
}