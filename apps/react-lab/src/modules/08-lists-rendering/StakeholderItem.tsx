import type { Stakeholder } from "./types";

export default function StakeholderItem({
  stakeholder,
}: {
  stakeholder: Stakeholder;
}) {
  return (
    <div className="stakeholder-item">
      <h3>{stakeholder.name}</h3>
      <p><b>Category:</b> {stakeholder.category}</p>
      {stakeholder.organization ? (
        <p><b>Organization:</b> {stakeholder.organization}</p>
      ) : (
        <p><i>Organization: not specified</i></p>
      )}
      <p><b>Influence:</b> {stakeholder.influence}</p>
    </div>
  );
}
