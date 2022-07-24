const toys = [
    {
        id: 1,
        name: "Мишка біла",
        description: "Біленька, плетена спицями мишка в наявності. Неймовірно мила та м'якенька.",
        materials: "Має вишиті носик і очі з біленькими намистинками.",
        dimensions: "Розмір: 12/7см.",
        images: [
            "myshoigrashka_bila_01.jpg",
            "myshoigrashka_bila_02.jpg",
            "myshoigrashka_bila_03.jpg",
            "myshoigrashka_bila_04.jpg"
        ],
        price: 100,
        link: 'myshka_bila',
        category: "Іграшки",
        similar: [
            {
                img: "myshoigrashka_temno-sira_01.jpg",
                price: 100,
                link: 'myshka_temno_sira'
            },
            {
                img: "myshoigrashka_sira_01.jpg",
                price: 100,
                link: 'myshka_sira'
            }
        ]
    },
    {
        id: 2,
        name: "Мишка темно-сіра",
        description: "Іграшка плетена вручну з м'якої меланжевої пряжі, пухкенька та приємна на дотик.",
        materials: "Матеріали: акрил, холофайбер (наповнення), намистинки (очі).",
        dimensions: "Розмір: 14/9см.",
        images: [
            "myshoigrashka_temno-sira_01.jpg",
            "myshoigrashka_temno-sira_02.jpg",
            "myshoigrashka_temno-sira_03.jpg",
            "myshoigrashka_temno-sira_04.jpg",
            "myshoigrashka_temno-sira_05.jpg"
        ],
        price: 100,
        link: 'myshka_temno_sira',
        category: "Іграшки",
        similar: [
            {
                img: "myshoigrashka_bila_01.jpg",
                price: 100,
                link: 'myshka_bila'
            },
            {
                img: "myshoigrashka_sira_01.jpg",
                price: 100,
                link: 'myshka_sira'
            }
        ]
    },
    {
        id: 3,
        name: "Мишка сіра",
        description: "Сіренька, плетена спицями мишка в наявності. Неймовірно мила та м'якенька.",
        materials: "Має вишиті носик і очі з біленькими намистинками.",
        dimensions: "Розмір: 12/7см.",
        images: [
            "myshoigrashka_sira_01.jpg",
            "myshoigrashka_sira_02.jpg",
            "myshoigrashka_sira_03.jpg",
            "myshoigrashka_sira_04.jpg",
            "myshoigrashka_sira_05.jpg"
        ],
        price: 100,
        link: 'myshka_sira',
        category: "Іграшки",
        similar: [
            {
                img: "myshoigrashka_bila_01.jpg",
                price: 100,
                link: 'myshka_bila'
            },
            {
                img: "myshoigrashka_temno-sira_01.jpg",
                price: 100,
                link: 'myshka_temno_sira'
            }
        ]
    },
    {
        id: 4,
        name: "Котик бежевий",
        description: "Бежевий котик і його рожевий носик готові їхати до вас і тішити своєю м'якістю та рукотворністю.",
        dimensions: "Розміри: ширина 13см, довжина 19см.",
        images: [
            "bezheva_kotoigrashka_01.jpg",
            "bezheva_kotoigrashka_02.jpg",
            "bezheva_kotoigrashka_03.jpg",
            "bezheva_kotoigrashka_04.jpg",
            "bezheva_kotoigrashka_05.jpg"
        ],
        price: 250,
        link: 'kotyk_bezhevyi',
        category: "Іграшки",
        similar: [
            {
                img: "kotoigrashka_bilenka_01.jpg",
                price: 250,
                link: 'kotyk_bilyi'
            },
            {
                img: "kotoigrashka_sirenka_01.jpg",
                price: 250,
                link: 'kotyk_siryi'
            }
        ]
    },
    {
        id: 5,
        name: "Котик блакитноокий",
        description: "Пухнастий та блакитноокий - чи це не головні вимоги до котічки? Іграшку поністю плетено та пошито вручну, ретельно вишито кожен пальчик. Тож, сподіваюсь, вона стане окрасою вашоно дому.",
        dimensions: "Висота іграшки - 29см.",
        images: [
            "bila_naturalistychna_01.jpg",
            "bila_naturalistychna_02.jpg",
            "bila_naturalistychna_03.jpg",
            "bila_naturalistychna_04.jpg",
            "bila_naturalistychna_05.jpg",
            "bila_naturalistychna_06.jpg",
            "bila_naturalistychna_07.jpg",
            "bila_naturalistychna_08.jpg",
            "bila_naturalistychna_09.jpg",
            "bila_naturalistychna_10.jpg",
        ],
        price: 1000,
        link: 'kotyk_blakytnookyi',
        category: "Іграшки",
        similar: [
            {
                img: "realistychna_kotoigrashka_01.jpg",
                price: 1000,
                link: 'realistychna_kotoigrashka'
            }
        ]
    },
    {
        id: 6,
        name: "Мишка руда",
        description: "Повністю ручна робота, від мотка пряжі до останнього стібка. М'якенька, приємна на дотик іграшка стане чудовим подарунком близькій людині або навіть собі.",
        materials: "Наповнення - холофайбер. Нитки - акрил.",
        dimensions: "Розміри: 14/8см.",
        images: [
            "kryska_rudisha_01.jpg",
            "kryska_rudisha_02.jpg",
            "kryska_rudisha_03.jpg",
            "kryska_rudisha_04.jpg"
        ],
        price: 300,
        link: 'myshka_ruda',
        category: "Іграшки",
        similar: [
            {
                img: "kryska_sira_01.jpg",
                price: 300,
                link: 'myshka_bukliovana_sira'
            }
        ]
    },
    {
        id: 7,
        name: "Котик білий",
        description: "Біленький та ніжний, як пелюстки травневого цвіту! Біленький меланжевий котик і його рожевий носик готові їхати до вас і тішити своєю м'якістю та рукотворністю.",
        dimensions: "Розміри: ширина 13см, довжина 19см.",
        images: [
            "kotoigrashka_bilenka_01.jpg",
            "kotoigrashka_bilenka_02.jpg",
            "kotoigrashka_bilenka_03.jpg",
            "kotoigrashka_bilenka_04.jpg",
            "kotoigrashka_bilenka_05.jpg",
            "kotoigrashka_bilenka_06.jpg",
            "kotoigrashka_bilenka_07.jpg"
        ],
        price: 250,
        link: 'kotyk_bilyi',
        category: "Іграшки",
        similar: [
            {
                img: "bezheva_kotoigrashka_01.jpg",
                price: 250,
                link: 'kotyk_bezhevyi'
            },
            {
                img: "kotoigrashka_sirenka_01.jpg",
                price: 250,
                link: 'kotyk_siryi'
            }
        ]
    },
    {
        id: 8,
        name: "Котик сірий",
        description: "Сіренький, м'якенький та посміхається очима. Готовий прикрашати собою вашу оселю.",
        materials: "Іграшка котик, плетений спицями з акрилової пряжі, має наповнення холлофайбер та вишиту мордочку.",
        dimensions: "Розмір: 20/15см.",
        images: [
            "kotoigrashka_sirenka_01.jpg",
            "kotoigrashka_sirenka_02.jpg",
            "kotoigrashka_sirenka_03.jpg",
            "kotoigrashka_sirenka_04.jpg",
            "kotoigrashka_sirenka_05.jpg",
            "kotoigrashka_sirenka_06.jpg"
        ],
        price: 250,
        link: 'kotyk_siryi',
        category: "Іграшки",
        similar: [
            {
                img: "bezheva_kotoigrashka_01.jpg",
                price: 250,
                link: 'kotyk_bezhevyi'
            },
            {
                img: "kotoigrashka_bilenka_01.jpg",
                price: 250,
                link: 'kotyk_bilyi'
            }
        ]
    },
    {
        id: 9,
        name: "Мишка букльована сіра",
        description: "Повністю ручна робота, від мотка пряжі до останнього стібка. М'якенька, приємна на дотик іграшка стане чудовим подарунком близькій людині або навіть собі.",
        materials: "Наповнення - холофайбер. Нитки - акрил.",
        dimensions: "Розміри: 14/8см.",
        images: [
            "kryska_sira_01.jpg",
            "kryska_sira_02.jpg",
            "kryska_sira_03.jpg",
            "kryska_sira_04.jpg",
            "kryska_sira_05.jpg"
        ],
        price: 300,
        link: 'myshka_bukliovana_sira',
        category: "Іграшки",
        similar: [
            {
                img: "kryska_rudisha_01.jpg",
                price: 300,
                link: 'myshka_ruda'
            }
        ]
    },
    {
        id: 10,
        name: "Кошенятко з сердечком",
        description: "Іграшку плетено з неймовірно приємної на дотик та цікавої на вигляд пухнастої пряжі. Котик має м'якенькі рухомі лапки та хвостик і вишиту вручну мордочку. Сердечко за бажанням можна поміняти на рожеве чи прибрати.",
        materials: "Матеріали: акрил, бісер (очі), холофайбер (наповнення).",
        dimensions: "Розмір 13/7 см.",
        images: [
            "kotyky_02.jpg",
            "kotyky_03.jpg"
        ],
        price: 250,
        link: 'koshenyatko_serdechko',
        category: "Іграшки"
    },
    {
        id: 11,
        name: "Реалістична котоіграшка",
        description: "Обережно! З незвички, якщо у вас немає кота, можна злякатись, що до вас в хату забіг якийсь кіт) Бо ця іграшка, на перший погляд, здається справжнім сидячим котиком. Я дуже люблю супер-мінімалістичні подушки та іграшки, але існує запит і на реалістичних котиків і ми намагаємося мати в наявності різні котоВироби.",
        materials: "Плетений та пошитий повністю вручну котик - в наявності. Мордочка та лапки також вишиті вручну.",
        dimensions: "Матеріали: пряжа - акрил, наповнення - холофайбер.",
        images: [
            "realistychna_kotoigrashka_01.jpg",
            "realistychna_kotoigrashka_02.jpg",
            "realistychna_kotoigrashka_03.jpg",
            "realistychna_kotoigrashka_04.jpg",
            "realistychna_kotoigrashka_05.jpg",
            "realistychna_kotoigrashka_06.jpg"
        ],
        price: 1000,
        link: 'realistychna_kotoigrashka',
        category: "Іграшки",
        similar: [
            {
                img: "bila_naturalistychna_01.jpg",
                price: 1000,
                link: 'kotyk_blakytnookyi'
            }
        ]
    },
    {
        id: 12,
        name: "Кошеня з руденькими вушками",
        description: "М'якеньке кошеня з пухнастими руденькими вушками готове прикрашати собою будь-який простір. Повністю ручна робота, від першої петельки до достаннього стібка голкою. Цікаве поєднання гладкої нитки та пряжі \"травичка\". Кожен наш виріб - зроблено з любов'ю та думкою про вас. Вам варто лише обрати щось з наявного на свій смак.",
        materials: "Матеріали: акрил, бісер (очі), холофайбер (наповнення).",
        dimensions: "Висота 14 см.",
        images: [
            "koshenya_rudenki_vushka_05.jpg",
            "koshenya_rudenki_vushka_01.jpg",
            "koshenya_rudenki_vushka_02.jpg",
            "koshenya_rudenki_vushka_03.jpg",
            "koshenya_rudenki_vushka_04.jpg"
        ],
        price: 300,
        link: 'koshenya_rudenki_vushka',
        category: "Іграшки",
        similar: [
            {
                img: "veliurove_bilenke_koshenya_01.jpg",
                price: 300,
                link: 'veliurove_bilenke_koshenya'
            }
        ]
    },
    {
        id: 13,
        name: "Біленьке велюрове кошеня",
        description: "Неймовірно пухкенький на вигляд та на дотик - котусик. Пряжа, з якого його виконано, поєднує в собі всі відтінки літніх романтичних квітів: лаванду, рожевий та білий.",
        materials: "Все, як завжди, плетено, пошито і вишито 100% вручну. Матеріали: акрил (пряжа), холофайбер (наповнення).",
        dimensions: "Розмір: 13/7см.",
        images: [
            "veliurove_bilenke_koshenya_01.jpg",
            "veliurove_bilenke_koshenya_02.jpg",
            "veliurove_bilenke_koshenya_03.jpg",
            "veliurove_bilenke_koshenya_04.jpg",
            "veliurove_bilenke_koshenya_05.jpg",
            "veliurove_bilenke_koshenya_06.jpg"
        ],
        price: 300,
        link: 'veliurove_bilenke_koshenya',
        category: "Іграшки",
        similar: [
            {
                img: "koshenya_rudenki_vushka_05.jpg",
                price: 300,
                link: 'koshenya_rudenki_vushka'
            }
        ]
    },
    {
        id: 14,
        name: "Закладка-змійка",
        description: "Книжкова закладка є чудовим додатком до найкращого подарунка - книжки. Закладка-змійка неймовірно зелена, хвиляста та рукотворна. Шукає собі бібліотеку, яку може собою доповнити.",
        materials: "Матеріали: акрил",
        dimensions: "Розмір: 29/3,5см.",
        images: [
            "zakladka-zmiyka-01.jpg",
            "zakladka-zmiyka-02.jpg",
            "zakladka-zmiyka-03.jpg",
            "zakladka-zmiyka-04.jpg",
            "zakladka-zmiyka-05.jpg"
        ],
        price: 80,
        link: 'zakladka-zmiyka',
        category: "Іграшки",
        similar: [
            {
                img: "zakladka-lysychka-01.jpg",
                price: 150,
                link: 'zakladka-lysychka'
            }
        ]
    },
    {
        id: 15,
        name: "Закладка-лисичка",
        description: "Красиві та цікаві книжки заслуговуть на гарні закладки. З цим і допоможе гачкована вручну закладка-лисичка. Яскрава, весела лисичка готова переїхати до вашої бібліотеки та читати разом з вами будь-яку літературу.",
        materials: "Матеріали: акрил",
        dimensions: "Розмір: 43/3,5см.",
        images: [
            "zakladka-lysychka-01.jpg",
            "zakladka-lysychka-02.jpg",
            "zakladka-lysychka-03.jpg",
            "zakladka-lysychka-04.jpg",
            "zakladka-lysychka-05.jpg",
            "zakladka-lysychka-06.jpg"
        ],
        price: 150,
        link: 'zakladka-lysychka',
        category: "Іграшки",
        similar: [
            {
                img: "zakladka-zmiyka-01.jpg",
                price: 80,
                link: 'zakladka-zmiyka'
            }
        ]
    }
]

export default toys