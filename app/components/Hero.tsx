import { business } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Сімейна пекарня з 2012 року</p>
          <h1>{business.tagline}</h1>
          <p className="lead">
            Печемо подовий і житній хліб на живій заквасці, паляниці, пампушки та
            смачну здобу. Без добавок — лише борошно, вода, сіль і любов до справи.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn">
              Замовити
            </a>
            <a href="#products" className="btn btn--ghost">
              Дивитись асортимент
            </a>
          </div>
        </div>
        <div className="hero__art" aria-hidden>
          <span className="hero__bread">🍞</span>
          <span className="hero__float hero__float--1">🥖</span>
          <span className="hero__float hero__float--2">🥐</span>
          <span className="hero__float hero__float--3">🌾</span>
        </div>
      </div>
    </section>
  );
}
