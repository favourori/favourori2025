import { Link } from "@/components";
import { GuestHeaderMenu } from "@/configs";

export function GuestHeader() {
    return (
        <header className="container-fluid border-bottom d-flex align-items-center fixed-top h-84" id="header">
            <nav className="container container-lg px-1 px-lg-0">
                <div className="row justify-content-between align-items-center">
                    <Link href="/" className="col-auto">
                        <span className="d-block regular fs-5 lh-28">Favour <span className="regular-italic">Ori</span></span>
                        <span className="d-block smaller text-muted lh-16">Security Engineer</span>
                    </Link>
                    <div className="col-auto">
                        <div className="d-flex gap-4">
                            {GuestHeaderMenu.map((m) => (
                                <Link key={m.name} href={m.href} className="text-muted small">{m.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}