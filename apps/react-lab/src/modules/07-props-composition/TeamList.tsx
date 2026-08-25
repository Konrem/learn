import type { TeamMember } from "./types"
import { TeamMemberCard } from "./TeamMemberCard"

interface TeamListProps {
  members: TeamMember[]
}

export function TeamList({ members }: TeamListProps) {
  return (
    <div className="team-list">
      {members.map((member) => (
        <TeamMemberCard
          key={member.id}
          member={member}
        />
      ))}
    </div>
  )
}