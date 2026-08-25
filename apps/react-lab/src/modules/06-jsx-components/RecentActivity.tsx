const activities = [
  { id: 1, description: "User A logged in", timestamp: "2026-06-01 10:00" },
  {
    id: 2,
    description: "User B uploaded a file",
    timestamp: "2026-06-01 11:30",
  },
  {
    id: 3,
    description: "User C updated their profile",
    timestamp: "2026-06-01 12:15",
  },
];

export default function RecentActivity() {
  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.description}</p>
            <small>{activity.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
