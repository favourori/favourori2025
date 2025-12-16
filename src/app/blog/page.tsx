"use client";

import { strapiClient } from "@/libs";
import { useEffect, useState } from "react";

export default function Blog() {
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await strapiClient.fetch("articles", {
                    method: "GET",
                });
                setBlog(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container-fluid">
            <div className="container container-lg px-1 px-lg-0">
                <div className="row g-4 g-lg-5">
                    {blog?.data?.map((item: any) => (
                        <div key={item.id}>
                            {item.attributes.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
    