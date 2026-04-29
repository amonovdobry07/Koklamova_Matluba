import img1 from "../../public/images/product_1.png"
import img2 from "../../public/images/product_2.png"
import img3 from "../../public/images/product_3.png"
import img4 from "../../public/images/product_4.png"
import img5 from "../../public/images/product_5.png"
import img6 from "../../public/images/product_6.png"
import img7 from "../../public/images/product_7.png"
import img8 from "../../public/images/product_8.png"
import img9 from "../../public/images/product_9.png"

const products = [
  {
    id: 1,
    name: {
      uz: "Premium yotoq to'plami — Gullar naqshi",
      ru: 'Комплект постельного белья — Цветочный узор',
      en: 'Premium bed linen set — Floral pattern',
      fr: 'Parure de lit premium — Motif floral',
      tr: 'Premium nevresim takımı — Çiçek deseni',
    },
    description: {
      uz: "Yuqori sifatli paxtadan tayyorlangan, mayin va qulay yotoq anjomlari to'plami.",
      ru: 'Комплект мягкого и удобного постельного белья из высококачественного хлопка.',
      en: 'Soft and comfortable bed linen set made from high-quality cotton.',
      fr: 'Parure de lit douce et confortable en coton de haute qualité.',
      tr: 'Yüksek kaliteli pamuktan üretilmiş, yumuşak ve rahat nevresim takımı.',
    },
    price: 350000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img1,
    badge: 'new',
  },
  {
    id: 2,
    name: {
      uz: "Yotoq to'plami — Oq oqqushlar",
      ru: 'Постельное белье — Белые лебеди',
      en: 'Bed linen set — White swans',
      fr: 'Parure de lit — Cygnes blancs',
      tr: 'Nevresim takımı — Beyaz kuğular',
    },
    description: {
      uz: "Ajoyib oqqushlar dizayniga ega, yotoqxonangizga romantik kayfiyat baxsh etuvchi to'plam.",
      ru: 'Комплект с романтичным дизайном белых лебедей для вашей спальни.',
      en: 'Set with a romantic white swan design to enhance your bedroom mood.',
      fr: 'Parure avec un motif romantique de cygnes blancs pour votre chambre.',
      tr: 'Yatak odanıza romantik bir hava katan beyaz kuğu tasarımlı takım.',
    },
    price: 320000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img2,
    badge: 'hot',
  },
  {
    id: 3,
    name: {
      uz: "Klassik yotoq to'plami — Och pushti",
      ru: 'Классическое постельное белье — Светло-розовое',
      en: 'Classic bed linen set — Light pink',
      fr: 'Parure de lit classique — Rose clair',
      tr: 'Klasik nevresim takımı — Açık pembe',
    },
    description: {
      uz: "Sokin va yoqimli rangdagi, rangi o'chmaydigan sifatli yotoq anjomlari.",
      ru: 'Качественное постельное белье спокойных тонов, которое не линяет.',
      en: 'High-quality fade-resistant bed linen in calm and pleasant colors.',
      fr: 'Linge de lit de haute qualité aux couleurs calmes et résistantes au lavage.',
      tr: 'Sakin ve hoş renklerde, rengi solmayan kaliteli nevresim takımı.',
    },
    price: 280000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img3,
    badge: null,
  },
  {
    id: 4,
    name: {
      uz: "Zamonaviy to'plam — 3D Dizayn",
      ru: 'Современный комплект — 3D Дизайн',
      en: 'Modern set — 3D Design',
      fr: 'Parure moderne — Design 3D',
      tr: 'Modern takım — 3D Tasarım',
    },
    description: {
      uz: "Xonaga o'zgacha ko'rk beruvchi, zamonaviy 3D printli yotoq to'plami.",
      ru: 'Постельное белье с современным 3D-принтом, придающее особый шарм комнате.',
      en: 'Bed linen set with a modern 3D print that gives a special charm to the room.',
      fr: 'Parure de lit avec une impression 3D moderne qui donne un charme particulier à la chambre.',
      tr: 'Odaya özel bir hava katan, modern 3D baskılı nevresim takımı.',
    },
    price: 400000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img4,
    badge: 'new',
  },
  {
    id: 5,
    name: {
      uz: "Yotoq to'plami — Tabiat manzarasi",
      ru: 'Постельное белье — Пейзаж',
      en: 'Bed linen set — Nature landscape',
      fr: 'Parure de lit — Paysage nature',
      tr: 'Nevresim takımı — Doğa manzarası',
    },
    description: {
      uz: "Tabiat elementlari tushirilgan, ko'zni quvnatuvchi qulay to'plam.",
      ru: 'Удобный комплект с элементами природы, радующими глаз.',
      en: 'Comfortable set featuring pleasing elements of nature.',
      fr: 'Parure confortable mettant en valeur des éléments naturels agréables.',
      tr: 'Göze hitap eden, doğa unsurları içeren rahat takım.',
    },
    price: 340000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img5,
    badge: 'hot',
  },
  {
    id: 6,
    name: {
      uz: "Yotoq to'plami — Yorqin gullar",
      ru: 'Постельное белье — Яркие цветы',
      en: 'Bed linen set — Bright flowers',
      fr: 'Parure de lit — Fleurs vives',
      tr: 'Nevresim takımı — Canlı çiçekler',
    },
    description: {
      uz: "Xonangizni yorituvchi yorqin va chiroyli gullar naqshli sifatli mato.",
      ru: 'Качественная ткань с ярким и красивым цветочным узором, освежающим комнату.',
      en: 'Quality fabric with bright and beautiful floral patterns to brighten your room.',
      fr: 'Tissu de qualité avec des motifs floraux vifs et magnifiques pour égayer votre chambre.',
      tr: 'Odanızı aydınlatan parlak ve güzel çiçek desenli kaliteli kumaş.',
    },
    price: 310000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img6,
    badge: null,
  },
  {
    id: 7,
    name: {
      uz: "Qishki yotoq to'plami — Qalin material",
      ru: 'Зимний комплект — Плотный материал',
      en: 'Winter bed set — Thick material',
      fr: 'Parure d\'hiver — Tissu épais',
      tr: 'Kışlık nevresim takımı — Kalın malzeme',
    },
    description: {
      uz: "Sovuq kunlarda issiq saqlaydigan, qalin va chidamli yotoq anjomlari.",
      ru: 'Плотное и прочное постельное белье, сохраняющее тепло в холодные дни.',
      en: 'Thick and durable bed linen that keeps you warm on cold days.',
      fr: 'Linge de lit épais et résistant qui vous garde au chaud par temps froid.',
      tr: 'Soğuk günlerde sıcak tutan, kalın ve dayanıklı nevresim takımı.',
    },
    price: 450000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img7,
    badge: 'new',
  },
  {
    id: 8,
    name: {
      uz: "Bolalar yotoq to'plami",
      ru: 'Детское постельное белье',
      en: 'Kids bed linen set',
      fr: 'Parure de lit pour enfants',
      tr: 'Çocuk nevresim takımı',
    },
    description: {
      uz: "Bolalar uchun xavfsiz, antiallergik va qiziqarli dizayndagi to'plam.",
      ru: 'Безопасный антиаллергенный комплект с интересным дизайном для детей.',
      en: 'Safe, anti-allergic set with a fun design for children.',
      fr: 'Parure sûre, anti-allergique avec un design amusant pour les enfants.',
      tr: 'Çocuklar için güvenli, antialerjik ve eğlenceli tasarımlı takım.',
    },
    price: 250000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img8,
    badge: 'hot',
  },
  {
    id: 9,
    name: {
      uz: "Eksklyuziv to'plam — Shohona dizayn",
      ru: 'Эксклюзивный комплект — Королевский дизайн',
      en: 'Exclusive set — Royal design',
      fr: 'Parure exclusive — Design royal',
      tr: 'Özel takım — Kraliyet tasarımı',
    },
    description: {
      uz: "Hashamatli ko'rinish va yuqori darajadagi qulaylikni o'zida jamlagan eksklyuziv to'plam.",
      ru: 'Эксклюзивный комплект, сочетающий в себе роскошный вид и высокий уровень комфорта.',
      en: 'Exclusive set combining a luxurious look with a high level of comfort.',
      fr: 'Parure exclusive combinant un look luxueux avec un haut niveau de confort.',
      tr: 'Lüks bir görünüm ile yüksek konforu birleştiren özel takım.',
    },
    price: 550000,
    category: { uz: 'Yotoq anjomlari', ru: 'Постельное белье', en: 'Bed Linen', fr: 'Linge de lit', tr: 'Nevresim' },
    image: img9,
    badge: 'new',
  },
]

export default products