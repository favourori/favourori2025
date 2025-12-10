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