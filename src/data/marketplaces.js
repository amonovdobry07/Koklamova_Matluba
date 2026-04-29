import products from './products'

const marketplaces = [
  {
    slug: 'wildberries',
    name: 'Wildberries',
    color: '#CB11AB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wildberries_logo.svg/200px-Wildberries_logo.svg.png',
    description: {
      uz: "Rossiya va MDH bo'ylab eng yirik onlayn marketpleys.",
      ru: 'Крупнейший онлайн-маркетплейс в России и СНГ.',
      en: 'The largest online marketplace in Russia and CIS.',
      fr: 'Le plus grand marketplace en ligne de Russie et de la CEI.',
      tr: 'Rusya ve BDT ülkelerindeki en büyük online pazaryeri.',
    },
    storeUrl: 'https://www.wildberries.ru',
    productIds: [1, 2, 3, 6],
    productLinks: {
      1: 'https://www.wildberries.ru/catalog/0/search.aspx?search=suzani',
      2: 'https://www.wildberries.ru/catalog/0/search.aspx?search=rishton+ceramic',
      3: 'https://www.wildberries.ru/catalog/0/search.aspx?search=atlas+silk',
      6: 'https://www.wildberries.ru/catalog/0/search.aspx?search=doppi',
    },
  },
  {
    slug: 'uzum',
    name: 'Uzum Market',
    color: '#7B2FF7',
    logo: 'https://uzum.uz/static/img/uzum-logo.svg',
    description: {
      uz: "O'zbekistondagi yetakchi onlayn marketpleys va tezkor yetkazib berish.",
      ru: 'Ведущий онлайн-маркетплейс Узбекистана с быстрой доставкой.',
      en: "Uzbekistan's leading online marketplace with fast delivery.",
      fr: "Le principal marketplace en ligne d'Ouzbékistan avec livraison rapide.",
      tr: "Özbekistan'ın önde gelen online pazaryeri, hızlı teslimat.",
    },
    storeUrl: 'https://uzum.uz',
    productIds: [2, 4, 5, 6, 8],
    productLinks: {
      2: 'https://uzum.uz/uz/search?query=rishton',
      4: 'https://uzum.uz/uz/search?query=yogoch+quticha',
      5: 'https://uzum.uz/uz/search?query=choy+toplami',
      6: 'https://uzum.uz/uz/search?query=doppi',
      8: 'https://uzum.uz/uz/search?query=mis+lagan',
    },
  },
  {
    slug: 'yandex',
    name: 'Yandex Market',
    color: '#FFCC00',
    logo: 'https://yastatic.net/s3/home-static/_/37/37a02b5dc7a51abac55d8a5b6c865f0e.svg',
    description: {
      uz: "Yandex'ning O'zbekiston va Rossiyadagi mashhur marketpleysi.",
      ru: 'Популярный маркетплейс Яндекса в Узбекистане и России.',
      en: "Yandex's popular marketplace in Uzbekistan and Russia.",
      fr: "Le marketplace populaire de Yandex en Ouzbékistan et en Russie.",
      tr: "Yandex'in Özbekistan ve Rusya'daki popüler pazaryeri.",
    },
    storeUrl: 'https://market.yandex.ru',
    productIds: [1, 3, 5, 7],
    productLinks: {
      1: 'https://market.yandex.ru/search?text=suzani',
      3: 'https://market.yandex.ru/search?text=atlas+silk',
      5: 'https://market.yandex.ru/search?text=tea+set+uzbek',
      7: 'https://market.yandex.ru/search?text=samarkand+carpet',
    },
  },
  {
    slug: 'ozon',
    name: 'Ozon',
    color: '#0069FF',
    logo: 'https://ir.ozon.ru/s3/multimedia-1-h/wc1000/7224725957.jpg',
    description: {
      uz: "MDH bo'ylab keng tarqalgan yirik internet-magazin.",
      ru: 'Крупный интернет-магазин, широко представленный по СНГ.',
      en: 'Large online store widely available across the CIS.',
      fr: 'Grand magasin en ligne largement disponible dans la CEI.',
      tr: "BDT ülkelerinde yaygın büyük online mağaza.",
    },
    storeUrl: 'https://www.ozon.ru',
    productIds: [4, 5, 7, 8],
    productLinks: {
      4: 'https://www.ozon.ru/search/?text=carved+wooden+box',
      5: 'https://www.ozon.ru/search/?text=tea+set',
      7: 'https://www.ozon.ru/search/?text=carpet+samarkand',
      8: 'https://www.ozon.ru/search/?text=copper+platter',
    },
  },
]

export default marketplaces