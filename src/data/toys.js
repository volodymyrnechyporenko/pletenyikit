const toys = [
    {
        id: 1,
        name: 'Мишка біла',
        description: "Біленька, плетена спицями мишка в наявності. Неймовірно мила та м'якенька.",
        materials: 'Має вишиті носик і очі з біленькими намистинками.',
        dimensions: 'Розмір: 12/7см.',
        images: [
            'myshoigrashka_bila_01.jpg',
            'myshoigrashka_bila_02.jpg',
            'myshoigrashka_bila_03.jpg',
            'myshoigrashka_bila_04.jpg',
        ],
        price: 100,
        link: 'myshka_bila',
        category: 'Іграшки',
        similar: [
            {
                img: 'myshoigrashka_temno-sira_01.jpg',
                price: 100,
                link: 'myshka_temno_sira',
            },
        ],
    },
    {
        id: 2,
        name: 'Мишка темно-сіра',
        description: "Іграшка плетена вручну з м'якої меланжевої пряжі, пухкенька та приємна на дотик.",
        materials: 'Матеріали: акрил, холофайбер (наповнення), намистинки (очі).',
        dimensions: 'Розмір: 14/9см.',
        images: [
            'myshoigrashka_temno-sira_01.jpg',
            'myshoigrashka_temno-sira_02.jpg',
            'myshoigrashka_temno-sira_03.jpg',
            'myshoigrashka_temno-sira_04.jpg',
            'myshoigrashka_temno-sira_05.jpg',
        ],
        price: 100,
        link: 'myshka_temno_sira',
        category: 'Іграшки',
        similar: [
            {
                img: 'myshoigrashka_bila_01.jpg',
                price: 100,
                link: 'myshka_bila',
            },
        ],
    },
    {
        id: 4,
        name: 'Котик бежевий',
        description: "Бежевий котик і його рожевий носик готові їхати до вас і тішити своєю м'якістю та рукотворністю.",
        dimensions: 'Розміри: ширина 13см, довжина 19см.',
        images: [
            'bezheva_kotoigrashka_01.jpg',
            'bezheva_kotoigrashka_02.jpg',
            'bezheva_kotoigrashka_03.jpg',
            'bezheva_kotoigrashka_04.jpg',
            'bezheva_kotoigrashka_05.jpg',
        ],
        price: 250,
        link: 'kotyk_bezhevyi',
        category: 'Іграшки',
        similar: [
            {
                img: 'kotoigrashka_sirenka_01.jpg',
                price: 250,
                link: 'kotyk_siryi',
            },
            {
                img: 'koshenya-chorno-sire-01.jpg',
                price: 250,
                link: 'koshenya-chorno-sire',
            },
        ],
    },
    {
        id: 8,
        name: 'Котик сірий',
        description: "Сіренький, м'якенький та посміхається очима. Готовий прикрашати собою вашу оселю.",
        materials: 'Іграшка котик, плетений спицями з акрилової пряжі, має наповнення холлофайбер та вишиту мордочку.',
        dimensions: 'Розмір: 20/15см.',
        images: [
            'kotoigrashka_sirenka_01.jpg',
            'kotoigrashka_sirenka_02.jpg',
            'kotoigrashka_sirenka_03.jpg',
            'kotoigrashka_sirenka_04.jpg',
            'kotoigrashka_sirenka_05.jpg',
            'kotoigrashka_sirenka_06.jpg',
        ],
        price: 250,
        link: 'kotyk_siryi',
        category: 'Іграшки',
        similar: [
            {
                img: 'bezheva_kotoigrashka_01.jpg',
                price: 250,
                link: 'kotyk_bezhevyi',
            },
            {
                img: 'koshenya-chorno-sire-01.jpg',
                price: 250,
                link: 'koshenya-chorno-sire',
            },
        ],
    },
    {
        id: 9,
        name: 'Мишка букльована сіра',
        description:
            "Повністю ручна робота, від мотка пряжі до останнього стібка. М'якенька, приємна на дотик іграшка стане чудовим подарунком близькій людині або навіть собі.",
        materials: 'Наповнення - холофайбер. Нитки - акрил.',
        dimensions: 'Розміри: 14/8см.',
        images: [
            'kryska_sira_01.jpg',
            'kryska_sira_02.jpg',
            'kryska_sira_03.jpg',
            'kryska_sira_04.jpg',
            'kryska_sira_05.jpg',
        ],
        price: 300,
        link: 'myshka_bukliovana_sira',
        category: 'Іграшки',
    },
    {
        id: 10,
        name: 'Кошенятко з сердечком',
        description:
            "Іграшку плетено з неймовірно приємної на дотик та цікавої на вигляд пухнастої пряжі. Котик має м'якенькі рухомі лапки та хвостик і вишиту вручну мордочку. Сердечко за бажанням можна поміняти на рожеве чи прибрати.",
        materials: 'Матеріали: акрил, бісер (очі), холофайбер (наповнення).',
        dimensions: 'Розмір 13/7 см.',
        images: ['kotyky_02.jpg', 'kotyky_03.jpg'],
        price: 250,
        link: 'koshenyatko_serdechko',
        category: 'Іграшки',
    },
    {
        id: 12,
        name: 'Кошеня з руденькими вушками',
        description:
            'М\'якеньке кошеня з пухнастими руденькими вушками готове прикрашати собою будь-який простір. Повністю ручна робота, від першої петельки до достаннього стібка голкою. Цікаве поєднання гладкої нитки та пряжі "травичка". Кожен наш виріб - зроблено з любов\'ю та думкою про вас. Вам варто лише обрати щось з наявного на свій смак.',
        materials: 'Матеріали: акрил, бісер (очі), холофайбер (наповнення).',
        dimensions: 'Висота 14 см.',
        images: [
            'koshenya_rudenki_vushka_05.jpg',
            'koshenya_rudenki_vushka_01.jpg',
            'koshenya_rudenki_vushka_02.jpg',
            'koshenya_rudenki_vushka_03.jpg',
            'koshenya_rudenki_vushka_04.jpg',
        ],
        price: 300,
        link: 'koshenya_rudenki_vushka',
        category: 'Іграшки',
        similar: [
            {
                img: 'veliurove_bilenke_koshenya_01.jpg',
                price: 300,
                link: 'veliurove_bilenke_koshenya',
            },
        ],
    },
    {
        id: 13,
        name: 'Біленьке велюрове кошеня',
        description:
            'Неймовірно пухкенький на вигляд та на дотик - котусик. Пряжа, з якого його виконано, поєднує в собі всі відтінки літніх романтичних квітів: лаванду, рожевий та білий.',
        materials:
            'Все, як завжди, плетено, пошито і вишито 100% вручну. Матеріали: акрил (пряжа), холофайбер (наповнення).',
        dimensions: 'Розмір: 13/7см.',
        images: [
            'veliurove_bilenke_koshenya_01.jpg',
            'veliurove_bilenke_koshenya_02.jpg',
            'veliurove_bilenke_koshenya_03.jpg',
            'veliurove_bilenke_koshenya_04.jpg',
            'veliurove_bilenke_koshenya_05.jpg',
            'veliurove_bilenke_koshenya_06.jpg',
        ],
        price: 300,
        link: 'veliurove_bilenke_koshenya',
        category: 'Іграшки',
        similar: [
            {
                img: 'koshenya_rudenki_vushka_05.jpg',
                price: 300,
                link: 'koshenya_rudenki_vushka',
            },
        ],
    },
    {
        id: 15,
        name: 'Закладка-лисичка',
        description:
            'Красиві та цікаві книжки заслуговуть на гарні закладки. З цим і допоможе гачкована вручну закладка-лисичка. Яскрава, весела лисичка готова переїхати до вашої бібліотеки та читати разом з вами будь-яку літературу.',
        materials: 'Матеріали: акрил',
        dimensions: 'Розмір: 43/3,5см.',
        images: [
            'zakladka-lysychka-01.jpg',
            'zakladka-lysychka-02.jpg',
            'zakladka-lysychka-03.jpg',
            'zakladka-lysychka-04.jpg',
            'zakladka-lysychka-05.jpg',
            'zakladka-lysychka-06.jpg',
        ],
        price: 150,
        link: 'zakladka-lysychka',
        category: 'Іграшки',
    },
    {
        id: 16,
        name: 'Чорно-сіре кошеня',
        description: "Сіренький, м'якенький та посміхається очима.",
        materials:
            'Іграшка котик, плетений спицями з акрилової пряжі, має наповнення холлофайбер та вишиту мордочку. Готовий прикрашати собою вашу оселю.',
        dimensions: 'Розмір: 20/15см.',
        images: [
            'koshenya-chorno-sire-01.jpg',
            'koshenya-chorno-sire-02.jpg',
            'koshenya-chorno-sire-03.jpg',
            'koshenya-chorno-sire-04.jpg',
            'koshenya-chorno-sire-05.jpg',
        ],
        price: 250,
        link: 'koshenya-chorno-sire',
        category: 'Іграшки',
        similar: [
            {
                img: 'bezheva_kotoigrashka_01.jpg',
                price: 250,
                link: 'kotyk_bezhevyi',
            },
            {
                img: 'kotoigrashka_sirenka_01.jpg',
                price: 250,
                link: 'kotyk_siryi',
            },
        ],
    },
]

export default toys
