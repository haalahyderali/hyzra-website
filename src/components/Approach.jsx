const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We first understand your business, audience and goals.",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a clear visual direction around your brand and users.",
  },
  {
    number: "03",
    title: "Build",
    text: "We turn the approved design into a functional digital experience.",
  },
  {
    number: "04",
    title: "Refine",
    text: "We test, improve and polish the final experience before launch.",
  },
];

function Approach() {
  return (
    <section className="approach">

      <div className="approach-heading">

        <p className="section-tag">OUR APPROACH</p>

        <h2>
          Simple process.
          <span> Meaningful results.</span>
        </h2>

      </div>

      <div className="approach-grid">

        {steps.map((step) => (
          <div className="approach-card" key={step.number}>

            <span>{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Approach;