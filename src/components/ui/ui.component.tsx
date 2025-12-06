import Link from "next/link";
import Image from "next/image";
import { SectionTitleProps } from "@/interfaces";

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="container-fluid border-bottom h-89">
            <div className="container px-1 px-lg-0">
                <span className="text-uppercase fw-light">{title}</span>
            </div>
        </div>
    )
}

export {
    Link,
    Image,
}