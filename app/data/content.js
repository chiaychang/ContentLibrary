// ===============================================================================
// DATA
// Below data will hold all of the possible content.
// ===============================================================================

var content = [
  {
    category: "generic",
    type: "title",
    selling_points: "popular",
    customizable: true,
    en_us: "Top selling {item} in {country}",
    ru_ru: "Лучшие {item} в {country}",
    es_es: "Los más vendidos en {item} en {country}",
    pt_br: "O mais vendido em {item} em {country}",
    fr_fr: "Les plus vendus dans {item} en {country}",
    url:"https://i.imgur.com/M4CL9jt.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "popular",
    customizable: true,
    en_us: "Most popular {item} in {country}",
    ru_ru: "Самые популярные {item} в {country}",
    es_es: "Los más populares en {item} en {country}",
    pt_br: "O mais popular em {item} em {country}",
    fr_fr: "Les favoris dans {item} en {country}",
    url:"https://i.imgur.com/we59lsx.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "popular",
    customizable: true,
    en_us: "Most loved {item} in {country}",
    ru_ru: "Любимые {item} в {country}",
    es_es: "Los más deseados en {item}  en {country}",
    pt_br: "O mais desejado em {item} em {country}",
    fr_fr: "Les préférés dans {item} en {country}",
    url:"https://i.imgur.com/iP8igl7.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "popular",
    customizable: true,
    en_us: "Popular {item} in {country}",
    ru_ru: "Интересные {item} в {country}",
    es_es: "Artículos populares en {item} en {country}",
    pt_br: "Artigos populares em {item} em {country}",
    fr_fr: "En haute demande dans {item} en {country}",
    url:"https://i.imgur.com/A1PqA8x.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "popular",
    customizable: true,
    en_us: "Top selling {item}",
    ru_ru: "Лучшие {item}",
    es_es: "Los más vendidos en {item}",
    pt_br: "O mais vendido em {item}",
    fr_fr: "Les plus vendus dans {item}",
    url:"https://i.imgur.com/A1PqA8x.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "popular",
    customizable: true,
    en_us: "Most popular {item}",
    ru_ru: "Самые популярные {item}",
    es_es: "Los más populares en {item}",
    pt_br: "O mais popular em {item}",
    fr_fr: "Les favoris dans {item}",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "popular",
    customizable: true,
    en_us: "Most loved {item}",
    ru_ru: "Любимые {item}",
    es_es: "Los más deseados en {item}",
    pt_br: "O mais desejado em {item}",
    fr_fr: "Les préférés dans {item}",
    url:"https://i.imgur.com/QEVzStS.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "popular",
    customizable: true,
    en_us: "Popular {item}",
    ru_ru: "Интересные {item}",
    es_es: "Artículos populares en {item}",
    pt_br: "Artigos populares em {item}",
    fr_fr: "En haute demande dans {item}",
    url:"https://i.imgur.com/we59lsx.jpg"
  },
  {
    category: "generic",
    type: "push,title",
    selling_points: "new",
    customizable: true,
    en_us: "New arrivals from {brandname}",
    ru_ru: "Новинки сезона от {brandname}",
    es_es: "Novedades de temporada de {brandname}",
    pt_br: "Fique de olho nas novidades da {brandname}",
    fr_fr: "Les nouveautés de la saison par {brandname}",
    url:"https://i.imgur.com/QEVzStS.jpg"
  },
  {
    category: "generic",
    type: "push,title",
    selling_points: "reliable",
    customizable: true,
    en_us: "Reliable goods from {brandname}",
    ru_ru: "Надёжные товары от {brandname}",
    es_es: "Accesorios de {brandname}",
    pt_br: "Sua viagem mais tranquila com a {brandname}",
    fr_fr: "Personnalisez votre véhicule avec {brandname}",
    url:"https://i.imgur.com/QEVzStS.jpg"
  },
  {
    category: "generic",
    type: "push,title",
    selling_points: "new",
    customizable: true,
    en_us: "New from {brandname}",
    ru_ru: "Лучшие предложения {brandname}",
    es_es: "Déjate mimar por {brandname}",
    pt_br: "Cuide de você com os  produtos da {brandname}",
    fr_fr: "Prenez soin de vous avec {brandname}",
    url:"https://i.imgur.com/we59lsx.jpg"
  },
  {
    category: "electronics",
    type: "push,title",
    selling_points: "popular",
    customizable: true,
    en_us: "The best gadgets from {brandname}",
    ru_ru: "Лучшие гаджеты от {brandname}",
    es_es: "Los mejores dispositivos de {brandname}",
    pt_br: "Tecnologia avançada com a {brandname}",
    fr_fr: "Les meilleurs gadgets de {brandname}",
    url:"https://i.imgur.com/T55Vk0L.jpg"
  },
  {
    category: "electronics",
    type: "push,title",
    selling_points: "new",
    customizable: true,
    en_us: "New from {brandname}",
    ru_ru: "Новинки от {brandname}",
    es_es: "Novedades de {brandname}",
    pt_br: "A {brandname} te ajuda a escolher o próximo penteado!",
    fr_fr: "Les nouveautés de {brandname}",
    url:"https://i.imgur.com/CyOr52v.jpg"
  },
  {
    category: "home",
    type: "push,title",
    selling_points: "new",
    customizable: true,
    en_us: "Revamp your home with items from {brandname}",
    ru_ru: "Свежие решения от {brandname}",
    es_es: "Actualiza tu entorno con {brandname}",
    pt_br: "A casa dos seus sonhos com a {brandname}",
    fr_fr: "Rafraîchissez votre chez-vous avec {brandname}",
    url:"https://i.imgur.com/8M4x1Le.jpg"
  },
  {
    category: "automobile",
    type: "push,title",
    selling_points: "reliable",
    customizable: true,
    en_us: "Reliable models from {brandname}",
    ru_ru: "Надёжные модели от {brandname}",
    es_es: "Diseños eficientes de {brandname}",
    pt_br: "A {brandname} deixa sua vida mais fácil",
    fr_fr: "Des appareils fiables par {brandname}",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "fashion",
    type: "push,title",
    selling_points: "style",
    customizable: true,
    en_us: "Stylish items from {brandname}",
    ru_ru: "Стильные аксессуары от  {brandname}",
    es_es: "Complementos clave de {brandname}",
    pt_br: "A {brandname} deixa seu look completo",
    fr_fr: "Personnalisez votre look avec {brandname}",
    url:"https://i.imgur.com/M4CL9jt.jpg"
  },
  {
    category: "electronics",
    type: "push,title",
    selling_points: "style",
    customizable: true,
    en_us: "Lightning equipment from {brandname}",
    ru_ru: "Яркие штучки от {brandname}",
    es_es: "Soluciones de iluminación de {brandname}",
    pt_br: "Ilumine sua casa com a {brandname}",
    fr_fr: "L'éclairage dernier cri par {brandname}",
    url:"https://i.imgur.com/T55Vk0L.jpg"
  },
  {
    category: "travel",
    type: "push,title",
    selling_points: "style",
    customizable: true,
    en_us: "Trendy travel companions from {brandname}",
    ru_ru: "Трендовые модели от {brandname}",
    es_es: "Imprescindibles de {brandname}",
    pt_br: "Os indispensáveis da {brandname}",
    fr_fr: "Les modèles en vogue de {brandname}",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "automobile",
    type: "push,title",
    selling_points: "new",
    customizable: true,
    en_us: "Modern models from {brandname}",
    ru_ru: "Лучшие модели от {brandname}",
    es_es: "La tecnología más actual de {brandname}",
    pt_br: "Vida tecnológica com a {brandname}",
    fr_fr: "Les derniers modèles de {brandname}",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "automobile",
    type: "push,title",
    selling_points: "reliable",
    customizable: true,
    en_us: "Reliable models from {brandname}",
    ru_ru: "Надёжные модели от {brandname}",
    es_es: "Sistemas de seguridad de {brandname}",
    pt_br: "Fique sempre de olho com a {brandname}",
    fr_fr: "Gardez l'esprit tranquille avec {brandname}",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "fashion",
    type: "push,title",
    selling_points: "style",
    customizable: true,
    en_us: "Trendy styles from {brandname}",
    ru_ru: "Трендовые модели от {brandname}",
    es_es: "Tendencias en calzado de {brandname}",
    pt_br: "Encontre seu par ideal na {brandname}",
    fr_fr: "Les modèles tendances de {brandname}",
    url:"https://i.imgur.com/7fMy5H0.jpg"
  },
  {
    category: "fitness",
    type: "push,title",
    selling_points: "health",
    customizable: true,
    en_us: "A healthy lifestyle with {brandname}",
    ru_ru: "Здоровый образ жизни с {brandname}",
    es_es: "Un estilo de vida activo con {brandname}",
    pt_br: "Movimente-se com a {brandname}",
    fr_fr: "Vivez votre passion avec {brandname}",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "home",
    type: "push,title",
    selling_points: "reliable",
    customizable: true,
    en_us: "Everything you need for repairs from {brandname}",
    ru_ru: "Чини что угодно с {brandname}",
    es_es: "Repáralo todo con {brandname}",
    pt_br: "Mãos à obra com a {brandname}",
    fr_fr: "Rénovez sans vous ruiner avec {brandname}",
    url:"https://i.imgur.com/8M4x1Le.jpg"
  },
  {
    category: "generic",
    type: "push,title",
    selling_points: "price",
    customizable: true,
    en_us: "Best deals from {brandname}",
    ru_ru: "Интересные новинки от {brandname}",
    es_es: "Juguetes que inspiran de {brandname}",
    pt_br: "Hora de se divertir com a {brandname}",
    fr_fr: "Amusez-vous avec {brandname}",
    url:"https://i.imgur.com/iP8igl7.jpg"
  },
  {
    category: "fashion",
    type: "push,title",
    selling_points: "style",
    customizable: true,
    en_us: "Stylish designs from {brandname}",
    ru_ru: "Актуальные модели от {brandname}",
    es_es: "Modelos de que se adaptan a tu estilo {brandname}",
    pt_br: "A {brandname} tem um relógio com seu estilo",
    fr_fr: "Des modèles élégants par {brandname}",
    url: "https://i.imgur.com/9xcLfiw.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "new",
    customizable: false,
    en_us: "NEW ARRIVALS",
    ru_ru: "НОВЫЕ ПОСТУПЛЕНИЯ",
    es_es: "NOVEDADES",
    pt_br: "NOVIDADES",
    fr_fr: "NOUVEAUTÉS",
    url:"https://i.imgur.com/RpqAvDo.jpg"
  },
  {
    category: "fashion",
    type: "pus",
    selling_points: "seasonal",
    customizable: false,
    en_us: "Upgrade your winter wardrobe",
    ru_ru: "Пора обновить зимний гардероб",
    es_es: "Mejora tu armario de invierno",
    pt_br: "Fique quentinho nesse inverno",
    fr_fr: "Apprêtez-vous à passer l'hiver",
    url:"https://i.imgur.com/7fMy5H0.jpg"
  },
  {
    category: "fashion",
    type: "subtitle,title",
    selling_points: "seasonal",
    customizable: false,
    en_us: "Spring into a new look",
    ru_ru: "Стильные весенние образы на каждый день",
    es_es: "Renuévate",
    pt_br: "Deixe a beleza das flores invadir o seu look",
    fr_fr: "Un vent de printemps souffle sur votre look",
    url:"https://i.imgur.com/9xcLfiw.jpg"
  },
  {
    category: "fashion",
    type: "subtitle",
    selling_points: "seasonal",
    customizable: false,
    en_us: "Refresh your summer style",
    ru_ru: "Добавьте красок в свой летний гардероб",
    es_es: "Actualiza tu estilo veraniego",
    pt_br: "Mergulhe na coleção de verão",
    fr_fr: "Pour un nouveau look estival",
    url:"https://i.imgur.com/RpqAvDo.jpg"
  },
  {
    category: "fashion",
    type: "subtitle",
    selling_points: "seasonal",
    customizable: false,
    en_us: "Upgrade your look for fall",
    ru_ru: "Бросьте вызов осенней хандре",
    es_es: "Mejora tu imagen para el otoño",
    pt_br: "Prepare-se para os dias mais frios",
    fr_fr: "Renouvelez votre garde-robe pour cet automne",
    url:"https://i.imgur.com/7fMy5H0.jpg"
  },
  {
    category: "fashion",
    type: "subtitle",
    selling_points: "new",
    customizable: false,
    en_us: "Shop the latest trends",
    ru_ru: "Оденьтесь по последней моде",
    es_es: "Compra las últimas tendencias",
    pt_br: "Novidades selecionadas para você",
    fr_fr: "Les dernières tendances rien que pour vous",
    url:"https://i.imgur.com/CyOr52v.jpg"
  },
  {
    category: "fashion",
    type: "subtitle",
    selling_points: "new",
    customizable: false,
    en_us: "Get the latest fashion trends",
    ru_ru: "Последние тренды из мира моды",
    es_es: "Consigue las últimas tendencias modernas",
    pt_br: "Garanta as últimas tendências",
    fr_fr: "Profitez des dernières tendances mode",
    url:"https://i.imgur.com/9xcLfiw.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "price",
    customizable: false,
    en_us: "HOT SALE",
    ru_ru: "ГОРЯЧИЕ СКИДКИ",
    es_es: "OFERTA",
    pt_br: "SUPER SALDÃO",
    fr_fr: "PROMOS DE FOLIE",
    url:"https://i.imgur.com/orZQbpp.jpg"
  },
  {
    category: "generic",
    type: "CTA",
    selling_points: "price",
    customizable: false,
    en_us: "Get to shopping!",
    ru_ru: "Пора на шоппинг!",
    es_es: "¡Ve de compras!",
    pt_br: "Aproveite!",
    fr_fr: "Profitez-en",
    url:"https://i.imgur.com/QEVzStS.jpg"
  },
  {
    category: "generic",
    type: "CTA",
    selling_points: "price",
    customizable: false,
    en_us: "Buy more, save more",
    ru_ru: "Больше покупок, больше экономии",
    es_es: "Compra más, ahorra más",
    pt_br: "Economize ainda mais!",
    fr_fr: "Achetez plus, dépensez moins",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "price",
    customizable: false,
    en_us: "CLEARANCE SALE",
    ru_ru: "АКЦИЯ «ЛИКВИДАЦИЯ»",
    es_es: "LIQUIDACIÓN",
    pt_br: "LIQUIDAÇÃO TOTAL",
    fr_fr: "LIQUIDATION TOTALE",
    url:"https://i.imgur.com/orZQbpp.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "seasonal",
    customizable: false,
    en_us: "The last sale of the year this spring/ summer/ fall/ winter",
    ru_ru: "Последняя распродажа этого года / этой весны / этого лета / этой осени / этой зимы",
    es_es: "La última rebaja del año este/a primavera/ verano/ otoño/ invierno",
    pt_br: "Últimas ofertas do ano/ dessa primavera/ desse outono/ desse verão/ desse inverno",
    fr_fr: "Les dernières promos de l'année / du printemps / de l'été / d'automne / d'hiver",
    url:"https://i.imgur.com/kikNLEk.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "seasonal",
    customizable: false,
    en_us: "The last sale of the year",
    ru_ru: "Последняя распродажа этого года",
    es_es: "La última rebaja del año",
    pt_br: "Últimas ofertas do ano",
    fr_fr: "Les dernières promos de l'année",
    url:"https://i.imgur.com/A1PqA8x.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "seasonal",
    customizable: false,
    en_us: "The last sale of the spring",
    ru_ru: "Последняя распродажа этой весны",
    es_es: "La última rebaja de la primavera",
    pt_br: "Últimas ofertas dessa primavera",
    fr_fr: "'Les dernières promos du printemps",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "seasonal",
    customizable: false,
    en_us: "The last sale of the fall",
    ru_ru: "Последняя распродажа этой осени",
    es_es: "La última rebaja del otoño",
    pt_br: "Últimas ofertas desse outono",
    fr_fr: "Les dernières promos d'automne",
    url:"https://i.imgur.com/tCriO4R.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "seasonal",
    customizable: false,
    en_us: "The last sale of the summer",
    ru_ru: "Последняя распродажа этого лета",
    es_es: "La última rebaja del verano",
    pt_br: "Últimas ofertas desse verão",
    fr_fr: "Les dernières promos de l'été",
    url:"https://i.imgur.com/kikNLEk.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "seasonal",
    customizable: false,
    en_us: "The last sale of the winter",
    ru_ru: "Последняя распродажа этой зимы",
    es_es: "La última rebaja del invierno",
    pt_br: "Últimas ofertas desse inverno",
    fr_fr: "Les dernières promos d'hiver",
    url:"https://i.imgur.com/X8BzK8D.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "price",
    customizable: false,
    en_us: "Don't miss this chance to stock up",
    ru_ru: "Не упустите шанс сэкономить по-крупному!",
    es_es: "No pierdas la oportunidad de abastecerte",
    pt_br: "Não perca essa chance de economizar!",
    fr_fr: "Ne ratez pas votre change de faire le plein!",
    url:"https://i.imgur.com/QEVzStS.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "LEVEL-UP YOUR LOOK",
    ru_ru: "ВРЕМЯ ЧТО-ТО ИЗМЕНИТЬ",
    es_es: "Refresca tu estilo",
    pt_br: "MENOS É MAIS",
    fr_fr: "UN LOOK PLEIN DE FRAICHEUR",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "STYLE FOR THE STREETS",
    ru_ru: "СТИЛЬ ГОРОДСКИХ УЛИЦ",
    es_es: "Street style",
    pt_br: "ESTILO URBANO",
    fr_fr: "VOTRE STYLE URBAIN",
    url:"https://i.imgur.com/RpqAvDo.jpg"
  },
  {
    category: "travel",
    type: "title",
    selling_points: "health",
    customizable: false,
    en_us: "JOURNEY TO THE EAST",
    ru_ru: "В СТИЛЕ ДРАКОНА",
    es_es: "Estilo asiático",
    pt_br: "EXTREMO ORIENTE",
    fr_fr: "UN STYLE VENU D'EXTRÊME-ORIENT",
    url:"https://i.imgur.com/bsz7Kp3.jpg"
  },
  {
    category: "fitness",
    type: "title",
    selling_points: "health",
    customizable: false,
    en_us: "GEAR UP FOR ACTION",
    ru_ru: "КРАСИВ В СТРОЮ, СИЛЁН В БОЮ",
    es_es: "Estilo militar",
    pt_br: "O PODER DO ESTILO MILITAR",
    fr_fr: "UN LOOK AU GARDE-À-VOUS",
    url:"https://i.imgur.com/bsz7Kp3.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "new",
    customizable: false,
    en_us: "Upgrade your wardrobe with new men's casual fashion",
    ru_ru: "Пополни свой гардероб последними новинками",
    es_es: "Look cómodo y casual",
    pt_br: "Para quem busca o prático versátil e confortável",
    fr_fr: "Refaites-vous une garde-robe confortable et décontractée",
    url:"https://i.imgur.com/tCriO4R.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Dress like a bad boy in tough street fashion",
    ru_ru: "Не просто одежда, но образ жизни",
    es_es: "Muestra tu personalidad",
    pt_br: "É mais do que moda, é personalidade",
    fr_fr: "Plus qu'un look, un style de vie",
    url:"https://i.imgur.com/X8BzK8D.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "popular",
    customizable: false,
    en_us: "Get down to business with handsome-looking men's formal wear",
    ru_ru: "Ваш костюм скажет всё за вас",
    es_es: "Moda para destacar",
    pt_br: "O primeiro passo é escolher o terno",
    fr_fr: "L'arsenal parfait pour les hommes d'affaires",
    url:"https://i.imgur.com/tCriO4R.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Add a touch of Asian flair to your look",
    ru_ru: "Модные тренды загадочного востока",
    es_es: "Moda desde el lejano oriente",
    pt_br: "Um toque asiático para o seu visual",
    fr_fr: "Ajoutez une touche asiatique à votre look",
    url:"https://i.imgur.com/imGKDK6.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Get  prepared with Men's military fashion",
    ru_ru: "Одежда в стиле милитари для настоящих мужчин",
    es_es: "Gana la batalla a tu armario",
    pt_br: "Uma das tendências de 2018",
    fr_fr: "Sortez vos treillis kaki pour 2018",
    url:"https://i.imgur.com/bsz7Kp3.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "popular",
    customizable: false,
    en_us: "POWERFUL CLOTHES FOR POWERFUL WOMEN",
    ru_ru: "КРАСИВА И УВЕРЕНА В СЕБЕ",
    es_es: "Looks de oficina",
    pt_br: "VAI TRABALHAR?",
    fr_fr: "ÉLÉGANTE ET PLEINE D'ASSURANCE",
    url:"https://i.imgur.com/8E45SgB.jpg"
  },
  {
    category: "generic",
    type: "title",
    selling_points: "seasonal",
    customizable: false,
    en_us: "IT'S GETTING HOT IN HERE",
    ru_ru: "ЖЕНСКИЕ ШТУЧКИ",
    es_es: "Muy íntimo",
    pt_br: "SEGREDOS DE MULHER",
    fr_fr: "DES DESSOUS FAITS POUR VOUS",
    url:"https://i.imgur.com/OrZrMX4.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "FIT FOR A MODEL",
    ru_ru: "ДЕВУШКА С ОБЛОЖКИ",
    es_es: "Look de pasarela",
    pt_br: "ESTILO FASHIONISTA",
    fr_fr: "FAITES VOTRE PROPRE DÉFILÉ",
    url:"https://i.imgur.com/gl9Yk9f.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "GOT THE IT-LOOK?",
    ru_ru: "ВЫРАЗИ СЕБЯ",
    es_es: "Tendencia ´hip & young´",
    pt_br: "SEJA VOCÊ MESMA",
    fr_fr: "JEUNE ET TENADANCE",
    url:"https://i.imgur.com/gl9Yk9f.jpg",
    url:"https://i.imgur.com/hOdNAJ3.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "GOOD BOHO VIBES",
    ru_ru: "МОТИВ ТВОЕЙ СВОБОДЫ",
    es_es: "Boho Chic!",
    pt_br: "PAZ E AMOR",
    fr_fr: "UN VENT DE BOHÈME",
    url:"https://i.imgur.com/RpqAvDo.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "KEEP IT SIMPLE",
    ru_ru: "ПРОСТО СУПЕР",
    es_es: "Básicos imprescindibles",
    pt_br: "SIMPLESMENTE CHIQUE",
    fr_fr: "SIMPLE ET DÉCONTRACTÉE",
    url:"https://i.imgur.com/hOdNAJ3.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "DARE TO BE DIFFERENT",
    ru_ru: "НАЙДИ СВОЙ СТИЛЬ",
    es_es: "Outfits únicos",
    pt_br: "ENCONTRE O SEU ESTILO",
    fr_fr: "FAITES LA DIFFÉRENCE",
    url:"https://i.imgur.com/QEVzStS.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Show them who's boss in trendy Women's business attire",
    ru_ru: "Добавь шика в офисные будни",
    es_es: "Formal y fabulosa en cualquier situación",
    pt_br: "Ideias para ficar elegante e arrasar",
    fr_fr: "Des articles chics et raffinés pour des femmes d'affaires",
    url:"https://i.imgur.com/hOdNAJ3.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "It's gettin' steamy in here with this collection of women's intimates",
    ru_ru: "Игривое нижнее бельё для себя любимой",
    es_es: "Ropa interior sexy  y cómoda",
    pt_br: "Porque você conhece suas curvas como ninguém",
    fr_fr: "Une lingerie qui épousera vos courbes",
    url:"https://i.imgur.com/RpqAvDo.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Strut like you're on the runway in these high-fashion items",
    ru_ru: "Одежда, которая превратит тебя в королеву",
    es_es: "Siéntete modelo cada día",
    pt_br: "Seu #lookdodia sempre impecável!",
    fr_fr: "Ces articles de mode feront de vous un vrai mannequin",
    url:"https://i.imgur.com/gl9Yk9f.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Show 'em the meaning of cool in these trendy fashion styles",
    ru_ru: "Нескучная одежда для нескучной тебя",
    es_es: "Estilo urbano para el día a día",
    pt_br: "Vista seu próprio estilo e arrase",
    fr_fr: "Tous les articles pour un look urbain et décontracté",
    url:"https://i.imgur.com/RpqAvDo.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Hang loose in trendy boho fashion",
    ru_ru: "Лучшая одежда в стиле бохо-шик",
    es_es: "A la espera de la primavera",
    pt_br: "Inspirações para entrar na vibe do Boho Chic",
    fr_fr: "Trouvez l'harmonie parfaite pour la nouvelle saison",
    url:"https://i.imgur.com/OrZrMX4.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Throw on something simple for the ultimate chic look",
    ru_ru: "Стильные вещи для повседневной жизни",
    es_es: "Moda para el día a día",
    pt_br: "Moda casual para todos os dias",
    fr_fr: "Pour un style avec qualité et simplicité",
    url:"https://i.imgur.com/OrZrMX4.jpg"
  },
  {
    category: "fashion",
    type: "title",
    selling_points: "style",
    customizable: false,
    en_us: "Make a bold statement with a piece of unique fashion",
    ru_ru: "Трендовые новинки грядущего сезона",
    es_es: "Las nuevas tendencias de la temporada",
    pt_br: "Nos lançamentos da Coleção 2018",
    fr_fr: "Un style unique comme vous ne l'avez jamais vu",
    url:"https://i.imgur.com/gl9Yk9f.jpg"
  }
];

// Here we export the array. This makes it accessible to other files using require.
module.exports = content;
