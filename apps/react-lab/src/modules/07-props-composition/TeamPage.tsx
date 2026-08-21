import { Members } from "./data";
import { TeamList } from "./TeamList";

export default function TeamPage() {
  return (
    <div className="team-page">
      <h1>Our Team</h1>
      <TeamList members={Members} />
    </div>
  );
}
