import { ReactNode } from "react";

export interface HeaderProps {
    title?: string;
}

export interface SectionTitleProps {
    title: string;
}

export interface FeaturedWorkProps {
    company: string;
    role: string;
    title?: string;
    description: string;
    skills?: Array<string>;
    logo?: string;
    start?: string;
    end?: string;
    problem: string;
    purpose: string[];
    impact: string;
    preview: string;
    fullInfo?: boolean;
}

export interface WorksProps {
    title: string;
    works: Array<{
        title: string;
        description: string;
        year: string;
    }>;
}

export interface BreadcrumbProps {
    page: string;
    caption: string;
}

export interface AppDrawerProps {
    uuid: string;
    title?: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
    placement?: "bottom" | "end" | "start";
    className?: string;
}