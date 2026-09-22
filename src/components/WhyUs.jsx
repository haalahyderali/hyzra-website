const reasons = [
  {
    number: "01",
    title: "Purpose-Driven Design",
    description:
      "Every design decision is made with your business goals and audience in mind.",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "We use modern tools and technologies to create reliable and scalable digital experiences.",
  },
  {
    number: "03",
    title: "Performance Focused",
    description:
      "We build experiences that are responsive, fast and optimized across devices.",
  },
  {
    number: "04",
    title: "Client-Focused Approach",
    description:
      "We work closely with our clients from idea to launch to create solutions that fit their needs.",
  },
];

function WhyUs() {
  return (
    <section className="why-us">

      <div className="why-us-intro">
        <p className="section-tag">WHY HYZRA</p>

        <h2>
          Design with purpose.
          <span> Built for impact.</span>
        </h2>

        <p>
          We combine creativity, technology and business thinking
          to create digital experiences that are meaningful,
          functional and built around your goals.
        </p>
      </div>

      <div className="reasons-list">

        {reasons.map((reason) => (
          <div className="reason-item" key={reason.number}>

            <span className="reason-number">
              {reason.number}
            </span>

            <div className="reason-content">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>

            <span className="reason-arrow">↗</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyUs;