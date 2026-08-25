import StakeholderItem from "./StakeholderItem";
import type { Stakeholder } from "./types";

export function StakeholderList({
  title,
  stakeholders,
}: {
  title: string;
  stakeholders: Stakeholder[];
}) {
  return (
    <div>
      <h2>{title}</h2>
      {stakeholders.length > 0 ? (
        stakeholders.map((stakeholder) => (
          <StakeholderItem key={stakeholder.id} stakeholder={stakeholder} />
        ))
      ) : (
        <p>No stakeholders found.</p>
      )}
    </div>
  );
}
