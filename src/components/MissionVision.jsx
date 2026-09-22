const items = [
  {
    number: "01",
    title: "Our Mission",
    text:
      "To create meaningful digital experiences that help businesses communicate, connect and grow.",
  },
  {
    number: "02",
    title: "Our Vision",
    text:
      "To become a trusted digital technology partner for businesses looking to build and grow in the digital world.",
  },
];

function MissionVision() {
  return (
    <section className="mission-vision">

      {items.map((item) => (
        <div className="mission-card" key={item.number}>

          <span>{item.number}</span>

          <h3>{item.title}</h3>

          <p>{item.text}</p>

        </div>
      ))}

    </section>
  );
}

export default MissionVision;