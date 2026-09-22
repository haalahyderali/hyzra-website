const values = [
  "Creativity",
  "Quality",
  "Innovation",
  "Transparency",
  "Reliability",
  "Growth",
];

function Values() {
  return (
    <section className="values">

      <div>
        <p className="section-tag">OUR VALUES</p>

        <h2>
          What drives
          <span> our work.</span>
        </h2>
      </div>

      <div className="values-list">

        {values.map((value, index) => (
          <div className="value-item" key={value}>

            <span>
              0{index + 1}
            </span>

            <h3>{value}</h3>

            <span>↗</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Values;