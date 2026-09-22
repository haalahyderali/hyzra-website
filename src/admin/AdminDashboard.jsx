import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // FETCH ENQUIRIES
  // =========================
  const fetchEnquiries = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin");
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiries`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminUser");

          navigate("/admin");
          return;
        }

        throw new Error(
          data.message || "Unable to load enquiries."
        );
      }

      setEnquiries(data.enquiries);
      setError("");
    } catch (error) {
      console.error("Fetch enquiries error:", error);

      if (
        error.message.includes("Authentication") ||
        error.message.includes("Invalid") ||
        error.message.includes("expired")
      ) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin");
        return;
      }

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [navigate]);

  // =========================
  // STATISTICS
  // =========================
  const totalEnquiries = enquiries.length;

  const newEnquiries = enquiries.filter(
    (enquiry) => enquiry.status === "New"
  ).length;

  const contactedEnquiries = enquiries.filter(
    (enquiry) => enquiry.status === "Contacted"
  ).length;

  const completedEnquiries = enquiries.filter(
    (enquiry) => enquiry.status === "Completed"
  ).length;

  // =========================
  // VIEW ENQUIRY
  // =========================
  const viewEnquiry = (enquiry) => {
    alert(
      `Name: ${enquiry.name}\n` +
        `Email: ${enquiry.email}\n` +
        `Phone: ${enquiry.phone || "Not provided"}\n` +
        `Company: ${enquiry.company || "Not provided"}\n` +
        `Service: ${enquiry.service}\n\n` +
        `Message:\n${enquiry.message}`
    );
  };

  // =========================
  // DELETE ENQUIRY
  // =========================
  const deleteEnquiry = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiries/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to delete enquiry."
        );
      }

      setEnquiries((previousEnquiries) =>
        previousEnquiries.filter(
          (enquiry) => enquiry._id !== id
        )
      );

      setError("");
    } catch (error) {
      console.error("Delete enquiry error:", error);
      setError(error.message);
    }
  };

  // =========================
  // UPDATE STATUS
  // =========================
  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiries/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to update status."
        );
      }

      setEnquiries((previousEnquiries) =>
        previousEnquiries.map((enquiry) =>
          enquiry._id === id
            ? {
                ...enquiry,
                status: data.enquiry.status,
              }
            : enquiry
        )
      );

      setError("");
    } catch (error) {
      console.error("Status update error:", error);
      setError(error.message);
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin");
  };

  // =========================
  // ADMIN USER
  // =========================
  const adminUser = JSON.parse(
    localStorage.getItem("adminUser") || "{}"
  );

  // =========================
  // PAGE
  // =========================
  return (
    <main className="admin-dashboard">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          HyZra
          <span>Admin</span>
        </div>

        <nav className="admin-nav">
          <a
            href="#dashboard"
            className="active"
          >
            Dashboard
          </a>

          <a href="#enquiries">
            Enquiries
          </a>
        </nav>

        <button
          className="admin-logout"
          onClick={handleLogout}
        >
          Logout ↗
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <section className="admin-main">
        {/* HEADER */}
        <header className="admin-header">
          <div>
            <p className="section-tag">
              ADMIN PANEL
            </p>

            <h1>Dashboard</h1>
          </div>

          <div className="admin-user">
            <span>
              {adminUser.name || "Admin"}
            </span>
          </div>
        </header>

        {/* ERROR */}
        {error && (
          <div className="admin-error">
            {error}
          </div>
        )}

        {/* STATISTICS */}
        <section className="admin-stats">
          <div className="admin-stat-card">
            <span>Total Enquiries</span>
            <strong>{totalEnquiries}</strong>
          </div>

          <div className="admin-stat-card">
            <span>New</span>
            <strong>{newEnquiries}</strong>
          </div>

          <div className="admin-stat-card">
            <span>Contacted</span>
            <strong>{contactedEnquiries}</strong>
          </div>

          <div className="admin-stat-card">
            <span>Completed</span>
            <strong>{completedEnquiries}</strong>
          </div>
        </section>

        {/* ENQUIRIES */}
        <section
          className="admin-enquiries"
          id="enquiries"
        >
          <div className="admin-section-header">
            <div>
              <p className="section-tag">
                PROJECT ENQUIRIES
              </p>

              <h2>Recent enquiries</h2>
            </div>

            <span>
              {totalEnquiries} total
            </span>
          </div>

          {/* LOADING */}
          {loading ? (
            <div className="admin-loading">
              Loading enquiries...
            </div>
          ) : enquiries.length === 0 ? (
            /* EMPTY */
            <div className="admin-empty">
              No enquiries yet.
            </div>
          ) : (
            /* TABLE */
            <div className="enquiry-table-wrapper">
              <table className="enquiry-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry._id}>
                      {/* NAME */}
                      <td>
                        <strong>
                          {enquiry.name}
                        </strong>

                        {enquiry.company && (
                          <small>
                            {enquiry.company}
                          </small>
                        )}
                      </td>

                      {/* SERVICE */}
                      <td>
                        {enquiry.service}
                      </td>

                      {/* EMAIL */}
                      <td>
                        {enquiry.email}
                      </td>

                      {/* STATUS */}
                      <td>
                        <select
                          className={`status-select status-${enquiry.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          value={enquiry.status}
                          onChange={(event) =>
                            updateStatus(
                              enquiry._id,
                              event.target.value
                            )
                          }
                        >
                          <option value="New">
                            New
                          </option>

                          <option value="Contacted">
                            Contacted
                          </option>

                          <option value="Completed">
                            Completed
                          </option>
                        </select>
                      </td>

                      {/* DATE */}
                      <td>
                        {new Date(
                          enquiry.createdAt
                        ).toLocaleDateString()}
                      </td>

                      {/* ACTIONS */}
                      <td>
                        <div className="action-buttons">
                          <button
                            className="view-btn"
                            onClick={() =>
                              viewEnquiry(enquiry)
                            }
                          >
                            View
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() =>
                              deleteEnquiry(
                                enquiry._id
                              )
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default AdminDashboard;