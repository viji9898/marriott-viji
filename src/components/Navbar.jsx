import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  opacity: isActive ? 1 : 0.7,
  marginRight: 16,
});

export default function Navbar() {
  return (
    <div style={{ borderBottom: "1px solid #eee" }}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
        }}
      >
        <div style={{ fontWeight: 800 }}>marriott.viji.com</div>
        <nav>
          <NavLink to="/" style={linkStyle}>
            Project
          </NavLink>
          <NavLink to="/deep-dives" style={linkStyle}>
            Deep Dives
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
