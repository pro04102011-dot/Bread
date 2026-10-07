export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__art" aria-hidden>
          👩‍🍳
        </div>
        <div>
          <h2 className="section__title section__title--left">Про нашу пекарню</h2>
          <p>
            Усе почалося на домашній кухні: рецепт пухкої паляниці від бабусі та бажання
            пригощати сусідів справжнім хлібом. Сьогодні ми — невелика родинна пекарня,
            але підхід лишився тим самим.
          </p>
          <p>
            Ми не женемося за обсягами. Кожне тісто «відпочиває» не менше 12 годин, щоб
            хліб мав глибокий смак і довго залишався свіжим. Борошно беремо у місцевих
            виробників, а закваску підгодовуємо щодня.
          </p>
          <ul className="stats">
            <li>
              <strong>12+</strong> років досвіду
            </li>
            <li>
              <strong>10</strong> видів випічки
            </li>
            <li>
              <strong>300+</strong> постійних клієнтів
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
