import type { TeamMember } from "./types";
import { Card } from "./Card";
import { SkillBadge } from "./SkillBadge";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join(".");

  return (
    <Card>
      {member.avatarUrl ? (
        <img
          src={member.avatarUrl}
          alt={member.name}
          width="100"
          height="100"
        />
      ) : (
        <div className="avatar-fallback">{initials}</div>
      )}
      <h3>{member.name}</h3>
      <p><b>Role:</b> {member.role}</p>
      <p><b>Bio:</b> {member.bio}</p>
      <div>
        <b>Skills: </b>
        {member.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </Card>
  );
}
