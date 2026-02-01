import { Link } from "react-router-dom";

const dives = [
  {
    slug: "approvals",
    title: "Local Approvals & Regulatory Process",
    desc: "Planning path, constraints, and timeline.",
  },
  {
    slug: "area-program",
    title: "Area Program & Massing Decisions",
    desc: "50 → 145 → 198 keys, and why.",
  },
  {
    slug: "costs",
    title: "Cost Structure & Budget Discipline",
    desc: "High-level buckets and spend logic.",
  },
];

export default function DeepDivesIndex() {
  return (
    <div>
      <h1>Deep Dives</h1>
      <p className="small">
        Optional project notes for readers who want to understand constraints,
        decisions, and trade-offs in detail.
      </p>
      <hr />
      {dives.map((d) => (
        <div key={d.slug} style={{ marginBottom: 18 }}>
          <div style={{ fontWeight: 800 }}>
            <Link to={`/deep-dives/${d.slug}`}>{d.title}</Link>
          </div>
          <div className="small">{d.desc}</div>
        </div>
      ))}
    </div>
  );
}
