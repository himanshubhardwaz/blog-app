import { Link } from "remix"
import htmr from "htmr";

export default function BlogWrapper({ blog }: any) {
    return (
        <div className="w-full px-4 py-6 bg-white rounded-lg shadow-md mt-6 text-justify">
            <Link to={`/blogs/${blog.id}`}>
                <p className='text-2xl text-gray-700 font-bold hover:underline'>
                    {blog.title}
                </p>
            </Link>
            <p className='mt-2 text-gray-600 text-ellipsis '>
                {htmr(blog.content)}
            </p>
        </div>
    )
}