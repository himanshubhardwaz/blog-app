import { Link } from "remix"
import { marked } from 'marked';
import htmr from "htmr";

export default function BlogWrapper({ blog }: any) {
    return (
        <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
            <div className="mt-2">
                <Link to={`/blogs/${blog.id}`}>
                    <p className='text-2xl text-gray-700 font-bold hover:underline'>
                        {blog.title}
                    </p>
                </Link>
                <p className='mt-2 text-gray-600'>
                    {htmr(marked(blog.content.slice(0, 200)))}
                </p>
            </div>
        </div>
    )
}