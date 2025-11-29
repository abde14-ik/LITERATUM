export const en = {
    nav: {
        home: "Home",
        about: "About",
        education: "Education",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        leadership: "Leadership",
        contact: "Contact",
        githubAria: "GitHub profile",
        linkedinAria: "LinkedIn profile",
        stravaAria: "Strava profile",
    },
    navbar: {
        subtitle: "Engineering student at INPT specializing in distributed systems.",
    },
    common: {
        present: "Present",
        viewCredential: "View Credential",
    },
    hero: {
        avatar: "/ikbi.jpg",
        badge: "Engineering student at INPT specializing in distributed systems.",
        bio: "Engineering student at INPT specializing in distributed systems, cloud-native infrastructures, and CI/CD automation. Passionate about building resilient, scalable solutions in the cloud.",
        statusDot: "Open to PFE Internship",
        location: "Based in Morocco",
        remote: "Open to International & Remote",
        locationMeta: "Based in Morocco • Open to International & Remote PFE Opportunities",
        metaLine: "Based in Morocco • Open to International & Remote PFE Opportunities",
        ctaViewProjects: "View Projects",
        ctaDownloadResume: "Download Resume",
        resumeUrl: "/resume.pdf",
        openToOpportunities: "Open to international & remote opportunities",
        engineeringMeetsHumanity: "Engineering meets humanity",
        snapshotTitle: "Snapshot",
        snapshotFocusLabel: "Focus",
        snapshotFocusValue: "Cloud · CI/CD · IaC",
        snapshotStacksLabel: "Stacks",
        snapshotStacksValue: "Azure · AWS · VMware",
        snapshotSoftSkillsLabel: "Soft skills",
        snapshotSoftSkillsValue: "Leadership · Community",
        statusTitle: "Live Snapshot",
        statusCloudLabel: "Cloud",
        statusCloudValue: "Online",
        statusBookLabel: "Current read",
        statusBookValue: "The Myth of Normal",
        statusBookAuthor: "Dr. Gabor Maté",
        statusBookSubtitle: "Trauma, Illness & Healing in a Toxic Culture",
        statusRunLabel: "Total Distance",
        statusRunValue: "846 km",
        statusRunSubtitle: "Marathon PB: 3h 39m • 5K: 18:59",
        statusFocusLabel: "Current Focus",
        statusFocusValue: "Cloud-Native Engineering",
        statusReadingLabel: "Reading",
        statusTrainingLabel: "Training",
        status: {
            focusSub: "Infrastructure as Code & Automation",
            professionalLabel: "Professional Focus",
            trainingSub: "Marathon Prep",
        },
        snapshot: {
            focus: "Current Focus",
            reading: "Reading",
            training: "Training",
        },
    },
    about: {
        heading: "About Me",
        subheading:
            "An engineering mindset grounded in automation and reliability, with a human side shaped by running, community and curiosity.",
        engineeringTitle: "Engineering Profile",
        beyondCodeTitle: "Beyond the Code",
        languagesTitle: "Languages",
        languagesSubtitle: "Multilingual communication",
    },
    skills: {
        heading: "Skills Matrix",
        subheading:
            "A toolbox focused on shipping reliable, observable cloud platforms and CI/CD pipelines.",
        categories: [
            {
                id: "cloudVirtualization",
                label: "Cloud & Virtualization",
                items: ["AWS", "Azure", "VMware vSphere", "OpenStack", "TrueNAS"],
            },
            {
                id: "devOpsCiCd",
                label: "DevOps & CI/CD",
                items: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker Compose", "Azure DevOps"],
            },
            {
                id: "containerization",
                label: "Containerization",
                items: ["Docker", "Kubernetes"],
            },
            {
                id: "iac",
                label: "Infrastructure as Code (IaC)",
                items: ["Terraform", "Ansible", "Bicep"],
            },
            {
                id: "monitoringSecurity",
                label: "Monitoring & Security",
                items: [
                    "Grafana",
                    "Prometheus",
                    "Application Insights",
                    "Wazuh",
                    "PRTG",
                    "SonarQube",
                    "Trivy",
                ],
            },
            {
                id: "databases",
                label: "Databases",
                items: ["MongoDB", "Chroma (Vector DB)", "MongoDB Atlas"],
            },
            {
                id: "osNetworking",
                label: "OS & Networking",
                items: ["Linux", "Windows Server", "DNS", "VLAN", "vSwitch"],
            },
            {
                id: "programming",
                label: "Programming",
                items: ["Python", "JavaScript", "Java", "FastAPI", "Streamlit", "LangChain"],
            },
            {
                id: "architecture",
                label: "Architecture",
                items: ["Microservices", "Cloud-Native Design", "Backup & Recovery (Veeam)"],
            },
        ],
    },
    education: {
        heading: "Education",
        subheading: "The academic route that shaped my engineering foundations.",
        items: [
            {
                institution: "National Institute of Posts and Telecommunications (INPT)",
                degree: "Engineering of Ubiquitous and Distributed Systems - Cloud and IoT",
                period: "09/2023 - Present",
                location: "Rabat",
            },
            {
                institution: "Lydex Preparatory Classes",
                degree: "Technology and Industrial Sciences (TSI)",
                period: "09/2021 - 2023",
                location: "Benguerir",
            },
            {
                institution: "Tassaout High School",
                degree: "Baccalauréat, Electrical Science and Technology (STE)",
                period: "09/2020 - 2021",
                location: "El Kelaa Des Sraghnas",
            },
        ],
    },
    experience: {
        heading: "Experience",
        subheading:
            "Hands-on roles applying cloud, automation and data skills in real environments.",
    },
    projects: {
        heading: "Featured Projects",
        subheading:
            "Selected work that demonstrates cloud-native thinking, DevOps practices, and infrastructure as code.",
        viewProjectLabel: "View project",
        viewCodeLabel: "View code",
        liveDemoLabel: "Live demo",
        viewCode: "View Code",
        liveDemo: "Live Demo",
        techStack: "Tech Stack",
        items: [
            {
                name: "BoardGameListing - CI/CD & K8s",
                subtitle: "Spring CI/CD & Kubernetes Delivery Pipeline",
                desc: "Full CI/CD pipeline for a Spring Boot app using Jenkins, Kubernetes on AWS EC2, SonarQube, and Trivy.",
                tech: ["Jenkins", "Kubernetes", "AWS EC2", "SonarQube", "Trivy"],
                codeUrl: "", // TODO: insert GitHub link
                liveUrl: undefined,
                image: undefined,
            },
            {
                name: "Local RAG Microservices",
                subtitle: "Local LLM RAG Microservices",
                desc: "Offline document Q&A system using local LLMs with Python, FastAPI, LangChain, Ollama, Docker, and Terraform.",
                tech: ["Python", "FastAPI", "LangChain", "Ollama", "Docker", "Terraform"],
                codeUrl: "", // TODO: insert GitHub link
                liveUrl: undefined,
                image: undefined,
            },
            {
                name: "Azure Pet Store",
                subtitle: "Azure Cloud-Native Reference App",
                desc: "N-tier microservices architecture on Azure using Azure DevOps, AKS, Bicep, and Azure Functions.",
                tech: ["Azure DevOps", "AKS", "Bicep", "Azure Functions"],
                codeUrl: "", // TODO: insert GitHub link
                liveUrl: undefined,
                image: undefined,
            },
            {
                name: "Readers Haven",
                subtitle: "Microservices & Observability Platform",
                desc: "Collaboratively built a full-stack microservices app with React and Node.js, orchestrated via Kubernetes with a full monitoring stack (Prometheus/Grafana) and a secure API Gateway pattern.",
                tech: ["React", "Node.js", "Kubernetes", "Prometheus", "Grafana", "MongoDB"],
                codeUrl: "", // TODO: insert GitHub link
                liveUrl: undefined,
                image: undefined,
            },
            {
                name: "3-Tier DevOps CI/CD Pipeline",
                subtitle: "Automated Secure Cloud Deployment",
                desc: "Built a robust Jenkins pipeline for a 3-tier application, integrating DevSecOps tools (SonarQube, Trivy) and automating deployment to AWS EKS using Helm and dynamic infrastructure.",
                tech: ["Jenkins", "AWS EKS", "Docker", "SonarQube", "Trivy", "Helm"],
                codeUrl: "", // TODO: insert GitHub link
                liveUrl: undefined,
                image: undefined, // TODO: point to pipeline diagram in /public/projects if available
            },
        ],
    },
    leadership: {
        heading: "Leadership & Volunteering",
        subheading:
            "Spaces where engineering meets humanity: building communities, mentoring peers, and leading by example.",
        humanSideLabel: "Human side",
        humanSideTitle: "Leading initiatives beyond the classroom",
    },
    library: {
        heading: "Intellectual Foundations",
        tagline:
            "Engineering is about building systems. Philosophy is about understanding who uses them.",
        items: [
            {
                title: "The Art of Loving",
                author: "Erich Fromm",
                theme: "Active Discipline",
                synopsis:
                    "Fromm argues that love is not a vague feeling, but an art requiring discipline, concentration, and patience.",
                connection: "Applying this same active discipline to team dynamics and code ownership.",
                image: "/the art of loving.jpg",
            },
            {
                title: "Man for Himself",
                author: "Erich Fromm",
                theme: "Humanistic Ethics",
                synopsis:
                    "A study on how true virtue comes from being productive and authentic to one's own nature.",
                connection:
                    "Grounding engineering decisions in integrity rather than just following orders.",
                image: "/man for himself.jpg",
            },
            {
                title: "The Art of Being",
                author: "Erich Fromm",
                theme: "Mindfulness",
                synopsis:
                    "A guide to functioning fully in a distracted world through meditation and self-awareness.",
                connection:
                    "Maintaining deep focus (Flow State) during complex architecture design and debugging.",
                image: "/the art of being.jpg",
            },
            {
                title: "Ethics: A Very Short Introduction",
                author: "Simon Blackburn",
                theme: "Moral Systems",
                synopsis:
                    "Blackburn explores the major ethical theories (Kant, Utilitarianism) that shape human judgment.",
                connection:
                    "Using these frameworks to navigate ethical trade-offs in AI and data privacy.",
                image: "/ethics.jpg",
            },
            {
                title: "Philosophy: The Basics",
                author: "Nigel Warburton",
                theme: "Critical Logic",
                synopsis:
                    "An introduction to the foundational questions of reality, God, and science.",
                connection:
                    "Sharpening the root-cause analysis skills needed to diagnose distributed failures.",
                image: "/philosophy.jpg",
            },
            {
                title: "The Myth of Normal",
                author: "Dr. Gabor Maté",
                theme: "Systemic Health",
                synopsis:
                    "Maté dissects the underlying causes of illness in modern society, linking individual trauma to systemic pressures.",
                connection:
                    "Understanding how systemic stress affects reliability—whether in human biology or distributed cloud systems.",
                image: "/normal.jpg",
            },
            {
                title: "Irrational Man",
                author: "William Barrett",
                theme: "Existentialism",
                synopsis:
                    "A comprehensive study of existential philosophy, exploring how we find meaning in a purely mechanistic, functional world.",
                connection:
                    "Navigating the ambiguity of complex systems where pure logic doesn't always explain emergent behavior.",
                image: "/irrational-man.jpg",
            },
        ],
    },
    contact: {
        heading: "Let's automate the future together.",
        subheading:
            "If you're looking for a Cloud & DevOps PFE intern who cares about reliability, automation and people, I'd love to talk.",
        form: {
            nameLabel: "Name",
            namePlaceholder: "Your name",
            emailLabel: "Email",
            emailPlaceholder: "you@company.com",
            messageLabel: "Message",
            messagePlaceholder:
                "Tell me a bit about your team, projects, or expectations for the PFE.",
            submitLabel: "Send message",
            staticNote:
                "This form sends directly via EmailJS. You can update the template or provider later if needed.",
        },
        info: {
            emailLabel: "Email",
            locationLabel: "Location",
            availabilityLabel: "Availability",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            stravaLabel: "Strava",
        },
        meta: {
            location: "Based in Morocco",
            availability:
                "Currently seeking an end-of-study (PFE) internship in Cloud & DevOps.",
        },
        status: {
            idle: "Send message",
            sending: "Sending...",
            success: "Sent! Thank you for reaching out.",
            error: "Something went wrong. Please try again or email me directly.",
        },
        placeholders: {
            name: "John Doe",
            email: "john@example.com",
            message: "Tell me about your project...",
        },
        states: {
            sending: "Sending...",
            success: "Message sent!",
            error: "Error. Try again.",
        },
    },
    endorsements: {
        heading: "Community & Endorsements",
        subheading:
            "Praise from managers, peers and community members I've had the pleasure of working with.",
        roleAt: "at",
        items: [
            {
                name: "Soulaymane KACEM",
                role: "Data & AI Engineer @Oracle | AWS Certified Data Engineer",
                company: "Oracle",
                image: "/soulaymane-kacem.jpg",
                text: "If you need to run half a marathon in a random Tuesday evening when you are on vacation, he's your guy! If you want to set a scalable infrastructure, he can do that as well!!",
                linkedinUrl: "https://www.linkedin.com/in/kacemsoulaymane/",
            },
            {
                name: "ELHABIB SBIHI",
                role: "System Administrator | NMS Engineer @Nokia",
                company: "Nokia",
                image: "/elhabib.png",
                text: "Abdelilah has a remarkable ability to adapt to new people and diverse environments, and his dedication to sports keeps his mind sharper than most.",
                linkedinUrl: "https://www.linkedin.com/in/elhabib-sbihi-972ab4276/",
            },
            {
                name: "Mehdi Lahlou Mimi",
                role: "Consultant IT @Leyton",
                company: "Leyton",
                image: "/mehdi.jpeg",
                text: "Abdelilah is one of the most reliable, dedicated and driven people I know. Any team would be lucky to have someone with their work ethic and integrity.",
                linkedinUrl: "https://www.linkedin.com/in/mehdi-lahlou-mimi-893b91245/",
            },
        ],
    },
    guestbook: {
        heading: "Leave a mark.",
        subheading: "Feedback, encouragement, or just saying hello.",
    },
    footer: {
        owner: "Abdelilah IKBI",
        rights: "All rights reserved.",
        builtBy: "Designed & Built by",
    },
} as const;

export type EnContent = typeof en;
