import Header from "~/components/Header"

export default function AppLayout({ children }: any) {
    return (
        <>
            <Header />
            <div className="max-w-96">
                {children}
            </div>
        </>
    )
}