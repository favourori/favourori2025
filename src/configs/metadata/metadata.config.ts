import { Metadata } from "next";

export const siteMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
    title: "Favour Ori | Senior Security Engineer",
    description:
        "Security Engineer, Product Security Architect, and DevSecOps Expert. Building secure systems at scale.",
    keywords: [""],
    icons: {
        shortcut: "/favicon.ico",
    },
    authors: [{ name: "Favour Ori" }],
    openGraph: {
        title: "Favour Ori | Senior Security Engineer",
        description:
            "Security Engineer, Product Security Architect, and DevSecOps Expert. Building secure systems at scale.",
        url: "https://favourori.com",
        siteName: "Favour Ori",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Preview of Favour Ori",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Favour Ori | Senior Security Engineer",
        description:
            "Security Engineer, Product Security Architect, and DevSecOps Expert. Building secure systems at scale.",
        images: ["/og-image.png"],
    },
};
