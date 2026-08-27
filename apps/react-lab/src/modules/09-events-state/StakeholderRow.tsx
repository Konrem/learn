import { type Stakeholder } from "./types";

interface StakeholderRowProps {
  stakeholder: Stakeholder;
  onSelect: (stakeholder: Stakeholder) => void;
  onRemove: (stakeholder: Stakeholder) => void;
}

export default function StakeholderRow({ stakeholder, onSelect, onRemove }: StakeholderRowProps) {
  return (
    <div className="stakeholder-page-buttons">
      <button onClick={() => onSelect({...stakeholder, selected: !stakeholder.selected})}>Select/Unselect</button>
      <button onClick={() => onRemove(stakeholder)}>Remove</button>
    </div>
  );
}