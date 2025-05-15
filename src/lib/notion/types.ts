interface Project {
    name: string;
    slug: string;
    short_description: string;
    description: string;
    stack: string[];
    repository: string;
    demo: string;
    pinned: boolean;
    image: string;
}

interface Experience {
    name: string;
    slug: string;
    location: string;
    start_date: string;
    end_date: string;
    short_description: string;
    description: string;
    company: {
        name: string;
        url: string;
    };
    activities: string[];
    skills: string[];
}

export type { Project, Experience };
