const toys = [
    {
        id: 1,
        name: "Кошеня з руденькими вушками",
        description: "М'якеньке кошеня з пухнастими руденькими вушками готове прикрашати собою будь-який простір. Повністю ручна робота, від першої петельки до достаннього стібка голкою. Цікаве поєднання гладкої нитки та пряжі \"травичка\". Кожен наш виріб - зроблено з любов'ю та думкою про вас. Вам варто лише обрати щось з наявного на свій смак. Висота 14 см. Матеріали: акрил, бісер (очі), холофайбер (наповнення).",
        images: [
            "../assets/img/koshenya_rudenki_vushka_05.jpg",
            "../assets/img/koshenya_rudenki_vushka_01.jpg",
            "../assets/img/koshenya_rudenki_vushka_02.jpg",
            "../assets/img/koshenya_rudenki_vushka_03.jpg",
            "../assets/img/koshenya_rudenki_vushka_04.jpg"
        ],
        price: 300,
        link: '/toys/koshenya_rudenki_vushka',
        category: "Іграшки"
    },
    {
        id: 2,
        name: "Мишка біла",
        description: "Біленька, плетена спицями мишка в наявності. Неймовірно мила та м'якенька. Має вишиті носик і очі з біленькими намистинками. Розмір: 12/7см.",
        images: [
            "../assets/img/myshoigrashka_bila_01.jpg",
            "../assets/img/myshoigrashka_bila_02.jpg",
            "../assets/img/myshoigrashka_bila_03.jpg",
            "../assets/img/myshoigrashka_bila_04.jpg"
        ],
        price: 100,
        link: '/toys/myshka_bila',
        category: "Іграшки"
    },
    {
        id: 3,
        name: "Мишка темно-сіра",
        description: "Іграшка плетена вручну з м'якої меланжевої пряжі, пухкенька та приємна на дотик. Матеріали: акрил, холофайбер (наповнення), намистинки (очі). Розмір: 14/9см.",
        images: [
            "../assets/img/myshoigrashka_temno-sira_01.jpg",
            "../assets/img/myshoigrashka_temno-sira_02.jpg",
            "../assets/img/myshoigrashka_temno-sira_03.jpg",
            "../assets/img/myshoigrashka_temno-sira_04.jpg",
            "../assets/img/myshoigrashka_temno-sira_05.jpg"
        ],
        price: 100,
        link: '/toys/myshka_temno_sira',
        category: "Іграшки"
    },
    {
        id: 4,
        name: "Мишка сіра",
        description: "Сіренька, плетена спицями мишка в наявності. Неймовірно мила та м'якенька. Має вишиті носик і очі з біленькими намистинками. Розмір: 12/7см.",
        images: [
            "../assets/img/myshoigrashka_sira_01.jpg",
            "../assets/img/myshoigrashka_sira_02.jpg",
            "../assets/img/myshoigrashka_sira_03.jpg",
            "../assets/img/myshoigrashka_sira_04.jpg",
            "../assets/img/myshoigrashka_sira_05.jpg"
        ],
        price: 100,
        link: '/toys/myshka_sira',
        category: "Іграшки"
    },
    {
        id: 5,
        name: "Котик бежевий",
        description: "Бежевий котик і його рожевий носик готові їхати до вас і тішити своєю м'якістю та рукотворністю. Розміри: ширина 13см, довжина 19см.",
        images: [
            "../assets/img/bezheva_kotoigrashka_01.jpg",
            "../assets/img/bezheva_kotoigrashka_02.jpg",
            "../assets/img/bezheva_kotoigrashka_03.jpg",
            "../assets/img/bezheva_kotoigrashka_04.jpg",
            "../assets/img/bezheva_kotoigrashka_05.jpg"
        ],
        price: 250,
        link: '/toys/kotyk_bezhevyi',
        category: "Іграшки"
    },
    {
        id: 6,
        name: "Котик блакитноокий",
        description: "Пухнастий та блакитноокий - чи це не головні вимоги до котічки? Іграшку поністю плетено та пошито вручну, ретельно вишито кожен пальчик. Тож, сподіваюсь, вона стане окрасою вашоно дому. Висота іграшки - 29см.",
        images: [
            "../assets/img/bila_naturalistychna_01.jpg",
            "../assets/img/bila_naturalistychna_02.jpg",
            "../assets/img/bila_naturalistychna_03.jpg",
            "../assets/img/bila_naturalistychna_04.jpg",
            "../assets/img/bila_naturalistychna_05.jpg",
            "../assets/img/bila_naturalistychna_06.jpg",
            "../assets/img/bila_naturalistychna_07.jpg",
            "../assets/img/bila_naturalistychna_08.jpg",
            "../assets/img/bila_naturalistychna_09.jpg",
            "../assets/img/bila_naturalistychna_10.jpg",
        ],
        price: 1000,
        link: '/toys/kotyk_blakytnookyi',
        category: "Іграшки"
    },
    {
        id: 7,
        name: "Мишка руда",
        description: "Повністю ручна робота, від мотка пряжі до останнього стібка. М'якенька, приємна на дотик іграшка стане чудовим подарунком близькій людині або навіть собі. Наповнення - холофайбер. Нитки - акрил. Розміри: 14/8см.",
        images: [
            "../assets/img/kryska_rudisha_01.jpg",
            "../assets/img/kryska_rudisha_02.jpg",
            "../assets/img/kryska_rudisha_03.jpg",
            "../assets/img/kryska_rudisha_04.jpg"
        ],
        price: 300,
        link: '/toys/myshka_ruda',
        category: "Іграшки"
    },
    {
        id: 8,
        name: "Котик білий",
        description: "Біленький та ніжний, як пелюстки травневого цвіту! Біленький меланжевий котик і його рожевий носик готові їхати до вас і тішити своєю м'якістю та рукотворністю. Розміри: ширина 13см, довжина 19см.",
        images: [
            "../assets/img/kotoigrashka_bilenka_01.jpg",
            "../assets/img/kotoigrashka_bilenka_02.jpg",
            "../assets/img/kotoigrashka_bilenka_03.jpg",
            "../assets/img/kotoigrashka_bilenka_04.jpg",
            "../assets/img/kotoigrashka_bilenka_05.jpg",
            "../assets/img/kotoigrashka_bilenka_06.jpg",
            "../assets/img/kotoigrashka_bilenka_07.jpg"
        ],
        price: 250,
        link: '/toys/kotyk_bilyi',
        category: "Іграшки"
    },
    {
        id: 9,
        name: "Котик сірий",
        description: "Сіренький, м'якенький та посміхається очима. Іграшка котик, плетений спицями з акрилової пряжі, має наповнення холлофайбер та вишиту мордочку. Готовий прикрашати собою вашу оселю. Розмір: 20/15см.",
        images: [
            "../assets/img/kotoigrashka_sirenka_01.jpg",
            "../assets/img/kotoigrashka_sirenka_02.jpg",
            "../assets/img/kotoigrashka_sirenka_03.jpg",
            "../assets/img/kotoigrashka_sirenka_04.jpg",
            "../assets/img/kotoigrashka_sirenka_05.jpg",
            "../assets/img/kotoigrashka_sirenka_06.jpg"
        ],
        price: 250,
        link: '/toys/kotyk_siryi',
        category: "Іграшки"
    },
    {
        id: 10,
        name: "Мишка букльована сіра",
        description: "Повністю ручна робота, від мотка пряжі до останнього стібка. М'якенька, приємна на дотик іграшка стане чудовим подарунком близькій людині або навіть собі. Наповнення - холофайбер. Нитки - акрил. Розміри: 14/8см.",
        images: [
            "../assets/img/kryska_sira_01.jpg",
            "../assets/img/kryska_sira_02.jpg",
            "../assets/img/kryska_sira_03.jpg",
            "../assets/img/kryska_sira_04.jpg",
            "../assets/img/kryska_sira_05.jpg"
        ],
        price: 300,
        link: '/toys/myshka_bukliovana_sira',
        category: "Іграшки"
    },
    {
        id: 11,
        name: "Кошенятко з сердечком",
        description: "Іграшку плетено з неймовірно приємної на дотик та цікавої на вигляд пухнастої пряжі. Котик має м'якенькі рухомі лапки та хвостик і вишиту вручну мордочку. Сердечко за бажанням можна поміняти на рожеве чи прибрати. Розмір 13/7 см. Матеріали: акрил, бісер (очі), холофайбер (наповнення).",
        images: [
            "../assets/img/kotyky_02.jpg",
            "../assets/img/kotyky_03.jpg"
        ],
        price: 250,
        link: '/toys/koshenyatko_serdechko',
        category: "Іграшки"
    }
]

export default toys