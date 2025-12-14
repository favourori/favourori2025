"use client";

import { Image, Link } from "@/components";
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
                        <button type="button" className="btn d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                            <Image src="/assets/icons/menu.svg" alt="menu" width={24} height={24} />
                        </button>
                        <div className="d-none d-lg-flex gap-4">
                            {GuestHeaderMenu.map((m) => {
                                const isActive = pathname === m.href;
                                return (
                                    <Link
                                        key={m.name}
                                        href={m.href}
                                        className={`${isActive ? "text-black" : "text-muted hover:text-dark"}`}
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