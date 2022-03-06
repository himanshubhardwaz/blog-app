import Header from "~/components/layout-components/Header"

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