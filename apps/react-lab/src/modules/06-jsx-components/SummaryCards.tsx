export default function SummaryCards() {
  const cards = [
    { title: "Total stakeholders", count: 24 },
    { title: "High influence", count: 6 },
    { title: "Recent interactions", count: 12 },
  ];
  return (
    <div>
      <h2>Summary Cards</h2>
      <div className="summary-cards-container">
        {cards.map((card, index) => (
          <div className="summary-card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
