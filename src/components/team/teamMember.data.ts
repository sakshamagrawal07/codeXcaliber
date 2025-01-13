
interface UserProfile {
    name: string;

    role: string;
    imageUrl: string;
    links: Boolean;
    github?: string;
    linkedin?: string;
    instagram?: string;
}

const teamMembers: UserProfile[] = [
    { name: "Alice", role: "Frontend Developer", imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed='Alice'", links: true, linkedin: "https://www.linkedin.com/in/alice"},
    { name: "Bob", role: "Backend Developer", imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed='Bob'", links: false },
    { name: "Charlie", role: "UI/UX Designer", imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed='Charlie'", links: false },
    { name: "Diana", role: "Project Manager", imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed='Diana'", links: false },
    { name: "Ethan", role: "DevOps Engineer", imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed='Ethan'", links: false },
    { name: "Fiona", role: "Data Scientist", imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed='Fiona'", links: false },
];

export { teamMembers, UserProfile };