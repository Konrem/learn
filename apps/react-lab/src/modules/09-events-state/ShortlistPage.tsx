import { useState } from "react";
import { initialStakeholders } from "./initialStakeholders";
import StakeholderRow from "./StakeholderRow";

export default function ShortlistPage() {
  const [stakeholders, setStakeholders] = useState(initialStakeholders);
  const [name, setName] = useState("");

  const handleAddStakeholder = () => {
    if (name.trim() === "") {
      console.log("Name cannot be empty");
      return;
    } else {
      setStakeholders((prevStakeholders) => [
        ...prevStakeholders,
        {
          id: Date.now(),
          name: name.startsWith(" ") ? name.trim() : name,
          selected: false,
        },
      ]);
    }
  };
  const handleReset = () => {
  setStakeholders(
    initialStakeholders.map((stakeholder) => ({
      ...stakeholder,
    }))
  );
};

  return (
    <div>
      <h1>Stakeholders</h1>
      <p>Selected: {stakeholders.filter((s) => s.selected).length} / {stakeholders.length}</p>
      <button onClick={() => handleReset()}>Reset</button>
      <div className="stakeholder-list">
        {stakeholders.map((stakeholder) => (
          <div className="summary-card" key={stakeholder.id}>
            <p>
              <b>ID: </b>
              {stakeholder.id}
            </p>
            <p>
              <b>Name: </b>
              {stakeholder.name}
            </p>
            <p>
              <b>Status: </b>
              {stakeholder.selected ? "Selected" : "Not Selected"}
            </p>
            <StakeholderRow
              stakeholder={stakeholder}
              onSelect={(updatedStakeholder) => {
                setStakeholders((prevStakeholders) =>
                  prevStakeholders.map((card) =>
                    card.id === updatedStakeholder.id ? updatedStakeholder : card
                  )
                );
              }}
              onRemove={(stakeholderToRemove) => {
                setStakeholders((prevStakeholders) =>
                  prevStakeholders.filter((card) => card.id !== stakeholderToRemove.id)
                );
              }}
            />
          </div>
        ))}
      </div>
      <div className="stakeholder-page-buttons">
        <input
          type="text"
          name="add"
          id="add"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add stakeholders..."
        />
        <button onClick={handleAddStakeholder}>Add</button>
      </div>
    </div>
  );
}
