const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive websites designed to give your business a strong digital presence.",
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Clean and intuitive interfaces focused on creating better digital experiences for your users.",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Creative digital strategies that help businesses reach their audience and build visibility online.",
  },
  {
    number: "04",
    title: "Branding & Creative",
    description:
      "Visual identities, graphics and creative content designed to make your brand stand out.",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-heading">

        <div>
          <p className="section-tag">WHAT WE DO</p>

          <h2>
            Digital solutions
            <span> built for growth.</span>
          </h2>
        </div>

        <p className="services-intro">
          From websites to creative digital experiences, we help
          businesses build a stronger presence in the digital world.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (
          <div className="service-card" key={service.number}>

            <span className="service-number">
              {service.number}
            </span>

            <div className="service-arrow">
              ↗
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;