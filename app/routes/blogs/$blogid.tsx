import { Blog } from "@prisma/client"
import type { LoaderFunction } from "remix"
import { useLoaderData } from "remix"
import { db } from "~/utils/db.server"
import { marked } from "marked"
import htmr from "htmr"

type LoaderData = { blog: Blog | null };

export let loader: LoaderFunction = async ({ params }) => {
    let data: LoaderData = {
        blog: await db.blog.findUnique({ where: { id: Number(params.blogid) } })
    }
    if (data.blog) {
        data.blog.content = marked(data.blog.content);
    }
    return data;
}

export default function BlogRoute() {
    const data = useLoaderData<LoaderData>();
    return (
        <div>
            {data.blog ? htmr(data.blog?.content) : <>Not Found!!!</>}
        </div>
    )
} 