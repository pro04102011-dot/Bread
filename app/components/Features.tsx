import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Чому обирають нас</h2>
        <div className="features">
          {features.map((f) => (
            <div key={f.title} className="feature">
              <div className="feature__icon" aria-hidden>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
