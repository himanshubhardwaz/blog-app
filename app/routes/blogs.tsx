import { Outlet, } from "remix"
import AppLayout from "~/components/layout-components/AppLayout"

export default function BlogsRoute() {
    return (
        <AppLayout>
            <main>
                <Outlet />
            </main>
        </AppLayout>
    )
}
