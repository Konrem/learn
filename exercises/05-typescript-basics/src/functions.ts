import type { TeamMember, Role } from './types'

export function filterByRole(members: TeamMember[], role: Role): TeamMember[] {
    return members.filter(member => member.role === role)
}

export function countAvailable(members: TeamMember[]): number {
    return members.filter(member => member.availability === "available").length
}

export function formatMember(member: TeamMember): TeamMember {
    // return `${member.name}, Role: ${member.role}, Skills: ${member.skills.join(", ")}, Availability: ${member.availability}`;
    return member;
}