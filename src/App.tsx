import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          background: "#eee",
        }}>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
