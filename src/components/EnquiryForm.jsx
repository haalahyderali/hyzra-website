import { useState } from "react";

function EnquiryForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/enquiries`,
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
      throw new Error(data.message || "Something went wrong.");
    }

    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });

  } catch (error) {

    console.error("Enquiry submission error:", error);

    alert(
      error.message ||
      "Unable to submit your enquiry. Please try again."
    );
  }
};

  return (
    <div className="enquiry-form-wrapper">

      <div className="enquiry-heading">

        <p className="section-tag">PROJECT ENQUIRY</p>

        <h2>
          Tell us about
          <span> your project.</span>
        </h2>

        <p>
          Fill in the details below and our team will
          get back to you.
        </p>

      </div>

      <form
        className="enquiry-form"
        onSubmit={handleSubmit}
      >

        <div className="form-row">

          <div className="form-group">

            <label htmlFor="name">
              Name *
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="email">
              Email *
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

        </div>

        <div className="form-row">

          <div className="form-group">

            <label htmlFor="phone">
              Phone / WhatsApp
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label htmlFor="company">
              Company
            </label>

            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="form-group">

          <label htmlFor="service">
            What do you need?
          </label>

          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >

            <option value="">
              Select a service
            </option>

            <option value="Website Development">
              Website Development
            </option>

            <option value="UI/UX Design">
              UI / UX Design
            </option>

            <option value="Digital Marketing">
              Digital Marketing
            </option>

            <option value="Branding">
              Branding & Creative
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Tell us about your project *
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell us about your project, requirements or idea..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

        </div>

        <button
          type="submit"
          className="form-submit"
        >
          Send Enquiry
          <span>↗</span>
        </button>

      </form>

    </div>
  );
}

export default EnquiryForm;