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
        preview: "/assets/img/projects/pilotpatch.mp4",
        video: true,
    },
    {
        start: "2025",
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
        preview: "/assets/img/projects/tlens.mp4",
        video: true,
    },

    {
        start: "2025",
        end: "Current",
        company: "AuditViz",
        role: "Dependency Vulnerability Scanner with Visual Intelligence",
        description: `<p>This tool transforms how developers interact with security audit results by making vulnerability data immediately actionable and easy to understand. Instead of parsing through raw JSON or plain text output from npm audit, pip-audit, or bundler-audit, it automatically detects your package manager and presents findings through color-coded dashboards, severity bar charts, and detailed tables with direct CVE links.</p>

<p class="mb-0">It intelligently normalizes output across different package managers (npm, yarn, pnpm, pip, bundler) into a unified format, making it easy to understand vulnerabilities regardless of your tech stack. By filtering by severity, highlighting direct vs transitive dependencies, and providing auto-fix command suggestions, it cuts through the noise to show what actually needs attention.</p>`,
        skills: ["Vulnerability Scanning", "Multi-Language Security", "DevSecOps Tooling"],
        problem: "Standard audit tools dump walls of text that developers scroll past. Critical vulnerabilities hide among low-priority noise, and teams lack visibility into security trends over time.",
        purpose: [
            "Auto-detects package managers (npm, yarn, pnpm, pip, bundler)",
            "Visualizes severity distribution with color-coded bar charts",
            "Filters by severity level to focus on critical/high issues",
            "Tracks scan history to monitor improvements over time",
            "Provides auto-fix commands for easy remediation",
            "Integrates with CI/CD pipelines via proper exit codes",
            "Provides one unified view for all dependency security across languages"
        ],
        impact: "AuditViz doesn't just list vulnerabilities—it visualizes risk and provides actionable fixes. Developers understand security faster, prioritize smarter, and ship with confidence.",
        caption: "AuditViz is not just a scanner—it's a unified lens for understanding security risk across every language and package manager in your stack.",
        preview: "/assets/img/projects/vuln-scanner.mp4",
        video: true,
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
        label: "favourori96@gmail[dot]com",
        href: "mailto:favourori96@gmail[dot]com",
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