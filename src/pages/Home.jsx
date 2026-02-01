import MetricStrip from "../components/MetricStrip";

export default function Home() {
  return (
    <div>
      <h1>From Greenfield to Institutional Exit</h1>
      <p>
        I conceived, financed, built, operated, and exited a 198-key Marriott
        resort in Weligama, Sri Lanka — taking the project from an undeveloped
        site to a full institutional sale.
      </p>

      <MetricStrip
        items={[
          { label: "Keys", value: "198" },
          { label: "Enterprise Value", value: "USD 57,000,000" },
          { label: "Per Key", value: "USD 287,000" },
          { label: "ROI", value: "120%" },
          { label: "Exit", value: "19 Apr 2019" },
        ]}
      />

      <hr />

      <h2>The Project</h2>
      <p className="small">
        Marriott Resort &amp; Spa Weligama Bay · Freehold beachfront land ·
        Opened 2018
      </p>
      <p>
        The first Marriott in Sri Lanka, and at the time the only
        internationally branded hotel outside Colombo. I exited the asset in
        April 2019 via a share sale to a Singapore-based hotel group. Marriott
        remained unchanged as operator.
      </p>

      <h2>Why Weligama (2011–2012)</h2>
      <p>...</p>

      <h2>Defining the Product</h2>
      <p>...</p>

      <h2>Bringing Marriott Onboard</h2>
      <p>...</p>

      <h2>Capital &amp; Governance</h2>
      <p>...</p>

      <h2>Development &amp; Delivery</h2>
      <p>...</p>

      <h2>Operations Snapshot</h2>
      <ul>
        <li>ADR: USD 155</li>
        <li>Occupancy: 75%</li>
        <li>GOP Margin: 38%</li>
      </ul>

      <h2>Exit</h2>
      <p>...</p>

      <h2>What This Proved</h2>
      <p>...</p>
    </div>
  );
}
