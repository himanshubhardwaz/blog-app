import Header from "~/components/Header"

export default function AppLayout({ children }: any) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}