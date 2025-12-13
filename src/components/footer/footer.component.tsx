"use client";

import { Link } from "@/components";

export function GuestFooter() {
    return (
        <footer className="container-fluid border-top d-flex align-items-center h-84" id="footer">
            <div className="container px-1 px-lg-0">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <Link href="/" className="lh-28"><span className="d-block regular text-dark fs-18">Favour <span className="regular-italic">Ori</span></span></Link>
                            </div>
                            <div className="col-auto">
                                <small className="text-muted">&copy; {new Date().getFullYear()} All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}