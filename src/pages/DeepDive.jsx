import { useParams, Link } from "react-router-dom";

const content = {
  approvals: {
    title: "Local Approvals & Regulatory Process",
    body: [
      "Add your approval timeline here.",
      "List authorities involved, key constraints, iterations, and learnings.",
    ],
  },
  "area-program": {
    title: "Area Program & Massing Decisions",
    body: [
      "Explain the iteration path: 50 → 145 → 198 keys.",
      "Summarise trade-offs: brand, ops efficiency, exit metrics.",
    ],
  },
  costs: {
    title: "Cost Structure & Budget Discipline",
    body: [
      "Share high-level cost buckets (avoid sensitive contractor pricing if needed).",
      "Explain where you spent intentionally vs saved.",
    ],
  },
};

export default function DeepDive() {
  const { slug } = useParams();
  const page = content[slug];

  if (!page)
    return (
      <div>
        <h1>Not found</h1>
        <Link to="/deep-dives">Back</Link>
      </div>
    );

  return (
    <div>
      <div className="small">
        <Link to="/deep-dives">← Deep Dives</Link>
      </div>
      <h1>{page.title}</h1>
      {page.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
