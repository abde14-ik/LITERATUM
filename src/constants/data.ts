export type NavItem = {
    id: string;
    label: string;
};

export type Profile = {
    name: string;
    title: string;
    goal: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    brandLine?: string;
};

export const profile: Profile = {
    name: "LITERATUM",
    title: "The Syntax Society",
    goal: "A sanctuary for slow reading, annotated margins, and reflective conversation.",
    location: "Rabat, INPT Campus",
    email: "abdeikbi200@gmail.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    brandLine: "Verba volant, scripta manent.",
};

export type Project = {
    name: string;
    tech: string[];
    desc: string;
    codeUrl?: string;
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        name: "Salon d'Écriture",
        tech: ["Facilitation", "Curation", "Print Design"],
        desc: "Monthly writing salons culminating in a hand-bound zine of member pieces.",
    },
    {
        name: "Midnight Library Map",
        tech: ["Archiving", "Typesetting", "Illustration"],
        desc: "A printed atlas of member recommendations arranged by themes and moods.",
    },
    {
        name: "Marginalia Exchange",
        tech: ["UX Design", "Local Storage", "EmailJS"],
        desc: "A light web exchange for sharing annotations, quotes, and epistolary notes.",
    },
    {
        name: "Lantern Lectures",
        tech: ["Research", "Storytelling", "Audio Editing"],
        desc: "Recorded mini-lectures introducing authors and motifs for each reading block.",
    },
];

export const contact = {
    email: profile.email,
    location: profile.location,
    availability: "[Your current availability or what you are looking for.]",
};
