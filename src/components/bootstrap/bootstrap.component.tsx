'use client';

import { useEffect } from "@/hooks";
import AOS from "aos";

export function BootstrapJs() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            easing: "ease-in-out",
            once: true,
        });

        AOS.refresh();

        if (typeof window !== "undefined") {
            import("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
    }, []);

    return null;
}