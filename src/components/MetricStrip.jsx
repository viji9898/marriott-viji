export default function MetricStrip({ items }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
        gap: 16,
        border: "1px solid #eee",
        padding: 16,
        borderRadius: 10,
      }}
    >
      {items.map((it) => (
        <div key={it.label}>
          <div className="small">{it.label}</div>
          <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}
