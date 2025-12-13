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