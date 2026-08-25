import { useState } from "react";
import { Stakeholders } from "./data";
import { StakeholderList } from "./StakeholderList";

export function StakeholderPage() {
  const [showEmpty, setShowEmpty] = useState(false);

  const internal = Stakeholders.filter(
    (stakeholder) => stakeholder.category === "internal",
  );

  const external = Stakeholders.filter(
    (stakeholder) => stakeholder.category === "external",
  );

  return (
    <div className="stakeholder-page">
      <h1>Stakeholders</h1>
      <div className="stakeholder-list">
        {showEmpty ? (
          <>
            <StakeholderList stakeholders={[]} title="Internal Stakeholders" />
            <StakeholderList stakeholders={[]} title="External Stakeholders" />
          </>
        ) : (
          <>
            <StakeholderList
              title="Internal Stakeholders"
              stakeholders={internal}
            />
            <StakeholderList
              title="External Stakeholders"
              stakeholders={external}
            />
          </>
        )}
      </div>
      <div className="stakeholder-page-buttons">
        <button onClick={() => setShowEmpty(false)}>Show all</button>
        <button onClick={() => setShowEmpty(true)}>Show empty</button>
      </div>
    </div>
  );
}
