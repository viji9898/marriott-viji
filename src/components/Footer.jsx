export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #eee",
        marginTop: 80,
        padding: "24px 0 40px",
        fontSize: "0.9rem",
        color: "#666",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div>© {year} Vijitha Wijesuriya</div>

        <div className="small">
          This site documents a completed hospitality development project and is
          intended as a personal project record and investor reference. It does
          not constitute an offer, solicitation, or investment advice.
        </div>

        <div className="small">
          Marriott and Marriott Resort &amp; Spa Weligama Bay are trademarks of
          Marriott International, Inc. and are referenced for factual purposes
          only.
        </div>
      </div>
    </footer>
  );
}
