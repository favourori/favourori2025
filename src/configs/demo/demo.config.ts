const featuredWorks = [
    {
        year: "2024",
        company: "PilotPatch",
        role: "Enterprise Security Control Plane",
        description: "A unified platform that brings every security tool into one source of truth. Connects to SAST, DAST, SCA, CSPM, SIEM, EDR, container scanners, and cloud providers. Deduplicates findings, prioritizes by business context, and visualizes your entire security posture.",
        skills: ["Vulnerability Management", "Data Correlation", "Risk Intelligence"],
    },
    {
        year: "2024",
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

export {
    featuredWorks,
    technicalDomains,
    certifications,
    philosophy,
    impacts,
    contact,
}