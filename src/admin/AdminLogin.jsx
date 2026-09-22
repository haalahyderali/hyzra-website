import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed."
        );
      }

      // Store JWT
      localStorage.setItem("adminToken", data.token);

      // Store admin information
      localStorage.setItem(
        "adminUser",
        JSON.stringify(data.user)
      );

      // Go to dashboard
      navigate("/admin/dashboard");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-header">

          <p className="section-tag">
            HYZRA ADMIN
          </p>

          <h1>
            Welcome
            <span> back.</span>
          </h1>

          <p>
            Sign in to manage your enquiries.
          </p>

        </div>

        {error && (
          <div className="admin-login-error">
            {error}
          </div>
        )}

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label htmlFor="admin-email">
              Email
            </label>

            <input
              type="email"
              id="admin-email"
              name="email"
              placeholder="admin@hyzraquadtech.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="admin-password">
              Password
            </label>

            <input
              type="password"
              id="admin-password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <span>↗</span>}
          </button>

        </form>

      </div>

    </main>
  );
}

export default AdminLogin;