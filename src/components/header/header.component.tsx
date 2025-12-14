"use client";

import { Link } from "@/components";
import { GuestHeaderMenu } from "@/configs";
import { usePathname } from "@/hooks";

export function GuestHeader() {
    const pathname = usePathname();

    return (
        <header className="container-fluid d-flex align-items-center fixed-top h-84" id="header">
            <nav className="container container-lg px-1 px-lg-0">
                <div className="row justify-content-between align-items-center">
                    <Link href="/" className="col-auto">
                        <span className="d-block regular fw-bolder fs-3">Favour Ori</span>
                        <span className="d-block small text-muted lh-16">Security Engineer</span>
                    </Link>
                    <div className="col-auto">
                        <div className="d-flex gap-4">
                            {GuestHeaderMenu.map((m) => {
                                const isActive = pathname === m.href;
                                return (
                                    <Link
                                        key={m.name}
                                        href={m.href}
                                        className={`text-muted ${isActive ? "text-primary border-bottom border-1 border-primary" : "hover:text-primary"}`}
                                    >
                                        {m.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}