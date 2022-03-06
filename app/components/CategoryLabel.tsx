import { Link } from "remix"

const CategoryLabel = ({ children }: any) => {
    const colorKey: { [key: string]: string } = {
        JavaScript: 'yellow',
        CSS: 'blue',
        Python: 'green',
        PHP: 'purple',
        Ruby: 'red',
    }

    return (
        <div className={`px-2 py-1 bg-${colorKey[children]}-600
         text-grey-100 font-bold rounded`}>
            <Link to={`/blog/category/${children.toLowerCase()}`}>
                {children}
            </Link>

        </div>
    )
}

export default CategoryLabel