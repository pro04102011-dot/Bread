export const business = {
  name: "Mamahlib",
  tagline: "Хліб, як у бабусі — щодня зі свіжої печі",
  phone: "+380 50 123 45 67",
  phoneHref: "tel:+380501234567",
  email: "hello@mamahlib.example",
  address: "вул. Шевченка, 12, м. Біла Церква",
  hours: [
    { days: "Пн – Сб", time: "07:00 – 20:00" },
    { days: "Нд", time: "08:00 – 16:00" },
  ],
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

export type Category = "bread" | "buns" | "sweet";

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Усе" },
  { id: "bread", label: "Хліб" },
  { id: "buns", label: "Булочки та паляниці" },
  { id: "sweet", label: "Солодка випічка" },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  weight: string;
  price: number;
  category: Category;
  emoji: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "hearth",
    name: "Подовий хліб",
    description: "Класичний пшеничний хліб на заквасці з хрусткою скоринкою.",
    weight: "700 г",
    price: 48,
    category: "bread",
    emoji: "🍞",
    badge: "Хіт",
  },
  {
    id: "rye",
    name: "Житній з кмином",
    description: "Щільний, ароматний, на живому житньому заквасі. Довго не черствіє.",
    weight: "600 г",
    price: 52,
    category: "bread",
    emoji: "🥖",
  },
  {
    id: "darnytsia",
    name: "Дарницький",
    description: "Суміш житнього та пшеничного борошна — смак, знайомий з дитинства.",
    weight: "650 г",
    price: 44,
    category: "bread",
    emoji: "🍞",
  },
  {
    id: "wholegrain",
    name: "Цільнозерновий із насінням",
    description: "З соняшником, льоном і гарбузовим насінням. Без цукру та дріжджів.",
    weight: "500 г",
    price: 65,
    category: "bread",
    emoji: "🌾",
    badge: "Новинка",
  },
  {
    id: "palianytsia",
    name: "Паляниця",
    description: "Круглий пишний хлібець — до борщу найкраще, що можна уявити.",
    weight: "450 г",
    price: 38,
    category: "buns",
    emoji: "🥯",
  },
  {
    id: "garlic-buns",
    name: "Пампушки з часником",
    description: "Теплі, м'які, з часниково-олійною заливкою. Набір із 6 штук.",
    weight: "6 шт.",
    price: 70,
    category: "buns",
    emoji: "🧄",
    badge: "Хіт",
  },
  {
    id: "baguette",
    name: "Багет домашній",
    description: "Легкий, повітряний, з хрусткою скоринкою — для сніданку та бутербродів.",
    weight: "300 г",
    price: 32,
    category: "buns",
    emoji: "🥖",
  },
  {
    id: "poppy-roll",
    name: "Рулет з маком",
    description: "Дрібна здоба з щедрою начинкою з маку та родзинок.",
    weight: "350 г",
    price: 75,
    category: "sweet",
    emoji: "🍥",
  },
  {
    id: "cinnamon",
    name: "Булочка з корицею",
    description: "М'яке тісто, кориця та краплина цукрової глазурі.",
    weight: "110 г",
    price: 28,
    category: "sweet",
    emoji: "🥐",
  },
  {
    id: "kozhulia",
    name: "Пиріжок з вишнею",
    description: "Печений пиріжок з начинкою з вишні без кісточок.",
    weight: "90 г",
    price: 24,
    category: "sweet",
    emoji: "🍒",
  },
];

export const features = [
  {
    icon: "🌾",
    title: "Тільки натуральні інгредієнти",
    text: "Борошно місцевих млинів, вода, сіль і закваска. Жодних покращувачів і консервантів.",
  },
  {
    icon: "🔥",
    title: "Щоранку зі свіжої печі",
    text: "Перші буханки виходять о 6:30. До обіду розбирають усе — приходьте зранку.",
  },
  {
    icon: "🤲",
    title: "Ручна робота",
    text: "Тісто вимішуємо, формуємо та випікаємо вручну — як це робили наші бабусі.",
  },
  {
    icon: "🚚",
    title: "Доставка по місту",
    text: "Привеземо гарячий хліб додому або в офіс. Безкоштовно від 300 грн.",
  },
];
