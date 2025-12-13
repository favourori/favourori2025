import { title } from "process";

const featuredWorks = [
    {
        start: "2024",
        end: "Current",
        company: "PilotPatch",
        role: "Enterprise Security Control Plane",
        description: "A unified platform that brings every security tool into one source of truth. Connects to SAST, DAST, SCA, CSPM, SIEM, EDR, container scanners, and cloud providers. Deduplicates findings, prioritizes by business context, and visualizes your entire security posture.",
        skills: ["Vulnerability Management", "Data Correlation", "Risk Intelligence"],
    },
    {
        start: "2024",
        end: "Current",
        company: "ThreatLens",
        role: "Enterprise Security Control Plane",
        description: "Upload your architecture → get instant threats, attack paths, and remediation strategies. Uses AI and pattern recognition to generate complete threat models with STRIDE, MITRE ATT&CK, and CWE mappings. Supports CI/CD integration and architecture drift detection.",
        skills: ["Threat Modeling", "AI/ML", "Secure-by-Design"],
    },
];

const technicalDomains = [
    "Cloud Security (AWS, Azure, GCP)",
    "Application Security (SAST, DAST, SCA)",
    "Container & Kubernetes Security",
    "Threat Modeling & Risk Analysis",
    "CI/CD Pipeline Security",
    "Vulnerability Managemen",
    "Zero Trust Architecture",
    "Infrastructure as Code (Terraform)",
    "Compliance (SOC2, PCI, HIPAA, NIST)",
];

const certifications = [
    {
        title: "CISSP",
        description: "Certified Information Systems Security Professional",
    },
    {
        title: "CCSP",
        description: "Certified Cloud Security Professional",
    },
    {
        title: "Security+",
        description: "CompTIA Security+",
    },
    {
        title: "AWS SA",
        description: "AWS Solutions Architect",
    },
];

const philosophy = [
    {
        title: "Automated",
        description: "If a process can be automated, it should be. Manual security slows teams down and exposes blind spots.",
    },
    {
        title: "Contextual",
        description: "A critical vulnerability in a low-impact asset is noise. A medium-risk issue on a crown-jewel application is urgent.",
    },
    {
        title: "Developer-Centric",
        description: "Security exists to empower engineers, not block them. My tools integrate seamlessly into their workflow.",
    },
    {
        title: "Predictive",
        description: "Modern security should forecast risk based on architecture, behavior, and patterns—not post-incident analysis.",
    },
];

const impacts = [
    "Build secure, high-availability cloud platforms",
    "Mature DevSecOps capabilities",
    "Eliminate vulnerability backlog through automation",
    "Reduce security tooling overload",
    "Integrate security across the SDLC",
    "Architect resilient, compliant systems",
    "Translate complex risk into clear business language",
];

const contact = [
    {
        name: "Email",
        label: "favour@example.com",
        href: "mailto:favour@example.com",
    },
    {
        name: "LinkedIn",
        label: "/in/favourori",
        href: "https://linkedin.com/in/favourori",
    },
    {
        name: "GitHub",
        label: "/favourori",
        href: "https://github.com/favourori",
    }
];

const works = [
    {
        title: "Conferences",
        works: [
            {
                title: "NCHC Atlanta, GA",
                description: "Presented a web hacking research paper at the NCHC ’17 conference in Atlanta, GA – discussed common Web & Software vulnerabilities & how to stay secured on the internet.",
                year: "2017",
            },
            {
                title: "YCBS Atlanta, GA",
                description: "Spoke at the Young CEOs Business Forum in Atlanta, GA (2018) discussing Big Data & how it is shaping the world.",
                year: "2018",
            },
            {
                title: "United Nations Youth Assembly, New York",
                description: "In August 2018, I was Invited to speak as an outstanding Youth Delegate at the United Nations’ Youth Assembly on the impact of Favcode54 in Africa.",
                year: "2018",
            },
            {
                title: "1Million Cups, Tulsa OK",
                description: "Delivered a presentation at 1MillionCups, Tulsa, Oklahoma (2018 & 2019) on our reach with Favcode54 & how we are improving / empowering lives in Africa using technology.",
                year: "2019",
            },
            {
                title: "Nigerian Computer Society (NCS)",
                description: "NCS is the umbrella body of all IT professionals, interest groups and stakeholders in Nigeria. With about 15,000 members, spread across all the states of the federation.",
                year: "2020",
            },
            {
                title: "Nasdaq, NYC USA",
                description: "Graduated from the Nasdaq Milestone Makers program (Fall '22) and was featured on the Nasdaq Tower in NYC.",
                year: "2022",
            },
        ],
    },

    {
        title: "Engagements",
        works: [
            {
                title: "Southern Arkansas University Magnolia, Arkansas",
                description: "Gave 100+ High school students a sneak peak into programming @SAU – we went from prototyping to developing simple web pages.",
                year: "2017",
            },
            {
                title: "NCHC Atlanta, GA",
                description: "Presented a web hacking research paper at the NCHC ’17 conference in Atlanta, GA – discussed common Web & Software vulnerabilities & how to stay secured on the internet.",
                year: "2017",
            },
            {
                title: "YCBS Atlanta, GA",
                description: "Spoke at the Young CEOs Business Forum in Atlanta, GA (2018) discussing Big Data & how it is shaping the world.",
                year: "2018",
            },
            {
                title: "United Nations Youth Assembly, New York",
                description: "In August 2018, I was Invited to speak as an outstanding Youth Delegate at the United Nations’ Youth Assembly on the impact of Favcode54 in Africa.",
                year: "2018",
            },
            {
                title: "1Million Cups, Tulsa OK",
                description: "Delivered a presentation at 1MillionCups, Tulsa, Oklahoma (2018 & 2019) on our reach with Favcode54 & how we are improving / empowering lives in Africa using technology.",
                year: "2019",
            },
            {
                title: "Nigerian Computer Society (NCS)",
                description: "NCS is the umbrella body of all IT professionals, interest groups and stakeholders in Nigeria. With about 15,000 members, spread across all the states of the federation.",
                year: "2020",
            },
            {
                title: "Nasdaq, NYC USA",
                description: "Graduated from the Nasdaq Milestone Makers program (Fall '22) and was featured on the Nasdaq Tower in NYC.",
                year: "2022",
            },
        ],
    },
];

const galleryImages = [
    ["1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg"],
    ["1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg"],
    ["1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg", "1.jpg", "2.jpg"],
];

export {
    featuredWorks,
    technicalDomains,
    certifications,
    philosophy,
    impacts,
    contact,
    works,
    galleryImages,
}