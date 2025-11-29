import type { EnContent } from "./en";

export const fr = {
    nav: {
        home: "Accueil",
        about: "À propos",
        education: "Parcours académique",
        skills: "Compétences",
        experience: "Expérience",
        projects: "Projets",
        leadership: "Leadership",
        contact: "Contact",
        githubAria: "Profil GitHub",
        linkedinAria: "Profil LinkedIn",
        stravaAria: "Profil Strava",
    },
    navbar: {
        items: [
            { id: "hero", label: "Accueil" },
            { id: "about", label: "À propos" },
            { id: "skills", label: "Compétences" },
            { id: "experience", label: "Expérience" },
            { id: "projects", label: "Projets" },
            { id: "community", label: "Communauté" },
        ],
        about: "À Propos",
        skills: "Compétences",
        experience: "Expérience",
        projects: "Projets",
        community: "Communauté",
        leadership: "Leadership",
        languages: "Langues",
        bookshelf: "Bibliothèque",
        endorsements: "Recommandations",
        guestbook: "Livre d'Or",
        contact: "Contactez-moi",
        subtitle: "Élève ingénieur à l'INPT spécialisé dans les systèmes distribués.",
    },
    common: {
        present: "Présent",
        viewCredential: "Voir le diplôme",
        viewCode: "Voir le Code",
        liveDemo: "Démo Live",
        readMore: "Lire la suite",
    },
    hero: {
        avatar: "/ikbi.jpg",
        badge: "Élève ingénieur à l'INPT spécialisé dans les systèmes distribués.",
        bio: "Élève ingénieur à l'INPT spécialisé dans les systèmes distribués, les infrastructures Cloud-Native et l'automatisation CI/CD. Passionné par l'architecture de solutions résilientes et évolutives.",
        statusDot: "Ouvert aux opportunités PFE",
        location: "Basé au Maroc",
        remote: "Ouvert à l'International & Remote",
        locationMeta: "Basé au Maroc • Ouvert au Télétravail & International",
        metaLine: "Basé au Maroc • Ouvert au Télétravail & International",
        ctaViewProjects: "Voir les Projets",
        ctaDownloadResume: "Télécharger le CV",
        resumeUrl: "/resume-fr.pdf",
        openToOpportunities: "Ouvert aux opportunités internationales et au télétravail",
        engineeringMeetsHumanity: "Quand l'ingénierie rencontre l'humain",
        snapshotTitle: "Instantané",
        snapshotFocusLabel: "Focus",
        snapshotFocusValue: "Cloud · CI/CD · IaC",
        snapshotStacksLabel: "Stacks",
        snapshotStacksValue: "Azure · AWS · VMware",
        snapshotSoftSkillsLabel: "Soft skills",
        snapshotSoftSkillsValue: "Leadership · Communauté",
        statusTitle: "En direct",
        statusCloudLabel: "Cloud",
        statusCloudValue: "En ligne",
        statusBookLabel: "Lecture du moment",
        statusBookValue: "The Myth of Normal",
        statusBookAuthor: "Dr. Gabor Maté",
        statusBookSubtitle: "Trauma, Illness & Healing in a Toxic Culture",
        statusRunLabel: "Distance totale",
        statusRunValue: "846 km",
        statusRunSubtitle: "Marathon PB: 3h 39m · 5K: 18:59",
        statusFocusLabel: "Focus Actuel",
        statusFocusValue: "Ingénierie Cloud-Native",
        statusReadingLabel: "Lecture",
        statusTrainingLabel: "Entraînement",
        status: {
            focusSub: "Infrastructure as Code & automatisation",
            professionalLabel: "Focus professionnel",
            trainingSub: "Préparation marathon",
            books: [
                { title: "Le Mythe de la Normalité", author: "Dr. Gabor Maté" },
                { title: "L'Homme Irrationnel", author: "William Barrett" },
            ],
        },
        snapshot: {
            focus: "Focus Actuel",
            reading: "Lecture",
            training: "Entraînement",
        },
    },
    about: {
        heading: "À Propos",
        subheading:
            "Un esprit d'ingénieur fondé sur l'automatisation et la fiabilité, avec un côté humain façonné par la course à pied, la communauté et la curiosité.",
        bio:
            "Un esprit d'ingénieur fondé sur l'automatisation et la fiabilité, avec un côté humain façonné par la course à pied, la communauté et la curiosité.",
        engineeringTitle: "Profil Ingénieur",
        profileTitle: "Profil Ingénieur",
        profileItems: [
            "Élève ingénieur Cloud & DevOps à l'INPT spécialisé dans les systèmes ubiquitaires et distribués, le cloud et l'IoT.",
            "Passionné par l'automatisation, l'Infrastructure as Code (IaC) et la construction de plateformes cloud-native fiables.",
            "Pratique concrète sur VMware, Azure, AWS, Kubernetes, pipelines CI/CD et outils d'observabilité.",
        ],
        beyondCodeTitle: "Au-delà du Code",
        beyondTitle: "Au-delà du Code",
        beyondItems: [
            "Fondateur de INPT Runners, rassemblant les gens autour de la discipline, de la régularité et du bien-être.",
            "Lecteur curieux intéressé par la technologie, le leadership et le développement personnel.",
            "J'aime bâtir des communautés et des initiatives où les gens peuvent grandir ensemble au-delà des cours.",
        ],
        languagesTitle: "Langues",
        languagesSubtitle: "Communication multilingue",
        languagesList: ["Anglais", "Français", "Arabe", "Tamazight"],
    },
    skills: {
        heading: "Matrice de compétences",
        subheading:
            "Un ensemble d'outils dédié au déploiement de plateformes cloud fiables et observables, et de pipelines CI/CD.",
        categories: [
            {
                id: "cloudVirtualization",
                label: "Cloud & virtualisation",
                items: ["AWS", "Azure", "VMware vSphere", "OpenStack", "TrueNAS"],
            },
            {
                id: "devOpsCiCd",
                label: "DevOps & CI/CD",
                items: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker Compose", "Azure DevOps"],
            },
            {
                id: "containerization",
                label: "Conteneurisation",
                items: ["Docker", "Kubernetes"],
            },
            {
                id: "iac",
                label: "Infrastructure as Code (IaC)",
                items: ["Terraform", "Ansible", "Bicep"],
            },
            {
                id: "monitoringSecurity",
                label: "Monitoring & Sécurité",
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
                label: "Bases de données",
                items: ["MongoDB", "Chroma (Vector DB)", "MongoDB Atlas"],
            },
            {
                id: "osNetworking",
                label: "Systèmes & Réseaux",
                items: ["Linux", "Windows Server", "DNS", "VLAN", "vSwitch"],
            },
            {
                id: "programming",
                label: "Programmation",
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
        heading: "Parcours académique",
        subheading: "Le parcours qui a façonné mes bases en ingénierie.",
        items: [
            {
                institution: "Institut National des Postes et Télécommunications (INPT)",
                degree: "Ingénierie des systèmes ubiquistes et distribués - Cloud et IoT",
                period: "09/2023 - Présent",
                location: "Rabat",
            },
            {
                institution: "Classes préparatoires Lydex",
                degree: "Classes préparatoires TSI (Technologie et Sciences Industrielles)",
                period: "09/2021 - 2023",
                location: "Benguerir",
            },
            {
                institution: "Lycée Tassaout",
                degree: "Baccalauréat, Sciences et Technologies Électriques (STE)",
                period: "09/2020 - 2021",
                location: "El Kelaa Des Sraghnas",
            },
        ],
    },
    experience: {
        heading: "Expérience",
        subheading:
            "Des rôles concrets appliquant cloud, automatisation et données dans des environnements réels.",
        items: [
            {
                role: "Stagiaire Infrastructure Cloud",
                company: "MAROC DATACENTER (MDC)",
                period: "06/2025 - 08/2025",
                location: "Témara, Maroc",
                tasks: [
                    "Conception d'un cloud privé automatisé sur VMware vSphere.",
                    "Mise en place de TrueNAS, automatisation Ansible, sécurité Wazuh et sauvegarde Veeam.",
                ],
            },
            {
                role: "Collecteur de Données",
                company: "Haut Commissariat au Plan du Maroc",
                period: "08/2024 - 09/2024",
                tasks: [
                    "Collecte de données pour la campagne d'été du HCP.",
                    "Développement de la résilience et du souci du détail lors des opérations sur le terrain.",
                ],
            },
        ],
    },
    projects: {
        heading: "Projets phares",
        subheading:
            "Sélection de travaux illustrant la pensée cloud-native, les pratiques DevOps et l'infrastructure as code.",
        viewProjectLabel: "Voir le projet",
        viewCodeLabel: "Voir le code",
        liveDemoLabel: "Démo en ligne",
        viewCode: "Voir le Code",
        liveDemo: "Démo Live",
        techStack: "Stack Technique",
        items: [
            {
                name: "BoardGameListing - CI/CD & K8s",
                subtitle: "Pipeline CI/CD Spring & Kubernetes",
                desc: "Pipeline CI/CD complet pour une application Spring Boot avec Jenkins, Kubernetes sur AWS EC2, SonarQube et Trivy.",
                tech: ["Jenkins", "Kubernetes", "AWS EC2", "SonarQube", "Trivy"],
                codeUrl: "", // TODO: insérer le lien GitHub
                liveUrl: undefined,
                image: undefined,
            },
            {
                name: "Local RAG Microservices",
                subtitle: "Microservices RAG avec LLM locaux",
                desc: "Système de questions-réponses sur documents en mode hors-ligne utilisant des LLM locaux avec Python, FastAPI, LangChain, Ollama, Docker et Terraform.",
                tech: ["Python", "FastAPI", "LangChain", "Ollama", "Docker", "Terraform"],
                codeUrl: "", // TODO: insérer le lien GitHub
                liveUrl: undefined,
                image: undefined,
            },
            {
                name: "Azure Pet Store",
                subtitle: "Application cloud-native de référence sur Azure",
                desc: "Architecture microservices N‑tiers sur Azure avec Azure DevOps, AKS, Bicep et Azure Functions.",
                tech: ["Azure DevOps", "AKS", "Bicep", "Azure Functions"],
                codeUrl: "", // TODO: insérer le lien GitHub
                liveUrl: undefined,
                image: undefined,
            },
            {
                name: "Readers Haven",
                subtitle: "Plateforme microservices & observabilité",
                desc: "Application microservices full‑stack construite en équipe avec React et Node.js, orchestrée par Kubernetes avec une stack de monitoring complète (Prometheus/Grafana) et un pattern d'API Gateway sécurisé.",
                tech: ["React", "Node.js", "Kubernetes", "Prometheus", "Grafana", "MongoDB"],
                codeUrl: "", // TODO: insérer le lien GitHub
                liveUrl: undefined,
                image: undefined,
            },
            {
                name: "3-Tier DevOps CI/CD Pipeline",
                subtitle: "Déploiement cloud automatisé et sécurisé",
                desc: "Pipeline Jenkins robuste pour une application 3‑tiers, intégrant des outils DevSecOps (SonarQube, Trivy) et automatisant le déploiement sur AWS EKS via Helm et une infrastructure dynamique.",
                tech: ["Jenkins", "AWS EKS", "Docker", "SonarQube", "Trivy", "Helm"],
                codeUrl: "", // TODO: insérer le lien GitHub
                liveUrl: undefined,
                image: undefined,
            },
        ],
    },
    leadership: {
        heading: "Leadership & Bénévolat",
        subheading: "Là où l'ingénierie rencontre l'humain.",
        humanSideLabel: "Côté Humain",
        humanSideTitle: "Mener des initiatives au-delà de la salle de classe",
        humanSide: "Côté Humain",
        initiatives: "Mener des initiatives au-delà de la salle de classe",
        items: [
            {
                role: "Fondateur",
                org: "INPT Runners (Club de Course Étudiant)",
                description:
                    "A fondé la première communauté étudiante de course à pied. Organisation de courses hebdomadaires pour promouvoir la résilience mentale et la discipline — des valeurs que j'apporte aux équipes d'ingénierie.",
            },
            {
                role: "Responsable Cellule DevOps",
                org: "Club CIT (Club Informatique & Télécom)",
                description:
                    "Animation d'ateliers sur le Cloud & CI/CD. Mentorat de pairs sur la conteneurisation et les meilleures pratiques d'automatisation.",
            },
            {
                role: "Vice-Président",
                org: "MSC (Club Math & Science)",
                description:
                    "Gestion des opérations du club et promotion de la curiosité scientifique à travers des événements et séminaires.",
            },
        ],
    },
    library: {
        heading: "Fondations intellectuelles",
        tagline:
            "L'ingénierie construit des systèmes. La philosophie aide à comprendre qui les utilise.",
        items: [
            {
                title: "The Art of Loving",
                author: "Erich Fromm",
                image: "/library/the art of loving.jpg",
                theme: "Discipline active",
                synopsis:
                    "Fromm soutient que l'amour n'est pas un vague sentiment, mais un art qui exige discipline, concentration et patience pour être maîtrisé.",
                connection:
                    "Appliquer cette même discipline active et ce soin aux dynamiques d'équipe et à la responsabilité du code.",
            },
            {
                title: "Man for Himself",
                author: "Erich Fromm",
                image: "/library/man for himself.jpg",
                theme: "Éthique humaniste",
                synopsis:
                    "Une enquête sur la psychologie de l'éthique, défendant que notre plus grande vertu est d'être fidèles à notre propre nature (productivité).",
                connection:
                    "Ancrer les décisions d'ingénierie dans l'intégrité plutôt que dans les seuls indicateurs.",
            },
            {
                title: "The Art of Being",
                author: "Erich Fromm",
                image: "/library/the art of being.jpg",
                theme: "Pleine conscience",
                synopsis:
                    "Un guide pour fonctionner pleinement dans un monde distrait grâce à la pratique de la pleine conscience et au dépassement des illusions.",
                connection:
                    "Apporter un état de Flow et une concentration profonde à la conception d'architectures complexes et au débogage.",
            },
            {
                title: "Ethics: A Very Short Introduction",
                author: "Simon Blackburn",
                image: "/library/ethics.jpg",
                theme: "Systèmes moraux",
                synopsis:
                    "Blackburn explore les grands climats éthiques de notre époque (Kant, utilitarisme) et la manière dont nous justifions nos valeurs.",
                connection:
                    "Utiliser ces cadres pour arbitrer les compromis éthiques en IA, vie privée et automatisation.",
            },
            {
                title: "Philosophy: The Basics",
                author: "Nigel Warburton",
                image: "/library/philosophy.jpg",
                theme: "Logique critique",
                synopsis:
                    "Une introduction claire aux grandes questions de la réalité, de la science et de l'esprit, invitant à un scepticisme rigoureux.",
                connection:
                    "Aiguiser les capacités d'analyse de cause racine nécessaires pour diagnostiquer les pannes distribuées.",
            },
            {
                title: "Le Mythe de la Normalité",
                author: "Dr. Gabor Maté",
                image: "/library/normal.jpg",
                theme: "Santé systémique",
                synopsis:
                    "Maté décortique la façon dont la société moderne génère la maladie, en reliant les traumatismes individuels aux pressions systémiques plus larges.",
                connection:
                    "Comprendre comment le stress systémique affecte la fiabilité — autant dans la biologie humaine que dans les clusters cloud.",
            },
            {
                title: "L'Homme Irrationnel",
                author: "William Barrett",
                image: "/library/irrational-man.jpg",
                theme: "Existentialisme",
                synopsis:
                    "Un exposé de référence sur la philosophie existentialiste, qui interroge la quête de sens à l'ère mécaniste.",
                connection:
                    "Naviguer dans l'ambiguïté et le « facteur humain » au sein de systèmes logiciels déterministes.",
            },
        ],
    },
    contact: {
        heading: "Construisons l'automatisation de demain.",
        subheading:
            "Si vous recherchez un stagiaire PFE Cloud & DevOps qui se soucie de la fiabilité, de l'automatisation et des personnes, discutons-en.",
        form: {
            nameLabel: "Nom",
            namePlaceholder: "Votre nom",
            emailLabel: "Email",
            emailPlaceholder: "vous@entreprise.com",
            messageLabel: "Message",
            messagePlaceholder:
                "Parlez-moi de votre équipe, de vos projets ou de vos attentes pour le PFE.",
            submitLabel: "Envoyer le message",
            staticNote:
                "Ce formulaire envoie directement via EmailJS. Vous pourrez adapter le template ou le fournisseur plus tard.",
        },
        info: {
            emailLabel: "Email",
            locationLabel: "Localisation",
            availabilityLabel: "Disponibilité",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            stravaLabel: "Strava",
        },
        meta: {
            location: "Basé au Maroc",
            availability:
                "Actuellement à la recherche d'un stage de fin d'études (PFE) en Cloud & DevOps.",
        },
        status: {
            idle: "Envoyer le message",
            sending: "Envoi...",
            success: "Message envoyé ! Merci pour votre message.",
            error: "Une erreur est survenue. Réessayez ou contactez-moi par email.",
        },
        placeholders: {
            name: "John Doe",
            email: "john@example.com",
            message: "Parlez-moi de votre projet...",
        },
        states: {
            sending: "Envoi en cours...",
            success: "Message envoyé !",
            error: "Erreur. Réessayez.",
        },
    },
    endorsements: {
        heading: "Communauté et recommandations",
        subheading:
            "Les retours de managers, de pairs et de membres de la communauté avec qui j'ai travaillé.",
        roleAt: "chez",
        items: [
            {
                name: "Soulaymane KACEM",
                role: "Data & AI Engineer chez Oracle | Ingénieur Data Certifié AWS",
                company: "Oracle",
                image: "/soulaymane-kacem.jpg",
                text: "Si vous avez besoin de courir un semi-marathon un mardi soir au hasard pendant vos vacances, c'est votre homme ! Si vous voulez mettre en place une infrastructure scalable, il peut le faire aussi !!",
                linkedinUrl: "https://www.linkedin.com/in/kacemsoulaymane/",
            },
            {
                name: "ELHABIB SBIHI",
                role: "Administrateur Système | Ingénieur NMS chez Nokia",
                company: "Nokia",
                image: "/elhabib.png",
                text: "Abdelilah a une capacité remarquable à s'adapter à de nouvelles personnes et à des environnements divers, et son dévouement au sport garde son esprit plus vif que la moyenne.",
                linkedinUrl: "https://www.linkedin.com/in/elhabib-sbihi-972ab4276/",
            },
            {
                name: "Mehdi Lahlou Mimi",
                role: "Consultant IT chez Leyton",
                company: "Leyton",
                image: "/mehdi.jpeg",
                text: "Abdelilah est l'une des personnes les plus fiables, dévouées et motivées que je connaisse. Toute équipe aurait de la chance d'avoir quelqu'un avec une telle éthique de travail.",
                linkedinUrl: "https://www.linkedin.com/in/mehdi-lahlou-mimi-893b91245/",
            },
        ],
    },
    guestbook: {
        heading: "Laissez une trace.",
        subheading: "Retours, encouragements, ou juste un bonjour.",
    },
    footer: {
        owner: "Abdelilah IKBI",
        rights: "Tous droits réservés.",
        builtBy: "Conçu et Développé par",
    },
};
