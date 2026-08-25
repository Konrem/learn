import type { TeamMember } from './types'

export const Members: TeamMember[]  = [
    {
        id: 1,
        name: "Oleg",
        role: "frontend",
        skills: ["ReactJS", "VueJS", "TypeScript"],
        availability: "available",
    },
    {
        id: 2,
        name: "Maria",
        role: "fullstack",
        skills: ["ReactJS", "Laravel", "PostgreSQL", "Node.js"],
        availability: "busy",
    },
    {
        id: 3,
        name: "Alex",
        role: "backend",
        skills: ["Laravel", "PostgreSQL", "Node.js"],
        availability: "busy",
        avatarUrl: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-svg-download-png-456322.png?f=webp&w=256",
    },
    {
        id: 4,
        name: "Volodymyr",
        role: "fullstack",
        skills: ["ReactJS", "Laravel", "PostgreSQL"],
        availability: "available",
    },        
    {
        id: 5,
        name: "Anton",
        role: "backend",
        skills: ["PostgreSQL", "Node.js"],
        availability: "available",
    }
]