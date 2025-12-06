'use client';

import { useEffect } from "@/hooks";
import AOS from 'aos';

export function BootstrapJs() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            once: false,
            mirror: true,
            easing: "ease-in-out",
            anchorPlacement: "top-center",
        });

        if (typeof window !== "undefined") {
            import("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
    }, []);

    return null;
}