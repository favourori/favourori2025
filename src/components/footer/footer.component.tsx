"use client";

import { Link } from "@/components";
import { contact } from "@/configs";

export function GuestFooter() {
    return (
        <div className="bg-white mt-5">
            <div className="container-fluid border-top py-5">
                <div className="container px-1 px-lg-0 py-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row g-4 gx-lg-5 justify-content-between">
                                <div className="col-12">
                                    <span className="d-block smaller text-muted text-uppercase mb-2">Contact</span>
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="display-5 regular mb-lg-4">Let's build the future of <span className="regular-italic">intelligent security</span>.</h1>
                                </div>
                                <div className="col-auto">
                                    <p className="mb-lg-4">Ready to transform your security posture? I'd love to hear from you.</p>
                                    <div className="list-group list-group-flush small">
                                        {contact.map((c, i) => (
                                            <div key={i} className="list-group-item bg-transparent px-0 lh-lg py-3">
                                                <div className="d-flex justify-content-between">
                                                    <span className="text-muted">{c.name}</span>
                                                    <a href={c.href}>{c.label}</a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="container-fluid border-top d-flex align-items-center h-84" id="footer">
                <div className="container px-1 px-lg-0">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <Link href="/" className="lh-28"><span className="d-block regular text-dark fs-4">Favour <span className="regular-italic">Ori</span></span></Link>
                                </div>
                                <div className="col-auto">
                                    <small className="text-muted">&copy; {new Date().getFullYear()} All rights reserved.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}