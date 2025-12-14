"use client";

import Link from "next/link";
import Image from "next/image";
import {
    BreadcrumbProps,
    FeaturedWorkProps,
    SectionTitleProps,
    WorksProps,
} from "@/interfaces";
import { galleryImages } from "@/configs";

export function Breadcrumb({ page, caption }: BreadcrumbProps) {
    return (
        <div className="container-fluid text-center py-5">
            <div className="container px-1 px-lg-0 pb-2 py-4">
                <div className="row justify-content-center pt-5">
                    <div className="col-lg-10 pt-lg-5 pb-lg-3">
                        <span className="fw-light regular fs-4">
                            <i>{caption}</i>
                        </span>
                        <h1 className="display-1 text-uppercase regular mb-0">{page}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
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
    );
}

export function FeaturedWork({ start, company, role, description, skills }: FeaturedWorkProps) {
    return (
        <div className="py-5">
            <div className="row justify-content-between g-4 py-3">
                <div className="col-lg-7">
                    <p className="smaller text-muted">{start}</p>
                    <h2 className="regular fs-36">{company}</h2>
                    <p className="text-muted">{role}</p>
                    <div className="text-muted mb-0" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex flex-wrap gap-2">
                        {skills?.map((skill, i) => (
                            <small key={i} className="bg-light px-3 smaller fw-semibold text-muted rounded-pill lh-lg">
                                {skill}
                            </small>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FeaturedWorkTwo({
    preview,
    company,
    role,
    description,
    start,
    end,
    problem,
    purpose = [],
    impact,
    fullInfo = false,
}: FeaturedWorkProps) {
    return (
        <div className="card border rounded-5 mb-4 featured-work-card">
            <div className="card-body p-4 mb-lg-4">
                <div className="position-relative overflow-hidden rounded-4 h-783">
                    <img src={preview} alt={company} className="w-100 h-100" />
                </div>
            </div>

            <div className="card-footer border-0 bg-transparent px-4 pb-4">
                <div className="row g-4 justify-content-between">
                    <div className="col-auto">
                        <p className="d-flex gap-1 align-items-center text-muted text-uppercase smaller mb-2">
                            {start && <span>{start}</span>}
                            <span>&rarr;</span>
                            {end && <span>{end}</span>}
                        </p>
                        <h6 className="regular fw-bold text-dark fs-1 mb-2">
                            {fullInfo ? company : <Link href="/projects">{company}</Link>}
                        </h6>
                        <small className="d-block text-muted">{role}</small>
                    </div>

                    <div className="col-lg-7">
                        <div
                            className={`text-muted medium ${fullInfo ? "mb-0" : "mb-4"}`}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </div>

                    {fullInfo && (
                        <div className="col-12">
                            <div className="row g-4 justify-content-between">
                                <div className="col-lg-4">
                                    <div className="mb-4 mb-lg-5">
                                        <h5 className="regular text-uppercase fw-semibold">The Problem</h5>
                                        <p className="text-muted medium mb-0">{problem}</p>
                                    </div>
                                    <h5 className="regular text-uppercase fw-semibold">Impact</h5>
                                    <p className="text-muted medium mb-0">{impact}</p>
                                </div>

                                <div className="col-lg-7">
                                    <h5 className="regular text-uppercase fw-semibold">What it Does</h5>
                                    <div className="list-group list-group-flush medium">
                                        {purpose.map((item, i) => (
                                            <div key={i} className="list-group-item d-flex align-items-center gap-2 bg-transparent border-0 text-muted px-0">
                                                <i className="iconsax text-success fs-6" icon-name="tick-circle" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Works({ title, works }: WorksProps) {
    return (
        <div className="border-top py-4">
            <div className="row py-2">
                <div className="col-lg-2">
                    <h6 className="fw-semibold mb-4">{title}</h6>
                </div>
                <div className="col-lg-10">
                    {works.map((work, i) => (
                        <div key={i} className="row g-2 align-items-start mb-4 works-list">
                            <div className="col-lg-3">
                                <p className="mb-0">{work.title}</p>
                            </div>
                            <div className="col-lg-7">
                                <p className="mb-0">{work.description}</p>
                            </div>
                            <div className="col-lg-2 text-lg-end">
                                <span>{work.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function GalleryImage() {
    return (
        <div className="card border rounded-5 py-4 px-2">
            <div className="card-body">
                <div className="gallery-container">
                    {galleryImages.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`scroll-row ${rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"} d-flex gap-3 ${rowIndex ? "mt-4" : ""}`}
                        >
                            {row.map((src, i) => (
                                <img key={i} src={`/assets/gallery/${src}`} className="gallery-img bg-light" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { Link, Image };
