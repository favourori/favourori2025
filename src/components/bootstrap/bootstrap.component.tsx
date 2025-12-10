'use client';

import { useEffect } from "@/hooks";
import AOS from 'aos';

export function BootstrapJs() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });

        if (typeof window !== "undefined") {
            import("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
    }, []);

    return null;
}