import Link from "next/link";
import Image from "next/image";
import { BreadcrumbProps, FeaturedWorkProps, SectionTitleProps } from "@/interfaces";

export function Breadcrumb({ page, caption }: BreadcrumbProps) {
    return (
        <div className="container-fluid text-center py-5">
            <div className="container px-1 px-lg-0 py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 py-lg-5">
                        <span className="fw-medium fs-5"><i>{caption}</i></span>
                        <h1 className="display-1 text-uppercase regular mb-0">{page}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="container-fluid border-bottom h-84">
            <div className="container px-1 px-lg-0">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <span className="text-uppercase fw-light text-muted">{title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function FeaturedWork({ year, company, role, description, skills }: FeaturedWorkProps) {
    return (
        <div className="py-5">
            <div className="row justify-content-between g-4 py-3">
                <div className="col-lg-7">
                    <p className="smaller text-muted">{year}</p>
                    <h2 className="regular fs-36">{company}</h2>
                    <p className="text-muted ">{role}</p>
                    <p className="text-muted mb-0">{description}</p>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex flex-wrap gap-2">
                        {skills.map((s, i) => (
                            <small key={i} className="bg-light px-3 smaller fw-semibold text-muted rounded-pill lh-lg">{s}</small>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Link,
    Image,
}