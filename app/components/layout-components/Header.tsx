import { Link } from "remix"

export default function Header() {
    return (
        <header className="bg-gray-900 text-gray-100">
            <div className="container mx-auto flex flex-wrap p-5
            flex-col md:flex-row items-center">
                <Link to="/">
                    <div className="flex md:w-1/5 title-font font-medium
                     items-center md:justify-start justify-center">
                        <img src="/images/logo.png"
                            width={56} height={56} alt="logo"
                        />
                        <span className="ml-3 text-2xl">BlogSpace</span>
                    </div>
                </Link>
                <nav className="flex
                items-center justify-end md:ml-auto">
                    <Link to="/blogs">
                        <div className="mx-5 cursor-pointer uppercase
                        hover:text-indigo-300">
                            Blog
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="mx-5 cursor-pointer uppercase
                        hover:text-indigo-300">
                            About
                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    )
}