import { title } from "process";

const featuredWorks = [
    {
        start: "2025",
        end: "Current",
        company: "PilotPatch",
        role: "Enterprise Security Control Plane",
        description: `<p>This platform provides a single source of truth for an organization’s security operations by bringing all security tools into one unified system. Instead of managing disconnected solutions, it connects to SAST, DAST, SCA, CSPM, SIEM, EDR, container scanners, and cloud providers to deliver a complete and continuously updated view of security risk.</p>
        

<p>It intelligently deduplicates and correlates findings across tools, reducing noise and revealing how issues relate to one another. By applying business context such as asset importance, data sensitivity, and exposure, it prioritizes risks based on real world impact rather than raw severity scores.</p>

<p class="mb-0">With real time dashboards and clear visualizations, teams can easily understand the organization’s overall security posture and track changes over time. The platform acts as a shared security cockpit for executives, engineers, and analysts, enabling better alignment, faster decision making, and more effective risk reduction.</p>`,
        skills: ["Vulnerability Management", "Data Correlation", "Risk Intelligence"],
        problem: "Outdated dashboards, duplicated vulnerabilities, and disconnected tools slow down every security team.",
        purpose: [
            "Connects to SAST, DAST, SCA, CSPM, SIEM, EDR, container scanners, and cloud providers",
            "Deduplicates and correlates findings across tools",
            "Prioritizes issues using business context and attack path analysis",
            "Visualizes organization's entire security posture in real time",
            "Provides one security cockpit for executives, engineers, and analysts"
        ],
        impact: "PilotPatch doesn't just show vulnerabilities-it eliminates noise and highlights what truly matters. Teams ship faster, remediate smarter, and operate with clarity.",
        caption: "This is what vulnerability management should look like i n 2025.",
    },
    {
        start: "2024",
        end: "Current",
        company: "ThreatLens",
        role: "AI-Driven Threat Modeling Engine",
        description: `<p>This platform simplifies threat modeling by turning your architecture into immediate, actionable security insight. You upload network diagrams, application flows, or system designs, and the platform uses AI and pattern recognition to understand every component, data flow, and trust boundary. It automatically identifies threats and attack paths, then generates a complete threat model mapped to industry standards like STRIDE, MITRE ATT and CK, and CWE, giving teams a clear and structured view of risk.</p>

<p class="mb-0">Beyond identification, it delivers practical remediation guidance that engineers can act on right away. The platform supports versioning, CI and CD integration, and architecture drift detection, allowing threat models to evolve alongside your systems. This helps teams continuously validate security as designs change and ensures risks are addressed early and consistently throughout the development lifecycle.</p>`,
        skills: ["Threat Modeling", "AI/ML", "Secure-by-Design"],
        problem: "Threat modeling i s critical, but most teams avoid it because it's slow, manual, and inconsistent.",
        purpose: [
            "Upload network diagrams, application flow maps, or architecture diagrams",
            "System interprets every component using AI and pattern recognition",
            "Generates complete threat model: STRIDE, MITRE ATT&CK, and CWE mappings",
            "Produces actionable remediation recommendations",
            "Supports versioning, CI/CD integration, and architecture drift detection"
        ],
        impact: "Security shifts fully left. Architects gain instant insight. Engineers fix issues before code is written. CISOs get risk clarity with zero friction.",
        caption: "ThreatLens is not just a tool—it's a new foundation for secure-by-design engineering.",
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
    ["6.jpg", "29.jpg", "9.jpg", "4.jpg", "28.jpg", "10.jpg", "7.jpg", "30.jpg", "5.jpg", "8.jpg"],
    ["14.jpg", "3.jpg", "19.jpg", "12.jpg", "1.jpg", "15.jpg", "20.jpg", "2.jpg", "13.jpg", "1.jpg"],
    ["27.jpg", "22.jpg", "16.jpg", "25.jpg", "18.jpg", "23.jpg", "21.jpg", "26.jpg", "24.jpg", "17.jpg"],
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